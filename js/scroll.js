var startPosition, endPosition, startTime, endTime, deltaY, flag=false;
var scrollt,
	screen_width= window.screen.width,
	screen_height= window.screen.height;



var str="";
var curr_j="";
for(var j=0;j<5;j++){
	curr_j="movies/"+(j+1)+".mp4";
	str+='<video src='+curr_j+' controls></video>';
}
$(".example").html(str)

for(var j=0;j<5;j++){
	console.log($(".example video").eq(j).css("width"))
}

$(".top").css({"width":screen_width,"height":screen_height});


$(window).resize(function(){
	screen_width= window.screen.width;
	screen_height= window.screen.height;
	console.log(screen_height,screen_width);
	$(".top").css({"width":screen_width,"height":screen_height});
})


$("body").on('touchstart', function (e) {
	scrollt=$("body").scrollTop();
	startTime=e.timeStamp;
	console.log("satrt");
	flag=false;
    var touch = e.touches[0];
    startPosition = {
        x: touch.pageX,
        y: touch.pageY
    }
});

$("body").on('touchmove', function (e) {
	console.log("move")
    var touch = e.touches[0];
    endPosition = {
        x: touch.pageX,
        y: touch.pageY
    }
    deltaY = endPosition.y - startPosition.y;
    
});

$("body").on('touchend', function (e) {
	client_height=parseFloat(screen_height);
	
	endTime=e.timeStamp;
	if(endTime-startTime>=750){
		flag=true;
	}
	console.log("end");
	var curr_scroll=$("body").scrollTop();
	if(flag==false){
    		if(deltaY<0){
    			if(curr_scroll<client_height){
    				$("body").scrollTo({toT:client_height},1000);
    			}
            	
          	}else if(deltaY>0){
          		if(scrollt<=client_height){
          			$("body").scrollTo({toT:0},1000);
          		}
          		
           }  
	}else{
		
		if(curr_scroll<=client_height&&scrollt<=client_height){
			$("body").scrollTo({toT:0},1000);
		}else if(curr_scroll<=client_height&&scrollt>client_height){
			$("body").scrollTo({toT:0},1000);
		}
	}
	
});
	