'use strict';

describe('Service: playerFactory', function () {

  beforeEach(module('ticTacToeApp'));

  beforeEach(module(function ($provide) {
    $provide.factory('playerRuleList', function(){
      function get () {
        return {
          playerShapeArr: ['circle', 'cross']
        }
      }

      return {
        get: get
      };
    });
  }));

  var playerFactory;
  beforeEach(inject(function (_playerFactory_) {
    playerFactory = _playerFactory_;
  }));

  it('should create player', function () {
    expect(playerFactory.createPlayer).toBeFunction();
    expect(playerFactory.createPlayer()).toBeObject();
  });

  it('should create 2 players', function () {
    playerFactory.createPlayer();
    expect(playerFactory.createPlayer()).toBeObject();
  });

  it('should create 2 players but not more', function () {
    playerFactory.createPlayer();
    playerFactory.createPlayer();
    expect(playerFactory.createPlayer()).toBeNull();
  });
});
