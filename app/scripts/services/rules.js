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
      field:{
        width: 15,
        height: 15        
      },
      player:{
        packageArr: [['circle'],['cross']]
      },
      turn:{        
      }
    },
      current_rules = DEFAULT_RULES;
      
    
  
    function getFieldRules(){
      return current_rules.field;
    }
    
    function getPlayerRules(){
      return current_rules.player;
    }
    
    function getTurnRules(){
      return current_rules.turn;
    }
  
    return{
      getFieldRules: getFieldRules,
      getPlayerRules: getPlayerRules,
      getTurnRules: getTurnRules
    };
  });
