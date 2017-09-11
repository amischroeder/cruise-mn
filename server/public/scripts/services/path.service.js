myApp.service('PathService', ['$http', function ($http) {
    console.log('PathService loaded');
    var self = this;
    self.paths = {list:[]};

    self.getPaths = function () {
        $http({
            method: 'GET',
            url: '/all'
        }).then(function (response){
            console.log(response);
        })
    }
}]);