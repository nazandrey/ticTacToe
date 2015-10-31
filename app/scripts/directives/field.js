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
      link: function (scope, element, attrs) {
        scope.field = initField();
        
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
          if(!isVictory(row, col, scope.field[row][col].shape, currPlayerShapeArr.length)){
            scope.$parent.changeActivePlayer();
          } else {
            console.log('victory!');
          }
        }
        
        function initField(){
          var return_field = [], 
            rules = scope.field_rules;
          for(var cell_row_idx = 0;cell_row_idx < rules.height;cell_row_idx++){
            return_field[cell_row_idx] = [];
            for(var cell_idx = 0;cell_idx < rules.width;cell_idx++){
              return_field[cell_row_idx][cell_idx] = initCellData(cell_row_idx, cell_idx);
            }
          }
          return return_field;
        }
        
        function initCellData(row, col){
          return {
            row: row,
            col: col,
            shape: 'empty'
          };
        }
        
        var SHAPE_WIN_COUNT = 5;
        function isVictory(lastRow, lastCol, lastUsedShape, shapeArrLength){
          if(shapeArrLength === 1){
            //Самый простой случай, когда вариантов того, что поставить, только 1
            return checkHorizontal(lastRow, lastUsedShape) || 
              checkVertical(lastCol, lastUsedShape) || 
              checkMainDiagonal(lastRow, lastCol, lastUsedShape) || 
              checkIncidentalDiagonal(lastRow, lastCol, lastUsedShape);
          }
        }
        
        function checkHorizontal(lastRow, lastUsedShape){
          var isVictory = false, 
            shapeCount = 0;
          scope.field[lastRow].some(function(cell){
            if(cell.shape === lastUsedShape){
              shapeCount++;
              if(shapeCount === SHAPE_WIN_COUNT){
                isVictory = true;
                return true;
              } else {
                return false;
              }              
            } else {
              shapeCount = 0;
              return false;
            }
          });
          return isVictory;
        };
        
        function checkVertical(lastCol, lastUsedShape){
          var isVictory = false, 
            shapeCount = 0;
          scope.field.some(function(row){
            if(row[lastCol].shape === lastUsedShape){
              shapeCount++;
              if(shapeCount === SHAPE_WIN_COUNT){
                isVictory = true;
                return true;
              } else {
                return false;
              }              
            } else {
              shapeCount = 0;
              return false;
            }
          });   
          return isVictory;
        };
        
        function checkMainDiagonal(lastRow, lastCol, lastUsedShape){
          var startCol = lastCol,
            startRow = lastRow;
          while(startRow !== 0 && startCol !== 0){
            startCol--;
            startRow--;
          }  
           
          /*
          //Попытка оптимизации, с ней становится непонятней
          if(lastRow > lastCol){
            startRow = lastRow-lastCol;
            startCol = 0;
          } else {
            startRow = 0;
            startCol = lastCol-lastRow;
          }
          */
          var row = startRow,
            col = startCol,
            shapeCount = 0,
            isVictory = false;
          while(row < (scope.field.length - 1) && col < scope.field[0].length){
            if(scope.field[row][col].shape === lastUsedShape){
              shapeCount++;
              if(shapeCount === SHAPE_WIN_COUNT){
                isVictory = true;
                break;
              };
            } else {
              shapeCount = 0;
            }
            row++;
            col++;
          };
          
          return isVictory;
        }; 

        function checkIncidentalDiagonal(lastRow, lastCol, lastUsedShape){
          var startCol = lastCol,
            startRow = lastRow;
          while(startRow < (scope.field.length - 1) && startCol !== 0){
            startCol--;
            startRow++;
          }          
          var row = startRow,
            col = startCol,
            shapeCount = 0,
            isVictory = false;
          while(row !== 0 && col < (scope.field[0].length - 1)){
            if(scope.field[row][col].shape === lastUsedShape){
              shapeCount++;
              if(shapeCount === SHAPE_WIN_COUNT){
                isVictory = true;
                break;
              };
            } else {
              shapeCount = 0;
            }
            col++;
            row--;
          };
          
          return isVictory;
        };   
      }
    };
  });
