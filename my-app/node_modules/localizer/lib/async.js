
var fs = require('fs');
var path = require('path');
var util = require('util');

var CoreLocalizer = require('./core.js');

function AsyncLocalizer(settings) {
  CoreLocalizer.call(this, settings);
}
util.inherits(AsyncLocalizer, CoreLocalizer);
module.exports = AsyncLocalizer;

//
// README:
// - the callback pattern is a little confusing. The err is a standart error or
//   null argument. The filepath however can have 3 types:
//   * filepath === null : continue the search
//   * filepath === false : stop the search, nothing exists
//   * typeof filepath === 'string' : something was found return that
// - note that filepath will also be null if err was set.
//

//
// Filesystem
// - these methods reads the filesystem and use this.realpath
//   be sure to check the security before and after use of these methods.
//
AsyncLocalizer.prototype.fileType = function (filepath, callback) {
  fs.stat(this.realpath(filepath), function (err, stat) {

    // ENOENT is the error code for not found and should not be treated
    // as an error.
    if (err && err.code !== 'ENOENT') return callback(err, null);

    callback(null, {
      exists:    err ? false : true,
      file:      err ? false : stat.isFile(),
      directory: err ? false : stat.isDirectory()
    });
  });
};

// Moved to outer scope for v8 optimization
function parseJSON(content, callback) {
  try {
    callback(null, JSON.parse(content));
  } catch (err) {
    callback(err, null);
  }
}

AsyncLocalizer.prototype.readPackage = function (moduleRoot, callback) {
  var packagePath = path.resolve(moduleRoot, 'package.json');
  var realPackagePath = this.realpath(packagePath);

  this.fileType(packagePath, function (err, stat) {
    if (err) return callback(err, null);

    // A package.json file do not exist, default response is ''
    if (!stat.file) return callback(null, '');

    // Read the content of the package.json file
    fs.readFile(realPackagePath, 'utf8', function (err, content) {
      if (err) return callback(err, null);

      parseJSON(content, function (err, content) {
        if (err) return callback(err, null);

        // return content.main and default to '' if main property don't exists
        if (content.hasOwnProperty('main')) {
          callback(null, content.main);
        } else {
          callback(null, '');
        }
      });
    });
  });
};

//
// This method will resolve a input to a filepath, it do not involve any
// module directory walking
//
AsyncLocalizer.prototype.resolvePackage = function (input, callback) {
  var self = this;

  // Since files are prioritised over a directroy, diffrent filenames
  // will have to be check first
  this.checkDirectory(input, function (err, filepath) {
    if (err) return callback(err, null);

    // the package resolve should not continue
    if (filepath !== null) return callback(null, filepath);

    // input is a directory, read the package.json file
    self.readPackage(input, function (err, main) {
      if (err) return callback(err, null);

      var mainpath = path.resolve(path.sep, input, main);

      // Optimization, don't check for filenames with other exts if
      // the resolved main path is the same as the input path.
      if (input === mainpath) {

        // search the directory, for index files
        self.checkIndexFile(mainpath, callback);
      } else {

        self.checkDirectory(mainpath, function (err, filepath) {
          if (err) return callback(err, null);

          // the package resolve should not continue
          if (filepath !== null) return callback(null, filepath);

          // search the directory, for index files
          self.checkIndexFile(mainpath, callback);
        });
      }
    });
  });
};

// Translates a directory path intro a filepath, it is known that input
// is a directory and no package.json file exist. It is known that
// input is a directory.
AsyncLocalizer.prototype.checkIndexFile = function (input, callback) {
  var basepath = path.resolve(input, 'index');

  this.tryFileExts(basepath, function (err, filepath) {
    if (err) return callback(err, null);

    // the search should not continue
    if (filepath !== null) return callback(null, filepath);

    // A check for index files is the last thing to do, if nothing
    // has been found yet, then stop.
    return callback(null, false);
  });
};

// It is unkown if input is a directroy, this performs checks acording
// the require.resolve algoritme. This means that filenames will have
// to be check before the acutal input types can be checked.
// If input wasn't found and it was not a directroy a notFound error
// will be returned.
AsyncLocalizer.prototype.checkDirectory = function (input, callback) {
  var self = this;

  // Since files are prioritised over a directroy, diffrent filenames
  // will have to be check first
  this.tryFileExts(input, function (err, filepath) {
    if (err) return callback(err, null);

    // the search should not continue
    if (filepath !== null) return callback(null, filepath);

    // check type of input
    self.fileType(input, function (err, stat) {
      if (err) return callback(err, null);

      // if input wasn't a directroy and no files was found then nothing exist
      if (!stat.directory) return callback(null, false);

      // continue
      callback(null, null);
    });
  });
};

// Try all filenames that the core method generateFilenames provides.
AsyncLocalizer.prototype.tryFileExts = function (input, callback) {
  var self = this;

  var filenames = this.generateFilenames(input);
  var dirname = path.dirname(input);

  // async for loop for each filename
  (function tryFilename(i) {
    // if there are no more filenames to try, then nothing was found
    if (i === filenames.length) return callback(null, null);

    // generate filepath with ext appneded
    var filepath = path.resolve(dirname, filenames[i]);

    // check that filepath is a file
    self.fileType(filepath, function (err, stat) {
      if (err) return callback(err, null);

      // the filepath exists and it is a real file
      if (stat.file) return callback(null, filepath);

      // try next filename
      tryFilename(i + 1);
    });
  })(0);
};

//
// resolve a search input, by walking the from directroys for a node_modules
// directroy and append the input when found.
//
AsyncLocalizer.prototype.resolveModule = function (from, input, callback) {
  var self = this;

  // genereate list of paths with node_modules appended, note that it is unkown
  // if the node_modules directory exists.
  var dirpaths = this.generateModuleSearchPaths(from);

  // async for loop for each filename
  (function tryDirpath(i) {
    // if there are no more filenames to try, then nothing can be found
    if (i === dirpaths.length) return callback(null, false);

    // check that the node_module path is a directory
    self.fileType(dirpaths[i], function (err, stat) {
      if (err) return callback(err, null);

      // if no directory was found go to next level
      if (!stat.directory) return tryDirpath(i + 1);

      // a directroy was found, check for a valid package. Note that the
      // require.resolve algorithm will go to next level, even if there
      // was a module directroy the endfile just needs to be missing.
      var moduleInput = path.resolve(path.sub, dirpaths[i], input);
      self.resolvePackage(moduleInput, function (err, mainpath) {
        if (err) return callback(err, null);

        // if file was found then return the moduleRoot.
        if (mainpath) return callback(null, mainpath);

        // if nothing was found, go to the next level
        tryDirpath(i + 1);
      });
    });
  })(0);
};

//
// This resolve method is called from public API layer
//
AsyncLocalizer.prototype.resolve = function (from, input, callback) {
  var self = this;

  // make from safe
  from = path.resolve(path.sep, from);

  function done(err, filepath) {
    if (err) return callback(err, null);

    // module file was not found, return notFound error
    if (!filepath) return callback(self.notFound(input), null);

    // module found, return filepath relative to this.root
    return callback(null, filepath);
  }

  // input is not a module search
  if (this.isFilepath(input)) {

    // resolve input to filepath
    this.resolvePackage(path.resolve(path.sep, from, input), done);
  } else {
    // find module filename
    this.resolveModule(from, input, done);
  }
};
