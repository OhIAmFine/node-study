var mongoose=require("mongoose");
var url="mongodb://localhost/part9";
mongoose.connect(url);
var BookSchema= new mongoose.Schema({
	name:String,
	author:String,
	publishTime:Date
});
mongoose.model("Book",BookSchema);
