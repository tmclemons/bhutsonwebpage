'use strict';

import config           from '../config';
import gulp             from 'gulp';
import gutil            from 'gulp-util';
import gulpif           from 'gulp-if';
import source           from 'vinyl-source-stream';
import sourcemaps       from 'gulp-sourcemaps';
import streamify        from 'gulp-streamify';
import watchify         from 'watchify';
import buffer           from 'vinyl-buffer';
import browserify       from 'browserify';
import babelify         from 'babelify';
import uglify          from 'gulp-uglify';
import handleErrors     from '../util/handleErrors';
import browserSync      from 'browser-sync';
import ngAnnotate       from 'browserify-ngannotate';


function buildScript(file) {

  var bundler = browserify({
    entries: [config.sourceDir + 'js/' + file],
    debug: false,
    cache: {},
    packageCache: {},
    fullPaths: !global.isProd
  });

  if (!global.isProd && !global.isStaging) {
    bundler = watchify(bundler);

    bundler.on('update', function() {
      rebundle();
      gutil.log('Rebundle...');
      // console.log('Rebundling')
    });
  }

  const transforms = [
    { 'name': babelify, 'options': {}},
    { 'name': ngAnnotate, 'options': {}},
    { 'name': 'brfs', 'options': {}},
    { 'name': 'bulkify', 'options': {}}
  ];

  transforms.forEach(function(transform) {
    bundler.transform(transform.name, transform.options);
  });

  function rebundle() {
    const stream = bundler.bundle();
    const createSourcemap = global.isProd && config.browserify.prodSourceMap;

    return stream.on('error', handleErrors)
      .pipe(source(file))
      .pipe(gulpif(createSourcemap, buffer()))
      .pipe(gulpif(createSourcemap, sourcemaps.init()))
      .pipe(gulpif(global.isProd, streamify(uglify({
        compress: {drop_console: true}
      }))))
      .pipe(gulpif(createSourcemap, sourcemaps.write('./')))
      .pipe(gulp.dest(config.scripts.dest))
      .pipe(browserSync.stream({once: true}));
  }
   return rebundle();

}

gulp.task('browserify', function() {

  return buildScript('app.js');

});
