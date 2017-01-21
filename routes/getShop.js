const cheerio = require('cheerio');  // 分析爬回來資料的dom點 jquery
const request = require('request-promise');

class getShop {

    getFileQuery() {
        console.log('getFileQuery');
    }

    // tasklist() {
    //     var promises = tasklist.map(function (data, id) {
    //         if (id < 5) {
    //             console.log(data);
    //             request(data, function (error, response, body) {
    //                 // console.log(body);

    //                 //fs.writeFile('output2.html', body);
    //                 //  var body = await fs.readFile('output2.html', 'utf-8');
    //                 let $ = cheerio.load(body);
    //                 // let data = $('[style="padding-left:3em;"]').text();
    //                 // console.log(data);
    //                 // let shop = [];
    //                 $('div[class=serShop]').each(function (id, data) {
    //                     if (id != 0) {
    //                         // console.log('店名');
    //                         let shopname = $(this).find('[data-label="店名"]').text();
    //                         //console.log('住址');
    //                         let shopaddress = $(this).find('[style="padding-left:3em;"]').text().replace(/[\n\t\r]/g, "");
    //                         //console.log('大分類');
    //                         let shopkind = $(this).find('[data-label="大分類"]').text();
    //                         //console.log('小分類');
    //                         let shopsubkind = $(this).find('[data-label="小分類"]').text();
    //                         //console.log('連結')
    //                         let shoplink = $(this).find('[data-label="店名"]').attr('href');



    //                         let shop = new ShopModel();
    //                         shop.name = shopname;
    //                         //shop.tel = shopaddress;
    //                         shop.address = shopaddress;
    //                         shop.href = shoplink;
    //                         shop.mainkind = shopkind;
    //                         shop.subkind = shopsubkind;
    //                         shop.save();
    //                         console.log(shop);
    //                     }


    //                     // shop.push({
    //                     //     "shopname": shopname,
    //                     //     "shopaddress": shopaddress,
    //                     //     "shopkind": shopkind,
    //                     //     "shopsubkind": shopsubkind,
    //                     //     "shoplink": shoplink
    //                     // });
    //                 });
    //                 // resolve(response);
    //             });
    //             //     //  query.push(getdata);
    //         }
    //     });
    // }



}

module.exports = getShop;