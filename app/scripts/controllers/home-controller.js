angular.module('yrApp').controller('HomeCtrl', function ($scope, sampleService) {
  $scope.message = sampleService.sayHello();
});
