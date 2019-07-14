原生的ajax 
	先创建一个实例对象
	var xhr = new XMLHttpRequest();
再设置请求行
	xhr.open（请求方式，请求url）
get不需要设置请求头，post设置请求头，就是设置查询格式字符串，键值对方式，键值对之间以&连接
	xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded")
传输文件 或者传输大量input
	先获取form表单
	var form = document.querySelector("表单");
在创建一个formdata对象
		var formdata = new FormData（form）；      

对应的还有一个表单序列化 $("form").serialize();会自动生成查询格式字符串
也可以在后面追加
	formdata.append("addres","南京")；
还有一个监听上传进度事件
	xhr.upload.onprogress=function(e) {
    	var current = e.loaded; //当前传输进度
   	 var total = e.total; //总共要传的文件大小
    	var  pros = current / total *100 +"%";
	}
设置请求体 get请求不需要设置内容
	xhr.send(null) (get)   xhr.send("username="+user);
服务器响应超时时间
	xhr.timeout=2000;
	xhr.ontimeout=function(){}

?	xhr.onreaystatechange=function(result) {
?     	console.log(result);
?	}

模板引擎
在所有的script的标签上创建一个script标签

<script type="text/template" id="listtpl">
要生成的模板 
原生语法
<%=  %>
简单语法
{{  }}
</script>

<script>
    var html = template("id名称"，要传入的对象)（如果是数组，要转化，{ [ ] }）
    渲染到页面上
</script>
AJAX请求

ajax请求是异步请求，转化为同步，要设置  async：false

$.ajax({
      type:"get/post",                                                          
      url:"传入的地址",
      data:传入的数据,
      dataType:"传入的文件类型"，
      timeout："响应超时时间"，
      beforeSend：function（）{
	再提交成功之前要进行判断，或者别的事情
      },
      success:function(result) {
	成功之后要进行的事情，result就是后端传输过来的数据，一般为json字符串格式
      },
      error:function(){
	响应失败要做的事情
      },
      complete:function(){
	程序结束后要做的事情
      }
})

跨域  域名，端口，协议有一个不同就是跨域
进行跨域
1. header（"Access-control-Allow-origin:*"）
2.通过jquery中的jsonp来进行跨域
jsonp和ajax的不同
1.jsonp是通过script标签的天然跨域属性src
2.前端传送数据是一个函数名，后端返回的是函数调用形式，后面（）拼接了数据传输回来
3.ajax是通过XMLHttpReques来发送请求，e而jsonp是通过script标签的src来进行的



| file_get_contents( ) | 将文件读入字符串 | 4   

| file_put_contents( ) | 将文件写入字符串 | 5 
move_upload_file($file["tmp_name"],要传入的路径)

$file["name"] = aasd.jpg
  strrchr($file["name"],".")   == .jpg

**即时预览图片**
 var data = new FileReader();
var file = this.files[0];
data.readAsDataURL(file);
data.onload=function(){
         $("#img").show();
         $("#img").attr("src",data.result);
  }

**上传图片表单设置multipart/form-data**

如果在ajax中上传文件
为jq提供上传图片的功能
var data = new FormData();
指定上传文件的路径
var file = this.files[0];
将文件添加到当前实例对象
data.append("file",file);

$.ajax({
        type:"post",
        url:"",
        data:data,
        dataType: "json",
        contentType:false,  // 设置当前文件传输类型
        processData:false, //默认jq会把上传的内容转化为对象，不让它转化
       success:function(res){
			}

})



ajax:阿贾克斯。
传统网站的劣势：
    1.加载速度慢
    2.每次刷新重新刷新整个页面
    3.表单验证（用户体验不好）
ajax：
    什么是ajax
        1.交互式的网站开发技术
        2.实现动态更新（局部）的内容
    为什么使用ajax（能给开发带来什么样的帮助）
        优点：
            1.提升浏览器的加载速度
            2.实现了局部刷新
            3.表单验证（增强用户体验）
    ajax的应用场景
        1.表单验证
        2.局部加载更多
        3.不跳转页面的情况下  某一个地方更新。
    ajax怎么用：
    get:
        1.创建异步对象( 就可以发送异步请求)
            var xhr = new XMLHttpRequest()；
        2.告诉ajax 请求的方式  请求的地址
            xhr.open("请求方式","请求地址")
        3.设置请求体：
            xhr.send(null);
            监听ajax的动态
        4.xhr.onreadystatechange = function(){
            等到浏览器返回成功并且 解析完毕
            if(xhr.status==200 && xhr.readystate==4){
                console.log(xhr.responseText)
            }
        }
   注意点：
        ajax是异步请求
        ajax 必须有服务器的
    原理：
      早起：  浏览器----->服务器  不可控
      ajax:  浏览器---->ajax----->服务器 可控

    json：  描述数据的一种数据。
    
    跨域： 
        浏览器的同源策略
            域名  协议  端口 有一个不同那么浏览器阻止返回内容。。
        浏览器阻止什么：
            ？？？？？
        跨域请求：  src   href  link；
       jsonp:
            原理： 利用src跨域的特性所以动态创建script src去请求资源
            实现方式：
               1. 先定义一个函数  然后动态创建script标签利用src特性请求资源
               2. 在请求地址后面需要加参数（ 参数名=函数名）
               3.后台拿到函数名  在以函数名调用的形式返回
               4.拿到数据直接调用
            前台：  
                
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "http://www.day2.com/data.php?call=fn";
        document.head.appendChild(script);
        后台：  
             $num = 10;
            $callback =  $_GET["call"];
            echo $callback.'('.$num.')';
        jq：
            默认的是callback
            dataType: "jsonp",  利用jsonp的原理
            jsonp: "call",更改默认的callback
        cors：跨域资源共享
            原理： 
                请求发送---浏览器阻止---发送预信息（网站域名）----后台拿到域名（后台考虑是否给你（header("Access-Control-Allow-Origin:*")））  ----浏览器
                ----（自动识别（服务器允许跨域））----返回客户端数据
            允许所有的网址请资源
                 header("Access-Control-Allow-Origin:*");
        3.服务器代理：（服务器之间不存在跨域）
            服务器的反向代理：

```
var FN = {
  //获取cookie
  getCookie: function(c_name) {
    if (document.cookie.length > 0) {
      c_start = document.cookie.indexOf(c_name + "=");
      if (c_start != -1) {
        c_start = c_start + c_name.length + 1;
        c_end = document.cookie.indexOf(";", c_start);
        if (c_end == -1)
          c_end = document.cookie.length;
        return unescape(document.cookie.substring(c_start, c_end))
      }
    }
    return ""
  },
  //设置cookie
  setCookie: function(c_name, value, expiredays, path) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + expiredays);
    document.cookie = c_name + "=" + escape(value) + ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString()) + ((path == null) ? "" : ";path=" + path + ";domain=capcare.com.cn");
  },
  //清除cookie
  clearCookie: function() {
    var keys = document.cookie.match(/[^ =;]+(?=\=)/g);
    if (keys) {
      for (var i = keys.length; i--;)
        document.cookie = keys[i] + '=0;expires=' + new Date(0).toUTCString()
    }
  },
  //-------------------------------------------------获取浏览器url的参数
  getParam: function(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null)
      return unescape(r[2]);
    return null;
  }
```





