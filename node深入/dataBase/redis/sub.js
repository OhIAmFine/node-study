var client=require("./client");
client.subscribe("publish");
client.on("message",function(channel,message){
	console.log("channel is ",channel,"message is",message);
})