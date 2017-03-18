var mongoose=require("mongoose");
mongoose.connect("mongodb://localhost/mongoose_next");
var User=mongoose.model("User",{
	name:String
});
var Book=mongoose.model("Book",{
	title:String,
	author:{
		type:mongoose.Schema.ObjectId,
		ref:"User"
	}
});
var user=new User({
	name:"sam"
});
var book=new Book({
	title:"title",
	author:user
});
user.save(function(err){
	if (err) {
		return console.log("err",err)
	};
	book.save(function(err){
		if (err) {
		return console.log("err",err)
	};
	Book.findOne().populate("author").exec(function(err,doc){
		if (err) {
		return console.log("err",err)
	};
	console.log("author ",JSON.stringify(doc));
	})
	})
})
