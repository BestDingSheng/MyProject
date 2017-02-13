
(function(){

	//home中用到的方法
	function homeFunction(){
		var menuBut   = $('#homeMenuBut'),
		    menuCon   = $('#homeMenuCon'),
		    outherCon = $('#homeMenuPadding'),
		    nowShow   = true;

		menuBut.tap(function(){
			//需要显示
			if( nowShow ){
				menuCon.css({
					'transform':'translate3D(0,0,0)',
					'-webkit-transform':'translate3D(0,0,0)'
				});
				nowShow = false;
			}else{
				menuCon.css({
					'transform':'translate3D(-100%,0,0)',
					'-webkit-transform':'translate3D(-100%,0,0)'
				});
				nowShow = true;
			}
		});

		outherCon.tap(function(){
			if( !nowShow ){
				menuCon.css({
					'transform':'translate3D(-100%,0,0)',
					'-webkit-transform':'translate3D(-100%,0,0)'
				});
				nowShow = true;
			}
		});    

	}//homeFunction end
	homeFunction();


	

	// detail用到的方法
	function detailFunction(){

		//detail Banner
		function detailBanner(){
			var NowPage  = $('#detailNowPage'),
				len      = $('#detailBanner').find('img').length;
			
			// 初始化span个数
			(function(){
				var span = '<span class="active"></span>'
				for( var i = 1; i < len; i++ ){
					span += '<span></span>';
				}
				NowPage.append(span);
			})()	
				
			var	mySwiper = new Swiper('.swiper-container',{
				autoplay: 3000,
				onSlideChangeEnd: function(swiper){
					var nowIndex = swiper.snapIndex;
					NowPage.find('span').eq(nowIndex).addClass('active').siblings().removeClass('active');
			    }
			});

		}//detailBanner end!
		detailBanner();

		//选项卡

		function changeView(){
			var but = $('#detailChangeView').find('li'),
				obj = $('#detailView').find('div');

			but.tap(function(){
				$(this).addClass('active').siblings().removeClass('active');
				obj.eq($(this).index()).show().siblings().hide();
			});	
		}//changeView end
		changeView();

		//share

		function shareMore(){
			var but     = $('#detailShare'),
				obj     = $('#detailShareCon'),
				cancle  = obj.find('.cancleShare,.closeThisCon'),
				canshow = true;

				but.tap(function(){
				//需要显示
				if( canshow ){
					obj.css({
						'transform':'translate3D(0,0,0)',
						'-webkit-transform':'translate3D(0,0,0)'
					});
					canshow = false;
				}else{
					obj.css({
						'transform':'translate3D(0,100%,0)',
						'-webkit-transform':'translate3D(0,100%,0)'

					});
					canshow = true;
				}
			});

			cancle.tap(function(){
				if( !canshow ){
					obj.css({
						'transform':'translate3D(0,100%,0)',
						'-webkit-transform':'translate3D(0,100%,0)'
					});
					canshow = true;
				}
			});

		}//shareMore end
		shareMore();

		//购物车增加
		function addCareNum(){
			var obj = $('#addShoopingCar'),
				tet = $('#ShoopingCar').find('strong');

			obj.tap(function(){
				var text = parseInt(tet.text())+1;
				tet.text(text);
			});	
		}

		addCareNum();

	}

	detailFunction();


	function addressFunction(){

		//删除收货地址
		function deleteAddress(){
			var but = $('#addressUl').find('.deleteAddress');
			but.tap(function(){
				$(this).parents('li').remove();
			});
		}//deleteAddress end
		deleteAddress();

	}//addressFunction end
	addressFunction();


	//cart
	function cartFunction(){
		//价格计算
		var obj       = $('#cartUl').find('li'),
		    showPrice = $('#allPriceA,#allPriceB'),
			allPrice  = 0;

		//数量的改变
		function chengeNumber(){
			//++
			obj.find('.add').tap(function(){
				var obj       = $(this).siblings('input'),
				    nowNumber = parseInt(obj.val());
				nowNumber++;
				obj.val(nowNumber);

				calculateAllPrice();
			});

			//--
			obj.find('.reduce').tap(function(){
				var obj       = $(this).siblings('input'),
				    nowNumber = parseInt(obj.val());
				if( nowNumber <= 1 ){
					nowNumber = 1;
				}else{
					nowNumber--;
				}
				obj.val(nowNumber);

				calculateAllPrice();
			});

			//手动输入
			obj.find('input').blur(function(){

				var thisVal = parseInt($(this).val());

				if( isNaN(thisVal) ){
					$(this).val(1);
				}else{
					$(this).val(thisVal)
				}
				calculateAllPrice();

			});

		}//chengeNumber end
		chengeNumber();

		//删除本单元
		obj.find('.deleteThisObj').tap(function(){
			$(this).parents('li').remove();
			calculateAllPrice();
		});



		//总价计算方法
		function calculateAllPrice(){
			var obj       = $('#cartUl').find('li');
			obj.each(function(){
				var number = parseInt($(this).find('input').val()),
					price  = parseFloat($(this).find('.price').text());

				allPrice  += number*price;
			});
			showPrice.text(allPrice.toFixed(2));
			allPrice = 0;
		}//calculateAllPrice
		calculateAllPrice();

		//点击支付，出现支付成功或者失败的页面
		function showPayStatic(){
			var but   = $('#nowPay'),
			    obj   = $('#payState'),
			    St    = null,
			    T     = 1000,//过渡时间
			    T2    = 2000;//自动执行时间

			obj.tap(function(){

				$(this).css({
					'opacity':0
				});
				setTimeout(function(){
					obj.hide();
				},T);
				
			});


			St = setTimeout(function(){
				obj.css({
					'opacity':0
				});
				setTimeout(function(){
					obj.hide();
				},T);

			},T2);





		}//showPayStatic end!
		showPayStatic();

	}//cartFunctioni end

	cartFunction();


	

	//submitOrder page FUn

	function submitOrderFun(){
		//选择其他地址，
		$('#ortherAddress').tap(function(){
			$(this).parents('.AddressShow').css({
				'height':0
			});
			$('#orderAddressCon').show();
		});

	}
	submitOrderFun();

	//addressEdit 
	function addressEditFun(){

		function changeAddresName(){
			var intputBut = $('#chngeYourAdd'),//获取选择地址
				Province  = $('#Province'),//省份
				City      = $('#city'),//城市
				Street    = $('#street'),//街道
				Address   = [],//地址对象
				index     = 3;//级别数
			//点击按钮，显示省份
			intputBut.tap(function(){
				showSection(Province,true);
			});
			//选择省份
			Province.find('li').tap(function(){
				Address[0] = $(this).text();
				showSection(City,true);
			});
			//选择城市
			City.find('li').tap(function(){
				Address[1] = $(this).text();
				showSection(Street,true);
			});
			//选择街道
			Street.find('li').tap(function(){
				Address[2] = $(this).text();
				showSection(Province,false);
				showSection(City,false);
				showSection(Street,false);

				intputBut.val(Address.join(''));
				intputBut.parents('li').find('p').text('');
			});

			//滑动显示页面 接收对象，true显示，false隐藏
			function showSection(obj,showHide){
				if( showHide ){
					obj.css({
						'transform':'translate3D(0,0,0)',
						'-webkit-transform':'translate3D(0,0,0)'
					});
				}else{
					obj.css({
						'transform':'translate3D(100%,0,0)',
						'-webkit-transform':'translate3D(100%,0,0)'
					});
				}
				
			}

		}//changeAddresName end
		changeAddresName();


	}//addressEditFun end
	addressEditFun();

	function zhixing(){
		console.log('这里可以写ajax提交数据');
	}

	//表单检查
	function check(){
		if( $('#loginForm').size() > 0 ){
			$('#loginForm').FormeCheckByYangYU(zhixing);
		}
		if( $('#addressEditForm').size() > 0 ){
			$('#addressEditForm').FormeCheckByYangYU(zhixing);
		}
		if( $('#registerForm').size() > 0 ){
			$('#registerForm').FormeCheckByYangYU();
		}
	}
	check();

	



})(Zepto)

