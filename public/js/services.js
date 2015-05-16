/* global angular: true, $http: true */

angular.module("123catelier").factory("Article", ['$http', function ArticleFactory($http) {
  return {
    all: function() {
        return $http({"method": "GET", "url": "/articles"});
    },
    create: function(article) {
        return $http({"method": "POST", "url": "/articles", "data": article});
    }
  };
}]);
