'use strict';

describe('Service: playerFactory', function () {

  beforeEach(module('ticTacToeApp'));

  var playerFactory;
  beforeEach(inject(function (_playerFactory_) {
    playerFactory = _playerFactory_;
  }));

  it('should create player list according to shapeArr', function () {
    expect(playerFactory.createPlayerList).toBeFunction();
    var shapeArr = [["circle"]],
      playerList = playerFactory.createPlayerList(shapeArr);
    expect(playerList).toBeArrayOfSize(1);
    expect(playerList[0].name).toBe("player1");
    expect(playerList[0].shapeArr).toBe(shapeArr[0]);
    expect(playerList[0].getMainShape).toBeFunction();
    expect(playerList[0].getMainShape()).toBe(shapeArr[0][0]);

    shapeArr = [["circle"], ["cross"]];
    playerList = playerFactory.createPlayerList(shapeArr);
    expect(playerList).toBeArrayOfSize(2);
  });
});
