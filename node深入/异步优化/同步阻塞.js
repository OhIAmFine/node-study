function delayTime(){
	var thisTime=new Date();
	var pos=0;
	while(pos<5000){
		var delay=new Date;
		pos=delay-thisTime;
	}
	console.log("time pass 5 seconds");
};
delayTime();