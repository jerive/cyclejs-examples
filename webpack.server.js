var config = require('./webpack.config.js');
var WebpackDevServer = require('webpack-dev-server');
var webpack = require('webpack');

var server = new WebpackDevServer(webpack(config), {
    contentBase: '.',
    publicPath: '/assets/',
    compress: true,
});

server.listen(8080);