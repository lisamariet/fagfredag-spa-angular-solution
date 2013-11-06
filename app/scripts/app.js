angular.module('yrApp', ['ngRoute', 'ui.bootstrap']).config(function ($routeProvider){
    $routeProvider.
        when('/', {
            templateUrl: 'views/myplaces.html',
            controller: 'MyPlacesCtrl'
        }).
        otherwise({
            redirectTo: '/'
        });
});