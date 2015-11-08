'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('ticTacToeApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should be transition to game', inject(function ($location) {
    expect(scope.toGame).toBeDefined();
    scope.toGame();
    expect($location.url()).toBe('/game');
  }));
});
