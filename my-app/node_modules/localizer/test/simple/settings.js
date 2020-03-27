
var test = require('tap').test;
var path = require('path');
var localizer = require('../../localizer.js');

function syncResolve(resolve, from, input, callback) {
  var err = null;
  var filepath = null;

  try {
    filepath = resolve(from, input);
  } catch (e) {
    err = e;
  }

  callback(err, filepath);
}

function asyncResolve(resolve, from, input, callback) {
  resolve(from, input, callback);
}

function combinedTest(resolve, t, from, input, callback) {
  syncResolve(resolve, from, input, callback);

  asyncResolve(resolve, from, input, function (err, filepath) {
    callback(err, filepath);

    t.end();
  });
}

test("root option", function (t) {
  t.test('default root is /', function (t) {
    var resolve = localizer();

    combinedTest(resolve, t, '/', 'default_index', function (err, filepath) {
      t.equal(err.code, 'MODULE_NOT_FOUND');
      t.equal(filepath, null);
    });
  });

  t.test('default root is /', function (t) {
    var resolve = localizer({});

    combinedTest(resolve, t, '/', 'default_index', function (err, filepath) {
      t.equal(err.code, 'MODULE_NOT_FOUND');
      t.equal(filepath, null);
    });
  });

  t.test('custom root', function (t) {
    var resolve = localizer({
      root: path.resolve(__dirname, '..')
    });

    combinedTest(resolve, t, '/', 'default_index', function (err, filepath) {
      t.equal(err, null);
      t.equal(filepath, '/node_modules/default_index/index.js');
    });
  });
});

test("modules option", function (t) {
  t.test('default is node_modules', function (t) {
    var resolve = localizer({
      root: path.resolve(__dirname, '..')
    });

    combinedTest(resolve, t, '/', 'default_index', function (err, filepath) {
      t.equal(err, null);
      t.equal(filepath, '/node_modules/default_index/index.js');
    });
  });

  t.test('custom modules', function (t) {
    var resolve = localizer({
      root: path.resolve(__dirname, '..'),
      modules: 'custom_modules'
    });

    combinedTest(resolve, t, '/', 'default_index', function (err, filepath) {
      t.equal(err, null);
      t.equal(filepath, '/custom_modules/default_index/index.js');
    });
  });
});

test("allowed option", function (t) {
  t.test('default is js, json, node', function (t) {
    var resolve = localizer({
      root: path.resolve(__dirname, '..')
    });

    combinedTest(resolve, t, '/', 'ext_order', function (err, filepath) {
      t.equal(err, null);
      t.equal(filepath, '/node_modules/ext_order/index.js');
    });
  });

  t.test('custom ext array', function (t) {
    var resolve = localizer({
      root: path.resolve(__dirname, '..'),
      allowed: ['json', 'js']
    });

    combinedTest(resolve, t, '/', 'ext_order', function (err, filepath) {
      t.equal(err, null);
      t.equal(filepath, '/node_modules/ext_order/index.json');
    });
  });

  t.test('custom ext order', function (t) {
    var resolve = localizer({
      root: path.resolve(__dirname, '..'),
      allowed: function (basename) {
        return ['file.js'];
      }
    });

    combinedTest(resolve, t, '/', 'subfile', function (err, filepath) {
      t.equal(err, null);
      t.equal(filepath, '/node_modules/subfile/file.js');
    });
  });
});
