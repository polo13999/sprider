var webdriver = require('selenium-webdriver');
//var chrome = require('selenium-webdriver/chrome'),
var chrome = require('bin/chromedriver_mac');


function webdrivergo() {


    var driver = new webdriver.Builder()
        .forBrowser('chrome')
        .usingServer('http://localhost:4444/wd/hub')
        .build();
}

module.exports = webdrivergo 