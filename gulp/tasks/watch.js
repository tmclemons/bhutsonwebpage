'use strict';

import config   from '../config';
import gulp     from 'gulp';

gulp.task('watch', ['browserSync'], function(){

  // Scripts are automatically watched and rebundled by watchify inside browserify task
  gulp.watch(config.scripts.src, ['lint']);
  gulp.watch(config.styles.src,   ['styles']);
  gulp.watch(config.views.src,   ['views']);

})
