describe('index page with feed', function() {
  it('should load the page', function() {
    browser.url('/');
    var title = browser.getTitle();
    expect(title).to.eql('Redux Universal Example');
  })
});