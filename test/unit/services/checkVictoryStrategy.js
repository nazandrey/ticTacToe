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
    var currCheckVictoryStrategy,
      player1,
      player2,
      playerList;

    beforeEach(inject(function (_playerFactory_) {
      playerFactory = _playerFactory_;
      currCheckVictoryStrategy = checkVictoryStrategy.getCurr(),
      player1 = playerFactory.createPlayer(),
      player2 = playerFactory.createPlayer(),
      playerList = [player1, player2],
      oo = player1.getMainShape(),
      xx = player2.getMainShape();
    }));

    it('should be player1 victory', function (playerFactory) {
      fieldModelMock = [
        [oo,oo,oo,oo,oo],
        ['','','','',''],
        ['','','','',''],
        ['','','','',''],
        ['','','','',''],
      ];
      expect(currCheckVictoryStrategy(fieldModelMock, playerList)).toBe("player1");
    });
  });
});
