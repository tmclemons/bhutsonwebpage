'use strict';

import config           from '../config';
import gulp             from 'gulp';
import sass             from 'gulp-sass';
import gulpif           from 'gulp-if';
import sourcemaps       from 'gulp-sourcemaps';
import handleErrors     from '../util/handleErrors';
import browserSync      from 'browser-sync';
import autoprefixer     from 'gulp-autoprefixer';

gulp.task('styles', function() {

  const createSourcemap = !global.isProd || config.styles.prodSourceMap;

  gulp.src(config.styles.src)
    .pipe(gulpif(createSourcemap, sourcemaps.init()))
    .pipe(sass({
      sourceComments: !global.isProd,
      outputStyle: global.isProd ? 'compressed' : 'nested',
      includePaths: config.styles.sassIncludePaths
    })
    .on('error', handleErrors))
    .pipe(autoprefixer('last 2 versions', '> 1%', 'ie 8'))
    .pipe(gulpif(
      createSourcemap,
      sourcemaps.write( global.isProd ? './' : null))
    )
    .pipe(gulp.dest(config.styles.dest))
    .pipe(browserSync.stream({ once: true}));
});

console.log('Styles Completed!')
