var wdio = require("webdriverio");
var assertShots = require("../src/assert.js");

var options = {
  desiredCapabilities: {
    browserName: "firefox"
  }
};

var browser = wdio.remote(options);

require("webdrivercss").init(browser);

browser
  .url("http://localhost:8080")
  .webdrivercss('single', {
      name: 'header',
      elem: '#header'
  }, assertShots)
  .webdrivercss('singlewresolutions', {
      name: 'header',
      elem: '#header',
      screenWidth: [640,960]
  }, assertShots)
  .webdrivercss('multiple', [{
        name: 'header',
        elem: '#header'
    }, {
        name: 'search',
        elem: '#search'
    }], assertShots)
  .webdrivercss('multiplewresolutions', [{
        name: 'header',
        elem: '#header',
        screenWidth: [640,960]
    }, {
        name: 'search',
        elem: '#search',
        screenWidth: [640,960]
    }], assertShots)