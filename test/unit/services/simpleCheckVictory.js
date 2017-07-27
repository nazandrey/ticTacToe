'use strict';

describe('Service: simpleCheckVictory', function () {

  beforeEach(module('ticTacToeApp'));

  var simpleCheckVictory;
  beforeEach(inject(function (_simpleCheckVictory_) {
    simpleCheckVictory = _simpleCheckVictory_;
  }));

  var playerFactory,
    simpleCheckVictory,
    player1,
    player2,
    playerList,
    oo,
    xx;

  beforeEach(inject(function (_playerFactory_) {
    playerFactory = _playerFactory_;
    simpleCheckVictory = simpleCheckVictory;
    playerList = playerFactory.createPlayerList([["circle"], ["cross"]]);
    player1 = playerList[0];
    player2 = playerList[1];
  }));

  beforeEach(function () {
    oo = player1.getMainShape();
    xx = player2.getMainShape();
  });

  it('should be player1 victory (horizontal)', function () {
    var fieldModelMock = [
      [oo,oo,oo,oo,oo],
      ['','','','',''],
      ['','','','',''],
      ['','','','',''],
      ['','','','','']
    ];
    expect(simpleCheckVictory(fieldModelMock, playerList)).toBe("player1");
  });

  it('should be not victory (horizontal)', function () {
    var fieldModelMock = [
      [oo,xx,oo,oo,oo],
      ['','','','',''],
      ['','','','',''],
      ['','','','',''],
      ['','','','','']
    ];
    expect(simpleCheckVictory(fieldModelMock, playerList)).toBe("");
  });

  it('should be player1 victory (vertical)', function () {
    var fieldModelMock = [
      ['',oo,'','',''],
      ['',oo,'','',''],
      ['',oo,'','',''],
      ['',oo,'','',''],
      ['',oo,'','','']
    ];
    expect(simpleCheckVictory(fieldModelMock, playerList)).toBe("player1");
  });

  it('should be player2 victory (diagonal)', function () {
    var fieldModelMock = [
      [xx,'','','',''],
      ['',xx,'','',''],
      ['','',xx,'',''],
      ['','','',xx,''],
      ['','','','',xx]
    ];
    expect(simpleCheckVictory(fieldModelMock, playerList)).toBe("player2");
  });

  it('should be player2 victory (reverse diagonal)', function () {
    var fieldModelMock = [
      ['','','','','',''],
      ['','','','','',xx],
      ['','','','',xx,''],
      ['','','',xx,'',''],
      ['','',xx,'','',''],
      ['',xx,'','','','']
    ];
    expect(simpleCheckVictory(fieldModelMock, playerList)).toBe("player2");
  });
});
