var express=require("express");
var bodyParser=require("body-parser");

var app=express();
//json 解析
app.use(bodyParser.json());
//query string body
app.use(bodyParser.urlencoded({
	extended:false
}));
//静态文件目录
app.use(express.static(__dirname+"/public"));

// app.get("/",function(req,res){
// 		res.send("hello");
// 	})

app.use("/user",require("./routes/user.js"));
app.listen(80);