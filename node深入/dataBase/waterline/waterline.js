var Waterline=require("waterline");
var mysqlAdapter=require("sails-mysql");
var mongoAdapter=require("sails-mongo");
//适配器
var adapters={
	mongo:mongoAdapter,
	mysql:mysqlAdapter,
	default:"mongo"
}
//连接
var connections={
	mongo:{
		adapter:"mongo",
		url:"mongodb://localhost/waterline"
	},
	mysql:{
		adapter:"mysql",
		url:"mysql://localhost/waterlinesample"
	}
};
//数据对象
var User=Waterline.Collection.extend({
	identity:"user",
	connection:"mongo",
	schema:true,
	attributes:{
		 username:{
		 	type:"string",
		 	required:true
		 },
		 birthday:{
		 	type:"date",
		 	after:new Date("1990-01-10"),
		 	before:function(){
		 		return new Date();
		 	}
		 },
		 createTime:{
		 	type:"date"
		 }
	},
	beforeCreate:  function(value,cb){
		value.createTime=new Date();
		return cb();
	}
});
//连接配置
var config={
	adapters:adapters,
	connections:connections
}
//连接数据对象
var orm=new Waterline();
orm.loadCollection(User);
//初始化
orm.initialize(config,function(err,models){
	if (err) {
		return console.error("error",err);
	};
	console.log("models",models);
	//数据实例
	models.collections.user.create({
		username:"sam"
	},function(err,user){
		console.log("after user create",err,user);
	})
});