var cheerio = require('cheerio');
var fs = require('mz/fs');
module.exports = {
    '抓取ipeen的資料': (browser) => {
        var data = browser.
            url('http://www.ipeen.com.tw/search/taiwan/000/1-100-0-0/')
            .waitForElementVisible('body', 500)
            .source(function (result) {
                //console.log(result);
                var $ = cheerio.load(result.value);
                fs.writeFile('output.html', result.value);
                //console.log($('div.nav').html());
            })
            .pause(1000)

        //request
        //$ cheerio
    }

}    