var mongoose=require("mongoose");
require("./modules.js");
var Book=mongoose.model("Book");
Book.findOne({author:"sam"},function(err,doc){
	if (err) {
		console.log("err",err);
		return ;
	};
	doc.author="jim";
	// doc.remove()
	console.log("doc is",JSON.stringify(doc));
});
// Object.prototype.toString = function(doc) {
// 	// body...
// 	return JSON.stringify(doc);
// };