import Form from '../page-objects/form.js'
import Index from '../page-objects/index.js'
import Card from '../page-objects/card.js'
import api from '../utils/json-api.js'

describe('form tests', function() {
  var form, page, card;

  before(function() {
    form = new Form();
    page = new Index();
    card = new Card();
  });

  describe('basic functionality', function() {
    before(function() {
      browser.url('/');
    });

    it('should open dialog', function() {
      page.floatingButtonClick();
      expect(form.formContainerIsVisible()).to.be.true;
    });

    it('should create new report', function() {
      form.setFirstName('Олександр');
      form.setLastName('Зіневич');
      form.setEmail('aaaa@gmail.com');
      form.setReportTitle('Test');
      form.setReportText('Test2');
      form.chooseFile('./webdriver/files/test.jpg');

      form.submit();

      browser.waitUntil(function () {
        return card.cardsRendered() === 1;
      }, 5000, 'expected card to be rendered after 5s');
      
      expect(card.firstCardUserName()).to.eql('Олександр Зіневич');
    })
  })
  
  after(function() {
    return Promise.all([
      api().deleteReport(1),
      api().deleteUser(1)
    ]);
  });
});