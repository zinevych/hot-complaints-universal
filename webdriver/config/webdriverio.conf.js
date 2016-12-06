exports.config = {
  specs: [
    './webdriver/test/spec-files/**'
  ],
  exclude: [],
  services: ['selenium-standalone'],
  maxInstances: 1,
  baseUrl: 'http://localhost:3000',
  logLevel: 'silent',
  coloredLogs: true,
  framework: 'mocha',
  reporters: ['spec', 'junit'],
  capabilities: [
    {
      browserName: 'chrome'
    }
  ],
  mochaOpts: {
    compilers: ['js:babel-register'],
    retries: 2,

    // change to greater value like '24 * 60 * 60 * 1000' if you want to use browser.debug();
    timeout: 2 * 60 * 1000,
    ui: 'bdd'
  },
  before: function() {
    var chai = require('chai');
    global.expect = chai.expect;
  }
}