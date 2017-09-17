myApp.controller('PathController', ['PathService', function (PathService) {
    console.log('PathController created');
    var vm = this;
    vm.paths = PathService.paths;



    PathService.getPaths();
    vm.updateRating = PathService.updateUpRating;
    
    vm.postNewPath = function (newPath) {
        console.log('post button clicked');
        console.log('newPath:', newPath);
        PathService.postNewPath(newPath);
    }



}]);