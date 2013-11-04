angular.module('yrApp', ['ngRoute']).config(function ($routeProvider){
    $routeProvider.
        when('/', {
            templateUrl: 'views/myplaces.html',
            controller: 'MyPlacesCtrl'
        }).
        otherwise({
            redirectTo: '/'
        });
});