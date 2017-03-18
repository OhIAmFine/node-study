var http=require("http");
http.createServer(function(req,res){
	res.end("hello node");
}).listen(8088);