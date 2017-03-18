var mongoose=require("mongoose");
mongoose.connect("mongodb://localhost/mongoose_next");
var User=mongoose.model("User",{
	name:{
		type:String,
		trim:true
	},
	address:{
		type:String,
		set:function(address){
			if (address!=='BEIJING') {
				address="BEIJING";
			};
			return address;
		}
	},
	familyName:{
		type:String,
		get:function(name){
			if (name.indexOf("chen")<0) {
				name="chen";
			};
			return name;
		}
	}
});
var user=new User({
	name:"     sam  ",
	address:"shanghai",
	familyName:"liu"
});
console.log("first is",JSON.stringify(user))
user.save(function(err){
	if (err) {
		console.log("err");
		return ;
	};
	console.log("info is",JSON.stringify(user.familyName));
})