var http=require("http");
var urls=require("url");
var util=require("util");

http.createServer(function  (req,res) {
	// body...
	res.writeHead(200,{"Content-type":"text/plain"});
	res.end(util.inspect(urls.parse(req.url,true)));
	// res.end(req.url);
}).listen(3000)