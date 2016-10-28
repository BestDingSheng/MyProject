// JavaScript Document
;jQuery(function( $ ){
	//返回按钮
	$('.backBtn').click(function(){
		window.history.go(-1);
	});
	
	//use this quick url
	url=function(url){
		window.location.href=url;
	};
	
	//关闭弹出
	$('.layer .btn,.ico_close').bind('click',function(){
		
		$(this).parents('.layer').hide();
		
		$('.layer_box').hide();
		
	});
	
	$('.btn_sub').click(function(){
	
		if( $('.inp_txt').val() == '' ){
			
			$('.inp_txt').siblings('.error').show();	
			
			$('.inp_txt').siblings().find('.error').show();	
			
		};
		
	});
	
	//table
	function tabMenu(btnObj,addBtn,mainObj,addMain){
		
		$(btnObj).bind('click',function(){

			var index  =  $(btnObj).index(this);
						
			$( this ).addClass(addBtn).siblings().removeClass(addBtn);
			
			$(mainObj).eq(index).addClass(addMain).siblings(mainObj).removeClass(addMain);
			
		});	
			
	};
	
	tabMenu('.con_show .menu li','cur','.main_cont','show');
	
	
	//错误提示	
	function layerThiny(btnObj,layerId){
		
		$(btnObj).bind('click',function(){
			
			$(layerId).show();
			
			$('.layer_box').show();
			
			
		});
		
	};
	
	
	layerThiny('.btn_sub','#pass_tips');	
	layerThiny('#btn_jf','#pass_tips');	
	layerThiny('.user_imgbg','#img_up');	
	
	
});