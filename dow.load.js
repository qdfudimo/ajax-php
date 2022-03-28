const axios = require('axios');
const fs = require('fs');
const path = require('path');
const dowloadImg = () => {
    axios({
        url: "http://www.wangkebangshou.cn/cx_replace.crx",
        method: 'get',
        responseType: "stream"
    }).then(res => {
        if (res.status == 200) {
            let filePath = `./imgs/cx_replace.zip`;
            let ws = fs.createWriteStream(filePath);
            res.data.pipe(ws); //将请求的图片数据copy到srcFile文件路径中
            res.data.on("close", () => {
                console.log( "已经下载完成");
                ws.close();
            })
        }
    }).catch(error => {
        console.log("下载错误");
    })
}
dowloadImg()