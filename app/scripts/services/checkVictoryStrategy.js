'use strict';

/**
 * @ngdoc service
 * @name ticTacToeApp.checkVictoryStrategy
 * @description
 * # checkVictoryStrategy
 * Factory in the ticTacToeApp.
 */
angular.module('ticTacToeApp')
  .factory('checkVictoryStrategy', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
