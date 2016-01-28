var entry = {
  controller: ['$scope', '$state', '$http',
    ($scope, $state, $http) => {

      $http.get($scope.entryPage).success( function(data) {
        $scope.articles =  data;
      });

  }]
};

module.exports = entry;
