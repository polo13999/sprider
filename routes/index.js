var express = require('express');
var router = express.Router();
var cheerio = require('cheerio');  // 分析爬回來資料的dom點 jquery
var request = require('request');
var fs = require('fs');
//var step0 = require('./step0'); //已經使用 nightwatch替代嚕 處理動態抓檔的問題
// var step1 = require('./step1'); //抓取需要的欄位到 cityjson.js
var step2 = require('./step2'); //抓取city對應到網址
var step3 = require('./step3'); //抓取task要執行的清單
//var yieldwork = require('./yieldwork');
//step0();
//step1();
step2();

//poloGo();
async function poloGo() {
    let stepwork = new step3();
    let temp = await stepwork.getDirFileQuery();
    //console.log(temp);
    //let temp = ["http://www.ipeen.com.tw/search/taipei/000/1-100-0-0/?p=2404"];
    let temp2 = await stepwork.sprideGo(temp);
    //console.log(temp);
}

//var data = await stepwork.getDirFile();
//console.log(data);
//stepwork.getDirFile();
//yieldwork();
/* GET home page. */
// router.get('/', function (req, res, next) {
//   res.render('index', { title: 'AAAA' });
// });

module.exports = router;
