var URL='http://10.10.60.13:8080/';
//服务器文件的存放地址
var serverIP="http://10.10.60.13:7979/node/"
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
function log(e){
	console.log(e);
}
function myParse(e){
	if(e){
		var str0=JSON.stringify(e).slice(1,-1);
		var str1=str0.replace(/:/g,"=");
		var str2=str1.replace(/,/g,"&");
		var str3=str2.replace(/"/g,"");
		return "?"+str3;
	}else{
		return ""
	}
}
function parse(){
	var parse0=decodeURI(window.location.href.split("?")[1]);
	var parse1=parse0.replace(/=/g,":");
	var parse2=parse1.replace(/&/g,'","').split(":");
	var parse3='{"'+parse2.join('":"')+'"}';
	return JSON.parse(parse3);
}
//get
function xhr(url,query){
	xmlHttp=new XMLHttpRequest();
	var my_url=URL+url+myParse(query);
	xmlHttp.open("GET",my_url,false);
	xmlHttp.send(null);
	console.log(xmlHttp.responseText);
	return JSON.parse(xmlHttp.responseText);
}
//post
function xhrPOST(url,query,data){
	xmlHttp=new XMLHttpRequest();
	xmlHttp.open("POST",URL+url+myParse(query),false);
	xmlHttp.setRequestHeader("Content-type","application/x-www-form-urlencoded;charset=UTF-8");
	xmlHttp.send(data || null);
	console.log(xmlHttp.responseText);
	return xmlHttp.responseText;
}
//视频截图:获取的对象，类型，添加到哪个父元素
function capture(item,type,e){
    var canvas = document.createElement("canvas");  
	if(type == "video"){
		canvas.width = item.videoWidth;  
		canvas.height = item.videoHeight;  
	}else{
		canvas.width = item.width;  
		canvas.height = item.height;
	}
    canvas.getContext('2d')  
       .drawImage(item, 0, 0, canvas.width, canvas.height); 
    var img = document.createElement("img");  
	var result=canvas.toDataURL();
    img.src= result;
	e.appendChild(img);
	return result;
}
//上传文件:input的id，目标src的id，上传中执行，上传成功执行
function upload(id,obj,load,loaded) { 
	//获取文件
	var reader = new FileReader();
	var file=$id(id).files[0];
	//编码
	reader.readAsDataURL(file);
	//把上传的文件显示到页面中(url)
	var url = window.webkitURL.createObjectURL(file) ;
	$id(obj).src=url;
	reader.onload = function(e) {
　　　　//上传文件
		load(e);
	}
	reader.onloadend=function(){
		loaded();
	}
}
//-------------------------------------------判断客户端
//存储
function storageS(name,value){
	localStorage.setItem(name,value);
}
function storageG(name){
	console.log(localStorage.getItem(name));
	return localStorage.getItem(name);
}
//打开新页面
function openP(e){
	window.location.href=e;
}
//iframe打开新页面
function openI(e){
	parent.location.href=e;
}
function toast(e){
	alert(e)
}