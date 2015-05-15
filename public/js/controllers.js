/* global angular:true */

angular.module('123catelier').controller('IndexController', ['$scope', '$http', function($scope, $http) {
	$http({method: 'GET', url: '/articles'}).success(function (data) {
		$scope.articles = data;
		$("#return").removeClass("show").addClass("hide");

	});
}]);


angular.module('123catelier').controller('ShowController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
	$http({method:'GET', url: '/articles/'+ $routeParams.id}).success(function (data) {
		$scope.article = data;
		$("#return").removeClass("hide").addClass("show");
	});
}]);
