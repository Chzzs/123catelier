/* global angular: true */

angular.module('123catelier').controller('IndexController', ['$scope', 'Article', function($scope, Article) {
	Article.all().success(function (data) {
		$scope.articles = data;
		$("#return").removeClass("show").addClass("hide");
		$("#search").removeClass("hide").addClass("show");
	});
}]);


angular.module('123catelier').controller('ShowController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
	$http({method:'GET', url: '/articles/'+ $routeParams.id}).success(function (data) {
		$scope.article = data;
		$("#return").removeClass("hide").addClass("show");
		$("#search").removeClass("show").addClass("hide");

	});
}]);
