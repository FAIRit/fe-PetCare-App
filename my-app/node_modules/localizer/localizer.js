
var AsyncLocalizer = require('./lib/async.js');
var SyncLocalizer = require('./lib/sync.js');

module.exports = function localizer(settings) {
  var async = new AsyncLocalizer(settings);
  var sync = new SyncLocalizer(settings);

  return function resolve(from, input, callback) {
    if (callback) {
      async.resolve(from, input, callback);
    } else {
      return sync.resolve(from, input);
    }
  };
};
