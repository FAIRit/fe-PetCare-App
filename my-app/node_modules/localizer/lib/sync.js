
var fs = require('fs');
var path = require('path');
var util = require('util');

var CoreLocalizer = require('./core.js');

function SyncLocalizer(settings) {
  CoreLocalizer.call(this, settings);
}
util.inherits(SyncLocalizer, CoreLocalizer);
module.exports = SyncLocalizer;

//
// README:
// - the return pattern is a little confusing. If there was an error it will
//   make a standard throw. Otherwice the returned value can have 3 types:
//   * filepath === null : continue the search
//   * filepath === false : stop the search, nothing exists
//   * typeof filepath === 'string' : something was found return that
//

//
// Filesystem
// - these methods reads the filesystem and use this.realpath
//   be sure to check the security before and after use of these methods.
//
SyncLocalizer.prototype.fileType = function (filepath) {
  var err = null;
  var stat = null;

  // .statSync throws the error, catch it in a try/catch
  try {
    stat = fs.statSync(this.realpath(filepath));
  } catch (e) {
    if (e) err = e;
  }

  // ENOENT is the error code for not found and should not be treated
  // as an error.
  if (err && err.code !== 'ENOENT') throw err;

  return {
    exists:    err ? false : true,
    file:      err ? false : stat.isFile(),
    directory: err ? false : stat.isDirectory()
  };
};

SyncLocalizer.prototype.readPackage = function (moduleRoot) {
  var packagePath = path.resolve(moduleRoot, 'package.json');
  var realPackagePath = this.realpath(packagePath);

  var stat = this.fileType(packagePath);

  // A package.json file do not exist, default response is ''
  if (!stat.file) return '';

  // Read the content of the package.json file
  var content = JSON.parse(fs.readFileSync(realPackagePath, 'utf8'));

  // return content.main and default to '' if main property don't exists
  if (content.hasOwnProperty('main')) {
    return content.main;
  } else {
    return '';
  }
};

//
// This method will resolve a input to a filepath, it do not involve any
// module directory walking
//
SyncLocalizer.prototype.resolvePackage = function (input, callback) {
  // Since files are prioritised over a directroy, diffrent filenames
  // will have to be check first
  var filepath = this.checkDirectory(input);

  // the package resolve should not continue
  if (filepath !== null) return filepath;

  // input is a directory, read the package.json file
  var main = this.readPackage(input);
  var mainpath = path.resolve(path.sep, input, main);

  // Optimization, don't check for filenames with other exts if
  // the resolved main path is the same as the input path.
  if (input === mainpath) {

    // search the directory, for index files
    return this.checkIndexFile(mainpath);
  } else {
    filepath = this.checkDirectory(mainpath);

    // the package resolve should not continue
    if (filepath !== null) return filepath;

    // search the directory, for index files
    return this.checkIndexFile(mainpath);
  }
};

// Translates a directory path intro a filepath, it is known that input
// is a directory and no package.json file exist. It is known that
// input is a directory.
SyncLocalizer.prototype.checkIndexFile = function (input, callback) {
  var basepath = path.resolve(input, 'index');

  var filepath = this.tryFileExts(basepath);

  // the search should not continue
  if (filepath !== null) return filepath;

  // A check for index files is the last thing to do, if nothing
  // has been found yet, then stop.
  return false;
};

// It is unkown if input is a directroy, this performs checks acording
// the require.resolve algoritme. This means that filenames will have
// to be check before the acutal input types can be checked.
// If input wasn't found and it was not a directroy a notFound error
// will be returned.
SyncLocalizer.prototype.checkDirectory = function (input, callback) {
  // Since files are prioritised over a directroy, diffrent filenames
  // will have to be check first
  var filepath = this.tryFileExts(input);

  // the search should not continue
  if (filepath !== null) return filepath;

  // check type of input
  var stat = this.fileType(input);

  // if input wasn't a directroy and no files was found then nothing exist
  if (!stat.directory) return false;

  // continue
  return null;
};

// Try all filenames that the core method generateFilenames provides.
SyncLocalizer.prototype.tryFileExts = function (input, callback) {
  var filenames = this.generateFilenames(input);
  var dirname = path.dirname(input);

  for (var i = 0; i < filenames.length; i++) {
    // generate filepath with ext appneded
    var filepath = path.resolve(dirname, filenames[i]);

    // check that filepath is a file
    var stat = this.fileType(filepath);

    // the filepath exists and it is a real file
    if (stat.file) return filepath;

    // try next filename
    continue;
  }

  // if there are no more filenames to try, then nothing was found
  return null;
};

//
// resolve a search input, by walking the from directroys for a node_modules
// directroy and append the input when found.
//
SyncLocalizer.prototype.resolveModule = function (from, input, callback) {
  // genereate list of paths with node_modules appended, note that it is unkown
  // if the node_modules directory exists.
  var dirpaths = this.generateModuleSearchPaths(from);

  // async for loop for each filename
  for (var i = 0; i < dirpaths.length; i++) {
    // check that the node_module path is a directory
    var stat = this.fileType(dirpaths[i]);

    // if no directory was found go to next level
    if (!stat.directory) continue;

    // a directroy was found, check for a valid package. Note that the
    // require.resolve algorithm will go to next level, even if there
    // was a module directroy the endfile just needs to be missing.
    var moduleInput = path.resolve(path.sub, dirpaths[i], input);
    var mainpath = this.resolvePackage(moduleInput);

    // if file was found then return the moduleRoot.
    if (mainpath) return mainpath;

    // if nothing was found, go to the next level
    continue;
  }

  // if there are no more filenames to try, then nothing can be found
  return false;
};

//
// This resolve method is called from public API layer
//
SyncLocalizer.prototype.resolve = function (from, input) {
  var self = this;

  // make from safe
  from = path.resolve(path.sep, from);

  function done(filepath) {

    // module file was not found, throw notFound error
    if (!filepath) throw self.notFound(input);

    // module found, return filepath relative to this.root
    return filepath;
  }

  // input is not a module search
  if (this.isFilepath(input)) {

    // resolve input to filepath
    return done(this.resolvePackage(path.resolve(path.sep, from, input)));
  } else {
    // find module filename
    return done(this.resolveModule(from, input));
  }
};