var nav = {
  controller: ['$scope', '$state',
    ($scope, $state) => {
      $scope.site = {
        "author": "Brittany Hutson",
        "siteName": "Brittany Hutson's Portfolio",
        "siteType": "Portfolio"
      };
  }]
};

module.exports = nav;
