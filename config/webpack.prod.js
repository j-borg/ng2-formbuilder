var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');
require('dotenv').config();

const ENV = process.env.NODE_ENV = process.env.ENV = 'production';
const FILEPICKER = process.env.FILEPICKER;

module.exports = webpackMerge(commonConfig, {
    devtool: 'source-map',

    output: {
        path: helpers.root('dist'),
        publicPath: '/',
        filename: '[name].[hash].js',
        chunkFilename: '[id].[hash].chunk.js'
    },

    htmlLoader: {
        minimize: false
    },

    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            mangle: {
                keep_fnames: true
            }
        }),
        new ExtractTextPlugin('[name].[hash].css'),
        new webpack.DefinePlugin({
            'process.env': {
                'ENV': JSON.stringify(ENV),
                'FILEPICKER': JSON.stringify(FILEPICKER)
            }
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: "jquery",
            'window.$': 'jquery',
            'window.jQuery': 'jquery',
        })
    ]
});
