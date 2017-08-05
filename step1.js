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
let url = 'https://www.fetc.net.tw/UX/UX0000Common/UX000007ContactUs';
driver.get(url);
driver.sleep(8000);
var result = [];
result[0] = driver.getPageSource().then(function (body) {
    let $ = cheerio.load(body);
    //取圖片
    //fs.writeFile('step1.html', body, function (err) { console.log(err); });
    // let tel = $('div.info .tel').text();
    // tel = tel.replace(/[\s|\\n]+/g, '');
    return body;
});



Promise.all(result).then(async (body) => {

    //更新
    fs.writeFile('step2.html', body, function (err) { console.log(err); });
    console.log('step2');
    //replace src="官方網的網址"
    // replace form action =遠通
    // setInterval(function () {
    //     console.log('打完的資料')
    //     driver.get('http://127.0.0.1:8080/step2.html');
    // }, 5000)


    //});

    var stdin = process.openStdin();

    stdin.addListener("data", function (d) {
        // note:  d is an object, and when converted to a string it will
        // end with a linefeed.  so we (rather crudely) account for that  
        // with toString() and then trim() 
        // console.log("you entered: [" +
        //     d.toString().trim() + "]");
        let x = d.toString().trim();
        driver.executeScript("document.getElementById('name').setAttribute('value','hello world')");
        driver.executeScript("document.getElementById('mobileNo').setAttribute('value','0900000000')");
        driver.executeScript("document.getElementById('email').setAttribute('value','xxx@xxx.com')");
        driver.executeScript("document.getElementById('category').setAttribute('value','3')");
        driver.executeScript("document.getElementById('content').value() = 'test'");
        driver.executeScript(`document.getElementById('visualCaptcha-img-${x}').click()`);

    });

    ///   console.log(ans);
    //雨傘
    //driver.input('xx')
}
)
