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

let url = 'https://booking.tigerairtw.com/';
driver.get(url);
driver.getPageSource().then(function (body) {
    let $ = cheerio.load(body);
    console.log(body);
    fs.writeFile('step1.html', body, function (err) { console.log(err); });
    // let tel = $('div.info .tel').text();
    // tel = tel.replace(/[\s|\\n]+/g, '');
    //return tel;
});
//}
//driver.quit();

