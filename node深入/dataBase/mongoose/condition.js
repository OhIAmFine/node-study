var mongoose=require("mongoose");
require("./modules.js");
var Book=mongoose.model("Book");
var condition={
	$or:[
	{author:"sam"},
	{author:"jim"}
	]
	// $and 大鱼小鱼
}

Book.find(condition,function(err,doc){
	if (err) {
		console.log("err",err);
	};
	console.log("condition",condition,"result",JSON.stringify(doc));
})
