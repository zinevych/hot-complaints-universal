export default class Form {
  constructor() {
    this.obj = {
      app: 'app',
      formContainer: '.add-complaint-form__container',
      firstNameInput: '.add-complaint-form__container form > div:nth-child(1) input',
      lastNameInput: '.add-complaint-form__container form > div:nth-child(2) input',
      emailInput: '.add-complaint-form__container form > div:nth-child(3) input',
      reportTitleInput: '.add-complaint-form__container form > div:nth-child(4) input',
      reportTextInput: '.add-complaint-form__container form > div:nth-child(5) > div > textarea:nth-child(2)',
      photoInput: '.add-complaint-form__container form > input[type="file"]',
      submitButton: '.add-complaint-form__container form button[type="submit"]'
    }
  }

  formContainerIsVisible() {
    return browser.isVisible(this.obj.formContainer);
  }

  setFirstName(value) {
    return browser.setValue(this.obj.firstNameInput, value);
  }

  setLastName(value) {
    return browser.setValue(this.obj.lastNameInput, value);
  }

  setEmail(value) {
    return browser.setValue(this.obj.emailInput, value);
  }

  setReportTitle(value) {
    return browser.setValue(this.obj.reportTitleInput, value);
  }

  setReportText(value) {
    return browser.setValue(this.obj.reportTextInput, value);
  }

  chooseFile(path) {
    return browser.chooseFile(this.obj.photoInput, path);
  }
  
  submit() {
    return browser.click(this.obj.submitButton)
  }
}