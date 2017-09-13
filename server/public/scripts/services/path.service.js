myApp.service('PathService', ['$http', function ($http) {
    console.log('PathService loaded');
    var self = this;
    self.paths = {list:[]};

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
}]);