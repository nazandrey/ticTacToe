'use strict';

describe('Controller: GameCtrl', function () {

  // load the controller's module
  beforeEach(module('ticTacToeApp'));

  var GameCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GameCtrl = $controller('GameCtrl', {
      $scope: scope
    });
  }));

  it('should have field rules', function () {
    expect(scope.field_rules).toBeDefined();
  });
  
  it('should have player rules', function () {
    expect(scope.player_rules).toBeDefined();
  });
  
  it('should have turn rules', inject(function (rules) {
    expect(rules.getTurnRules()).toBeDefined();
  }));
  
});
