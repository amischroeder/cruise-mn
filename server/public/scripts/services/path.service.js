myApp.service('PathService', ['$http', function ($http) {
    console.log('PathService loaded');
    var self = this;
    self.paths = {
        list:[],
        path: {}
    };
    self.currentPath = {details: {}};

    // get all paths
    self.getPaths = function () {
        $http({
            method: 'GET',
            url: '/skatepaths'
        }).then(function (response){
            console.log(response);
            self.paths.list = response.data;
            self.paths.path = self.paths.list[0];
        })
    };

    // post new path
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

    // get details for specific path
    self.getDetails = function(pathID) {
        $http({
            method: 'GET',
            url: '/skatepaths/details/',
            params: {
                id: pathID
            }
        }).then(function(response){
            self.currentPath.details = response.data
        })
    };

    // click count for thumbs up rating
    self.updateUpRating = function(trail) {
        console.log('ze butto has been clicka');
        $http({
            method: 'PUT',
            url: '/skatepaths/upRating',
            data: trail
        }).then(function(response){
            trail.up_rating += 1;
        });
    }

    // click count for thumbs down rating
    self.updateDownRating = function(trail) {
        console.log('ze 2nd butto has been clicka');
        $http({
            method: 'PUT',
            url: '/skatepaths/downRating',
            data: trail
        }).then(function(response){
            trail.down_rating += 1;
        });
    }
    
    // delete path
    self.deletePath = function (pathID) {
        console.log('delete clicked', pathID);
        $http({
            method: 'DELETE',
            url: '/specific/' + pathID
        }).then(function(response){
            self.getPaths();
        })
    }

}]);