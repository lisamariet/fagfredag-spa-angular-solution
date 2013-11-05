angular.module('yrApp').controller('MyPlacesCtrl', function ($scope, $rootScope) {
    'use strict';
    $scope.places = [];
    
    $rootScope.$on('placeAdded', function (event, place) {
        $scope.places.push(place);
    });

    $scope.remove = function (place) {
        var index = $scope.places.indexOf(place);
        if (index > -1) {
            $scope.places.splice(index, 1);
        };
    };
});