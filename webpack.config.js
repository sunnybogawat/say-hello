var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
   'say-hello': './src/main.js'
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  output: {
    path: __dirname + "/dist",
    filename: "say-hello.js",
    library: 'say-hello',
    libraryTarget: 'umd',
    externals: {
       react: 'react',
       ReactDOM: 'ReactDOM'
    }
  },
};