'use strict';

import config       from '../config';
import gulp         from 'gulp';
import changed      from 'gulp-changed';
import gulpif       from 'gulp-if';
import imagemin     from 'gulp-imagemin';
import browserSync  from 'browser-sync';


gulp.task('images', function(){
  return gulp.src(config.images.src)
    .pipe(changed(config.images.dest)) //ignores unchanged files
    .pipe(gulp.dest(config.images.dest))
    .pipe(browserSync.stream({ once: true}));
});
