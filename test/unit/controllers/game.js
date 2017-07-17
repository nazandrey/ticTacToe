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
      // place here mocked dependencies
    });
  }));

  describe('(applying rules)', function () {
    it('should get field rules', function () {
      expect(scope.fieldRuleList).toBeObject();
    });

    it('should get player rules', function () {
      expect(scope.playerRuleList).toBeObject();
    });

    it('should get victory rules', function () {

    });
  });
});
