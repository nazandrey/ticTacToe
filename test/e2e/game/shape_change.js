describe('game shape change', function() {
  browser.get('http://localhost:9001/#/game');
  browser.refresh();
  
  beforeEach(function(){
    browser.waitForAngular();
  });
  
  it('should change in first time and not in second', function() { 
    var cell = element.all(by.tagName('cell')).first();
    expect(cell.getText()).toBe("( )");   
    cell.click();
    expect(cell.getText()).toBe("(o)");  
    cell.click();
    //now it doesnt pass but will...
    expect(cell.getText()).toBe("(o)");  
  });  
});