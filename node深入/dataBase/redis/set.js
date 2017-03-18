var client=require("./client");
client.sadd("sets","a");
client.sadd("sets","b");
client.sadd("sets","c");
client.sadd("sets",1); 
client.smembers("sets",function(err,v){
	console.log("v is" ,err,v);
})