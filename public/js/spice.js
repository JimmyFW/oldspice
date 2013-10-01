var Site = angular.module('Site', ['ui.scrollfix']);
//var Site = angular.module('Site', ['ui.bootstrap']);

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
    .when('/needs', {
      templateUrl: 'templates/brief.html',
      controller: 'NeedsController'
    })
    .when('/briefalpha', {
      templateUrl: 'templates/briefalpha.html',
      controller: 'BriefAlphaController'
    })
    .when('/lexicon', {
      templateUrl: 'templates/lexicon.html',
      controller: 'LexiconController'
    })
    .when('/scroll', {
      templateUrl: 'templates/scroll.html'
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

function BriefAlphaController ($scope, $routeParams) {
  $scope.model = {
    title: "Original Project Brief",
    authors: "Kai Austin, Zachary Homans, James Wu"
  }
}

function NeedsController ($scope, $routeParams, $anchorScroll, $location) {
  $scope.model = {
    title: "Needs Analysis",
    authors: "Kai Austin, Zachary Homans, James Wu",
    imgs: {
      twobytwo: "public/imgs/needs/twobytwo.png",
      experiencemapsmall: "public/imgs/needs/experiencemapsmall.jpg",
      experiencemap: "public/imgs/needs/experiencemap.jpg"
    }
  }

  $scope.scrollTo = function(id) {
    $location.hash(id);
    $anchorScroll();
  }
}

function LexiconController ($scope, $routeParams) {
  $scope.model = {
    title: "Lexicon",
    authors: "Kai Austin, Zachary Homans, James Wu"
  }
}