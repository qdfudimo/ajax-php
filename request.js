var rp = require('request-promise');
var request = require('request')
var path = require('path');
let fs = require('fs')
var imageinfo = require('imageinfo');
var options = {
    uri: 'https://www.dbbqb.com/api/search/json?size=100',
    headers: {
        "content-type": "application/json",
        "web-agent": "web",
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36",
        "cookie": "Hm_lvt_7d2469592a25c577fe82de8e71a5ae60=1640593687,1641969500,1643100017; Hm_lpvt_7d2469592a25c577fe82de8e71a5ae60=1643184750",
    },
    json: true // Automatically parses the JSON string in the response
};
const commonUrl = "https://image.dbbqb.com";
let fileData = fs.readFileSync("./imgs/92p9.jpg");
// let info = imageinfo(fileData)
console.log(fileData);
rp(options)
    .then(function (repos) {
        // console.log('User has repos', repos[0]);
        // let fileName = path.basename(repos[0].path)
        // let filePath = `./imgs/${fileName}`
        // console.log(commonUrl + "/" + repos[0].path);
        let img_src = commonUrl + "/" + repos[0].path;
    })
    .catch(function (err) {
        console.log(`${1231} 下载出错`)
    });