'use strict'


var main = {
  controller: ['$scope', '$state', '$http', '$stateParams', '$q', '$location', '$timeout',
    ($scope, $state, $http, $stateParams, $q, $location, $timeout) => {
      let locationUrl = $location.url();
      let httpGet = locationUrl.includes('?page=');
      let articleListItems =[
        {
          "articleName": "business connect",
          "articleFn": "businessConnect",
          "articleImg": "../../../images/BC-exposition-poster.jpg",
          "articlePath": "data/business-connect.json",
          "tags": ['UX Design', 'UX Research']
        },
        {
          "articleName": "cengage learning",
          "articleFn": "cengageLearning",
          "articleImg": "../../../images/CG-debrief.jpg",
          "articlePath": "data/cengage-learning.json",
          "tags": ['Contextual Inquiry','UX Research']
        },
        {
          "articleName": "my talk tools",
          "articleFn": "myTalkTools",
          "articleImg": "../../../images/MTT-usability.png",
          "articlePath": "data/mytalk-tools.json",
          "tags": ['UX Research']

        },
        {
          "articleName": "ms. molly foundation",
          "articleFn": "msMollyFoundation",
          "articleImg": "../../../images/MMS-affinity-wall.jpg",
          "articlePath": "data/msmolly-foundation.json",
          "tags": ['Contextual Inquiry','UX Research']

        },
        {
          "articleName": "remembering riverhead",
          "articleFn": "rememberingRiverhead",
          "articleImg": "../../../images/RR-sketches.jpg",
          "articlePath": "data/remembering-riverhead.json",
          "tags": ['Interaction Design', 'UX Design']
        },
        {
          "articleName": "about me",
          "articleFn": "about-me",
          "articleImg": "",
          "articlePath": "data/about-me.json"
        }
      ];

      $scope.articleList = articleListItems;

    if(httpGet){
      $http.get(findPath()).success(function(data){
        $scope.routeData = data;
      });
    }

    function currentRoutes(){
        if (locationUrl.includes('/entry?page=')){
        return locationUrl.replace('/entry?page=', '')
      } else {
        return locationUrl.replace('/info?page=', '')
      }
    };

    function findPath(){
      for (var i = 0; i < articleListItems.length; i++) {
        if(articleListItems[i].articleFn === currentRoutes()){
          return articleListItems[i].articlePath
        }
      }
    }

  }]
};
module.exports = main;
