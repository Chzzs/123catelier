/* global angular:true */

angular.module('123catelier', ['ngRoute']).config( function($routeProvider) {
  $routeProvider.when('/articles', {
    templateUrl: 'templates/index.html',
    controller: 'IndexController'
  })
  .otherwise({ redirectTo: '/articles'});
});
