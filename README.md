# Webpack-Bundle-Example
Bundle Files using webpack

# Install

* Run npm install
* npm start
* npm run build
* npm run buildfiles


Using Webpack we are including the source map.
Configuration sourcemap: devtool: 'inline-source-map',


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
