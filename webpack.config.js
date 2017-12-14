var webpack = require('webpack');
var path = require('path');
var CompressionPlugin = require('compression-webpack-plugin');


var DIST_DIR = path.resolve(__dirname, 'dist');
var SRC_DIR = path.resolve(__dirname, 'src');

var config = {
    entry: SRC_DIR + '/app/index.js',
    output: {
        path: DIST_DIR + '/app/',
        filename: 'bundle.js',
        publicPath: '/app/'
    },
    module: {
        loaders: 
        [
            {
                test: /\.js?/,
                include: SRC_DIR, 
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2016', 'stage-2']
                }
            },
            {
               test: /\.css?/,
               include: SRC_DIR, 
               loader: 'style-loader!css-loader'
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({ 
          'process.env': {
            'NODE_ENV': JSON.stringify('production')
          }
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.optimize.AggressiveMergingPlugin(),
        new CompressionPlugin({
          asset: "[path].gz[query]",
          algorithm: "gzip",
          test: /\.js$|\.css$|\.html$/,
          threshold: 10240,
          minRatio: 0.8
        })
      ]
}

module.exports = config;