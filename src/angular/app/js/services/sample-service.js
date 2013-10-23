angular.module('yrApp').factory('sampleService', function (){
	return {
		sayHello: function () {
			return 'Hello World!';
		}
	};
});