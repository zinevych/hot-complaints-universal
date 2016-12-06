export default class Index {
  constructor() {
    this.obj = {
      app: 'app',
      feed_container: '.hot-problems__main-container',
      floating_button: '.floating-button'
    }
  }
  
  feedVisible() {
    return browser.isVisible(this.obj.feed_container);
  }

  addNewButtonVisible() {
    return browser.isVisible(this.obj.floating_button)
  }
}