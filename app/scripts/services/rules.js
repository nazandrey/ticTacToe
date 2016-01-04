'use strict';

/**
 * @ngdoc service
 * @name ticTacToeApp.rules
 * @description
 * # rules
 * Service in the ticTacToeApp.
 */
angular.module('ticTacToeApp')
  .factory('rules', function (utils) {
    var DEFAULT_RULES = {
      field:{
        width: 15,
        height: 15        
      },
      player:{
        packageArr: [['circle'],['cross']]
      },
      turn:{  
        checkVictoryFn: 'default'
      }
    },
      current_rules = angular.copy(DEFAULT_RULES);
      
    
  
    function getFieldRules(){
      return current_rules.field;
    }
    
    function getPlayerRules(){
      return current_rules.player;
    }
    
    function getTurnRules(){
      return current_rules.turn;
    }
    
    function setFieldRules(newFieldRules){
      $.extend(current_rules.field, newFieldRules);
    }
    
    function setPlayerRules(newPlayerRules){
      $.extend(current_rules.player, newPlayerRules);
    }
    
    function setPlayerPackageArrRules(newPlayerPackageArrRules){
      var packageArr = angular.copy(DEFAULT_RULES.player.packageArr);
      packageArr = packageArr.map(function(val,idx){
        return utils.unique(val,newPlayerPackageArrRules);
      });
      setPlayerRules({"packageArr": packageArr});
    }
    
    function setTurnRules(newTurnRules){
      $.extend(current_rules.turn, newTurnRules);
    }
  
    return {
      getFieldRules: getFieldRules,
      setFieldRules: setFieldRules,
      getPlayerRules: getPlayerRules,
      setPlayerRules: setPlayerRules,
      setPlayerPackageArrRules: setPlayerPackageArrRules,
      getTurnRules: getTurnRules,
      setTurnRules: setTurnRules
    };
  });
