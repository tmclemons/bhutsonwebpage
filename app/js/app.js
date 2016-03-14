'use strict';


import angular from 'angular';

let uiRouter = require('angular-ui-router');

require('../../node_modules/material-design-lite/material');
require('angular-local-storage');
require('angular-cookies');

import './templates';

let deps = [
  'LocalStorageModule',
  'ngCookies',
  uiRouter,
  'templates'
];

let app = angular.module('app', deps)

app.run(['$rootScope', '$location', '$timeout', function($rootScope, $location, $timeout) {
  $rootScope.$on('$stateChangeError', (event, toState, toParams, fromState, fromParams, error) => {
      console.log(error);
  });


  $rootScope.$on('$viewContentLoaded', ()=> {
    $timeout(() => {
      componentHandler.upgradeAllRegistered();
    });
  });
}]);


// UI Router
app.config(require('./config/angularconfig'));

angular.bootstrap(document, ['app']);
