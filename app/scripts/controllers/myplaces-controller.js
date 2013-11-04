angular.module('yrApp').controller('MyPlacesCtrl', function ($scope, yrService) {
    'use strict';

    yrService.getWeather({
        county: 'Hordaland',
        municipality: 'Bergen',
        place: 'Bergen'
    }).then(function (weather) {
        $scope.weather = weather;
        $scope.currentPeriod = weather.periods[0];
        $scope.periods = weather.periods.slice(1, 5);
    });
});