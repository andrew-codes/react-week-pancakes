'use strict';

import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import NotifyPlugin from './lib/notifyPlugin';
import path from 'path';

let loaders = [
    {
        test: /\.css$/,
        loader: 'style!css'
    },
    {
        test: /\.styl/,
        loader: 'style!css!stylus'
    },
    {
        test: /\.less/,
        loader: 'style!css!less'
    },
    {
        test: /\.(eot|ttf|woff)/,
        loader: 'file'
    },
    {
        test: /\.svg/,
        loader: 'url'
    }
];
module.exports = function (isProduction) {
    return {
        cache: !isProduction,
        debug: !isProduction,
        devtool: !isProduction && 'eval-source-map',
        entry: isProduction ? [
            './src/client/main.jsx'
        ] : [
            'webpack-dev-server/client?http://localhost:8888',
            // Why only-dev-server instead of dev-server:
            // https://github.com/webpack/webpack/issues/418#issuecomment-54288041
            'webpack/hot/only-dev-server',
            './src/client/main.jsx'
        ],
        output: isProduction ? {
            path: './../dist',
            filename: 'app.js'
        } : {
            path: path.join(__dirname, './../dist'),
            filename: 'app.js',
            publicPath: 'http://localhost:8888/dist/'
        },
        plugins: (function () {
            let plugins = [
                new webpack.DefinePlugin({
                    'process.env': {
                        NODE_ENV: JSON.stringify(isProduction ? 'production' :
                            'development'),
                        IS_BROWSER: true
                    }
                })
            ];
            if (isProduction) {
                plugins.push(
                    new ExtractTextPlugin('app.css', {
                        allChunks: true
                    }),
                        new webpack.optimize.DedupePlugin(),
                        new webpack.optimize.OccurenceOrderPlugin(),
                        new webpack.optimize.UglifyJsPlugin({
                            compress: {
                                warnings: false
                            }
                        })
                );
            }
            else {
                plugins.push(
                    NotifyPlugin,
                    new webpack.HotModuleReplacementPlugin(),
                    new webpack.NoErrorsPlugin()
                );
            }
            return plugins;
        })(),
        resolve: {
            extensions: ['', '.js', '.jsx', '.json', 'styl']
        },
        module: {
            loaders: [{
                test: /\.(jsx|js)$/,
                exclude: /node_modules/,
                loaders: isProduction ? ['babel'] : ['react-hot', 'babel']
            }].concat(loaders)
        }
    };
};
