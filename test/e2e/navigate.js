describe('navigate', function() {
  browser.get('http://localhost:9001');
  $('[ng-click="toGame()"]').click();
  
  it('should be in game', function() {    
    expect(browser.getCurrentUrl()).toContain("game");   
  });
});