describe('navigate', function() {
  beforeEach(function(){
    browser.get('/');
  });
  
  it('should be in game', function() {    
    $('[ng-click="toGame()"]').click();
    expect(browser.getCurrentUrl()).toContain("game");   
  });
});