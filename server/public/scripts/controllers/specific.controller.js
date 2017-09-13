myApp.controller('SpecificController', ['PathService', '$routeParams', function(PathService, $routeParams){
    var self = this;
    self.currentPath = PathService.currentPath;
    console.log('$routeParams', $routeParams);
    PathService.getDetails($routeParams.id);
}]);