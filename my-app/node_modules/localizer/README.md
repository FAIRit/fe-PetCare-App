#localizer

> Localized and configureable async and sync `requre.resolve()` implementation.

## Installation

```sheel
npm install localizer
```

## Documentation

```javascript
var localizer = require('localizer');

// localizer is a constructor function there creates a resolve function
var resolve = localizer({
  // default: '/'. Specify search limitation, very useful in secure module
  // resolving. Note that all resolved filepath will not contain the root
  // as a prefix.
  root: '/nothing/below/',

  // default: 'node_modules'. Specify the directory name where modules are
  // stored.
  modules: 'other_modules',

  // default: ['js', 'json', 'node'] specify allowed filetypes, note that the
  // order matters. in this example index.js is prioritized over index.coffee
  allowed: ['js', 'coffee', 'json', 'yaml'],

  // allowed can also be a function, if that is the case it will transform a
  // single basename (e.q. index or index.js) intro multiply basenames given by
  // an array.
  allowed: function (basename) {
    // example, where fileexts are removed and replaced with '.js'
    // (e.q. index.json => index.js)
    return [basename.split('.').shift() + '.js' /*, more basenames */];
  }
});

// The resolve function has two required arguments.
// - The first is the directroy where the search should start,
//   the require.resolve equivalent is __dirname.
// - The second is the actual search query.
//
// It also has an optional callback, if specified the resolve algoritme will
// be performed none blocking.

// sync call
var filepath = resolve('/', 'module_name');

// async call
resolve('/', 'module_name', function (err, filepath) {

});
```

##License

**The software is license under "MIT"**

> Copyright (c) 2013 Andreas Madsen
>
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
>
> The above copyright notice and this permission notice shall be included in
> all copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
> THE SOFTWARE.
