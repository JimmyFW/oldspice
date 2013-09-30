var Site = angular.module('Site', []);

Site.config(function ($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: 'templates/home.html',
      controller: 'HomeController'
    })
    .when('/inspirations', {
      templateUrl: 'templates/inspirations.html',
      controller: 'InspirationController'
    })
    .when('/brief', {
      templateUrl: 'templates/brief.html',
      controller: 'BriefController'
    })
    .otherwise({
      redirectTo: '/home'
    });
});

function InspirationController ($scope, $http) {
  $http.get('public/data/inspirations.json').success(function (data) {
    $scope.inspirations = data;
  });
  $scope.model = {
    title: "Design Inspirations",
    authors: "Kai Austin, Zachary Homans, James Wu"
  }
}

function HomeController ($scope, $routeParams) {
  $scope.model = {
    title: "Human Factors in Interface Design",
    authors: "Kai Austin, Zachary Homans, James Wu"
  }
}

function BriefController ($scope, $routeParams) {
  $scope.model = {
    title: "Project Brief",
    authors: "Kai Austin, Zachary Homans, James Wu"
  }
}