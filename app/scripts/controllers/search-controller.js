angular.module('yrApp').controller('SearchCtrl', function ($scope, $rootScope, searchService) {
    'use strict';

    $scope.placeSelected = function (place) {
        $rootScope.$broadcast('placeAdded', $scope.selectedPlace);
    };

    $scope.places = function(query) {
        return searchService.search(query).then(function(places){
          return places.results;
      });
    };
});