
function entryDataRepo ($state, $http){

  $http.get('data/articles/business-connect.json').success( function(data) {
    $scope.articles =  data;
  });


  return{
    
  }
}

module.exports = ['$state', '$http', entryDataRepo];
