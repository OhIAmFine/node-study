var mongoose=require("mongoose");
mongoose.connect("mongodb://localhost/mongoose_next");
var NameSchema=new mongoose.Schema({
	firstName:String,
	lastName:String
});
NameSchema.set("toJSON",{getters:true,virtual:true});
NameSchema.virtual("fullname").get(function(){
	return this.firstName+""+this.lastName;
});
var Person=mongoose.model("Person",NameSchema);
var person=new Person({
	firstName:"chen",
	lastName:"sam"
});
console.log("person.fullname is :",person.fullname);
console.log('JSON is ',JSON.stringify(person));
