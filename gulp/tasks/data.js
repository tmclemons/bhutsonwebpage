'use strict';

import config           from '../config';
import gulp             from 'gulp';
import jsonCombine      from 'gulp-jsoncombine';
import rename           from 'gulp-rename';
import extend           from 'gulp-extend';
import merge            from 'gulp-merge-json';



gulp.task('data', function() {
  gulp.src(config.data.files)
    // .pipe(extend('articles.json'))
    .pipe(merge('articles.json'))
  	// .pipe(jsonCombine('articles.json', function(data){
    //   // return new Buffer(JSON.stringify(data));
    // }))
    // .pipe(rename("articles.json"))
  	.pipe(gulp.dest(config.data.dest));
});
