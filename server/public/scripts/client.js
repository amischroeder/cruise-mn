var myApp = angular.module('myApp', ['ngRoute', 'ngMaterial']);


/// Routes ///
myApp.config(function($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('');
  console.log('myApp -- config')
  $routeProvider
    .when('/home', {
      templateUrl: '/views/templates/home.html',
      controller: 'LoginController as lc'
    })
    .when('/skatepaths', {
      templateUrl: 'views/templates/skatepaths.html',
      controller: 'PathController as pc'
    })
    .when('/new', {
      templateUrl: 'views/templates/new.html',
      controller: 'PathController as pc'
    })
    .when('/specific/:id', {
      templateUrl: 'views/templates/specific.html',
      controller: 'SpecificController as sc'
    })
    .when('/register', {
      templateUrl: '/views/templates/register.html',
      controller: 'LoginController as lc'
    })
    .when('/user', {
      templateUrl: '/views/templates/user.html',
      controller: 'UserController as uc',
      resolve: {
        getuser : function(UserService){
          return UserService.getuser();
        }
      }
    })
    .when('/info', {
      templateUrl: '/views/templates/info.html',
      controller: 'InfoController',
      resolve: {
        getuser : function(UserService){
          return UserService.getuser();
        }
      }
    })
    .otherwise({
      redirectTo: 'home'
    });
});
