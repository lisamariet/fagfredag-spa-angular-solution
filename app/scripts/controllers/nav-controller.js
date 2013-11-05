angular.module('yrApp').controller('NavCtrl', function ($scope, $location) {
    'use strict';
    
    $scope.isActive = function(route) {
        return route === $location.path();
    }
});