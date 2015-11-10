'use strict';

/**
 * @ngdoc service
 * @name ticTacToeApp.checkVictoryFnStorage
 * @description
 * # checkVictoryFnStorage
 * Factory in the ticTacToeApp.
 */
angular.module('ticTacToeApp')
  .factory('checkVictoryFnStorage', function () {
    // Service logic
    // ...
    var checkVictoryFnArr = {};
    
    checkVictoryFnArr['default'] = defaultFn;
    
    function defaultFn(lastRow, lastCol, lastUsedShape, shapeArrLength, field){
      var SHAPE_WIN_COUNT = 5;        
      if(shapeArrLength === 1){
        //Самый простой случай, когда вариантов того, что поставить, только 1
        return checkHorizontal(lastRow, lastUsedShape) || 
          checkVertical(lastCol, lastUsedShape) || 
          checkMainDiagonal(lastRow, lastCol, lastUsedShape) || 
          checkIncidentalDiagonal(lastRow, lastCol, lastUsedShape);
      }
      
      
      function checkHorizontal(lastRow, lastUsedShape){
        var isVictory = false, 
          shapeCount = 0;
        field[lastRow].some(function(cell){
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
        field.some(function(row){
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
        while(row < (field.length - 1) && col < field[0].length){
          if(field[row][col].shape === lastUsedShape){
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
        while(startRow < (field.length - 1) && startCol !== 0){
          startCol--;
          startRow++;
        }          
        var row = startRow,
          col = startCol,
          shapeCount = 0,
          isVictory = false;
        while(row !== 0 && col < (field[0].length - 1)){
          if(field[row][col].shape === lastUsedShape){
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
    
    function getByKey(key){
      return checkVictoryFnArr[key];
    }

    // Public API here
    return {
      getByKey: getByKey
    };
  });
