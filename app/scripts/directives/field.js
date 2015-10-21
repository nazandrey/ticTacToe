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
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the field directive');
      }
    };
  });
