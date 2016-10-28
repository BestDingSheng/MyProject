/*
	2015年8月12日14:44:25
	作者：大叔·杨
	目的：为情人节的表白项目提供js支持

*/

(function(){

	window.onload = function(){
		setTimeout(function(){
			$("#loadingCon").hide();
			$("#pageA").addClass("pageAConAnimation");
			$("#audio")[0].play();//开启音乐

		},2500);
		
	}

	//音乐的操控
	function DoMusic(){
		var but   = $("#musicPlay"),
			music = $("#audio")[0];

		but.click(function(){

			if( music.paused ){
				music.play();
			}else{
				music.pause();
			}

		});

		music.addEventListener('play',function(){
			but.addClass('musicPlayAnimation');
		},false);

		music.addEventListener('pause',function(){
			but.removeClass('musicPlayAnimation');
		},false);
			
	}//DoMusic
	DoMusic();


	//利用swiper的滑屏幕
	function SwiperFun(){
		var mySwiper = new Swiper ('.mianSwiper', {
		    direction: 'vertical',
		    onSlideChangeEnd: function(swiper){
		    	DoAnimate(swiper);
		    }
		    
		  });
	}//SwiperFun
	SwiperFun();

	//图片弹出层
	function popImgShow(){

		var obj     = $(".popImgShowNow > li"),//目标事件
			MinPop  = $("#publicPopCon"),//主容器层
			close   = MinPop.find(".popClose"),//关闭按钮
			ImgCon  = $("#popImgList"); 

		obj.click(function(){
			var index      = $(this).index(),
				ImgList    = $(this).parents('.popImgShowNow').find('img'),
				thisHtml   = '<div class="swiper-container PopImages" id="PopImages"><div class="swiper-wrapper" id="popImgList">',
				thisSwiper = null;

				for(var i = 0; i < ImgList.length; i++ ){
					thisHtml += '<div class="swiper-slide"><img src="'+ ImgList[i].src +'"></div>';
				}
				thisHtml += '</div><div class="swiper-pagination"></div></div>'
				MinPop.append(thisHtml);


			setTimeout(function(){
				thisSwiper = new Swiper('.PopImages',{
					initialSlide : index,
					loop: true,
				    // 如果需要分页器
    				pagination: '.swiper-pagination',

				});	
			},500);	

				

				console.log(thisHtml);

			// console.log(ImgList);

			MinPop.show();

		});

		close.click(function(){
			MinPop.hide();
			$("#PopImages").remove();

		});





	}//popImgShow
	popImgShow();



	//滑动调用的方法
	function DoAnimate(swiper){
		var NowIndex = swiper.activeIndex;

		//移除动画
		removeAni();

		//循环判断
		switch(NowIndex){
			case 0 : $("#pageA").addClass("pageAConAnimation");
			break;

			case 1 : $("#HZW").addClass("HzwAnimation");
			break;

			case 2 : $("#loveTime").addClass("loveTimeAnimatiop");
			break;

			case 3 : $("#fishCon").addClass("fishConAnimation");
			break;

			case 4 : $("#merryYou").addClass("merryYouAnimation");
			break;

			case 5 : $("#timeGoCon").addClass("timeGoConAnimation");
			break;

			case 6 : $("#lvxingCon").addClass("lvXingAnimation");
			break;

			case 7 : $("#photoWallCon").addClass("photoWallConAnimation");
			break;

			case 8 : $("#endPage").addClass("endPageAnimation");
			break;
		}


	}

	//移除动画
	function removeAni(){
		$("#pageA").removeClass("pageAConAnimation")
		$("#HZW").removeClass("HzwAnimation");
		$("#loveTime").removeClass("loveTimeAnimatiop");
		$("#fishCon").removeClass("fishConAnimation");
		$("#merryYou").removeClass("merryYouAnimation");
		$("#timeGoCon").removeClass("timeGoConAnimation");
		$("#lvxingCon").removeClass("lvXingAnimation");
		$("#photoWallCon").removeClass("photoWallConAnimation");
		$("#endPage").removeClass("endPageAnimation");

		clearInterval(pageAPeopleA);
		clearInterval(pageAPeopleB);
	}

	//做广播体操
	function pageAGBTC(id){
		var that  = $("#"+id),
			img   = that.find("img"),
			len   = img.length,
			index = 0;

		id = setInterval(function(){
			index++;
			index = index > len - 1 ? 0 :index;
			img.eq(index).show().siblings().hide();
		},500);	

		

	}//pageAGBTC
	pageAGBTC("pageAPeopleA");
	pageAGBTC("pageAPeopleB");

	//页面加载完成


	//每隔5分钟执行
	function audoDo(){
		var auto;

		auto = setInterval(function(){
			window.reload();
		},50000);
	}



})(Zepto)