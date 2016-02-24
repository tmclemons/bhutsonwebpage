'use strict'

let R = require('ramda');

var main = {
  controller: ['$scope', '$state', '$http', '$stateParams', '$q', '$location', '$timeout',
    ($scope, $state, $http, $stateParams, $q, $location, $timeout) => {
      let locationUrl = $location.url();
      let currentRoutes = locationUrl.replace('/entry?page=', '');
      let articleListItems =[
        {
          "articleName": "business connect",
          "articleFn": "businessConnect",
          "articleImg": "../../../images/BC-exposition-poster.jpg",
          "articlePath": "data/articles/business-connect.json"
        },
        {
          "articleName": "cengage learning",
          "articleFn": "cengageLearning",
          "articleImg": "../../../images/CG-debrief.jpg",
          "articlePath": "data/articles/cengage-learning.json"
        },
        {
          "articleName": "my talk tools",
          "articleFn": "myTalkTools",
          "articleImg": "../../../images/MTT-usability.png",
          "articlePath": "data/articles/mytalk-tools.json"
        },
        {
          "articleName": "ms. molly foundation",
          "articleFn": "msMollyFoundation",
          "articleImg": "../../../images/MMS-affinity-wall.jpg",
          "articlePath": "data/articles/msmolly-foundation.json"
        },
        {
          "articleName": "remembering riverhead",
          "articleFn": "rememberingRiverhead",
          "articleImg": "../../../images/RR-sketches.jpg",
          "articlePath": "data/articles/remembering-riverhead.json"
        }
      ];
      $scope.articleList = articleListItems;

      $http.get(findPath()).success(function(data){
        $scope.routeData = data;
      });

      function findPath(){
        for (var i = 0; i < articleListItems.length; i++) {
          if(articleListItems[i].articleFn === currentRoutes){
            return articleListItems[i].articlePath
          }
        }
      }

      window.addEventListener("load", function entryImageDimensions(event){
        window.removeEventListener("load", entryImageDimensions, false);
        var entryCard = document.getElementsByClassName('entry-images');
        var entryImageHeightItem;
        $scope.entryImageMaxHeight = [];
        $scope.test = "300px";
        var entryHeights = [];
        for (var i = 0; i < entryCard.length; i++) {
          var entryImage = entryCard[i];
          var entryImageHeight = entryImage.naturalHeight || 0;
          var entryImageWidth = entryImage.naturalWidth || 0;
          var entryImageRatio = (entryImageHeight / entryImageWidth) || 0;
          var actualWidth = entryImage.offsetWidth || 0;
          entryImageHeightItem = actualWidth * entryImageRatio;
          entryHeights.push({
            height: entryImageHeightItem
          });
        }
        $scope.entryImageMaxHeight = entryHeights;
        $scope.$digest();
      })
  }]
};
module.exports = main;
