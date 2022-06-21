//生成Excel依赖包
var xlsx = require('node-xlsx')
//写入文件依赖包
var fs = require('fs')
let list = `<AuthUser path="/portal/home" component={PortalHome} />
<AuthUser path="/portal/static" component={StaticList} />
<AuthUser path="/portal/dtip" component={DtIp} />
<AuthUser exact path="/manage/404" component={NoMatch} />`
// const defaultTagRE = /\{((?:.|\r?\n)+?)\}/g;
const defaultTagREs = /\"((?:.|\r?\n)+?)\"/g;
let match;
let excelData = [];
while (match = defaultTagREs.exec(list)) {
    excelData.push(`${match[1].trim()}`)
}
//数据
// let excelData = [
//     ["姓名", "年龄", "家乡", "备注"], // 第一行
//     ["孙悟空", "500", "花果山", "人送外号斗战胜佛"], // 第二行
//     ["猪八戒", "88", "高老庄", "天蓬元帅"], // 第三行
// ]
//配置，设置列宽
const sheetOptions = {
    '!cols': [{
        wch: 50
    }, ]
};

function unique(arr) {
    return arr.reduce(function (prev, next) {
        if (prev.indexOf(next) === -1) {
            prev.push([next]);
        }
        return prev;
    }, []);
}
excelData = [...new Set(excelData)].map(item => [item])
//生成二进制数据流
var buffer = xlsx.build([{
    name: "Sheet1",
    data: excelData
}], {
    sheetOptions
});
//写入文件
fs.writeFile('./data.xlsx', buffer, function (err) {
    if (err) {
        console.log(err, '保存excel出错')
    } else {
        console.log('写入excel成功!!!')
    }
})
