'use strict';

/**
 * @ngdoc directive
 * @name ticTacToeApp.directive:field
 * @description
 * # field
 */
angular.module('ticTacToeApp')
  .directive('field', function () {
    return {
      templateUrl: 'views/directive_templates/field.html',
      restrict: 'E',
      scope: true,
      controller: ["$scope",function($scope){         
        $scope.fieldTurn = $scope.$parent.turn; 
        
        this.init = function(){
          var field = [], 
            rules = $scope.$parent.field_rules;
          for(var cell_row_idx = 0;cell_row_idx < rules.height;cell_row_idx++){
            field[cell_row_idx] = [];
            for(var cell_idx = 0;cell_idx < rules.width;cell_idx++){
              field[cell_row_idx][cell_idx] = _initCellData(cell_row_idx, cell_idx);
            }
          }
          $scope.field = field;
        }
        
        this.getField = function(){
          return $scope.field;
        }
        
        function _initCellData(row, col){
          return {
            row: row,
            col: col,
            shape: 'empty'
          };
        }
        
        $scope.$emit('fieldready');
      }]
    };
  });
