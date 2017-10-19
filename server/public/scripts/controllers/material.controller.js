myApp.controller('MaterialController', ['PathService', 'UserService', '$mdDialog', '$mdToast','$routeParams', '$location', '$mdSidenav', function(PathService, UserService, $mdDialog, $mdToast, $routeParams, $location, $mdSidenav) {
    console.log('MaterialController Loaded');
    
    var vm = this;
    vm.userService = UserService;
    vm.userObject = UserService.userObject;

    // delete path using routeParams
    vm.deletePath = function () {
        console.log('pathID:', $routeParams.id);
        PathService.deletePath($routeParams.id);
        $location.path("/skatepaths");
    };

    // shows confirmation to delete
    vm.status = '  ';
    vm.showConfirm = function(ev) {
        var confirm = $mdDialog.confirm()
        .title('ARE YOU SURE YOU WANT TO DELETE THIS RADICAL PATH?')
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

    // show toast confirmation that path was posted
    vm.showToast = function (ev) {
        $mdToast.show(
            $mdToast.simple()
            .textContent('Path was posted! Check it out on the listing page!')
        );
    }

    // opens right sidenav when click menu icon 
    vm.openRightMenu = function() {
       $mdSidenav('right').toggle();
    };
 	

}]);