var http=require("http");
http.createServer(function(req,res){
	res.writeHead(200,{"content-Type":"text/html"});
	res.write("<p>新的服务器NODE</p>");
	res.end("<h2>第一次搭建服务器</h2>");
	
}).listen(3000);