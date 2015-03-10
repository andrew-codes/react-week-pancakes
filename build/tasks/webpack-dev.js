'use strict';

import gulp from 'gulp';
import gutil from 'gulp-util';
import configFactory from './../webpackConfigFactory';
import webpack from 'webpack';
import webpackDevServer from 'webpack-dev-server';
let webpackConfig = configFactory(process.env.NODE_ENV === 'production');

gulp.task('webpack-dev', [], function (done) {
    new webpackDevServer(webpack(webpackConfig), {
        contentBase: 'http://localhost:8888',
        hot: true,
        publicPath: webpackConfig.output.publicPath,
        // Unfortunately quiet swallows everything even error so it can't be used.
        quiet: false,
        // No info filters only initial compilation it seems.
        noInfo: true,
        // Remove console.log mess during watch.
        stats: {
            assets: false,
            colors: true,
            version: false,
            hash: false,
            timings: false,
            chunks: false,
            chunkModules: false
        }
    })
        .listen(8888, 'localhost', function (error) {
            if (error) {
                throw new gutil.PluginError('webpack-dev-server', error);
            }
            gutil.log('[webpack-dev-server]', 'localhost:8888/build/client.js');
            done()
        });
});