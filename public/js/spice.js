//var Site = angular.module('Site', ['ui.scrollfix']);
var Site = angular.module('Site', ['oldspice.controllers']);

Site.factory('deck', function () {
    var slides = [],
        p = pointer(slides);

    var ensureId = function (e, nextIndex) {
        if (!e.attr('id')) {
            e.attr('id', 'slide' + nextIndex);
        }
    };

    var toggleVisibility = function (slide) {
        if (slide) {
            var e = $('#' + slide.id),
                display = e.css('display') === 'block' ? 'none' : 'block';
            e.css({display: display});
        }
    };

    var move = function (action) {
        toggleVisibility(p.getCurrent());
        action();
        toggleVisibility(p.getCurrent());
    };

    return {
        add: function (element) {
            ensureId(element, slides.length % 12);
            slides.push({
                id: element.attr('id')
            });
        },
        next: function () {
            move(p.moveNext);
        },
        previous: function () {
            move(p.movePrevious);
        },
        count: function() {
            return slides.length;
        }
    };
})
.directive('slide', function (deck) {
    return {
        restrict: 'E',
        link: function ($scope, $element) {
            $element.hide();
            deck.add($element);
            if (deck.count() === 1) {
                deck.next();
            }
        }
    };
})
.run(function ($document, deck) {
    $document.keydown(function (e) {
        var key = e.keyCode;
        if (key === 32 || key === 39) {
            deck.next();
        } else if (key === 37) {
            deck.previous();
        }
    });
});

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
    .when('/storyboards', {
      templateUrl: 'templates/storyboards.html',
      controller: 'StoryboardsController'
    })
    .when('/paperproto', {
      templateUrl: 'templates/paperproto.html',
      controller: 'PaperProtoController'
    })
    .when('/wireframes', {
      templateUrl: 'templates/wireframes.html',
      controller: 'WireframesController'
    })
    .when('/freeze', {
      templateUrl: 'templates/freeze.html',
      controller: 'FreezeController'
    })
    .when('/refinement', {
      templateUrl: 'templates/refinement.html',
      controller: 'RefinementController'
    })
    .when('/usabilitystudy', {
      templateUrl: 'templates/usabilitystudy.html',
      controller: 'UsabilityStudyController'
    })
    .when('/revision', {
      templateUrl: 'templates/revision.html',
      controller: 'RevisionController'
    })
    .when('/final', {
      templateUrl: 'templates/final.html',
      controller: 'FinalController'
    })
    .otherwise({
      redirectTo: '/home'
    });
});