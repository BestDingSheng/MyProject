//水波滑动
var _speed=10;
var _slide = $("#slide");
var _slideli1 = $(".slideli1");
var _slideli2 = $(".slideli2");
_slideli2.html(_slideli1.html());
function Marquee(){
	if(_slide.scrollLeft() >= _slideli1.width()){
		_slide.scrollLeft(0);
	}
	else{
		_slide.scrollLeft(_slide.scrollLeft()+1);
	}
}

//水滴低落
function waterMustDrip(){
  $('.filter .type-must').animate({top:"1000px"},8500).animate({top:"+=100",opacity:"0"},1000);
  $('.filter .type-must').animate({top:"0px",opacity:"1"},1);
  setTimeout(waterMustDrip,5000);
}

function waterMoreDrip(){
  $('.filter .type-more').animate({top:"900px"},7900).animate({top:"+=100",opacity:"0"},1000);
  $('.filter .type-more').animate({top:"50px",opacity:"1"},1);
  setTimeout(waterMoreDrip,5000);
}

function waterLittleDrip(){
  $('.filter .type-little').animate({top:"600px"},8000).animate({top:"+=100",opacity:"0"},1000);;
  $('.filter .type-little').animate({top:"35px",opacity:"1"},1);
  setTimeout(waterLittleDrip,5000);
}
function waterSmallDrip(){
  $('.filter .type-small').animate({top:"300px",opacity:"0"},8000).animate({top:"+=100",opacity:"0"},1000);;
  $('.filter .type-small').animate({top:"8px",opacity:"1"},1);
  setTimeout(waterSmallDrip,5000);
}

//转盘
function rnd(n, m){
	return Math.floor(Math.random()*(m-n+1)+n)
}


//计算弹框的top值。
function alert_top(){
	var alert_top = parseInt($(window).height())/2 -133;
	$('.la-content').css('top',alert_top);
}
/*$(window).scroll(function() {
	var right_top = $(window).scrollTop() +285;
	//console.log(right_top);
	$('.right').css('top',right_top);
	alert_top();
})*/
var flag=true;
function clickTwoMenu (obj){
	if(obj.parents('li').index()==4){		
		obj.parents('ul').find('li').removeClass('hover');
		if(flag){
			//obj.parents('li').addClass('hover');
			obj.parents('li').find('ul.t-menu-child').show();
			obj.parents('li').next().css('margin-left','-310px');
			flag=false;
		}else{
			obj.parents('li').next().css('margin-left','-190px');
			obj.parents('li').find('ul.t-menu-child').hide();
			flag=true;
		}			
	}	
}

$(function(){
	
	//菜单切换之一级菜单

	//菜单切换之二级菜单展示
	$('.t-menu>li>map area').bind('mousedown',function(){
		clickTwoMenu($(this));
	});
	$('.t-menu>li>a').bind('mousedown',function(){
		clickTwoMenu($(this));
		
	});
	

	//菜单切换之二级菜单切换
	$('.t-menu-child li a').hover(function(){
		$(this).addClass('a_hover');
	},function(){
		$(this).removeClass('a_hover');
	});
	$('.t-menu-child li area').hover(function(){
		$(this).parents('li').find('a').addClass('a_hover');
	},function(){
		$(this).parents('li').find('a').removeClass('a_hover');
	});
	//水滴低落
	$('.filter .type-must').animate({top:"0px"},500, waterMustDrip); 
	$('.filter .type-more').animate({top:"50px"},500, waterMoreDrip); 
	$('.filter .type-little').animate({top:"35px"},500, waterLittleDrip); 
	$('.filter .type-small').animate({top:"8px"},500, waterSmallDrip); 
	
	//滴入瓶子的水滴定位
	var waterLeft=($('.body').width()-6)/2;
	//alert(waterLeft);
	$('.type-must').css('left',waterLeft);
	
	//水波滑动
	var sliding=setInterval(Marquee,_speed);
	_slide.hover(function() {
		//鼠标移动DIV上停止
		clearInterval(sliding);
		$('#bottom-filter').slideDown();
		$(this).hide();
		
	},function(){
		//离开继续调用
		sliding=setInterval(Marquee,_speed);
	});
	$('#show-bottom').mouseout(function(){
		_slide.show();
		$('#bottom-filter').slideUp();
	});
	//水波弹层
	var _left=$(window).width()-$('#bottom-filter').outerWidth();
	$('#bottom-filter').css('left',_left/2);
	
	//点击水波上移半版
	$('#slide').bind('click',function(){
		if($(window).scrollTop()>=1200){
			$('body,html').animate({scrollTop: 450});
		}
	});
	
	//回到顶部滚动效果
	$('.right-top').on('click', function(event){
		event.preventDefault();
		$('body,html').animate({scrollTop: 0});
	});
//转盘
	var rotateTimeOut = function (){
		$('.ltr-up').rotate({
			angle:0,
			animateTo:2160,
			duration:8000,
			callback:function (){
				alert('网络超时，请检查您的网络设置！');
			}
		});
	};
	var bRotate = false;

	var rotateFn = function (awards, angles, txt){
		bRotate = !bRotate;
		$('.ltr-up').stopRotate();
		$('.ltr-up').rotate({
			angle:0,
			animateTo:angles+1800,
			duration:3000,
			callback:function (){
				bRotate = !bRotate;
			}
		})
	};

	$('.cycle').click(function () {
	    if (bRotate) return;
	    var item = rnd(0, 7);

	    switch (item) {
	        case 0:
	            //var angle = [26, 88, 137, 185, 235, 287, 337];
	            rotateFn(0, 330, '请再试试');
	            break;
	        case 1:
	            //var angle = [88, 137, 185, 235, 287];
	            rotateFn(1, 30, '小米智能手环');
	            break;
	        case 2:
	            //var angle = [137, 185, 235, 287];
	            rotateFn(2, 90, '麦开智能水杯');
	            break;
	        case 3:
	            //var angle = [137, 185, 235, 287];
	            rotateFn(3, 150, 'iPhone6 plus 16G');
	            break;
	        case 4:
	            //var angle = [185, 235, 287];
	            rotateFn(4, 210, '小米智能手环');
	            break;
	        case 5:
	            //var angle = [235, 287];
	            rotateFn(5, 270, '小米智能手环');
	            break;
	        case 6:
	            //var angle = [287];
	            rotateFn(6, 350, 'iPhone6 plus 16G');
	            break;
	    }

	});
	//$('.cycle').click(function () {
	//    if (bRotate) return;
	//    var parms = new Object();
	//    parms["source"] = 1;//sourceid来源编号 1：电脑版  2 : 微信版  3 : (WAP版)
	//    Ajax.post("/UCenter/APIPointLucky", parms, false, LuckyResponse);
	//});

    //反馈信息
	//function LuckyResponse(data) {
	//    if (data == "nologin") {
	//        location.href = "/Account/Login?returnUrl=" + encodeURIComponent(window.location.href);
	//        return false;
	//    }

	//    var result = eval("(" + data + ")");
	//    var item;
	//    if (result.state == "-1") {
	//        showMessage(result.content);
	//        return false;
	//    }
	//    else if (result.state == "0") {
	//        item = rnd(7, 12);
	//        showMessage("未中奖，感谢您的参与！");
	//        return false;
	//    } else if (result.state == "5") {
	//        item = rnd(5, 6);
	//        showMessage("恭喜您，抽中昆仑峰汇60积分！");
	//        return false;
	//    } else if (result.state == "1") {
	//        item = result.state;
	//        window.setInterval(function () {
	//            showMessage("恭喜您，抽中iPhone 6 Plue 16G！", function () { location.href = "/Point/LuckySaveInfo.html?id=" + result.state });
	//        }, 3000);
	//        return false;
	//    } else if (result.state == "2") {
	//        item = result.state;
	//        window.setInterval(function () {
	//            showMessage("恭喜您，抽中iPhone 6 16G！", function () { location.href = "/Point/LuckySaveInfo.html?id=" + result.state });
	//        }, 3000);
	//        return false;
	//    } else if (result.state == "3") {
	//        item = result.state;
	//        window.setInterval(function () {
	//            showMessage("小米智能手环！", function () { location.href = "/Point/LuckySaveInfo.html?id=" + result.state });
	//        }, 3000);
	//        return false;
	//    } else if (result.state == "4") {
	//        item = result.state;
	//        window.setInterval(function () {
	//            showMessage("麦开智能水杯！", function () { location.href = "/Point/LuckySaveInfo.html?id=" + result.state });
	//        }, 3000);
	//        return false;
	//    }

	//    switch (item) {
	//        case 1:
	//            //var angle = [26, 88, 137, 185, 235, 287, 337];
	//            rotateFn(1, 150, 'iPhone6 plus 16G');
	//            break;
	//        case 2:
	//            //var angle = [88, 137, 185, 235, 287];
	//            rotateFn(2, 330, 'iPhone6');
	//            break;
	//        case 3:
	//            //var angle = [137, 185, 235, 287];
	//            rotateFn(3, 270, '小米智能手环');
	//            break;
	//        case 4:
	//            //var angle = [137, 185, 235, 287];
	//            rotateFn(4, 90, '麦开智能水杯');
	//            break;
	//        case 5:
	//            //var angle = [185, 235, 287];
	//            rotateFn(5, 210, '60积分');
	//            break;
	//        case 6:
	//            //var angle = [235, 287];
	//            rotateFn(6, 30, '60积分');
	//            break;
	//        case 7:
	//            //var angle = [287];
	//            rotateFn(7, 0, '明天再来');
	//            break;
	//        case 8:
	//            //var angle = [287];
	//            rotateFn(8, 60, '明天再来');
	//            break;
	//        case 9:
	//            //var angle = [287];
	//            rotateFn(9, 120, '明天再来');
	//            break;
	//        case 10:
	//            //var angle = [287];
	//            rotateFn(10, 180, '明天再来');
	//            break;
	//        case 11:
	//            //var angle = [287];
	//            rotateFn(11, 240, '明天再来');
	//            break;
	//        case 12:
	//            //var angle = [287];
	//            rotateFn(12, 300, '明天再来');
	//            break;
	//    }

	//    console.log(item);
	//}
	
	//弹框关闭
	$('.la-close').click(function(){
		$(this).parents('.la-content').hide().parent().hide();
	})
	
	alert_top();
	
	//水流hover事件
	/*$('#slide').bind('mouseover',function(){
		var b_top=$(window).width()-$('.bottom').outerWidth();
		//alert(b_top);
		$('.bottom').css({
			display:'block',
			bottom:0,
			left:b_top/2,
			zIndex:9999
		});
		
	}).bind('mouseout',function(){
		$('.bottom').removeAttr('style');
	});*/
	
	var twoFlag=1;
	$('.jf-click').click(function(){
		if(twoFlag==1){
			$('.lm-menu-two').animate({top:"42px",opacity:"1"});
			$(this).addClass('hover');
			twoFlag=2;
		}else{
			$('.lm-menu-two').animate({top:"0",opacity:"0"});
			$(this).removeClass('hover');
			twoFlag=1;
		}
	})
	$('.lm-menu-left li').click(function(){
		$(this).parent().find('.cur').removeClass('cur');
		$(this).addClass('cur')	;
		$('.lm-middle>div').hide().eq($(this).index()).show();
	})
	
	//banner滚动
	  var bannerLength = $('.blid-list a').length;	  
	  $('.blid-list a').click(function(){
			 window.clearTimeout(timer);
			 $('.blid-list a').removeClass('cur');
			 $(this).toggleClass('cur');
			 thisImg = $(this).attr('img');
			 $('.bli-list').css('background','url("'+ thisImg +' ")  no-repeat center 0');
			 $('.banner2').animate({opacity:0},1000,function(){   $('.banner').css('background-image','url("'+ thisImg +'")').fadeTo("slow", 1000)})
			 thisIndex = $(this).index()+1>=bannerLength ? 0 :  $(this).index()+1
			 timer = window.setTimeout( "$('.blid-list a').eq(thisIndex).trigger('click') ", 3000  )
	})
	//自动调用banner，case滚动
	timer = window.setTimeout( "$('.blid-list a').eq(1).trigger('click')"  , 3000  )
	
});


;jQuery(function( $ ){
	//返回
	$('.backBtn').click(function(){
		window.history.go(-1);
	});
		
	$('.zhu_nav li').hover(function(){
		
		$(this).find('.sun_nav').show();
		
	},function(){
		
		$(this).find('.sun_nav').hide();
		
	});
	
	$('.t-nav .btn_show').hover(function(){

		$('.btn_vip').css('marginLeft',-233);
		$('.btn_star').css('marginLeft',-272);
		$('.btn_pp').css('marginLeft',-351);
		$('.btn_jf').css('marginLeft',-311);
		
	},function(){
		
		$('.t-nav .zhu_nav li').removeAttr('style');
		
	});
	
	
	$('.t-nav .btn_vip').hover(function(){

		$('.btn_star').css('marginLeft',-272);
		$('.btn_pp').css('marginLeft',-351);
		$('.btn_jf').css('marginLeft',-311);
		
	},function(){
		
		$('.t-nav .zhu_nav li').removeAttr('style');
		
	});
	
	 $('.t-nav .btn_jf').hover(function(){

	 	$('.btn_pp').css('marginLeft',-351);
		
	 },function(){
		
	 	$('.t-nav .zhu_nav li').removeAttr('style');
		
	 });
	
	
	//$('.sun_nav').css({top:"0",opacity:"0"});
	$('.sun_nav li:last-child').find('.sep').css('display','none');
	$('.sun_nav li:last-child').css('width',88);
	$('.t-nav .sun_nav li:last-child').css('width',158);
	$('.lucky-main-list .table li span:last-child,.first-tr li span:last-child').css('border','none')
	$('.lucky-main-list .table li:even').css('background','#a7dafc');
	

	
	//弹层	
	function layerThiny(btnObj,layerId,btnClose){
		
		$(btnObj).bind('click',function(){
			
			$(layerId).show();
			
			$('.lucky-alert').show();
			
			
		});
		
		$(btnClose).bind('click',function(){
			
			$(this).parents('.la-content').hide();
			
			$('.lucky-alert').hide();	
			
		});
		
	};
	
});

function fileChane(){
	
	$('.btn_file').change(this);
	
};

$('.user_img_ly dt').bind('click',function(){
	
	fileChane();
	
});
$('.tab_small_img li').mouseover(function(){
		var index =$(this).index();
		$(this).addClass('active').siblings().removeClass('active');
		$('.tab_big_img li').eq(index).addClass('active').siblings().removeClass('active');
		$('.online2_box .s_content_online2').eq(index).addClass('online2_acitve').siblings().removeClass('online2_acitve');
		
	})

	!$('#gundiv')[0]||(function(){

			$(function() {
				var glen = $("#gundiv ul li").length;
				$("#gundiv ul").css("width",275 * (glen));
				$("#gundiv li").hover(function(){$("#gundiv li").removeClass("zslion");$(this).addClass("zslion");},function(){$(this).removeClass("zslion");})
			});
			$("#zsgun").hScrollPane({
				mover:"ul",
				moverW:function(){return $("#zsgun li").length*275-17;}(),
				showArrow:true,
				handleCssAlter:"draghandlealter"
			});
			
			$(function() {
				var glen = $("#gundiv_13 ul li").length;
				$("#gundiv_13 ul").css("width",275 * (glen));
				$("#gundiv_13 li").hover(function(){$("#gundiv_13 li").removeClass("zslion");$(this).addClass("zslion");},function(){$(this).removeClass("zslion");})
			});
			$("#zsgun_13").hScrollPane({
				mover:"ul",
				moverW:function(){return $("#zsgun_13 li").length*275-17;}(),
				showArrow:true,
				handleCssAlter:"draghandlealter"
			});
			$(function() {
				var glen = $("#gundiv_14 ul li").length;
				$("#gundiv_14 ul").css("width",275 * (glen));
				$("#gundiv_14 li").hover(function(){$("#gundiv_14 li").removeClass("zslion");$(this).addClass("zslion");},function(){$(this).removeClass("zslion");})
			});
			$("#zsgun_14").hScrollPane({
				mover:"ul",
				moverW:function(){return $("#zsgun_14 li").length*275-17;}(),
				handleCssAlter:"draghandlealter"
			});

	})();

//hScrollPane
/*$(".container").hScrollPane({
	mover:"ul",
	moverW:function(){return $(".container li").length*178;}(),
	showArrow:true,
	handleCssAlter:"draghandlealter",
	mousewheel:{moveLength:207}
});

$(function(){

	var img=new Image();
	var imgshowobj=$(".imgshow");
	var imgzoom=imgshowobj.find(".imgzoom");

	imgshowobj.find(".thumblist").find("div a").live("click",function(){
		
		imgzoom.find(".loading").show();
		img.onload=function(){
			imgzoom.find("img").attr("src",img.src);
			imgzoom.find(".loading").hide();
		}
		img.src=$(this).attr("href");
		$(".thumblist li div a").parent().removeClass("current");
		$(this).parent().addClass("current");
		return false;
	});
	
});	
*/