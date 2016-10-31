var webpack = require('webpack');
var LivereloadPlugin = require('webpack-livereload-plugin');
var args = require('yargs').argv;

var example = args.example;

if (! example) {
  throw new Error('Please specify the -- --example command line option');
}

module.exports = {  
  entry: './src/' + args.example + '/app.tsx',
  output: {
    path: '/'
  },
  // Turn on sourcemaps
  devtool: 'cheap-source-map',
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js', '.html']
  },
  // Add minification
  plugins: [
    new LivereloadPlugin(),
    //new webpack.optimize.UglifyJsPlugin()
  ],
  module: {
    loaders: [
      { test: /\.tsx?$/, loader: 'ts' }
    ]
  }
}