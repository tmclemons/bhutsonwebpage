'use strict'

let R = require('ramda');

var main = {
  controller: ['$scope', '$state', '$http', '$stateParams', '$q', '$cookieStore',
    ($scope, $state, $http, $stateParams, $q, $cookiesStore) => {
      $scope.articleList =[
        {
          "articleName": "business connect",
          "articleFn": "businessConnect"
        },
        {
          "articleName": "cengage learning",
          "articleFn": "cengageLearning"
        },
        {
          "articleName": "my talk tools",
          "articleFn": "myTalkTools"
        },
        {
          "articleName": "ms. molly foundation",
          "articleFn": "msMollyFoundation"
        },
        {
          "articleName": "remembering riverhead",
          "articleFn": "rememberingRiverhead"
        }
      ];

        $scope.businessConnect = null;

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

        console.log($stateParams)
        $scope.routes = $stateParams.route;
  }]
};

module.exports = main;
