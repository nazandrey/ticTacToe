'use strict';

describe('Controller: GameCtrl', function () {

  beforeEach(module('ticTacToeApp'));

  var GameCtrl,
    scope;

  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GameCtrl = $controller('GameCtrl', {
      $scope: scope
    });
  }));

  describe('(applying rules)', function () {
    it('should get field rules', function () {
      expect(scope.fieldRuleList).toBeObject();
    });

    it('should get player rules', function () {
      expect(scope.playerRuleList).toBeObject();
    });

    it('should check victory', function () {
      expect(scope.checkVictory).toBeFunction();
    });
  });

  describe('(start game)', function () {
    it('should create field according to rules', function () {
      expect(scope.fieldModel).toBeArrayOfSize(scope.fieldRuleList.row);
      expect(scope.fieldModel[0]).toBeArrayOfSize(scope.fieldRuleList.col);
      expect(scope.fieldModel[0][0]).toBe("");
    });

    it('should create players according to rules', (inject(function ($controller) {
      var playerRuleList0 = {
        get: function () {
          return { playerShapeArr: [] };
        }
      }
      GameCtrl = $controller('GameCtrl', { $scope: scope, playerRuleList: playerRuleList0 });
      expect(scope.playerList).toBeArrayOfSize(0);
      var playerRuleList1 = {
        get: function () {
          return { playerShapeArr: [["circle", "wall"], ["cross"]] };
        }
      }
      GameCtrl = $controller('GameCtrl', { $scope: scope, playerRuleList: playerRuleList1 });
      expect(scope.playerList).toBeArrayOfSize(2);
      expect(scope.playerList[0].shapeArr).toBeArrayOfSize(2);
      expect(scope.playerList[1].shapeArr).toBeArrayOfSize(1);
    })));

    it('should choose first player', function () {

    });
  });
});
