var main = {
  controller: ['$scope', '$state', '$http',
    ($scope, $state, $http) => {
      let jsonFile = 'data/articles.json';
      $scope.test = 'test';
      console.log($scope.test)

      $scope.articles = [];
      $http.get(jsonFile).success( function(data) {
        $scope.articles =  data;
      });
  }]
};

module.exports = main;
