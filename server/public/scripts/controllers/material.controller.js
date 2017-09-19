myApp.controller('MaterialController', function($mdDialog, $mdToast) {
    console.log('MaterialController Loaded');
    
    var vm = this;


    vm.showToast = function (ev) {
        $mdToast.show(
            $mdToast.simple()
            .textContent('Path was posted! Check it out on the listing page!')
        );
    }
});