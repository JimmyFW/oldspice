var Site = angular.module('Site', ['ui.bootstrap']);

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
    title: "Project Brief (current version)",
    authors: "Kai Austin, Zachary Homans, James Wu"
  }
}

function BriefAlphaController ($scope, $routeParams) {
  $scope.model = {
    title: "Project Brief (version 1)",
    authors: "Kai Austin, Zachary Homans, James Wu"
  }
}

function NeedsController ($scope, $routeParams) {
  $scope.model = {
    title: "Needs Analysis",
    authors: "Kai Austin, Zachary Homans, James Wu",
    imgs: {
      twobytwo: "imgs/needs/twobytwo.png",
      experiencemapsmall: "imgs/needs/experiencemapsmall.jpg",
      experiencemap: "imgs/needs/experiencemap.jpg"
    }
  }
}

function NeedsController ($scope, $routeParams) {
  $scope.model = {
    title: "Needs Analysis",
    authors: "Kai Austin, Zachary Homans, James Wu",
    imgs: {
      twobytwo: "imgs/needs/twobytwo.png",
      experiencemapsmall: "imgs/needs/experiencemap.jpg",
      experiencemap: ""
    }
  }
};

var ModalDemoCtrl = function ($scope, $modal, $log) {
  $scope.open = function () {

      var modalInstance = $modal.open({
        templateUrl: 'myModalContent.html',
        controller: ModalInstanceCtrl,
        resolve: {
          items: function () {
            return $scope.items;
          }
        }
      });

      modalInstance.result.then(function (selectedItem) {
        $scope.selected = selectedItem;
      }, function () {
        $log.info('Modal dismissed at: ' + new Date());
      });
    };
}


var ModalInstanceCtrl = function ($scope, $modalInstance, items) {

    $scope.items = items;
    $scope.selected = {
      item: $scope.items[0]
    };

    $scope.ok = function () {
      $modalInstance.close($scope.selected.item);
    };

    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };
};
