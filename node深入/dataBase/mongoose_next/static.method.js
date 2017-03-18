var mongoose=require("mongoose");
mongoose.connect("mongodb://localhost/mongoose_next");
var BookSchema=new mongoose.Schema({
	name:String,
	isbn:Number
});
BookSchema.statics.findIsbn=function(isbn,cb){
	this.findOne({isbn:isbn},function(err,doc){
		
		cb(err,doc);
	})
};
BookSchema.methods.print=function(){
	console.log("print method");
	console.log("this name ",this.name);
	console.log("this isbn ",this.isbn);

}
var Book=mongoose.model("Book",BookSchema);
var book=new Book({
	name:"sam",
	isbn:12345
});
book.save(function(err){
		if (err) {
			console.log("err");
			return ;
		};

Book.findIsbn(12345,function(err,doc ){
	console.log("isbn is",JSON.stringify(doc));
});
book.print();
})
