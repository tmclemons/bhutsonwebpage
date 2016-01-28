'use strict';


import angular from 'angular';
// var angular = require('angular'),

let uiRouter = require('angular-ui-router');

require('../../node_modules/material-design-lite/material');
require('angular-local-storage');
import './templates';

let deps = [
  'LocalStorageModule',
  uiRouter,
  'templates'
];

let app = angular.module('app', deps)

// UI Router
app.config(require('./config/angularconfig'));

angular.bootstrap(document, ['app']);
