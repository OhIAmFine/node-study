var http=require("http");
http.createServer(function  (req,res) {
	// body...
	res.writeHead(200,{"content-Type":"text/html"});
	res.write("<h1>Hello World</h1>");
	res.end("by SAM chensdsd");
}).listen(3001);