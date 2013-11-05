angular.module('yrApp').directive('forecast', function () {
    'use strict';
    return {
    	restrict: 'AE',
    	scope: {
    		county: '@',
        	municipality: '@',
        	place: '@',
            onRemove: '&'
    	},
    	templateUrl: 'views/directives/forecast.html',
    	controller: 'ForecastDirectiveCtrl'
    };
});


angular.module('yrApp').controller('ForecastDirectiveCtrl', function ($scope, yrService) {
    'use strict';
    $scope.showTomorrow = true;
    yrService.getForecast({
        county: $scope.county,
        municipality: $scope.municipality,
        place: $scope.place
    }).then(function (weather) {
        $scope.weather = weather;
        $scope.currentPeriod = weather.periods[0];
        $scope.periods = weather.periods.slice(1, 5);
    });
});