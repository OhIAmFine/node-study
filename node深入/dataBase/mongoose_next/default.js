var mongoose=require("mongoose");
mongoose.connect("mongodb://localhost/mongoose_next");
var UserSchema=new mongoose.Schema({
	username:{
		type:String,
		default:"sam"
	},
	userTime:{
		type:Date,
		default:new Date()
	}
});
 var User=mongoose.model("User",UserSchema);
// var user=mongoose.model("User");
var user=new User();
console.log("user is",JSON.stringify(user));