'use strict';

describe('Service: checkVictoryStrategy', function () {

  beforeEach(module('ticTacToeApp'));

  var checkVictoryStrategy;
  beforeEach(inject(function (_checkVictoryStrategy_) {
    checkVictoryStrategy = _checkVictoryStrategy_;
  }));

  it('should give check victory fn', function () {
    expect(checkVictoryStrategy.getCurr).toBeFunction();
    expect(checkVictoryStrategy.getCurr()).toBeFunction();
  });

  describe('(default strategy, using information about field and players)', function () {
    var playerFactory,
      currCheckVictoryStrategy,
      player1,
      player2,
      playerList,
      oo,
      xx;

    beforeEach(inject(function (_playerFactory_) {
      playerFactory = _playerFactory_;
      currCheckVictoryStrategy = checkVictoryStrategy.getCurr(),
      player1 = playerFactory.createPlayer(),
      player2 = playerFactory.createPlayer(),
      playerList = [player1, player2];
    }));

    beforeEach(function () {
      oo = player1.getMainShape();
    });

    it('should be player1 victory (horizontal)', function () {
      var fieldModelMock = [
        [oo,oo,oo,oo,oo],
        ['','','','',''],
        ['','','','',''],
        ['','','','',''],
        ['','','','',''],
      ];
      expect(currCheckVictoryStrategy(fieldModelMock, playerList)).toBe("player1");
    });

    it('should be player1 victory (vertical)', function () {
      var fieldModelMock = [
        ['',oo,'','',''],
        ['',oo,'','',''],
        ['',oo,'','',''],
        ['',oo,'','',''],
        ['',oo,'','',''],
      ];
      expect(currCheckVictoryStrategy(fieldModelMock, playerList)).toBe("player1");
    });

    beforeEach(function () {
      xx = player2.getMainShape();
    });

    it('should be player2 victory (diagonal)', function () {
      var fieldModelMock = [
        [xx,'','','',''],
        ['',xx,'','',''],
        ['','',xx,'',''],
        ['','','',xx,''],
        ['','','','',xx],
      ];
      expect(currCheckVictoryStrategy(fieldModelMock, playerList)).toBe("player2");
    });

    it('should be player2 victory (reverse diagonal)', function () {
      var fieldModelMock = [
        ['','','','',xx],
        ['','','',xx,''],
        ['','',xx,'',''],
        ['',xx,'','',''],
        [xx,'','','',''],
      ];
      expect(currCheckVictoryStrategy(fieldModelMock, playerList)).toBe("player2");
    });
  });
});
