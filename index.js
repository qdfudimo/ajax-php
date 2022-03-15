const axios = require('axios');
const fs = require('fs');
const path = require('path');
const Bagpipe = require('bagpipe');
// 设定最大并发数为10
var bagpipe = new Bagpipe(100);
//更改cookie
axios({
    url: "https://www.dbbqb.com/api/search/json?size=100",
    method: "get",
    json: true,
    headers: {
        "content-type": "application/json",
        "web-agent": "web",
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36",
        "cookie": "Hm_lvt_7d2469592a25c577fe82de8e71a5ae60=1640593687,1641969500,1643100017; Hm_lpvt_7d2469592a25c577fe82de8e71a5ae60=1643184750",
    }
}).then(res => {
    if (res.status == 200) {
        let pathList = res.data.map(item => item.path);
        console.log(pathList.length);
        // dowloadImg(res.data[0].path)
        pathList.forEach(item => {
            bagpipe.push(dowloadImg, item);
        });
    }
})
const commonUrl = "https://image.dbbqb.com";
const dowloadImg = (url) => {
    axios({
        url: commonUrl + "/" + url,
        method: 'get',
        responseType: "stream"
    }).then(res => {
        if (res.status == 200) {
            let imgType = res.headers["content-type"].split("/")[1] || "png"
            let fileName = path.basename(url);
            fileName = fileName.split(".")[0];
            let filePath = `./imgs/${fileName}.${imgType}`;
            let ws = fs.createWriteStream(filePath);
            res.data.pipe(ws); //将请求的图片数据copy到srcFile文件路径中
            res.data.on("close", () => {
                console.log("图片" + fileName + "." + imgType + "已经下载完成");
                ws.close();
            })
        }
    }).catch(error => {
        console.log("下载错误");
    })
}