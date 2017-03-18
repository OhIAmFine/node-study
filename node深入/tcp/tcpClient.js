var net=require("net");
const  PORT="2333";
const  ADDRESS="127.0.0.1";

var tcpClient=net.Socket();
tcpClient.connect(PORT,ADDRESS,function(){
	console.log("client connected");
	tcpClient.write("hello");
});

tcpClient.on("data",function(data){
	console.log("data is form server:",data.toString());
})