// create static file server
var http = require('http');
var fs = require('fs');

var html = fs.readFileSync("./test/mock-site/index.html");

var server = http.createServer(function(request, response) {
  response.writeHeader(200, {"Content-Type": "text/html"});
  response.write(html);
  response.end();
}).listen(9999, '127.0.0.1');

// Start a selenium server
// var selenium = require('selenium-standalone');
// selenium.install();
// selenium.start(function(err, child) {
//   console.log("Server started");
// });

// Start the actual test

var wdio = require("webdriverio");
var assertShots = require("../src/assert.js");

var options = {
  desiredCapabilities: {
    browserName: "chrome"
  }
};

var browser = wdio.remote(options);

require("webdrivercss").init(browser);

browser
  .init()
  .url("http://localhost:9999")
  .webdrivercss('single', {
      name: 'header',
      elem: '.header'
  }, assertShots)
  .webdrivercss('singlewresolutions', {
      name: 'header',
      elem: '.header',
      screenWidth: [640,960]
  }, assertShots)
  // .webdrivercss('multiple', [{
  //       name: 'header',
  //       elem: '.header'
  //   }, {
  //       name: 'content',
  //       elem: '.content'
  //   }], assertShots)
  // .webdrivercss('multiplewresolutions', [{
  //       name: 'header',
  //       elem: '.header',
  //       screenWidth: [640,960]
  //   }, {
  //       name: 'content',
  //       elem: '.content',
  //       screenWidth: [640,960]
  //   }], assertShots)
  .end()
  .then(function () {
    console.log("Tests complete");
    process.exit(0);
  });
