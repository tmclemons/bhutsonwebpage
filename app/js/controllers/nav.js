let $ = require('jquery');

var nav = {
  controller: ['$scope', '$state',
    ($scope, $state) => {
      $scope.site = {
        "author": "Brittany Hutson",
        "siteName": "Brittany Hutson's Portfolio",
        "siteType": "Portfolio",
        "tagline": "User Experience Researcher"
      };
    $scope.currentPage = $state.current.name;
    $scope.toggleBack = false;
    if( $scope.currentPage === 'main.entries') {
      $scope.toggleBack = true;
    }
    $scope.drawerToggle = function(){
      $(".mdl-layout__drawer").toggleClass("is-visible");
      $(".mdl-layout__obfuscator").toggleClass("is-visible");
    };


  }]
};

module.exports = nav;
