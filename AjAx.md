ԭ����ajax 
	�ȴ���һ��ʵ������
	var xhr = new XMLHttpRequest();
������������
	xhr.open������ʽ������url��
get����Ҫ��������ͷ��post��������ͷ���������ò�ѯ��ʽ�ַ�������ֵ�Է�ʽ����ֵ��֮����&����
	xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded")
�����ļ� ���ߴ������input
	�Ȼ�ȡform��
	var form = document.querySelector("��");
�ڴ���һ��formdata����
		var formdata = new FormData��form����      

��Ӧ�Ļ���һ�������л� $("form").serialize();���Զ����ɲ�ѯ��ʽ�ַ���
Ҳ�����ں���׷��
	formdata.append("addres","�Ͼ�")��
����һ�������ϴ������¼�
	xhr.upload.onprogress=function(e) {
    	var current = e.loaded; //��ǰ�������
   	 var total = e.total; //�ܹ�Ҫ�����ļ���С
    	var  pros = current / total *100 +"%";
	}
���������� get������Ҫ��������
	xhr.send(null) (get)   xhr.send("username="+user);
��������Ӧ��ʱʱ��
	xhr.timeout=2000;
	xhr.ontimeout=function(){}

?	xhr.onreaystatechange=function(result) {
?     	console.log(result);
?	}

ģ������
�����е�script�ı�ǩ�ϴ���һ��script��ǩ

<script type="text/template" id="listtpl">
Ҫ���ɵ�ģ�� 
ԭ���﷨
<%=  %>
���﷨
{{  }}
</script>

<script>
    var html = template("id����"��Ҫ����Ķ���)����������飬Ҫת����{ [ ] }��
    ��Ⱦ��ҳ����
</script>
AJAX����

ajax�������첽����ת��Ϊͬ����Ҫ����  async��false

$.ajax({
      type:"get/post",                                                          
      url:"����ĵ�ַ",
      data:���������,
      dataType:"������ļ�����"��
      timeout��"��Ӧ��ʱʱ��"��
      beforeSend��function����{
	���ύ�ɹ�֮ǰҪ�����жϣ����߱������
      },
      success:function(result) {
	�ɹ�֮��Ҫ���е����飬result���Ǻ�˴�����������ݣ�һ��Ϊjson�ַ�����ʽ
      },
      error:function(){
	��Ӧʧ��Ҫ��������
      },
      complete:function(){
	���������Ҫ��������
      }
})

����  �������˿ڣ�Э����һ����ͬ���ǿ���
���п���
1. header��"Access-control-Allow-origin:*"��
2.ͨ��jquery�е�jsonp�����п���
jsonp��ajax�Ĳ�ͬ
1.jsonp��ͨ��script��ǩ����Ȼ��������src
2.ǰ�˴���������һ������������˷��ص��Ǻ���������ʽ�����棨��ƴ�������ݴ������
3.ajax��ͨ��XMLHttpReques����������e��jsonp��ͨ��script��ǩ��src�����е�



| file_get_contents( ) | ���ļ������ַ��� | 4   

| file_put_contents( ) | ���ļ�д���ַ��� | 5 
move_upload_file($file["tmp_name"],Ҫ�����·��)

$file["name"] = aasd.jpg
  strrchr($file["name"],".")   == .jpg

**��ʱԤ��ͼƬ**
 var data = new FileReader();
var file = this.files[0];
data.readAsDataURL(file);
data.onload=function(){
         $("#img").show();
         $("#img").attr("src",data.result);
  }

**�ϴ�ͼƬ������multipart/form-data**

�����ajax���ϴ��ļ�
Ϊjq�ṩ�ϴ�ͼƬ�Ĺ���
var data = new FormData();
ָ���ϴ��ļ���·��
var file = this.files[0];
���ļ���ӵ���ǰʵ������
data.append("file",file);

$.ajax({
        type:"post",
        url:"",
        data:data,
        dataType: "json",
        contentType:false,  // ���õ�ǰ�ļ���������
        processData:false, //Ĭ��jq����ϴ�������ת��Ϊ���󣬲�����ת��
       success:function(res){
			}

})



ajax:���ֿ�˹��
��ͳ��վ�����ƣ�
    1.�����ٶ���
    2.ÿ��ˢ������ˢ������ҳ��
    3.����֤���û����鲻�ã�
ajax��
    ʲô��ajax
        1.����ʽ����վ��������
        2.ʵ�ֶ�̬���£��ֲ���������
    Ϊʲôʹ��ajax���ܸ���������ʲô���İ�����
        �ŵ㣺
            1.����������ļ����ٶ�
            2.ʵ���˾ֲ�ˢ��
            3.����֤����ǿ�û����飩
    ajax��Ӧ�ó���
        1.����֤
        2.�ֲ����ظ���
        3.����תҳ��������  ĳһ���ط����¡�
    ajax��ô�ã�
    get:
        1.�����첽����( �Ϳ��Է����첽����)
            var xhr = new XMLHttpRequest()��
        2.����ajax ����ķ�ʽ  ����ĵ�ַ
            xhr.open("����ʽ","�����ַ")
        3.���������壺
            xhr.send(null);
            ����ajax�Ķ�̬
        4.xhr.onreadystatechange = function(){
            �ȵ���������سɹ����� �������
            if(xhr.status==200 && xhr.readystate==4){
                console.log(xhr.responseText)
            }
        }
   ע��㣺
        ajax���첽����
        ajax �����з�������
    ԭ��
      ����  �����----->������  ���ɿ�
      ajax:  �����---->ajax----->������ �ɿ�

    json��  �������ݵ�һ�����ݡ�
    
    ���� 
        �������ͬԴ����
            ����  Э��  �˿� ��һ����ͬ��ô�������ֹ�������ݡ���
        �������ֹʲô��
            ����������
        ��������  src   href  link��
       jsonp:
            ԭ�� ����src������������Զ�̬����script srcȥ������Դ
            ʵ�ַ�ʽ��
               1. �ȶ���һ������  Ȼ��̬����script��ǩ����src����������Դ
               2. �������ַ������Ҫ�Ӳ����� ������=��������
               3.��̨�õ�������  ���Ժ��������õ���ʽ����
               4.�õ�����ֱ�ӵ���
            ǰ̨��  
                
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "http://www.day2.com/data.php?call=fn";
        document.head.appendChild(script);
        ��̨��  
             $num = 10;
            $callback =  $_GET["call"];
            echo $callback.'('.$num.')';
        jq��
            Ĭ�ϵ���callback
            dataType: "jsonp",  ����jsonp��ԭ��
            jsonp: "call",����Ĭ�ϵ�callback
        cors��������Դ����
            ԭ�� 
                ������---�������ֹ---����Ԥ��Ϣ����վ������----��̨�õ���������̨�����Ƿ���㣨header("Access-Control-Allow-Origin:*")����  ----�����
                ----���Զ�ʶ�𣨷�����������򣩣�----���ؿͻ�������
            �������е���ַ����Դ
                 header("Access-Control-Allow-Origin:*");
        3.������������������֮�䲻���ڿ���
            �������ķ������

```
var FN = {
  //��ȡcookie
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
  //����cookie
  setCookie: function(c_name, value, expiredays, path) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + expiredays);
    document.cookie = c_name + "=" + escape(value) + ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString()) + ((path == null) ? "" : ";path=" + path + ";domain=capcare.com.cn");
  },
  //���cookie
  clearCookie: function() {
    var keys = document.cookie.match(/[^ =;]+(?=\=)/g);
    if (keys) {
      for (var i = keys.length; i--;)
        document.cookie = keys[i] + '=0;expires=' + new Date(0).toUTCString()
    }
  },
  //-------------------------------------------------��ȡ�����url�Ĳ���
  getParam: function(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null)
      return unescape(r[2]);
    return null;
  }
```





