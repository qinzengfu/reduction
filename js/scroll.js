var startPosition, endPosition, startTime, endTime, deltaY, deltaX, flag=false;
var scrollt,
	screen_width = window.screen.width,
	screen_height= window.screen.height,
	width5       =screen_height*5;

$("body").css("width",screen_width)

$(".top").css({"width":width5+"px","height":screen_height});
$(".top div").css({"height":screen_height,"width":screen_width})


//$(".top video").css({"height":screen_height})

for(var j=0;j<5;j++){
	console.log($(".video-wrap video").eq(j).selector)
	console.log($(".video-wrap video").eq(j).selector[0].readyState);
	console.log($(".video-wrap video").eq(j).selector[0].src);
	console.log($(".video-wrap video").eq(j).selector[0].preload);
	console.log($(".video-wrap video").eq(j)["0"].videoWidth)
}







$(window).resize(function(){
	screen_width= window.screen.width;
	screen_height= window.screen.height;
	console.log(screen_height,screen_width);
})


$("body").on('touchstart', function (e) {
	scrollt=$("body").scrollTop();
	startTime=e.timeStamp;
	flag=false;
    var touch = e.touches[0];
    startPosition = {
        x: touch.pageX,
        y: touch.pageY
    }
});

$("body").on('touchmove', function (e) {
    var touch = e.touches[0];
    endPosition = {
        x: touch.pageX,
        y: touch.pageY
    }
    deltaY = endPosition.y - startPosition.y;
    deltaX = endPosition.x - startPosition.x;
});

$("body").on('touchend', function (e) {
	
	
	client_height=parseFloat(screen_height);
	endTime=e.timeStamp;
	if(endTime-startTime>=750){
		flag=true;
	}
	
	
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
	