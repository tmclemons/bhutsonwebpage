var nav = {
  controller: ['$scope', '$state',
    ($scope, $state) => {
      $scope.site = {
        "author": "Brittany Hutson",
        "siteName": "Brittany Hutson's Portfolio",
        "siteType": "Portfolio"
      };
    $scope.currentPage = $state.current.name;
  }]
};

module.exports = nav;
