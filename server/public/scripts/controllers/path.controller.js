myApp.controller('PathController', ['PathService', function (PathService) {
    console.log('PathController created');
    var vm = this;
    vm.paths = PathService.paths;

    PathService.getPaths();

}]);