'use strict';

import config           from '../config';
import gulp             from 'gulp';
import jsonCombine      from 'gulp-jsoncombine';
import rename           from 'gulp-rename';


gulp.task('data', function() {
  gulp.src(config.data.files)
  	// .pipe(jsonCombine('articles.json', function(data){
    //   // return new Buffer(JSON.stringify(data));
    // }))
    // .pipe(rename("articles.json"))
  	.pipe(gulp.dest(config.data.dest));
});
