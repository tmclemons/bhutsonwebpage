'use strict'

let R = require('ramda');

var main = {
  controller: ['$scope', '$state', '$http', '$stateParams', '$q', '$cookieStore', '$location',
    ($scope, $state, $http, $stateParams, $q, $cookiesStore, $location) => {

      $scope.articleList =[
        {
          "articleName": "business connect",
          "articleFn": "businessConnect",
          "imageurl": "../images/BC-exposition-poster.jpg"
        },
        {
          "articleName": "cengage learning",
          "articleFn": "cengageLearning",
          "imageurl": "../images/CG-debrief.jpg"
        },
        {
          "articleName": "my talk tools",
          "articleFn": "myTalkTools",
          "imageurl": "../images/MTT-usability.png"
        },
        {
          "articleName": "ms. molly foundation",
          "articleFn": "msMollyFoundation",
          "imageurl": "../images/MMS-affinity-wall.jpg"
        },
        {
          "articleName": "remembering riverhead",
          "articleFn": "rememberingRiverhead",
          "imageurl": "../images/RR-digital-prototype.png"
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

        $scope.play = function play(){
          let vid = document.getElementById("video-03");
          if(vid.paused){
            vid.play();
          } else {
            vid.pause();
          }
        };

  }]
};

module.exports = main;
