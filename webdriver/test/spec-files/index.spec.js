import Index from '../page-objects/index.js'
import api from '../utils/json-api.js';

describe('index page with feed', function() {
  var page;
  
  before(function() {
    page = new Index();
    return Promise.all([
      api().postUser(),
      api().postReport()
    ]);
  });
  
  describe('basic functionality', function() {
    before(function() {
      browser.url('/');
    })
    
    it('set correct page title', function() {
      var title = browser.getTitle();
      expect(title).to.eql('Redux Universal Example');
    });

    it('render feed', function() {
      expect(page.feedVisible()).to.be.true;
    });

    it('render add new report button', function() {
      expect(page.addNewButtonVisible()).to.be.true;
    });
  });

  after(function() {
    return Promise.all([
      api().deleteReport(),
      api().deleteUser()
    ]);
  })
});