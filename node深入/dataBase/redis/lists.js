var client=require("./client");
// client.rpush("testLists","a");
// client.rpush("testLists","b");
// client.rpush("testLists","c");
// client.rpush("testLists",1); 

client.rpop("testLists",function(err,v){
	console.log(err,v);
})
client.lrange("testLists",0,-1,function(err,v){
	console.log("what your lists is ",err,v);
})