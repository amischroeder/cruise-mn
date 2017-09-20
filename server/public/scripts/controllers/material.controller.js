myApp.controller('MaterialController', ['PathService', '$mdDialog', '$mdToast','$routeParams', '$location', function(PathService, $mdDialog, $mdToast, $routeParams, $location) {
    console.log('MaterialController Loaded');
    
    var vm = this;

    vm.deletePath = function () {
        console.log('pathID:', $routeParams.id);
        PathService.deletePath($routeParams.id);
        $location.path("/skatepaths");
    };

    vm.status = '  ';
    vm.showConfirm = function(ev) {
        var confirm = $mdDialog.confirm()
        .title('Do you really want to delete this path?')
        .targetEvent(ev)
        .ok('Yep!')
        .cancel('Nevermind');
        $mdDialog.show(confirm).then(function() {
            // vm.status = 'Deleted!';
            vm.deletePath();
          }, function() {
            vm.status = 'Okay lets leave it there';
          });
    };


    vm.showToast = function (ev) {
        $mdToast.show(
            $mdToast.simple()
            .textContent('Path was posted! Check it out on the listing page!')
        );
    }
}]);