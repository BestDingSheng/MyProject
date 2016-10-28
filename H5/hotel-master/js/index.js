


$(function(){


	//首页背景和动画
	$(window).load(function(){
		var index = 0,
			allBg = 3;

		//首页动画
		$("#IndexMainCon").addClass('IndexMainConAni');


		//背景渐变调用
		function DoBg(){
			setTimeout(function(){
				index = index < allBg? index : 0;
				showBg(index);
				index++;
				DoBg();
			},4000);
			
		}//DoBg
		DoBg();

		//改变背景，接受当前值
		function showBg(url){
			var con   = $("#indexChangeBg"),
				but   = $('#indexBgBut > span'),
				Img   = '<img src="images/index/indexBG'+ url +'.jpg">';

			con.find('img:first').before(Img);

			$(Img).load(function(){
				con.find('img:not(img:first)').addClass('opacityZero');
				but.eq(url).addClass('active').siblings().removeClass('active');
				setTimeout(function(){
					con.find('img:not(img:first)').remove();
				},1100);
				
			});
		}//showBg


		//初始化最外层容器的宽高

		var W = document.documentElement.clientWidth;
			H = document.documentElement.clientHeight;

		$('#IndexMainCon').css({
			'width':W,
			'height':H
		});	


	});


	// 新闻页面，轮播图
	function newsBanner(){
		var mySwiper = new Swiper ('.swiper-container', {
		    loop: true,
		    autoplay : 4000,
		    autoplayDisableOnInteraction : false,
		    // 如果需要分页器
		    pagination: '.swiper-pagination',
		  })  
	}//newsBanner
	newsBanner();


	//提交订单页面用到的函数
	function orderSubmitFun(){
		var comeCon     = $("#comeTime"),
			outCon      = $('#outTime'),
			comeTimeCon = comeCon.find('span'),
			outTimeCon  = outCon.find('span'),

			getYearCon  = $('#getYear'),
			getMonthCon = $('#getMonth'),
			getDayCon   = $('#getDay'),

			thisYear    = 0,
			thisMonth   = 0,
			thisDay     = 0,

			//判断是进店，还是离店,1是进店，0是离店
			ComeOrOut   = 0;

		//改变数量
		function changeNUmberFun(){
			var obj = $('#changeNumber'),
			    add = obj.find('.add'),
			    pre = obj.find('.minus'),
			    inp = obj.find('input');

			inp.blur(function(){
				var num = $(this).val();
				if(isNaN(num) == true || num == 0 ){
					num = 1;		
				}
				$(this).val(num);
			});

			add.click(function(){
				var num = parseInt(inp.val());
				num++;
				inp.val(num);
			});

			pre.click(function(){
				var num = parseInt(inp.val());
				num--;
				num = num < 1? 1:num;
				inp.val(num);

			});
			


		};//changeNUmberFun
		changeNUmberFun();


		//初始化入店日期,离店日期
		function initDateComeOrOutTime(){
			var date = new Date();

			var Year  = date.getFullYear(),
				Month = date.getMonth()+1,
				day   = date.getDate();

			comeTimeCon.text(Year+'-'+Month+'-'+day);	
			outTimeCon.text(Year+'-'+Month+'-'+(day+1));	
		}//initDateComeOrOutTime end
		initDateComeOrOutTime();

		//点击选择时间
		function clickGetTime(){
			//调出方法

			//入住时间
			comeCon.click(function(){
				var date = new Date;
				DoYears(date.getFullYear());
				//标记进店
				ComeOrOut = 1;
				getYearCon.addClass('changeDatePupNow');
			});

			//离店时间
			outCon.click(function(){
				var date = comeTimeCon.text().split('-');
				DoYears( parseInt( date[0] ));
				//标记离店
				ComeOrOut = 0;
				getYearCon.addClass('changeDatePupNow');
			});


			//选择年份
			getYearCon.delegate('li','click',function(){
				var oldObj   = comeTimeCon.text().split('-'),
					oldMonth = 1;
				thisYear = parseInt( $(this).text() );

				if(  thisYear == parseInt( oldObj[0] ) ){
					oldMonth = parseInt( oldObj[1] )
				}

				DoMonth( thisYear, oldMonth);

				getMonthCon.addClass('changeDatePupNow');
			});


			//选择月份
			getMonthCon.delegate('li','click',function(){
				var oldObj   = comeTimeCon.text().split('-'),
					oldDay   = 1;

					thisMonth = parseInt( $(this).text() );
					//判断是不是当前年,当前月
					if( thisYear == parseInt( oldObj[0] ) && thisMonth == parseInt(oldObj[1]) ){
						oldDay = parseInt(oldObj[2]);
					}

					DoDay(thisYear,thisMonth,oldDay);


				getDayCon.addClass('changeDatePupNow');
			});

			getMonthCon.delegate('li','click',function(){
				getDayCon.addClass('changeDatePupNow');
			});

			//选择日期
			getDayCon.delegate('li','click',function(){

				thisDay = parseInt( $(this).text() );
				//判断进店还是离店
				if( ComeOrOut == 1){
					comeTimeCon.text( thisYear+'-'+thisMonth+'-'+thisDay);
				}else{
					outTimeCon.text( thisYear+'-'+thisMonth+'-'+thisDay);
				}
				


				getYearCon.removeClass('changeDatePupNow');
				getMonthCon.removeClass('changeDatePupNow');
				getDayCon.removeClass('changeDatePupNow');
			});

		}//clickGetTime end

		clickGetTime();

		//传入年,返回10年内的年数
		function DoYears(Y){
			var year = Y;
			getYearCon.find('ul').html('');
			for( var i = 0; i < 10; i++){
				var li = '<li>'+ year +'年</li>';
				getYearCon.find('ul').append(li);
				year++;
			}
		}


		//传入年,月,渲染月份
		function DoMonth(Y,M){
			var year  = Y,
			    month = M;
			getMonthCon.find('ul').html('');

			for( var i = month; i <= 12; i++){
				var li = '<li>'+ month +'月</li>';
				getMonthCon.find('ul').append(li);
				month++;

			}
		}//DoMonth




		//传入，年月，月，日，，渲染天数
		function DoDay(Y,M,D){
			var year  = Y,
			    month = M,
			    day   = D;


			var allDay = RiLi(year,month);
			console.log(allDay);

			getDayCon.find('ul').html('');

			for( var i = day; i <= allDay; i++){
				var li = '<li>'+ day +'日</li>';
				day++;
				getDayCon.find('ul').append(li);
				
			}




			function RiLi(year,month){
				var year = year,
				   month = month,
			 monthForDay = 0,//这个月有几天
			     DayWeek = 0;


		     	 console.log('年份：'+year+'------月份：'+month);
				//计算X年的X月有几天,接收两个参数,年，月份
				function getDaysInMonth(year,month){
					var ArrDay = [0,31,0,31,30,31,30,31,31,30,31,30,31];
					if(month == 2){
						return RunNian();
					}else{
						return ArrDay[month];
					}

					//判断年份是闰年还是平年、年份能被4整除切不能被100整除 ，或者能被400整除，的年份是闰年
					function RunNian(){
						if( (year%4==0 && year%100 != 0) || year% 400==0 ){
							//console.log('闰年二月29天');
							return 29;
						}else{
							//console.log('平年二月28天');
							return 28;
						}
					}//年份判断结束

				}//计算X年X月有多少天结束

				monthForDay = getDaysInMonth(year,month);//当月天数赋值赋值
				console.log('当月共有天数：'+monthForDay);
				return monthForDay;

			}

		}//DoDay

	}//orderSubmitFun

	orderSubmitFun();

	//选择常用联系人
	function changeOftenLinkMan(){
		var but   = $('#linkManInforOften'),
			con   = $('#getLinkMan'),
			name  = $('#OftenLinkName'),
			phone = $('#OftenLinkPhone');

		but.click(function(){
			con.addClass('changeDatePupNow');
		});

		con.delegate('li','click',function(){

			name.val( $(this).find('.name').text() );
			phone.val( $(this).find('.phone').text() );

			//清除报错信息
			$('#linkManINforUl p').text('');

			con.removeClass('changeDatePupNow');
		});

			
	}//changeOftenLinkMan
	changeOftenLinkMan();


	//头部菜单
	function popMenu(){
		var but = $('.publicMenuCon'),
			con = $('#popMenuCon');

		but.click(function(){
			con.addClass('popMenuConNow');
		});

		con.find('header').click(function(){
			con.removeClass('popMenuConNow');
		});	
		con.find('.closeThis').click(function(){
			con.removeClass('popMenuConNow');
		});	




	}//popMenu
	popMenu();


	//获取手机验证码
	function getVerfacitionFun(){
		var but      = $('#getVerfacition'),
			canClick = true,
			allTime  = 60,//总时间
			nowTime  = 60;//现在的时间
		but.click(function(){
			//如果可以点击
			if( nowTime == allTime ){

				$(this).addClass('getingVerfacition');

				function Do(){
					setTimeout(function(){
						if( nowTime >= 0  ){
							but.text('倒计时'+ nowTime +'秒' );
							nowTime--;
							Do();
						}else{
							canClick = false;
							nowTime  = allTime;
							but.removeClass('getingVerfacition');
							but.text('获取验证码');
						}
						
					},1000);
				}//Do
				Do();
				
			}
			
		});
	}//getVerfacitionFun
	getVerfacitionFun();





	//表单验证成功后，执行的回调方法
	function zhixing(){
		console.log('回调函数');
	}

	//表单检查
	function formeCheck(){
		//登陆页面
		if( $('#FormLogin').size() > 0 ){
			$('#FormLogin').FormeCheckByYangYU(zhixing);
		}

		//注册
		if( $('#FormSigin').size() > 0 ){
			$('#FormSigin').FormeCheckByYangYU(zhixing);
		}

		//注册
		if( $('#changePhone').size() > 0 ){
			$('#changePhone').FormeCheckByYangYU(zhixing);
		}

		//预定咨询
		if( $('#consultForm').size() > 0 ){
			$('#consultForm').FormeCheckByYangYU(zhixing);
		}

		

		//提交页面
		if( $('#linkManINformation').size() > 0 ){
			$('#linkManINformation').FormeCheckByYangYU(zhixing);
		}

		//该名称
		if( $('#changeName').size() > 0 ){
			$('#changeName').FormeCheckByYangYU(zhixing);
		}

		//该名称B
		if( $('#changeNameB').size() > 0 ){
			$('#changeNameB').FormeCheckByYangYU(zhixing);
		}

	}//formeCheck
	formeCheck();




})
