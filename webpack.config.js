var webpack = require('webpack');
var path = require('path');
var grunt = require('grunt');

var pagesBase = path.resolve("assets/scripts/tmp/Pages");

var files_lib = "assets/lib";
var files_application = "assets/application";

var PROD = JSON.parse(process.env.PROD_DEV || "0");

function getFiles(path_to_use){
  return grunt.file.expand({ cwd: path_to_use }, "**/*.js").map(function(page) {
     return path.join(path_to_use, page);
  })
}

var enviroment = {
  type: "prod"
}

var plugins_prod = [new webpack.optimize.UglifyJsPlugin({minimize: true})];
var plugins_dev = [];

function getplugins(){
  return PROD ? [
    new webpack.optimize.UglifyJsPlugin({minimize: true, mangle: true})
  ] : []
}

console.log ("---------------------------- Files to bundle -----------------------------------------")
console.log(getFiles(files_lib));
console.log(getFiles(files_application));
console.log ("---------------------------- End files to bundle -----------------------------------------")


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