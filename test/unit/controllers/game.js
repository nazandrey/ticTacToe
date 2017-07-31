'use strict';

describe('Controller: GameCtrl', function () {

  beforeEach(module('ticTacToeApp'));

  var GameCtrl,
    scope,
    playerListEmpty,
    playerListOnlyOneShape,
    playerListHasTwoShapes;

  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GameCtrl = $controller('GameCtrl', {
      $scope: scope
    });
    playerListEmpty = {
      get: function () {
        return { playerShapeArr: [] };
      }
    },
    playerListOnlyOneShape = {
      get: function () {
        return { playerShapeArr: [["circle"], ["cross"]] };
      }
    },
    playerListHasTwoShapes = {
      get: function () {
        return { playerShapeArr: [["circle", "wall"], ["cross", "bomb"]] };
      }
    }
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
      GameCtrl = $controller('GameCtrl', { $scope: scope, playerRuleList: playerListEmpty });
      expect(scope.playerList).toBeArrayOfSize(0);
      GameCtrl = $controller('GameCtrl', { $scope: scope, playerRuleList: playerListHasTwoShapes });
      expect(scope.playerList).toBeArrayOfSize(2);
      expect(scope.playerList[0].shapeArr).toBeArrayOfSize(2);
      expect(scope.playerList[1].shapeArr).toBeArrayOfSize(2);
    })));

    it('should choose first player', function () {
      expect(scope.currPlayer).toBeObject();
      expect(scope.currPlayer).toBe(scope.playerList[0]);
    });

    it('should be able to turn', function () {
      expect(scope.turn).toBeFunction();
    });
  });

  describe('(game if only one shape)', function () {
    var simpleCheckVictory;

    beforeEach(inject(function ($controller, _simpleCheckVictory_) {
      GameCtrl = $controller('GameCtrl', { $scope: scope, playerRuleList: playerListOnlyOneShape });
      simpleCheckVictory = _simpleCheckVictory_;
    }));

    it('should draw current player shape and change player', function () {
      scope.turn(0,0);
      expect(scope.fieldModel[0][0]).toBe(scope.playerList[0].getMainShape());
      expect(scope.currPlayer).toBe(scope.playerList[1]);
    });

    it('should draw second player shape after first turn and change player', function () {
      scope.turn(0,0);
      scope.turn(1,1);
      expect(scope.fieldModel[1][1]).toBe(scope.playerList[1].getMainShape());
      expect(scope.currPlayer).toBe(scope.playerList[0]);
    });

    it('should not draw current player shape over another', function () {
      scope.turn(0,0);
      scope.turn(0,0);
      expect(scope.fieldModel[0][0]).toBe(scope.playerList[0].getMainShape());
      expect(scope.currPlayer).toBe(scope.playerList[1]);
    });

    it('should check victory', inject(function (simpleCheckVictory) {
      scope.checkVictory = simpleCheckVictory;
      expect(scope.winner).toBe("");
      spyOn(scope, "checkVictory").and.callThrough();
      for (var row = 0; row < scope.fieldModel.length; row++) {
        scope.turn(row,0); //1st player line
        scope.turn(row,row % 2 + 1); //2nd player "line", just to change player and avoid 2nd player win
      };
      expect(scope.checkVictory).toHaveBeenCalledWith(scope.fieldModel, scope.playerList);
      expect(scope.winner).toBe("player1");
    }));

    it('should stop checking victory if there is winner', inject(function (simpleCheckVictory) {
      scope.checkVictory = simpleCheckVictory;
      spyOn(scope, "checkVictory").and.callThrough();
      spyOn(scope, "turn").and.callThrough();
      var winnerRow;
      for (var row = 0; row < scope.fieldModel.length; row++) {
        scope.turn(row,0); //1st player line
        scope.turn(row,1); //2nd player line, last one should be cancelled because we should have winner
      };
      expect(scope.winner).toBe("player1");
      expect(scope.checkVictory.calls.count()).toBeLessThan(scope.turn.calls.count());
    }));
  });
});
