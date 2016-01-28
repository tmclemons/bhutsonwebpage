'use strict';

import config           from '../config';
import gulp             from 'gulp';
import jade             from 'gulp-jade';
import browserSync      from 'browser-sync';
import templateCache    from 'gulp-angular-templatecache';




gulp.task('views', function() {

  gulp.src(config.views.index)
    .pipe(jade())
    .pipe(gulp.dest(config.buildDir));
  return gulp.src(config.views.src)
    .pipe(jade())
    .pipe(templateCache({
      standalone:true
    }))
    .pipe(gulp.dest(config.views.dest))
    .pipe(browserSync.stream({ once: true }));

});

console.log('Views Completed!')
