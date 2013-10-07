var controllers = angular.module('oldspice.controllers', []);

controllers.controller('InspirationController', ['$scope', '$http', function ($scope, $http){
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
  }
}]);

controllers.controller('HomeController', ['$scope', function ($scope) {
  $scope.model = {
    title: "Human Factors in Interface Design",
    authors: "Kai Austin, Zachary Homans, James Wu"
  }
}]);

controllers.controller('BriefAlphaController', ['$scope', function ($scope) {
  $scope.model = {
      title: "Original Project Brief",
      authors: "Kai Austin, Zachary Homans, James Wu"
  }
}]);

controllers.controller('NeedsController', ['$scope', '$routeParams', function ($scope, $routeParams) {
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
}]);

controllers.controller('PersonaController', ['$scope', '$http', function ($scope, $http) {
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
}]);

controllers.controller('PersonaDetailController', ['$scope', '$routeParams', '$http', function ($scope, $routeParams, $http) {
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
}]);

controllers.controller('LexiconController', ['$scope', '$http', function ($scope, $http) {
  $http.get('public/data/lexicon.json').success(function (data) {
    console.log(data['Stakeholders']);
    $scope.dictionary = data;
  });

  $scope.model = {
    title: "Lexicon",
    authors: "Kai Austin, Zachary Homans, James Wu"
  }
}]);


controllers.controller('LexiconDetailController', ['$scope', '$routeParams', '$http', function ($scope, $routeParams, $http) {
  $http.get('public/data/lexicon.json').success(function (data) {
    console.log(data['Stakeholders']);
    $scope.dictionary = data;
  });

  $scope.model = {
    title: "Lexicon",
    authors: "Kai Austin, Zachary Homans, James Wu"
  }
}]);

controllers.controller('NarrativesController', ['$scope', function ($scope) {
  $scope.model = {
    title: "Narratives",
    authors: "Kai Austin, Zachary Homans, James Wu"
  }
}]);

controllers.controller('StoryboardsController', ['$scope', function ($scope) {
  $scope.model = {
    title: "Storyboards",
    authors: "Kai Austin, Zachary Homans, James Wu"
  }
}]);