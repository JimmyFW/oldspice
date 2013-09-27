var Site = angular.module('Site', []);

Site.config(function ($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: 'home.html',
      controller: 'RouteController'
    })
    .when('/inspirations', {
      templateUrl: 'inspirations.html',
      controller: 'RouteController'
    })
    .otherwise({
      redirectTo: '/home'
    });
});

function AppController ($scope, $rootScope, $http) {
  $scope.model = {
    title: "Design Inspirations",
    authors: "Kai Austin, Zachary Homans, James Wu"
  }
  $http.get('./data/inspirations.json').success(function (data) {
    $rootScope.inspirations = data;
  });
}

function RouteController ($scope, $rootScope, $routeParams) {
  //var slug = $routeParams.slug;
  $scope.inspirations = $rootScope.inspirations;
}
