myApp.controller('PathController', ['PathService', 'NgMap', function (PathService, NgMap) {
    console.log('PathController created');
    var vm = this;
    vm.map = {};
    NgMap.getMap("all_map").then(function(map) {
        console.log('this is that map', map);
        vm.map = map;
      });
    vm.paths = PathService.paths;


    PathService.getPaths();
    vm.updateUpRating = PathService.updateUpRating;
    vm.updateDownRating = PathService.updateDownRating;
    
    vm.postNewPath = function (newPath) {
        console.log('post button clicked');
        console.log('newPath:', newPath);
        PathService.postNewPath(newPath);
    }



    vm.showDetail = function(e, path) {
        console.log(path);
        vm.paths.path = path;
        vm.map.showInfoWindow('foo-iw', this);
      };

}]);