'use strict';

angular
  .module('ngFauverismApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ngMaterial',
    'ui.router'
  ])
  .config(function ($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('index', {
        url: '/',
        views: {
          'header': {
            templateUrl: 'views/header.html',
            controller: 'headerController'
          },
          'main': {
            templateUrl: 'views/main.html',
            controller: 'mainController'
          },
          'footer': {
            templateUrl: 'views/footer.html',
            controller: 'footerController'
          }
        }
      })
      .state('info', {
        url: '/info',
        views: {
          'header': {
            templateUrl: '../views/header.html',
            controller: 'headerController'
          },
          'main': {
            templateUrl: '../views/info.html',
            controller: 'infoController'
          },
          'footer': {
            templateUrl: '../views/footer.html',
            controller: 'footerController'
          }
        }
      })
      .state('portfolio', {
        url: '/portfolio',
        views: {
          'header': {
            templateUrl: '../views/header.html',
            controller: 'headerController'
          },
          'main': {
            templateUrl: '../views/portfolio.html',
            controller: 'portfolioController'
          },
          'footer': {
            templateUrl: '../views/footer.html',
            controller: 'footerController'
          }
        }
      })
      .state('notes', {
        url: '/notes',
        views: {
          'header': {
            templateUrl: '../views/header.html',
            controller: 'headerController'
          },
          'main': {
            templateUrl: '../views/notes.html',
            controller: 'notesController'
          },
          'footer': {
            templateUrl: '../views/footer.html',
            controller: 'footerController'
          }
        }
      });
  });
