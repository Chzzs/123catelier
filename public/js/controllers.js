/* global angular:true, console: true */

angular.module('123catelier').controller('IndexController', ['$scope', '$http', function($scope, $http) {
	$http({method: 'GET', url: '/articles'}).success(function (data) {
		console.log(data);
		$scope.articles = data;
	});
}]);
