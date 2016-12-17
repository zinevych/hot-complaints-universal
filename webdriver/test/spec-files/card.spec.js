import Card from '../page-objects/card.js'
import api from '../utils/json-api.js';

describe('card tests', function() {
  var card;

  before(function() {
    card = new Card();
    return Promise.all([
      api().postUser(),
      api().postReport()
    ]);
  });

  describe('basic functionality', function() {
    before(function() {
      browser.url('/');
    });

    it('render only one card', function() {
      expect(card.cardsRendered()).to.eql(1);
    });
    
    it('render first name correctly', function() {
      expect(card.firstCardUserName()).to.eql('Іван Сидоренко');
    });    
    
    it('render email correctly', function() {
      expect(card.firstCardEmail()).to.eql('ivan@gmail.com');
    });    
    
    it('render photo correctly', function() {
      expect(card.firstCardImgSrc()).to.eql('http://res.cloudinary.com/dj3gpoate/image/upload/v1480868703/furyhl3dnt5c83mmw6ox.jpg');
    });    
    
    it('render title correctly', function() {
      let result = `<span style="font-size: 24px; color: rgba(0, 0, 0, 0.870588); display: block; line-height: 36px;">werwe</span><span style="font-size: 14px; color: rgba(0, 0, 0, 0.541176); display: block;"></span>`
      expect(card.firstCardTitleHTML()).to.eql(result);
    });
    
    it('render like button correctly', function() {
      expect(card.isLikeButtonVisible()).to.eql(true);
    });

    it('process like click correctly', function() {
      expect(card.firstCardLikeBadgeContent()).to.be.eql('');
      
      card.clickLikeButton();
      browser.pause(10000);
      browser.waitUntil(function () {
        return card.firstCardLikeBadgeContent() === '1'
      }, 5000, 'expected badge content to be different after 5s');
    })
  });

  after(function() {
    return Promise.all([
      api().deleteReport(),
      api().deleteUser()
    ]);
  })
});