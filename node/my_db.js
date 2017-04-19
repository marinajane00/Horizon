var MongoClient = require('mongodb').MongoClient;//得到mongo的客户端
var DB_CONN_STR = 'mongodb://localhost:27017/users';//mongo的ip及数据库

function db(tb,operation,str,callback){
	
MongoClient.connect(DB_CONN_STR, function(err, db) {
    console.log("连接："+DB_CONN_STR+"成功！");
	console.log("当前数据库为："+tb);
	console.log("当前操作为："+operation);
	
	var collection = db.collection(tb);//连接到表
  switch (operation){//CURD
	 case 'find' : 
	 collection.find(str).toArray(function(err, result) {
		if(typeof (callback) =='function'){
		callback(result)
	    db.close();
		}
	 });
	break;
	 case 'insert' : collection.insert(str, function(err, result) {
		if(typeof (callback) =='function'){
		callback(result)
	    db.close();
		}
	 });
	break;
	 case 'update' : collection.update(str, function(err, result) { 
		if(typeof (callback) =='function'){
		callback(result)
	    db.close();
		}
	 });
	break;
	 case 'del' : collection.del(str, function(err, result) {
		if(typeof (callback) =='function'){
		callback(result)
	    db.close();
		}
	 });
	break;
  }
});

}
exports.db=db;