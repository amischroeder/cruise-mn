myApp.controller('PathController', ['PathService', 'NgMap', function (PathService, NgMap) {
    console.log('PathController created');
    var vm = this;
    vm.map = {};
    vm.updateUpRating = PathService.updateUpRating;
    vm.updateDownRating = PathService.updateDownRating;
    vm.paths = PathService.paths;
    vm.client = filestack.init('AOxruw8HTHChjTQjVfU0rz');

    // calls get route
    PathService.getPaths();

    // get function for inital map with all pinpoints (all_map)
    NgMap.getMap("all_map").then(function (map) {
        console.log('this is that map', map);
        vm.map = map;
        google.maps.event.trigger(map, 'resize');
    });

    // post new path
    vm.postNewPath = function (newPath) {
        console.log('post button clicked');
        console.log('newPath:', newPath);
        PathService.postNewPath(newPath);
    };

    // show info window with detail of path clicked on
    vm.showDetail = function (e, path) {
        console.log(path);
        vm.paths.path = path;
        vm.map.showInfoWindow('foo-iw', this);
    };

    // shows image uploader
    vm.showPicker = function () {
        vm.client.pick({
            accept: 'image/*'
            // imageMax: [600, 400]
        }).then(function (result) {
            vm.newPath.photos = result.filesUploaded[0].url;
        });
    }

}]);