// JavaScript Document
$(function(){
	//顶部搜索切换
	(function(){
		var aLi=$('#menu li');
		var oText=$('#search').find('.form .text');
		var arrText = [
			'例如：荷棠鱼坊烧鱼 或 樱花日本料理',
			'例如：昌平区育新站龙旗广场2号楼609室',
			'例如：万达影院双人情侣券',
			'例如：东莞出事了，大老虎是谁？',
			'例如：北京初春降雪，天气变幻莫测'
		];
		var iNow=0;
		oText.val(arrText[iNow]);
		aLi.each(function(index){
			$(this).click(function(){
				aLi.attr('class','gradient');
				$(this).attr('class','active');
				iNow=index;
				oText.val(arrText[index]);
			})	
		})
		
		//搜索框焦点的得失
		oText.focus(function(){
			if($(this).val()==arrText[iNow]){
				$(this).val('');	
			}
		});
		oText.blur(function(){
			if($(this).val()==''){
				oText.val(arrText[iNow]);
			}
		});
	})();
	
	//updata文字滚动
	(function(){
		var oUpdate=$('.update');
		var oUl=$('.update ul');
		var iH=0;
		var arrData = [
			{ 'name':'萱萱', 'time':4, 'title':'那些灿烂华美的瞬间', 'url':'http://www.baidu.com' },
			{ 'name':'畅畅', 'time':5, 'title':'广东3天抓获涉黄疑犯', 'url':'http://www.baidu.com' },
			{ 'name':'琳琳', 'time':6, 'title':'国台办回应王郁琦', 'url':'http://www.baidu.com' },
			{ 'name':'晨晨', 'time':7, 'title':'那些灿烂华美的瞬间', 'url':'http://www.baidu.com' },
			{ 'name':'玲玲', 'time':8, 'title':'那些灿烂华美的瞬间', 'url':'http://www.baidu.com' },
			{ 'name':'慧慧', 'time':9, 'title':'广东3天抓获涉黄疑犯', 'url':'http://www.baidu.com' },
			{ 'name':'球球', 'time':10, 'title':'国台办回应王郁琦', 'url':'http://www.baidu.com' },
			{ 'name':'莹莹', 'time':11, 'title':'那些灿烂华美的瞬间', 'url':'http://www.baidu.com' }
		];
		var str='';
		var upBtn=$('#upBtn');
		var downBtn=$('#downBtn');
		var iNow=0;
		var timer=null;
		for(var i=0;i<arrData.length;i++){
			str+='<li><a href="'+arrData[i].url+'"><strong>'+arrData[i].name+'</strong> <span>'+arrData[i].time+'分钟前</span> 写了一篇新文章:'+arrData[i].title+'</a></li>'
		}
		oUl.html(str);
		iH=oUl.find('li').height();
		
		upBtn.click(function(){
			doMove(-1);
		});
		downBtn.click(function(){
			doMove(1);
		});
		function doMove(n){
			iNow+=n;
			if(Math.abs(iNow)>arrData.length-1){
				iNow=0;
			}
			if(iNow>0){
				iNow=-(arrData.length-1)
			}
			oUl.stop().animate({'top':iNow*iH},2200,'elasticOut');	
		};
		function autoPlay(){
			timer=setInterval(function(){
				doMove(-1);
			},2200)
		};
		autoPlay();
		
		oUpdate.hover(function(){
			clearInterval(timer);
			},function(){
			autoPlay()	
			})
	})();	
	
	//封装选项卡
	(function(){
		tab($('.tabNav1'),$('.tabCon1'),'click');
		tab($('.tabNav2'),$('.tabCon2'),'click');
		tab($('.tabNav3'),$('.tabCon3'),'mouseover');
		tab($('.tabNav4'),$('.tabCon4'),'mouseover');
		
		function tab(oNav,aCon,sEvent){
			var aEle=oNav.children();
			aCon.hide().eq(0).show();
			aEle.each(function(index){
				$(this).on(sEvent,function(){
					aEle.removeClass('active').addClass('gradient');
					$(this).removeClass('gradient').addClass('active');
					aEle.find('a').attr('class','triangle_gray');
					$(this).find('a').attr('class','triangle_down');
					aCon.hide().eq(index).show();
				})	
			})
			
		};
	})();
	
	//焦点图自动轮播
	(function(){
		var oDiv=$('#fade');
		var aUlLi=oDiv.find('ul li');
		var aOlLi=oDiv.find('ol li');
		var oP=oDiv.find('p');
		var arrText=['爸爸去哪儿？','人物摄影中的光影感','娇柔妩媚，大方漂亮'];
		var iNow=0;
		var timer=null;
		
		fade();
		autoPlay()
		aOlLi.click(function(){
			iNow=$(this).index();
			fade();
		});
		function fade(){
			aUlLi.each(function(i){
				if(i!=iNow){
					aUlLi.eq(i).fadeOut().css('zIndex',1);
					aOlLi.eq(i).removeClass('active');	
				}else{
					aUlLi.eq(i).fadeIn().css('zIndex',2);
					aOlLi.eq(i).addClass('active');	
				};
				oP.text(arrText[iNow]);
			})
		};
		function autoPlay(){
			timer=setInterval(function(){
				iNow++;
				iNow%=arrText.length;
				fade();		
			},2000)
		}
	oDiv.hover(function(){
		clearInterval(timer);
	},function(){
		autoPlay();	
		})	
	})();
	
	//日历提示说明
	(function(){
		var aSpan=$('.calendar h3 span');
		var aImg=$('.calendar ol li img');
		var oRemind=$('.today_info');
		var oPic=oRemind.find('img');
		var oStrong=oRemind.find('strong');	
		var oP=oRemind.find('p');
		
		aImg.hover(function(){
			var iTop=$(this).parent().position().top-30;
			var iLeft=$(this).parent().position().left+50;
			var index=$(this).parent().index()%aSpan.size()
			
			oRemind.show().css({'top':iTop,'left':iLeft});
			oP.text($(this).attr('info'));
			oPic.attr('src',$(this).attr('src'));
			oStrong.text(aSpan.eq(index).text());
			$(this).addClass('active');		
		},function(){
			oRemind.hide();
			aImg.removeClass('active')
		});
		
	})();
	
	//BBS高亮显示
	(function(){
		$('.bbs ol li').mouseover(function(){
			$('.bbs ol li').removeClass('active').eq($(this).index()).addClass('active');	
		})
		
	})();
	
	//HOT鼠标提示效果
	(function(){
		
	})();
	
	//HOT鼠标提示效果
	(function(){
		var arr = [
			'',
			'用户1<br />人气1',
			'用户名：来自星星的你<br />区域：朝阳CBD<br />人气：3241',
			'用户3<br />人气3',
			'用户4<br />人气4',
			'用户5<br />人气5',
			'用户6<br />人气6',
			'用户7<br />人气7',
			'用户8<br />人气8',
			'用户9<br />人气9',
			'用户10<br />人气10'
		];
		$('.hot_area ul li').mouseover(function(){
			if($(this).index()==0) return;
			$('.hot_area ul li p').remove();
			$(this).append('<p style="width:'+($(this).width()-12)+'px;height:'+($(this).height()-12)+'px;">'+arr[$(this).index()]+'</p>');
		})	
	})();
})