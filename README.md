# Webpack-Bundle-Example
Bundle Files using webpack

# Run Install

* npm install
* npm start
* npm run build
* npm run buildfiles

* open index.html or index.min.html and open inspector.

Using Webpack we are including the source map.
Configuration sourcemap: devtool: 'inline-source-map'.


# Webpack configuration:

module.exports = {
  context: __dirname,
  devtool: 'inline-source-map',
  entry: {
      lib: './assets/lib/lib.js',
      application: './assets/application/application.js'
  },
  output: {
    path: path.join(__dirname, "js"),
    filename: PROD ? "[name].bundle.min.js" : "[name].bundle.js" ,
    libraryTarget: "var"
  },
  plugins: getplugins()
}

To create the lib.bundle.js we use the entry "lib" after that the rest is done in the js file.

```
// this execute by this order
require('./file3.js');
require('./file1.js');
require('./file2.js');

var lib3 = {
  text: "i am lib file"
}
console.log(lib3.text);
```

The result will be the js directory.

result of the bundle

```
> bundlefiles@1.0.0 start /Webpack-Bundle-Example
> webpack --display-error-details --progress --colors --watch

---------------------------- Files to bundle -----------------------------------------
[ 'assets/lib/file1.js',
  'assets/lib/file2.js',
  'assets/lib/file3.js',
  'assets/lib/lib.js' ]
[ 'assets/application/application.js',
  'assets/application/route/routes.js' ]
---------------------------- End files to bundle -----------------------------------------
Hash: 7737766acbf8b1c6b14e
Version: webpack 1.12.2
Time: 101ms
                Asset     Size  Chunks             Chunk Names
application.bundle.js  4.53 kB       0  [emitted]  application
        lib.bundle.js  5.54 kB       1  [emitted]  lib
   [0] ./assets/application/application.js 95 bytes {0} [built]
   [0] ./assets/lib/lib.js 135 bytes {1} [built]
   [1] ./assets/application/route/routes.js 68 bytes {0} [built]
   [2] ./assets/lib/file3.js 68 bytes {1} [built]
   [3] ./assets/lib/file1.js 68 bytes {1} [built]
   [4] ./assets/lib/file2.js 75 bytes {1} [built]
```
