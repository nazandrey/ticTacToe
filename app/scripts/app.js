'use strict';

/**
 * @ngdoc overview
 * @name ticTacToeApp
 * @description
 * # ticTacToeApp
 *
 * Main module of the application.
 */
angular
  .module('ticTacToeApp', [
    'ngRoute',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/game', {
        templateUrl: 'views/game.html',
        controller: 'GameCtrl'
      })
      .when('/game_options', {
        templateUrl: 'views/game_options.html',
        controller: 'GameOptionsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
