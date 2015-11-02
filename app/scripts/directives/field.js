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
      link: function (scope, element, attrs, ctrl) { 
        ctrl.init();
        
        scope.fieldTurn = function(row,col){
          var currPlayerShapeArr = scope.$parent.getCurrPlayerShapeArr(),
            newShape = null;
          if(currPlayerShapeArr.length === 1){
            newShape = currPlayerShapeArr[0];
          } else {
            //Выбор доступных игроку фигур
          }
          scope.field[row][col].shape = newShape;
          //Смена игрока
          if(!scope.$parent.isVictory(row, col, scope.field[row][col].shape, currPlayerShapeArr.length, scope.field)){
            scope.$parent.changeActivePlayer();
          } else {
            scope.$parent.showVictory();
            scope.fieldTurn = function(){};
            console.log('victory!');
          }
        }
        
        
        
         
      },
      controller: ["$scope",function($scope){   
        function _initCellData(row, col){
          return {
            row: row,
            col: col,
            shape: 'empty'
          };
        }
      
        this.init = function(){
          var field = [], 
            rules = $scope.field_rules;
          for(var cell_row_idx = 0;cell_row_idx < rules.height;cell_row_idx++){
            field[cell_row_idx] = [];
            for(var cell_idx = 0;cell_idx < rules.width;cell_idx++){
              field[cell_row_idx][cell_idx] = _initCellData(cell_row_idx, cell_idx);
            }
          }
          $scope.field = field;
        }
      }]
    };
  });
