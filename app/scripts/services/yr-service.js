angular.module('yrApp').factory('yrService', function ($http, $q){
    'use strict';
    var self = this;
    self.apiUrl = 'http://yr-proxy.tosh.no/';
    self.getForecast = function (time){
        return {
            from: time.from,
            to: time.to,
            temperature: time.temperature[0].value,
            precipitationMin: time.precipitation[0].minvalue,
            precipitationMax: time.precipitation[0].maxvalue,
            description: time.symbol[0].name,
            windType: time.windSpeed[0].name,
            windSpeed: time.windSpeed[0].mps,
            windDirection: time.windDirection[0].name,
            symbolUrl: 'http://symbol.yr.no/grafikk/sym/b100/' + time.symbol[0].var + '.png'
        };
    };

	return {
		getForecast: function (options) {
            var deferred = $q.defer(),
                periods = [],
                url;

            url = self.apiUrl + 'sted/' +
                      (options.country || 'Norge') + '/' +
                      options.county + '/' +
                      options.municipality + '/' +
                      options.place + '/varsel.json'

            $http.get(url).success(function (weather) {
                for(var i = 0; i < weather.weatherdata.forecast[0].tabular[0].time.length; i++) {
                    periods.push(self.getForecast(weather.weatherdata.forecast[0].tabular[0].time[i]));
                }

                deferred.resolve({
                    place: weather.weatherdata.location[0].name[0],
                    country: weather.weatherdata.location[0].country[0],
                    periods: periods
                });
            }).error(function (error) {
                    deferred.reject(error);
            });
            return deferred.promise;
		}
	};
});