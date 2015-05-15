/* global angular: true, console: true*/

angular.module('123catelier').directive('catCard', function() {
	return {
		restrict: 'E',
		templateUrl: 'templates/directives/cat-card.html',
		scope: {
			name: '=',
			id: '=',
			url: '='
		}
	};
});

angular.module('123catelier').directive('showReturn', function showReturnDirective() {
	return {
			link: function() {
					console.log("toggle");
			}
	};
});
