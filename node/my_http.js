var http = require('http');
var url = require('url');
var querystring=require('querystring');
var my_db=require("./my_db");
var i=0;
http.createServer(function(request, response){
	var my_url= url.parse(request.url);
	var pathname = my_url.pathname;
	console.log('第'+i+'次请求+++++++++++++++++++');
	i++;
	console.log("请求路径为 " + pathname );
	console.log(querystring.parse(my_url.query));
	switch (pathname){
		case ('/') :
		my_db.db('login','find',querystring.parse(my_url.query),function(d){
			response.writeHead(200,{"Access-Control-Allow-Origin":"*"});
			console.log(d)
			response.write("("+JSON.stringify(d)+")");
			response.end();
		});
		break;
	default:	response.end();
	}
	
}).listen(8080);