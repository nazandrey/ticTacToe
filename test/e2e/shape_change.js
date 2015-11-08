describe('game shape change', function() {
  browser.get('http://localhost:9001');
  $('[ng-click="toGame()"]').click();
  
  beforeEach(function(){
    
  });
  
  it('should check that test is working correctly', function() {   
    expect(false).toBe(true);
  });
  
  it('should navigate to game', function() {    
    expect(browser.getCurrentUrl()).toContain("game");   
  });
  
  it('should cahnge in first time and not in second', function() { 
    var cell = element.all(by.tagName('cell')).first();
    expect(cell.getText()).toBe("( )");   
    cell.click();
    expect(cell.getText()).toBe("(o)");  
    cell.click();
    //now it doesnt pass but will...
    expect(cell.getText()).toBe("(o)");  
  });  
});