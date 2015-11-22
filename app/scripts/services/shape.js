'use strict';

/**
 * @ngdoc service
 * @name ticTacToeApp.shape
 * @description
 * # shape
 * Factory in the ticTacToeApp.
 */
angular.module('ticTacToeApp')
  .factory('shape', function () {
  
  
    function getView(shape){         
      switch(shape){
        case 'empty': 
          return ' ';
        case 'circle': 
          return 'o';
        case 'cross':
          return 'x';
        default:
          console.warn('no shapeView found for: ', shape);
          return '';              
      }
    }

    return {
      getView: getView
    };
  });
