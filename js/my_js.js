var URL='http://localhost:8080/';
//获取当天时间
function getDate(e){
	var d=new Date()
	var day=d.getDate()
	var month=d.getMonth() + 1
	var year=d.getFullYear()
	$(e).html(year + "/" + month + "/" + day)
}
//简写document
function $class(e){
	return document.getElementsByClassName(e);
}
function $id(e){
	return document.getElementById(e);
}
function createE(e,to){
	var myE = document.createElement(e);
	to.appendChild(myE);
}
//上传文件:input的id，上传中执行，上传成功执行
function upload(id,load,loaded) { 
	//获取文件
	var reader = new FileReader();
	var file=$id(id).files[0];
	//编码
	reader.readAsDataURL(file);
	//把上传的文件显示到页面中(url)
	var url = window.webkitURL.createObjectURL(file) ;
	video.src=url;
	reader.onload = function(e) {
　　　　//上传文件
		load();
		console.log(e);
		xmlHttp=new XMLHttpRequest();
		xmlHttp.open("POST",URL,false);
		//把编码后的文件发送
		xmlHttp.send(e.target.result);
		//后台返回数据
		console.log(xmlHttp.responseText);
		console.log("本次传输已完成");
	}
	reader.onloadend=function(){
		loaded();
	}
}
//视频截图:缩放大小，添加到哪个父元素
function capture(scale,e){
	var scale = scale; 
    var canvas = document.createElement("canvas");  
    canvas.width = video.videoWidth * scale;  
    canvas.height = video.videoHeight * scale;  
    canvas.getContext('2d')  
       .drawImage(video, 0, 0, canvas.width, canvas.height);  
    var img = document.createElement("img");  
    img.src= canvas.toDataURL();
	e.appendChild(img);
}