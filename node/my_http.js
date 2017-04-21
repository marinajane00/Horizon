var http = require('http');
var url = require('url');
var qs=require('querystring');
var my_db=require("./my_db");
var route=require("./my_route");
var fs=require("fs");
var i=0;
http.createServer(function(req, res){
	var postData = "";
	req.addListener("data", function (data) {
		postData += data;
		console.log(data)
	});
	req.addListener("end", function () {
		var temp=postData.split(",")[1];
		var dataBuffer = new Buffer(temp, 'base64');
		fs.writeFile('text.mp4', dataBuffer, function (err) {
  if (err) throw err;
  console.log('写入完成');
});
console.log("data___________________________")
		res.writeHead(200,{"Access-Control-Allow-Origin":"*"});
		// res.writeHead(200, {'Content-Type': 'text/plain;charset=utf-8'});
		res.write(temp);
		res.end();
	});
}).listen(8080);