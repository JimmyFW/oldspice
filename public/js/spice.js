var Site = angular.module('Site', []);

Site.config(function ($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: 'home.html',
      controller: 'HomeController'
    })
    .when('/inspirations', {
      templateUrl: 'inspirations.html',
      controller: 'InspirationController'
    })
    .otherwise({
      redirectTo: '/home'
    });
});

function InspirationController ($scope, $http) {
  $http.get('public/data/inspirations.json').success(function (data) {
    $scope.inspirations = data;
  });
}

function HomeController ($scope, $routeParams) {
  $scope.model = {
    title: "Design Inspirations",
    authors: "Kai Austin, Zachary Homans, James Wu"
  }
}
