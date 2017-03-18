var mongoose=require("mongoose");
require("./modules.js");
var Book=mongoose.model("Book");
var book=new Book({
	name:"sam",
	author:"samChen",
	publishTime:new Date()
});
book.author="sam";
book.save(function(err){
	console.log("save status",err?"failed":"success");
})