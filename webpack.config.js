var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    app: ["./src/main.js"]
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
    filename: "hello.js",
    library: 'hello',
    libraryTarget: 'umd',
    externals: {
        'react': 'react',
        'react-dom' : 'ReactDOM'
    }
  },
};
