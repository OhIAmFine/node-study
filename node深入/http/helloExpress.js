var express=require("express");
var app=express();

app.use(express.static("./public"));


app.get("/",function(req,res){
	res.end("hello express\n");
})

// app.get('/', function(req, res, next){
//   res.end('hello\n');
//   next();
// });
var Router=express.Router();


Router.get("/list",function(req,res){res.end("Router list")});
Router.get("/add",function(req,res){res.end("Router add")});

app.use("/post",Router);


app.route("/article")
	.get(function(req,res){
		res.end("get route");
	})
	.post(function(req,res){
		res.end("post route");
	});

app.param("newId",function(req,res,next,newId){
	req.newId=newId;
	next();
});
app.get("/news/:newId",function(req,res){
	 res.end("newId"+req.newId)
})
app.listen(18001, function afterListen(){
  console.log('express running on http://localhost:18001');
});