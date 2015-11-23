describe('game shape change', function() {
  var IMG_PATH_PREFIX = 'images/',
    IMG_EXTENSION = '.png',
    EMPTY = IMG_PATH_PREFIX + 'empty' + IMG_EXTENSION,
    CROSS = IMG_PATH_PREFIX + 'cross' + IMG_EXTENSION,
    CIRCLE = IMG_PATH_PREFIX + 'circle' + IMG_EXTENSION;
    
  beforeEach(function(){
    browser.get('/#/game');
    browser.waitForAngular();
  });
  
  it('should change in first time and not in second', function() { 
    var cell = element.all(by.css('#field div[cell] div')).first();
    expect(cell.getCssValue('background-image')).toContain(EMPTY); 
    cell.click();
    expect(cell.getCssValue('background-image')).toContain(CIRCLE);
    cell.click();
    expect(cell.getCssValue('background-image')).toContain(CIRCLE);
  });  
});