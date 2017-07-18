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
    var defaultCheckVictoryStrategy = function () {

    },
      currCheckVictoryStrategy = defaultCheckVictoryStrategy;

    function getCurr () {
      return currCheckVictoryStrategy;
    }

    return {
      getCurr: getCurr
    };
  });
