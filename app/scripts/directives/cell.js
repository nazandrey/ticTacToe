'use strict';

/**
 * @ngdoc directive
 * @name ticTacToeApp.directive:cell
 * @description
 * # cell
 */
angular.module('ticTacToeApp')
  .directive('cell', function () {
    return {
      restrict: 'E',
      transclude: true,
      scope: true,
      link: function(scope, element, attrs) {   
        scope.init = function(row,col){
          console.log("init?: ", row,col);
        }
      
        scope.$watch("shape",function(newShape, oldShape){    
          if(newShape !== oldShape){
            scope.shapeInView = function(){          
              switch(newShape){
                case 'empty': 
                  return ' ';
                case 'circle': 
                  return 'o';
                case 'cross':
                  return 'x';
                default:
                  console.warn('no shapeInView found');
                  return '';              
              }
            }
          }
        })
        /*
        scope.turn = function(){
          var shapeArr = scope.getCurrPlayerShapeArr();
          if(shapeArr.length === 1){
            if(shapeArr[0] === 'circle'){
              scope.shape = 'o';
            } else if (shapeArr[0] === 'cross'){
              scope.shape = 'x';
            }
          }
        };*/
      }
    };
  });
