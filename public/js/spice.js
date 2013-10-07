//var Site = angular.module('Site', ['ui.scrollfix']);
var Site = angular.module('Site', []);

/*
Site.run(function($rootScope, $location, $anchorScroll, $routeParams) {
  $rootScope.$on('$routeChangeSuccess', function(newRoute, oldRoute) {
    $location.hash($routeParams.scrollTo);
    $anchorScroll();  
  });
});
*/

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
    .when('/lexicon/:termid', {
      templateUrl: 'templates/lexicon.html',
      controller: 'LexiconDetailController'
    })
    .when('/personas', {
      templateUrl: 'templates/personas.html',
      controller: 'PersonaController'
    })
    .when('/personas/:termid', {
      templateUrl: 'templates/personas.html',
      controller: 'PersonaDetailController'
    })
    .when('/narratives', {
      templateUrl: 'templates/narratives.html',
      controller: 'NarrativesController'
    })
    .when('/scroll', {
      templateUrl: 'templates/scroll.html'
    })
    .otherwise({
      redirectTo: '/home'
    });
});

function InspirationController ($scope, $http, $anchorScroll, $location) {
  $http.get('public/data/inspirations.json').success(function (data) {
    $scope.inspirations = data;
  });

  $scope.model = {
    title: "Design Inspirations",
    authors: "Kai Austin, Zachary Homans, James Wu"
  }

  $scope.scrollTo = function(id) {
    var location = '#' + id;
    $.scrollTo($(location), 500);
    //$location.hash(id);
    //$anchorScroll();
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
    var location = '#' + id;
    $.scrollTo($(location), 500);
    //$location.hash(id);
    //$anchorScroll();
  }
}

function PersonaController ($scope, $routeParams, $http, $location) {
  $http.get('public/data/personas.json').success(function (data) {
    $scope.personas = data;
  });

  $scope.model = {
    title: "Personas",
    authors: "Kai Austin, Zachary Homans, James Wu",
    imgs: {
      blake: "public/imgs/personas/blake.png",
      chang: "public/imgs/personas/chang.jpg",
      oberlin: "public/imgs/personas/oberlin.jpg",
      yang: "public/imgs/personas/yang.jpg",
      ylc: "public/imgs/personas/ylc.jpg"
    }
  }
}

function PersonaDetailController ($scope, $routeParams, $http, $anchorScroll, $location) {
  $http.get('public/data/personas.json').success(function (data) {
    $scope.personas = data;
  });

  $scope.model = {
    title: "Personas",
    authors: "Kai Austin, Zachary Homans, James Wu",
    imgs: {
      blake: "public/imgs/personas/blake.png",
      chang: "public/imgs/personas/chang.jpg",
      oberlin: "public/imgs/personas/oberlin.jpg",
      yang: "public/imgs/personas/yang.jpg",
      ylc: "public/imgs/personas/ylc.jpg"
    }
  }

  $scope.term = $routeParams.termid;

  $scope.jumpTo = function (id) {
    $location.hash(id);
    $anchorScroll();
  }

  $scope.$on('$viewContentLoaded', function() {
    $location.hash($scope.term);
    $anchorScroll();
    //window.scrollTo(0,90);
  });

}

function LexiconController ($scope, $routeParams, $http) {
  $http.get('public/data/lexicon.json').success(function (data) {
    console.log(data['Stakeholders']);
    $scope.dictionary = data;
  });

  $scope.model = {
    title: "Lexicon",
    authors: "Kai Austin, Zachary Homans, James Wu"
  }
}


function LexiconDetailController ($scope, $routeParams, $http, $anchorScroll, $location) {
  $http.get('public/data/lexicon.json').success(function (data) {
    console.log(data['Stakeholders']);
    $scope.dictionary = data;
  });

  $scope.model = {
    title: "Lexicon",
    authors: "Kai Austin, Zachary Homans, James Wu"
  }

  $scope.jumpTo = function (id) {
    $location.hash(id);
    $anchorScroll();    
  }

  jumpTo($routeParams.termid);
}

function NarrativesController ($scope, $routeParams) {
  $scope.model = {
    title: "Narratives",
    authors: "Kai Austin, Zachary Homans, James Wu"
  }
}