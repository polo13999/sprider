const cheerio = require('cheerio');  // 分析爬回來資料的dom點 jquery
const fs = require('mz/fs');
const request = require('request');
const path = require('path');
const url = 'http://www.ipeen.com.tw';
const getShop = require('./getShop');
const mongoose = require('mongoose');
const schedule = require('node-schedule');
const moment = require('moment');
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;
mongoose.connect('mongodb://localhost/my_database');


var shopSchema = new Schema({
    name: { type: String },
    tel: { type: String },
    address: { type: String },
    href: { type: String },
    mainkind: { type: String },
    subkind: { type: String },
    isStop: { type: Boolean }
});


var ShopModel = mongoose.model('ShopModel', shopSchema);




class step3 {
    // constructor() {
    //     let querylist = this.getDirFile();
    //     console.log(querylist);
    // }
    //取得目錄中的query file
    async  getDirFileQuery() {  //取得檔案後
        const dir = "./tasks"
        let alltask = await fs.readdirSync(dir);


        fs.unlink(`${dir}/.DS_Store`, function (err) {
            if (err) { return }
        });


        // //  console.log(alltask);
        let pp = alltask.map(
            data => {
                // console.log(data);
                return JSON.parse(fs.readFileSync('tasks/' + data, 'utf-8', function (err) {

                    console.log(err);
                }))
            }
        );

        // let pp = fs.readFileSync(`tasks/task_0.json`, 'utf-8');

        //console.log(pp);
        // Promise.all(pp).then((pp) => {
        let ppp = [].concat(...pp);
        //     console.log(pp);
        return ppp;
        // });

        //console.log(ppp);

        //所有的query

    }
    async sprideGo(querylist) {
        //工作批次完成後再往下推
        //  console.log(querylist);
        if (querylist.length == 0) { return }
        let tempwork = [];
        //設定工作量
        for (let i = 0; i < 5; i++) {
            if (querylist.length != 0) {
                tempwork.push(querylist.shift());
            }
        }
        //console.log(tempwork);
        var thiswork = tempwork.map((data) => {
            fs.appendFile('logs/log.txt', `${data},${moment().format('YYYY-MM-DD/H:m:s')}\n`);
            console.log(data);
            request(data, function (error, response, body) {
                let $ = cheerio.load(body);
                $('div[class=serShop]').each(function (id, data) {
                    if (id != 0) {
                        let shopname = $(this).find('[data-label="店名"]').text();
                        //console.log('住址');
                        let shopaddress = $(this).find('[style="padding-left:3em;"]').text().replace(/[\n\t\r]/g, "");
                        //console.log('大分類');
                        let shopkind = $(this).find('[data-label="大分類"]').text();
                        //console.log('小分類');
                        let shopsubkind = $(this).find('[data-label="小分類"]').text();
                        //console.log('連結')
                        let shoplink = $(this).find('[data-label="店名"]').attr('href');
                        let isStop = $(this).find('[class="status"]').text() || false;

                        //  console.log(isStop);
                        let shop = new ShopModel();
                        shop.name = shopname;
                        //shop.tel = shopaddress;
                        shop.address = shopaddress;
                        shop.href = shoplink;
                        shop.mainkind = shopkind;
                        shop.subkind = shopsubkind;
                        shop.isStop = isStop;
                        shop.save();
                        // console.log(shop);
                    }
                });
            });
        });


        setTimeout(() => {
            this.sprideGo(querylist);
        }
            , 5000);

    }

}


module.exports = step3;
