'use strict';

import config           from '../config';
import url              from 'url';
import browserSync      from 'browser-sync';
import browserSyncSpa   from 'browser-sync-spa';
import gulp             from 'gulp';

gulp.task('browserSync', function(){

  browserSync.use(browserSyncSpa({
    selector: "[ng-app]"
  }));

  browserSync.init({
    server: {
      baseDir: config.buildDir
    },
    port: config.browserPort,
    ui: {
      port: config.UIPort
    },
    ghostMode: {
      links: false
    }
  });
});

console.log("Browser SYNCD!")
