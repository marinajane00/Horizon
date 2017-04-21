var handler={}
handler["/"]=route("这里是主页")
function route(e){
	console.log(e);
	// handler["/"]();
}
exports.route = route;