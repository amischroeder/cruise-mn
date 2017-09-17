myApp.service('PathService', ['$http', function ($http) {
    console.log('PathService loaded');
    var self = this;
    self.paths = {list:[]};
    self.currentPath = {details: {}};

    self.getPaths = function () {
        $http({
            method: 'GET',
            url: '/skatepaths'
        }).then(function (response){
            console.log(response);
            self.paths.list = response.data;
        })
    };

    //     self.getSinglePath = function (id) {
    //     $http({
    //         method: 'GET',
    //         url: '/skatepaths',
    //         params: {id: id}
    //     }).then(function (response){
    //         console.log(response);
    //         self.path = response.data;
    //         $http({
    //             method: 'GET',
    //             url: '/skatepaths/photos' + self.path.id,
    //             params: {id : self.path.id}
    //         }).then(function(response){
    //             self.path.photos = response.data;
    //         })
    //     })
    // };

    self.postNewPath = function(newPath) {
        console.log('newPath:', newPath);
        $http({
            method: 'POST',
            url: '/skatepaths/new',
            data: newPath
        }).then(function (response){
            console.log(response);
            self.getPaths();
        })
    }

    self.getDetails = function(pathId) {
        $http({
            method: 'GET',
            url: '/skatepaths/details/',
            params: {
                id: pathId
            }
        }).then(function(response){
            self.currentPath.details = response.data
        })
    };

    self.updatePathInformation = function(pathId) {
        console.log('pathId:', pathId);
        $http({
            method: 'PUT',
            url: '/skatepaths/details/',
            params: {
                id: pathId
            },
            data: self.path
        }).then(function (response){
            self.getPaths();
            self.path = {};
        })
    }

    self.updateUpRating = function(trail) {
        console.log('ze butto has been clicka');
        $http({
            method: 'PUT',
            url: '/skatepaths/upRating',
            data: trail
        }).then(function(response){
            self.getPaths();
        });
    }

    self.updateDownRating = function(trail) {
        console.log('ze 2nd butto has been clicka');
        $http({
            method: 'PUT',
            url: '/skatepaths/downRating',
            data: trail
        }).then(function(response){
            self.getPaths();
        });
    }
    

}]);