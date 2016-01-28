'use strict';

import config   from '../config';
import gulp     from 'gulp';
import del      from 'del';

gulp.task('clean', function(cb) {
  console.log('halfway!')
  del([config.buildDir], cb);
  console.log('cleaned!')
});

console.log('clean done!')
