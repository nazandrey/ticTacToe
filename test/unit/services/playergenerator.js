'use strict';

describe('Service: playerGenerator', function () {

  // load the service's module
  beforeEach(module('ticTacToeApp'));

  // instantiate service
  var playerGenerator;
  beforeEach(inject(function (_playerGenerator_) {
    playerGenerator = _playerGenerator_;
  }));

  it('should generate players', function () {
    var rules = {
        packageArr:[['circle'],['cross']]
      },
      playerArr = playerGenerator.generate(rules);
    expect(playerArr.length).toEqual(rules.packageArr.length);
    playerArr.forEach(function(player, idx){
      expect(player.id).toBeDefined();
      expect(player.shapeArr).toBeArray();
    });
  });
});
