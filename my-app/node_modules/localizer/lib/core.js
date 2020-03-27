
var path = require('path');

function CoreLocalizer(settings) {
  settings = settings || {};

  // default values
  this.root = '/';
  this.modules = 'node_modules';
  this.allowed = ['js', 'json', 'node'];

  // overwrite default values
  if (typeof settings.root === 'string') {
    this.root = settings.root;
  }

  if (typeof settings.modules === 'string') {
    this.modules = settings.modules;
  }

  if (settings.allowed) {
    this.allowed = settings.allowed;
  }
}
module.exports = CoreLocalizer;

CoreLocalizer.prototype.isFilepath = function (input) {
  return input[0] === '.' || input[0] === '/';
};

CoreLocalizer.prototype.realpath = function (filepath) {
  return path.resolve(this.root, '.' + path.resolve(path.sep, filepath));
};

CoreLocalizer.prototype.notFound = function (input) {
  var err = new Error("Cannot find module '" + input + "'");
      err.code = 'MODULE_NOT_FOUND';

  return err;
};

CoreLocalizer.prototype.splitModuleInput = function (input) {
  var next = null;
  var name = input;

  while (true) {
    next = path.dirname(name);
    if (next === '.') break;
    name = next;
  }

  return {
    'name': name,
    'path': path.resolve(path.sep, input.slice(name.length)).slice(1)
  };
};

function defaultAllowed(allowed, basename) {
  if (basename === '') return [];

  var trys = [];
  var extname = path.extname(basename).slice(1);

  // if extname is allowed add the raw basename
  if (allowed.indexOf(extname) !== -1) {
    trys.push(basename);
  }

  // add basename with all the allowed exts appended
  for (var i = 0; i < allowed.length; i++) {
    trys.push(basename + '.' + allowed[i]);
  }

  return trys;
}

CoreLocalizer.prototype.generateFilenames = function (input) {
  // if path looks like a directroy, then don't try any filenames
  if (input[input.length - 1] === path.sep) {
    return [];
  }

  var basename = path.basename(input);

  if (Array.isArray(this.allowed)) {
    return defaultAllowed(this.allowed, basename);
  } else {
    return this.allowed(basename);
  }
};

// It is known that from is a absolute directory path starting with path.sep
CoreLocalizer.prototype.generateModuleSearchPaths = function (from) {
  var trys = [];

  // add from/node_modules to trys array
  trys.push(path.resolve(from, this.modules));

  // continue until root is reached
  while (from !== path.sep) {
    // one level down
    from = path.dirname(from);

    // add from/{..}/node_modules to trys array
    trys.push(path.resolve(from, this.modules));
  }

  return trys;
};
