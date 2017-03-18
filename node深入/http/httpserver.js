var http=require("http");
http.createServer(function(req,res){
	res.end("hello http");
}).listen(2333,"127.0.0.1");
console.log("this is log");
console.log("this is log");