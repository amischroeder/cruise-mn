myApp.controller('PathController', ['PathService', function (PathService) {
    console.log('PathController created');
    var vm = this;
    vm.paths = PathService.paths;


    PathService.getPaths();
    
    vm.postNewPath = function (newPath) {
        console.log('post button clicked');
        console.log('newPath:', newPath);
        PathService.postNewPath(newPath);
    }

    vm.upCount = 0;
    vm.thumbsUp = function() {
        vm.upCount++
        console.log(vm.upCount);
    }

    vm.downCount = 0;
    vm.thumbsDown = function() {
        vm.downCount++
        console.log(vm.downCount);
    }

}]);