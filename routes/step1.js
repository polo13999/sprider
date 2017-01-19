var cheerio = require('cheerio');  // 分析爬回來資料的dom點 jquery
//var request = require('request');
var request = require('ajax-request');
var fs = require('mz/fs');

async function getCity() {

    //request('../output.html', function (error, response, body) {
    var body = await fs.readFile('output.html', 'utf-8');
    //console.log(body);

    let $ = cheerio.load(body);

    // var data = $('div.choose').html();
    //console.log(data);
    var city = [];
    var citylink = [];
    var star = 0
    $('.a_search_location').each(function (idx, element) {

        //console.log($(this).attr('href'));
        let temp = $(this).text().split('(');
        if (temp[0] == "台北市") { star = 1; }
        if (star == 1) {
            city.push(temp[0]);
            citylink.push($(this).attr('href'));
        }
    });
    let citylink_json = JSON.stringify(citylink);
    console.log(citylink);
    //    第二步驟 利用目前得到的json撈資料

    // fs.unlink('/citydata.json');
    fs.writeFile('citylink.json', citylink_json, function (err) { console.log(err); });
    //開始用city 開始跑
    //   console.log('city ok');
    //  });
}

module.exports = getCity;