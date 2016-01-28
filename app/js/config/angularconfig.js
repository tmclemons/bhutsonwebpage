let main = require('../controllers/main');
let nav = require('../controllers/nav');
let drawer = require('../controllers/drawer');



function angularConfig($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {

  $urlRouterProvider.otherwise('/page-not-found');

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });

  $stateProvider
    .state('main', {
      url: '',
      abstract: true,
      controller: main.controller
    })
    .state('main.homepage', {
      url: '/',
      views: {
        '@': {
          templateUrl: 'pages/main.html'
        },
        'content@main.homepage': {
          templateUrl: 'pages/contents.html',
          controller: main.controller
        },
        'header@main.homepage':{
          templateUrl: 'components/header.html',
          controller: nav.controller
        },
        'drawer@main.homepage': {
          tempalteUrl: 'components/drawer.html',
          controller: drawer.controller
        }
      }
    })
    .state('main.entries', {
      url: '/entry',
      views: {
        '@': {
          templateUrl: 'pages/main.html'
        },
        'content@main.entries': {
          templateUrl: 'pages/entry.html',
          controller: main.controller
        },
        'header@main.entries':{
          templateUrl: 'components/header.html',
          controller: nav.controller
        },
        'drawer@main.entries': {
          tempalteUrl: 'components/drawer.html',
          controller: drawer.controller
        }
      }
    });
}

module.exports = ['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider', angularConfig];
