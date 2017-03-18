function Person(){
	this.dealyTime=function(cb){
		setTimeout(function(){console.log("pass 5seconds");cb()},5000);
	}
	this.nowTime=function(){console.log("异步执行");}
}
var person=new Person();
person.dealyTime(function(){console.log("同步")});
person.nowTime();
console.log("body is here");
