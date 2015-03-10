'use strict';

import gulp from 'gulp';
import nodemon from 'nodemon';

gulp.task('start-server', [], function () {
    nodemon({
            script: './index.js',
            ext: 'js'
        }
    );
});