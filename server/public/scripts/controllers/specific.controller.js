myApp.controller('SpecificController', ['PathService', '$routeParams', function(PathService, $routeParams){
    var vm = this;
    vm.currentPath = PathService.currentPath;
    console.log('$routeParams', $routeParams);
    PathService.getDetails($routeParams.id);

    vm.path = {};
    
    vm.pathInformation = function() {
        PathService.updatePathInformation = vm.path;
    }

    vm.updateUpRating = PathService.updateUpRating;
    vm.updateDownRating = PathService.updateDownRating;

}]);