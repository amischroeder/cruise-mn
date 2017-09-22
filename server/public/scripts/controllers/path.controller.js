myApp.controller('PathController', ['PathService', 'NgMap', function (PathService, NgMap) {
    console.log('PathController created');
    var vm = this;
    vm.map = {};
    NgMap.getMap("all_map").then(function (map) {
        console.log('this is that map', map);
        vm.map = map;
        google.maps.event.trigger(map, 'resize');
    });

    vm.paths = PathService.paths;


    PathService.getPaths();
    vm.updateUpRating = PathService.updateUpRating;
    vm.updateDownRating = PathService.updateDownRating;

    vm.postNewPath = function (newPath) {
        console.log('post button clicked');
        console.log('newPath:', newPath);
        PathService.postNewPath(newPath);
    };

    vm.showDetail = function (e, path) {
        console.log(path);
        vm.paths.path = path;
        vm.map.showInfoWindow('foo-iw', this);
    };

    vm.client = filestack.init('AOxruw8HTHChjTQjVfU0rz');
    vm.showPicker = function () {
        vm.client.pick({
            accept: 'image/*'
            // imageMax: [600, 400]
        }).then(function (result) {
            vm.newPath.photos = result.filesUploaded[0].url;
        });
    }

    // vm.placeChanged = function() {
    //     vm.place = this.getPlace();
    //     console.log('location', vm.place.geometry.location);
    //     vm.map.setCenter(vm.place.geometry.location);
    //   }
}]);