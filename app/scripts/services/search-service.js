angular.module('yrApp').factory('searchService', function ($http, $q){
    'use strict';
    var self = this;
    self.apiUrl = 'http://yr-proxy.tosh.no/';

	return {
		search: function (query) {
            var deferred = $q.defer(),
                url = self.apiUrl + 'search?q=' + query;
            $http.get(url).success(function (place) {
                deferred.resolve(place);
            }).error(function (error) {
                deferred.reject(error);
            });
            return deferred.promise;
		}
	};
});