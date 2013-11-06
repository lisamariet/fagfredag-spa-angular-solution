angular.module('yrApp').controller('MyPlacesCtrl', function ($scope, $rootScope) {
    'use strict';
    $scope.places = [{
        county: 'Oslo', 
        municipality:'Oslo',
        name: 'Oslo'
    },
    {
        county: 'Hordaland', 
        municipality:'Bergen',
        name: 'Bergen'
    }];
    
    $rootScope.$on('placeAdded', function (event, place) {
        $scope.places.unshift(place);
    });

    $scope.remove = function (place) {
        var index = $scope.places.indexOf(place);
        if (index > -1) {
            $scope.places.splice(index, 1);
        };
    };
});