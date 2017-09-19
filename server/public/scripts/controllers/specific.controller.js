myApp.controller('SpecificController', ['PathService', '$routeParams', 'NgMap', '$location', function(PathService, $routeParams, NgMap, $location){
    var vm = this;
    vm.currentPath = PathService.currentPath;
    console.log('$routeParams', $routeParams);
    PathService.getDetails($routeParams.id);

    //this is to get info window on specific marker
    vm.map = {};
    NgMap.getMap("specific_map").then(function(map) {
        vm.map = map;
      });
    vm.paths = PathService.paths;

    vm.path = {};
    
    // vm.pathInformation = function() {
    //     PathService.updatePathInformation = vm.path;
    // }

    vm.updateUpRating = PathService.updateUpRating;
    vm.updateDownRating = PathService.updateDownRating;

    vm.showDetail = function(e, path) {
        console.log(path);
        vm.paths.path = path;
        vm.map.showInfoWindow('boo-iw', this);
      };

    vm.deletePath = function () {
      console.log('pathID:', $routeParams.id);
      PathService.deletePath($routeParams.id);
      $location.path("/skatepaths");
  };

}]);