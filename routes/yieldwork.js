//取得目錄中的query file
getDirFile() {
    const dir = "./tasks"

    var alltask = fs.readdirSync(dir, function (err, files) {
        if (!err) { console.log('err') }
    });
    let tasklist = JSON.parse(alltask);
    console.log(alltask);
}
async getFileQuery() {
    //     var data = new Promise(function (resovle, reject) {
    //     //console.log('ok');
    //     resovle('go')
    // }).then((data) => {
    //     console.log('ok2', data);
    // }).catch(() => {
    //     console.log('error');
    // });
}
    //每次5秒 執行10個 request
    //取完request後再使用promise.all 一次寫入到mongodb
    //所以這邊會使用




    //let dir = "tasks";


    // let getShopItem = new getShop();
    // getShopItem.getFileQuery();
    //取出五個 page 去  request 如果返回ok在繼續拿五個 page去request
    // let worklist = tasklist.slice(0, 5);
    // var workflow = new Promise(function (resovle, rej) {
    //     worklist.map(function () {
    //         console.log('test');
    //         resovle('ok');
    //     })
    //     Promise.all(worklist);
    // }).then(() => {
    //     console.log('nextwork');
    // }).catch(() => {
    //     console.log('fail');
    // })



    //console.log(alltask.length);
    // let query = [];    //每一個json檔包
    // for (i = 0; i < alltask.length; i++) {
    //     //console.log(alltask[i]);
    //     let pathdata = alltask[i];
    //     console.log(pathdata);
    //     let getdata = await fs.readFileSync(`tasks/${pathdata}`, 'utf-8');
    //     //檔包的資料
    //     //  console.log(getdata);
    //     let tasklist = JSON.parse(getdata);

    //     // });
    // }
    //console.log(query.length);
    //console.log(alltask);
    //log write

    // console.log(shop);