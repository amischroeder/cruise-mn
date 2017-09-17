myApp.controller('PathController', ['PathService', function (PathService) {
    console.log('PathController created');
    var vm = this;
    vm.paths = PathService.paths;



    PathService.getPaths();
    vm.updateUpRating = PathService.updateUpRating;
    vm.updateDownRating = PathService.updateDownRating;
    
    vm.postNewPath = function (newPath) {
        console.log('post button clicked');
        console.log('newPath:', newPath);
        PathService.postNewPath(newPath);
    }



}]);