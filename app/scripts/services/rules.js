'use strict';

/**
 * @ngdoc service
 * @name ticTacToeApp.rules
 * @description
 * # rules
 * Service in the ticTacToeApp.
 */
angular.module('ticTacToeApp')
  .factory('rules', function () {
    var DEFAULT_RULES = {
      field:{},
      player:{},
      turn_rules:{}
    }
  
    function getFieldRules(){}
    function getPlayerRules(){}
    function getTurnRules(){}
  
    return{
      getFieldRules: getFieldRules,
      getPlayerRules: getPlayerRules,
      getTurnRules: getTurnRules
    }
  });
