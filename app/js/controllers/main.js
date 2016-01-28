'use strict'

let R = require('ramda');

var main = {
  controller: ['$scope', '$state', '$http', '$stateParams', '$q',
    ($scope, $state, $http, $stateParams, $q) => {
      $scope.articleList =[
        {
          "articleName": "business connect",
          "articleId": "business-connect"
        },
        {
          "articleName": "cengage learning",
          "articleId": "cengage-learning"
        },
        {
          "articleName": "my talk tools",
          "articleId": "mytalk-tools"
        },
        {
          "articleName": "ms. molly foundation",
          "articleId": "msmolly-foundation"
        },
        {
          "articleName": "remembering riverhead",
          "articleId": "remembering-riverhead"
        }
      ];

      $scope.entryPage = function entryPage(e){
        let jsonDir = 'data/articles/';
        let jsonFile = jsonDir + e + '.json';
      }

        $http.get('data/articles/business-connect.json').success(function(data){
          $scope.businessConnect = data;
          console.log($scope.businessConnect)
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


  }]
};

module.exports = main;
