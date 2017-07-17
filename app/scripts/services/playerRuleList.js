'use strict';

/**
 * @ngdoc service
 * @name ticTacToeApp.playerRuleList
 * @description
 * # playerRuleList
 * Factory in the ticTacToeApp.
 */
angular.module('ticTacToeApp')
  .factory('playerRuleList', function () {
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
