'use strict';

export default {

  browserPort: 3001,
  UIPort: 3000,

  sourceDir: './app/',
  buildDir: './build/',

  styles: {
    src: 'app/scss/**/*.scss',
    dest: 'build/css',
    prodSourceMap: false,
    sassIncludePaths: []
  },

  data: {
    src: 'app/data/',
    files: 'app/data/**/*.json',
    dest: 'build/data',
  },

  scripts: {
    src: 'app/js/**/*.js',
    dest: 'build/js'
  },

  views: {
    index: 'app/views/index.*',
    src: 'app/views/**/*.jade',
    dest:'app/js'
  },

  images: {
    src: 'app/images/**/*',
    dest:'build/images'
  },

  browserify: {
    bundleName: 'bundle.js',
    // src: 'app/js/app.js',
    prodSourceMap: false
  },

  init: function(){
    this.views.watch = [
      this.views.index,
      this.views.src
    ];

    return this;
  }
}.init();
