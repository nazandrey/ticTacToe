describe('game shape change', function() {
  beforeEach(function(){
    browser.get('/#/game');
    browser.waitForAngular();
  });
  
  it('should change in first time and not in second', function() { 
    var cell = element.all(by.tagName('cell')).first();
    expect(cell.getText()).toBe("( )");   
    cell.click();
    expect(cell.getText()).toBe("(o)");  
    cell.click();
    expect(cell.getText()).toBe("(o)");  
  });  
});