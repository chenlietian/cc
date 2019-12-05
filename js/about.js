/*
* @Author: lie
* @Date:   2019-11-29 15:25:40
* @Last Modified by:   lie
* @Last Modified time: 2019-11-30 20:47:14
*/
$(function(){
	var n=0;
	var time;
	$('.screen1 .title').removeClass('no');
	$('.screen1 .title .txt .lfbt').addClass('onlfbt');
	$('.screen1 .title .txt .ritp').addClass('onritp');


	$('.aside li').click(function(event) {
		$(this).addClass('current').siblings('li').removeClass('current');
		n=$(this).index();
		$('section').animate({'top':-100*n+'%'}, 500)
		$('section>div').eq(n).children('.title').removeClass('no').parent().siblings().children('.title').addClass('no')
	});


	$(document).mousewheel(function(e,d){
		
		clearTimeout(time);
		time=setTimeout(function(){
			n=n-d
			if(n>2){n=2}
			if(n<0){n=0}
			$('section').animate({'top':-100*n+'%'},500)
			$('.aside li').eq(n).addClass('current').siblings('li').removeClass('current');
			$('section>div').eq(n).children('.title').removeClass('no').parent().siblings().children('.title').addClass('no')
		},500)
	})




      var imgL=$('div.pic .box').size();
      var deg=360/imgL;//每张图片需要旋转的角度
      var roY=0,roX=0;//定义父盒子旋转初始值
      var xN,yN;//定义当前点击处的坐标和前一坐标的距离差
      var play;//定义定时器
      $('div.pic .box').each(function(i){
          $(this).css({"transform":"rotateY("+i*deg+"deg) translateZ(350px)"});
          $(this).attr("ondragstart","return false");//每张图片都禁止拖拽
      })
      $(document).mousedown(function(ev) {
        clearInterval(play);
      //获取当前点击处的坐标
        var x_=ev.clientX;
        var y_=ev.clientY;
        $(this).bind("mousemove",function(ev){
      //获取移动后的坐标
        var x=ev.clientX;
        var y=ev.clientY;
        //获取移动后，当前坐标和前一坐标的距离差
        xN=x-x_;
        yN=y-y_;
        //将距离差转变为容器旋转的数值
        roY+=xN*0.2;
        roX-=yN*0.1;
        /*$("body").append("<div style='background:red;width:5px;height:5px;position:absolute;top:"+y+"px;left:"+x+"px;'></div>");
  此处为方便看到效果*/
        $("div.pic").css({
          "transform":"perspective(800px) rotateY("+roY+"deg) "
        });
        //将移动后的点设为前一点存放到x_,y_变量中
        x_=ev.clientX;
        y_=ev.clientY;
      })
      }).mouseup(function(){
        $(this).unbind("mousemove");
        //鼠标抬起时候，实现惯性缓冲效果
        play=setInterval(function(){
        //将距离插值慢慢变小，实现惯性缓冲
        xN*=0.95;
        yN*=0.95;
        //向左拖动的时候，当前点与前一点的距离差是负值的，要取绝对值
        //停止惯性
        if(Math.abs(xN)<1&&Math.abs(yN)<1){
          clearInterval(play);
        }
        //将距离差转为旋转角度
        roY+=xN*0.2;
        roX-=yN*0.1;
        $("div.pic").css({
          "transform":"perspective(800px) rotateY("+roY+"deg) "
        });
      },30);


    })


    $('div.pic .box').hover(function() {
       	 $(this).css({
       	 	width: '156px',
       	 	height: '234px'
       	 },500);
       }, function() {
       	 $(this).css({
       	 	width: '',
       	 	height: ''
       	 },500);
       });


    // section .screen3 .wrap ul li 部分
    $('.screen3 .wrap ul li').mouseenter(function(event) {

    	let n = $(this).index();
    	var timer=setTimeout(function(){
  		$('.screen3 .wrap ul li .bgopacity').eq(n).slideDown(1000).siblings().hide;
		},1000);
    	
    	$(this).css({
    		width: '375px',
    		height: '600px',
    		backgroundColor:'rgba(0,0,0,0.5)'
    	});
    	$('.screen3 .wrap ul li .text').eq(n).css({
    		width: '375px',
    		height: '150px',
    		marginTop:'225px'
    	});
    	var time1=setTimeout(function(){
  		$('.screen3 .wrap ul li .text').eq(n).css('marginTop', '50px');
		},1000);


        $('.screen3 .wrap ul li').mouseleave(function(event) {
    	let n = $(this).index();
    	clearTimeout(timer);
  		$('.screen3 .wrap ul li .bgopacity').eq(n).hide();
    	$(this).css({
    		width: '',
    		height: '',
    		backgroundColor:''
    	});
    	$('.screen3 .wrap ul li .text').eq(n).css({
    		width: '250px',
    		height: '100px',
    		marginTop:'150px'
    	});
    	clearTimeout(time1);
    	$('.screen3 .wrap ul li .text').eq(n).css('marginTop', '')
        });
    	
  });

   




});


