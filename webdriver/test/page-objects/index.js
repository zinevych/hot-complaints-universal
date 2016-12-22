    export default class Index {
      constructor() {
        this.obj = {
          feedContainer: '.hot-problems__main-container',
          floatingButton: '.floating-button',
          floatingButtonElement: '.floating-button > button'
        }
      }

      feedVisible() {
        return browser.isVisible(this.obj.feedContainer);
      }

      addNewButtonVisible() {
        return browser.isVisible(this.obj.floatingButton)
      }

      floatingButtonClick() {
        return browser.click(this.obj.floatingButtonElement);
      }
    }


    