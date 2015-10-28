'use strict';

/**
 * @ngdoc service
 * @name ticTacToeApp.playerGenerator
 * @description
 * # playerGenerator
 * Factory in the ticTacToeApp.
 */
angular.module('ticTacToeApp')
  .factory('playerGenerator', function () {
    function generate(rules) {
     return rules.packageArr.map(function(shapeArr, playerIdx){
        return {
          id: playerIdx, 
          shapeArr: shapeArr
        }; 
      });
    }

    return {
      generate: generate
    };
  });
