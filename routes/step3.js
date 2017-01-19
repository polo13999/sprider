const cheerio = require('cheerio');  // 分析爬回來資料的dom點 jquery
const fs = require('mz/fs');
const request = require('request-promise');
const path = require('path');
const url = 'http://www.ipeen.com.tw';
const mongoose = require('mongoose');
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;
mongoose.connect('mongodb://localhost/my_database');


var shopSchema = new Schema({
    name: { type: String },
    tel: { type: String },
    address: { type: String },
    href: { type: String },
    mainkind: { type: String },
    subkind: { type: String }
});

//var ShopModel = mongoose.model('Shop');
var ShopModel = mongoose.model('ShopModel', shopSchema);



async function step3() {
    let dir = "tasks";

    var alltask = await fs.readdirSync(dir, function (err, files) {
        if (!err) { console.log('err') }
    });

    //console.log(alltask.length);
    // let query = [];    //每一個json檔包
    for (i = 0; i < alltask.length; i++) {
        //console.log(alltask[i]);
        let pathdata = alltask[i];
        console.log(pathdata);
        let getdata = await fs.readFileSync(`tasks/${pathdata}`, 'utf-8');
        //檔包的資料
        //  console.log(getdata);
        let tasklist = JSON.parse(getdata);

        tasklist.slice(m)
        //   console.log(tasklist);
        // this.timer = setTimeout(
        //     //每一個檔案中的多筆資料


        //        console.log(promises);
        //     , 1000);
        // Promise.all(promises).then(function (posts) {
        //     console.log('posts');
        // }).catch(function (reason) {
        //     console.log(reason);

        // });
    }
    //console.log(query.length);
    //console.log(alltask);
    //log write

    // console.log(shop);
}



module.exports = step3;
