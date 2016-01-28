'use strict';

import gulp         from 'gulp';
import runSequence  from 'run-sequence';

gulp.task('dev', function(cb) {

  global.isProd = false;
  global.isStaging = false;

  runSequence('views', ['styles', 'browserify'], 'watch', cb);
});
