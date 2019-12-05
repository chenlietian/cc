/*
* @Author: lie
* @Date:   2019-11-25 09:50:34
* @Last Modified by:   lie
* @Last Modified time: 2019-11-29 15:14:26
*/
		$(function(){

		var w=$(window).width();
		console.log(w)
		$('.banner ul li img').css('width', w+'px');
		var n=0;
		//小长方形事件
		$('.banner ol li').mouseover(function(event) {
		n=$(this).index();
		$('.banner ul').stop().animate({'margin-left':-n*w+'px'},1000);
		$(this).addClass('current').siblings().removeClass('current');
		});

		// left按钮
		$('.left').click(function(event){
		n++;
		if(n==5){
			$('.banner ol li').eq(0).addClass('current').siblings().removeClass('current');	
		}
		if(n>5){
			$('.banner ul').css('margin-left','0px');
			n=1;
		}
		$('.banner ul').stop().animate({'margin-left':-n*w+'px'}, 1000);
		$('.banner ol li').eq(n).addClass('current').siblings().removeClass('current');
		})
		// right按钮
		$('.right').click(function(event) {
				n--;
				if(n==-1||n==0){
					$('.banner ol li').eq(0).addClass('current').siblings().removeClass('current');
				}

				if(n<0){
					$('.banner ul').css('margin-left', -4*w+'px');
					n=4;
				}
				$('.banner ul').stop().animate({'margin-left':-n*w+'px'}, 500);
				$('.banner ol li').eq(n).addClass('current').siblings().removeClass('current');
			});

		// 自动轮播
		var time;
		function go(){
			clearInterval(time);
			time=setInterval(function(){
				n++;
				if(n==5){
					$('.banner ol li').eq(0).addClass('current').siblings().removeClass('current');	
				}
				if(n>5){
					$('.banner ul').css('margin-left','0px');
					n=1;
				}
				$('.banner ul').stop().animate({'margin-left':-n*w+'px'}, 1000);
				$('.banner ol li').eq(n).addClass('current').siblings().removeClass('current');
			},4000)
		}
		go();
		$('.banner').hover(function() {
			/* Stuff to do when the mouse enters the element */
			clearInterval(time)
		}, function() {
			/* Stuff to do when the mouse leaves the element */
			go();
		});

			// 登陆模态框

			$('.logobtn').click(function(){
				clearInterval(time)
				var a='<div></div>'
				a=$(a).addClass('wrap')
				$('body').append(a)
				var b='<div class="box"></div>'
				b=$(b)
				$('.wrap').append(b)
				var c='<span>x</span>'
				$('.box').append($(c))
				var d='<p><input type="text" placeholder="手机号/邮箱"></p>'
				$('.box').append($(d))
				var e='<p><input type="password" placeholder="密码""></p>'
				$('.box').append($(e))
				var f='<p><input type="submit" value="登录" ></p>'
				$('.box').append($(f))
				var g='<div class="link"><p>第三方账号登录</p><ul><li><img src="images/weibo.png" alt=""></li><li><img src="images/wechat.png" alt=""></li><li><img src="images/qq.png" alt=""></li></ul></div>'
				$('.box').append($(g))


			$('span').click(function(){
			$('.wrap').remove();
			go();
			
		})
			return false;
		})

			// 侧边导航
			$(window).scroll(function(){
			var h=$(window).scrollTop()
			console.log(h)
			if(h>500){
				$('.topbtn').fadeIn(1000)
			}else{
				$('.topbtn').fadeOut(1000)
			}
		})
			$('.topbtn').click(function(){
				$('html,body').animate({'scrollTop':0+'px'},1000)
			})


			// service部分
			$('.lis .title li').mouseover(function(){
				var n=$(this).index();
				$('.lis .title li a').removeClass('active')
				$('.lis .on').eq(n).show().siblings('.lis .on').hide();
			})


			// 留言板部分
			$('textarea').focus(function(){
						 this.value='';
						});

						$('button').click(function(){ 
						 val=$('textarea').val();
						 str="<div class='show1'>";
						 str+="<div class='close'>&times;</div>";
						 str+=val;
						 str+="</div>";
						 $('.main').append(str);

						 $('.close').click(function(){
							    $(this).parent().hide(1000);						    
						 });


						});
	
	});