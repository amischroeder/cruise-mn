myApp.controller('SpecificController', ['PathService', '$routeParams', 'NgMap', '$location', function(PathService, $routeParams, NgMap, $location){
    var vm = this;
    vm.currentPath = PathService.currentPath;
    vm.paths = PathService.paths;
    vm.path = {};
    vm.updateUpRating = PathService.updateUpRating;
    vm.updateDownRating = PathService.updateDownRating;
    vm.map = {};

    // console.log('$routeParams', $routeParams);
    
    PathService.getDetails($routeParams.id);

    //this is to get info window on specific marker
    NgMap.getMap("specific_map").then(function(map) {
        vm.map = map;
      });

      // call to show info window with path details
    vm.showDetail = function(e, path) {
        console.log(path);
        vm.paths.path = path;
        vm.map.showInfoWindow('boo-iw', this);
      };

      // delete specific path
    vm.deletePath = function () {
      console.log('pathID:', $routeParams.id);
      PathService.deletePath($routeParams.id);
      $location.path("/skatepaths");
  };

}]);