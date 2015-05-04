/* global angular: true */

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
