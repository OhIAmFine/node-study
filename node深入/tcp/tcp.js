var net=require("net");
const  PORT="2333";
const  ADDRESS="127.0.0.1"

var handler=function(socket){
	console.log("socket connect");
	socket.on("data",function dataHandler(data){
		console.log("remoteAddress:",socket.remoteAddress,socket.remotePort,data.toString());
		socket.write("hello you")
	});

	socket.on("close",function(){
		console.log("socket close!")
	})
}

var app=net.createServer( handler);
app.listen(PORT,ADDRESS);
console.log("server start at ",ADDRESS,PORT);