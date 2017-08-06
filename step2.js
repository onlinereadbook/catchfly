//const moment = require('moment');
const request = require('request');
const cheerio = require('cheerio');  // 分析爬回來資料的dom點 jquery
const fs = require('mz/fs');
const chromedriver = require('chromedriver');
const webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;
//var fs = require('mz/fs');

var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();


var result = [];
//let url = 'https://tw.voicetube.com/';
let url = 'http://www.facebook.com/';
driver.get(url);
driver.findElement(By.id('email')).sendKeys('');
driver.findElement(By.id('pass')).sendKeys('');
driver.findElement(By.id('loginbutton')).click();


url = 'https://tw.voicetube.com//fb_login?next=%2F';
driver.get(url);
//動態加載



