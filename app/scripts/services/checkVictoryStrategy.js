'use strict';

/**
 * @ngdoc service
 * @name ticTacToeApp.checkVictoryStrategy
 * @description
 * # checkVictoryStrategy
 * Factory in the ticTacToeApp.
 */
angular.module('ticTacToeApp')
  .factory('checkVictoryStrategy', function (simpleCheckVictory) {
    var currCheckVictoryStrategy = simpleCheckVictory;

    function getCurr () {
      return currCheckVictoryStrategy;
    }

    return {
      getCurr: getCurr
    };
  });
