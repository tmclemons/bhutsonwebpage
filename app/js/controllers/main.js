'use strict'

let R = require('ramda');

var main = {
  controller: ['$scope', '$state', '$http', '$stateParams', '$q', '$cookieStore', '$location',
    ($scope, $state, $http, $stateParams, $q, $cookiesStore, $location) => {

      $scope.articleList =[
        {
          "articleName": "business connect",
          "articleFn": "businessConnect",
          "articleImg":"../../../images/BC-exposition-poster.jpg"
        },
        {
          "articleName": "cengage learning",
          "articleFn": "cengageLearning",
          "articleImg":"../../../images/CG-debrief.jpg"
        },
        {
          "articleName": "my talk tools",
          "articleFn": "myTalkTools",
          "articleImg":"../../../images/MTT-usability.png"
        },
        {
          "articleName": "ms. molly foundation",
          "articleFn": "msMollyFoundation",
          "articleImg":"../../../images/MMS-affinity-wall.jpg"
        },
        {
          "articleName": "remembering riverhead",
          "articleFn": "rememberingRiverhead",
          "articleImg":"../../../images/RR-sketches.jpg"
        }
      ];

        $http.get('data/articles/business-connect.json').success(function(data){
          $scope.businessConnect = data;
        });
        $http.get('data/articles/cengage-learning.json').success(function(data){
          $scope.cengageLearning = data;
        });
        $http.get('data/articles/remembering-riverhead.json').success(function(data){
          $scope.rememberingRiverhead = data;
        });
        $http.get('data/articles/mytalk-tools.json').success(function(data){
          $scope.myTalkTools = data;
        });
        $http.get('data/articles/msmolly-foundation.json').success(function(data){
          $scope.msMollyFoundation = data;
        });
        $http.get('data/articles/about-me.json').success(function(data){
          $scope.aboutMe = data;
        });


        let locationUrl = $location.url();
        $scope.routes = locationUrl.replace('/entry?page=', '');

  }]
};

module.exports = main;
