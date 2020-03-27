
var test = require('tap').test;
var path = require('path');
var localizer = require('../../localizer.js');

var resolve = localizer({
  root: path.resolve(__dirname, '..')
});
var testManifest = require('./algoritme.json');

function syncResolve(from, input, callback) {
  var err = null;
  var filepath = null;

  try {
    filepath = resolve(from, input);
  } catch (e) {
    err = e;
  }

  callback(err, filepath);
}

function asyncResolve(from, input, callback) {
  resolve(from, input, callback);
}

function responseValidation(info, t, err, filepath) {
  if (info.error) {
    t.ok(err instanceof Error, 'resolve returned an error');
    t.equal(err.message, info.error.message);
    t.equal(err.code, info.error.code);
  } else {
    t.equal(err, null);
  }

  // in case of an error, info.path is null, otherwice it is the
  // expected filepath
  t.equal(filepath, info.path);

  t.end();
}

// the test.json file is grouped
Object.keys(testManifest).forEach(function (groupName) {
  test(groupName, function (t) {

    // each groupe has some test, with a description
    Object.keys(testManifest[groupName]).forEach(function (description) {

      // each test has an info object
      var info = testManifest[groupName][description];

      // the from info is by default '/'
      info.from = info.from || '/';

      // if info.path is null, create a info error object
      if (info.path === null && info.error === undefined) {
        info.error = {
          message: "Cannot find module '" + info.input + "'",
          code: 'MODULE_NOT_FOUND'
        };
      }

      t.test(description, function (t) {

        t.test('sync case', function (t) {
          syncResolve(info.from, info.input, responseValidation.bind(null, info, t));
        });

        t.test('async case', function (t) {
          asyncResolve(info.from, info.input, responseValidation.bind(null, info, t));
        });

        t.end();
      });
    });

    t.end();
  });
});
