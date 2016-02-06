'use strict'

let R = require('ramda');

var main = {
  controller: ['$scope', '$state', '$http', '$stateParams', '$q', '$cookieStore', '$location',
    ($scope, $state, $http, $stateParams, $q, $cookiesStore, $location) => {

      $scope.articleList =[
        {
          "articleName": "Business Connect",
          "articleFn": "businessConnect",
          "imageurl": "../images/BC-exposition-poster.jpg",
          "description": [
            'UX Research',
            'UX Design'
          ]
        },
        {
          "articleName": "Cengage Learning",
          "articleFn": "cengageLearning",
          "imageurl": "../images/CG-debrief.jpg",
          "description": [
            'Contextual Inquiry',
            'User Research',
            'UX Design'
          ]
        },
        {
          "articleName": "My Talk Tools",
          "articleFn": "myTalkTools",
          "imageurl": "../images/MTT-usability.png",
          "description": [
            'UX Research'
          ]
        },
        {
          "articleName": "Ms. Molly Foundation",
          "articleFn": "msMollyFoundation",
          "imageurl": "../images/MMS-affinity-wall.jpg",
          "description": [
            'Contextual Inquiry'
          ]
        },
        {
          "articleName": "Remembering Riverhead",
          "articleFn": "rememberingRiverhead",
          "imageurl": "../images/RR-digital-prototype.png",
          "description": [
            'Interaction Design'
          ]
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
