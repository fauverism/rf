'use strict';

angular
  .module('ngFauverismApp', [
    'ngAnimate',
    'ngCookies',
    'ngMaterial',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'formly'
  ])
  .config(function ($urlRouterProvider, $stateProvider, $routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      });
    //$urlRouterProvider.otherwise('/');
    //$stateProvider
    //  .state('index', {
    //    url: '/',
    //    views: {
    //      'header': {
    //        templateUrl: 'views/header.html',
    //        controller: 'headerController'
    //      },
    //      'main': {
    //        templateUrl: 'views/main.html',
    //        controller: 'mainController'
    //      },
    //      'footer': {
    //        templateUrl: 'views/footer.html',
    //        controller: 'footerController'
    //      }
    //    }
    //  })
    //  .state('info', {
    //    url: '/info',
    //    views: {
    //      'header': {
    //        templateUrl: '../views/header.html',
    //        controller: 'headerController'
    //      },
    //      'main': {
    //        templateUrl: '../views/info.html',
    //        controller: 'infoController'
    //      },
    //      'footer': {
    //        templateUrl: '../views/footer.html',
    //        controller: 'footerController'
    //      }
    //    }
    //  })
    //  .state('portfolio', {
    //    url: '/portfolio',
    //    views: {
    //      'header': {
    //        templateUrl: '../views/header.html',
    //        controller: 'headerController'
    //      },
    //      'main': {
    //        templateUrl: '../views/portfolio.html',
    //        controller: 'portfolioController'
    //      },
    //      'footer': {
    //        templateUrl: '../views/footer.html',
    //        controller: 'footerController'
    //      }
    //    }
    //  })
    //  .state('notes', {
    //    url: '/notes',
    //    views: {
    //      'header': {
    //        templateUrl: '../views/header.html',
    //        controller: 'headerController'
    //      },
    //      'main': {
    //        templateUrl: '../views/notes.html',
    //        controller: 'notesController'
    //      },
    //      'footer': {
    //        templateUrl: '../views/footer.html',
    //        controller: 'footerController'
    //      }
    //    }
    //  });
  });
