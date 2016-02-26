# wdcss-assert
Simple WebdriverCSS Assertion Module

## Installation

```sh
$ npm i --save-dev wdcss-assert
```

## Usage

```
var assertShots = require("wdcss-assert");

... other code here ...

client
    .webdrivercss("Header", {
        name: 'header',
        elem: '.header'
    }, assertShots);
```
