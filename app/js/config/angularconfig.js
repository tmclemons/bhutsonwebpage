let main = require('../controllers/main');
let nav = require('../controllers/nav');
let contactForm = require('../controllers/contactform');





function angularConfig($stateProvider, $urlRouterProvider, $locationProvider, localStorageServiceProvider, $httpProvider) {
  localStorageServiceProvider.setPrefix('bhutson');
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
          templateUrl: 'partials/drawer.html',
          controller: nav.controller
        }
      }
    })
    .state('main.entries', {
      url: '/entry?page',
      params: {
        page: null
      },
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
          templateUrl: 'partials/drawer.html',
          controller: nav.controller
        }
      }
    })
    .state('main.about', {
      url: '/about',
      views: {
        '@': {
          templateUrl: 'pages/main.html'
        },
        'content@main.about': {
          templateUrl: 'pages/about.html',
          controller: main.controller
        },
        'header@main.about':{
          templateUrl: 'components/header.html',
          controller: nav.controller
        },
        'drawer@main.about': {
          templateUrl: 'partials/drawer.html',
          controller: nav.controller
        }
      }
    })
    .state('main.contact', {
      url: '/contact',
      views: {
        '@': {
          templateUrl: 'pages/main.html'
        },
        'content@main.contact': {
          templateUrl: 'pages/contact.html',
          controller: main.controller
        },
        'header@main.contact':{
          templateUrl: 'components/header.html',
          controller: nav.controller
        },
        'drawer@main.contact': {
          templateUrl: 'partials/drawer.html',
          controller: nav.controller
        }
      }
    })
}

module.exports = ['$stateProvider', '$urlRouterProvider', '$locationProvider', 'localStorageServiceProvider', '$httpProvider', angularConfig];
