'use strict';

describe('Controller: GameOptionsCtrl', function () {

  // load the controller's module
  beforeEach(module('ticTacToeApp'));

  var GameOptionsCtrl,
    scope,
    
    playerPackageOptionArr;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GameOptionsCtrl = $controller('GameOptionsCtrl', {
      $scope: scope
    });
    playerPackageOptionArr = scope.optionArr.player.packageArr;
  }));

  it('should be all not selected in the beginning', function () {    
    expect(playerPackageOptionArr.bomb).toBeDefined();
    expect(playerPackageOptionArr.bomb).toBeFalsy();
    expect(playerPackageOptionArr.wall).toBeDefined();
    expect(playerPackageOptionArr.wall).toBeFalsy();
  });
  
  it('should be able to set new package array', inject(function (rules) {
    playerPackageOptionArr.bomb = true;
    playerPackageOptionArr.wall = true;
    scope.$apply();
    expect(scope.applyGameOptions).toBeDefined();
    expect(scope.applyGameOptions).toBeFunction();
    scope.applyGameOptions();  
    expect(rules.getPlayerRules().packageArr).toBeArray();    
    expect(rules.getPlayerRules().packageArr).toEqual([['circle','bomb','wall'],['cross','bomb','wall']]);
    playerPackageOptionArr.wall = false;
    scope.$apply();
    scope.applyGameOptions();  
    expect(rules.getPlayerRules().packageArr).toBeArray();    
    expect(rules.getPlayerRules().packageArr).toEqual([['circle','bomb'],['cross','bomb']]);
  }));
});
