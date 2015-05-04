/* global angular:true */

angular.module('123catelier').controller('IndexController', ['$scope', '$http', function($scope, $http) {
	$http({method: 'GET', url: '/articles'}).success(function (data) {
		$scope.articles = data;
	});
}]);


angular.module('123catelier').controller('ShowController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
	$http({method:'GET', url: '/articles/'+ $routeParams.id}).success(function (data) {
		$scope.article = data;
	});
}]);
