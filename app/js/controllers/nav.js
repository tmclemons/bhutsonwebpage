var nav = {
  controller: ['$scope', '$state', '$stateParams', '$window',
    ($scope, $state, $stateParams, $window) => {
      $scope.site = {
        "author": "Brittany Hutson",
        "siteName": "Brittany Hutson's Portfolio",
        "siteType": "Portfolio"
      };
      $scope.currentPage = $state.current.name;

      $scope.refresh = function refresh(){
        $window.location.reload();
      };

      $scope.nextState = function nextState(elem, opts){
        $state.go(elem, opts, {reload: true});
        $window.location.reload();
      }

      $scope.toggleDrawer = function toggleDrawer() {
        var drawer = document.getElementsByClassName('mdl-layout__drawer')[0];
        var obfuscator = document.getElementsByClassName('mdl-layout__obfuscator')[0];
        drawer.classList.toggle("is-visible");
        obfuscator.classList.toggle("is-visible");
      }

  }]
};

module.exports = nav;
