exports.config = {
  specs: [
    './webdriver/test/spec-files/**'
  ],
  exclude: [],
  services: ['selenium-standalone'],
  maxInstances: 1,
  baseUrl: 'http://localhost:3000',
  capabilities: [
    {
      browserName: 'chrome'
    }
  ],
  
  before: function() {
    var chai = require('chai');
    global.expect = chai.expect;
  }
}