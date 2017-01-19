const cheerio = require('cheerio');  // 分析爬回來資料的dom點 jquery
const fs = require('mz/fs');
const request = require('request');

const url = 'http://www.ipeen.com.tw';


async function step2() {
    try {
        var citydata = await fs.readFile('./citylink.json', 'utf8');
        var parsed = JSON.parse(citydata);
        // console.log(typeof (parsed));
        parsed.map(function (err, id, data) {
            //let id = 1;
            let tempurl = url + data[id];
            //console.log(tempurl);
            //tempurl = './output.html';
            //抓每一頁的最後一筆
            // let body = await fs.readFile(tempurl, 'utf-8');
            request(tempurl, function (error, response, body) {
                let $ = cheerio.load(body);
                let data = $('.next_p_s > a').attr('href');
                //console.log(typeof (data));
                if (typeof (data) == "string") {
                    let temp = data.split('p=');
                    //console.log(temp[1]);   //取出筆數
                    //     //順便製作query工作清單
                    let task = [];
                    for (i = 1; i < temp[1]; i++) {
                        task.push(temp[0] + "p=" + i);
                    }
                    let task_json = JSON.stringify(task);

                    fs.writeFile(`tasks/task_${id}.json`, task_json, function (err) { console.log(err); });
                }
                //     //console.log(task);
            });

        })


    } catch (err) { console.error(err) }
    //
}



module.exports = step2;
