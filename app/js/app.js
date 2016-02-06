'use strict';


import angular from 'angular';
// var angular = require('angular'),

let uiRouter = require('angular-ui-router');

require('../../node_modules/material-design-lite/material');
require('angular-local-storage');
require('angular-cookies');;

import './templates';

let deps = [
  'LocalStorageModule',
  'ngCookies',
  uiRouter,
  'templates'
];

let app = angular.module('app', deps)

app.directive('sfAdditionalDrawerButton', require('./directives/additionaldrawerbutton'));

// UI Router
app.config(require('./config/angularconfig'));

angular.bootstrap(document, ['app']);
