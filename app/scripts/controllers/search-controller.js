angular.module('yrApp').controller('SearchCtrl', function ($scope, $rootScope, searchService) {
    'use strict';

    $scope.placeSelected = function (place) {
        $rootScope.$broadcast('placeAdded', $scope.selectedPlace);
        $scope.selectedPlace = null;
    };

    $scope.places = function(query) {
        return searchService.search(query).then(function(places){
          return places.results.slice(0, 20);
      });
    };
});