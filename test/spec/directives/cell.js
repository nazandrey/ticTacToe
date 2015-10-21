'use strict';

describe('Directive: cell', function () {

  // load the directive's module
  beforeEach(module('ticTacToeApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<cell></cell>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the cell directive');
  }));
});
