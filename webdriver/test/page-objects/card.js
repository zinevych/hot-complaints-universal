export default class Card {
  constructor() {
    this.obj = {
      cards_container: '.cards-container__main',
      cards: 'div.cards-container__main > div',
      firstCardUserName: 'div.cards-container__main > div:first-child > div > div:first-child > div > span:first-child',
      firstCardEmail: 'div.cards-container__main > div:first-child > div > div:first-child > div > span:nth-child(2)',
      firstCardImg: 'div.cards-container__main > div:first-child > div > div:nth-child(2) > div > img',
      firstCardTitleElement: 'div.cards-container__main > div:first-child > div > div:nth-child(3)',
      firstCardLikeContainer: '.like-component__container',
      firstCardLikeButton: '.like-component__container svg',
      firstCardLikeBadge: '.like-component__container span'
    }
  }

  cardsRendered() {
    return browser.elements(this.obj.cards).value.length;
  }

  firstCardUserName() {
    return browser.getText(this.obj.firstCardUserName);
  }

  firstCardEmail() {
    return browser.getText(this.obj.firstCardEmail);
  }

  firstCardImgSrc() {
    return browser.getAttribute(this.obj.firstCardImg, 'src');
  }

  firstCardTitleHTML() {
    return browser.getHTML(this.obj.firstCardTitleElement, false);
  }
  
  isLikeButtonVisible() {
    return browser.isVisible(this.obj.firstCardLikeContainer);
  }

  clickLikeButton() {
    return browser.click(this.obj.firstCardLikeButton);
  }
  
  firstCardLikeBadgeContent() {
    return browser.getText(this.obj.firstCardLikeBadge);
  }
}