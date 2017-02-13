$(function(){
	$("ul.dropdown li").hover(function(){ 
			//$('ul:first a',this).addClass("li_act");
			$('ul:first',this).show();
		},function(){		
			//$(this).removeClass("li_act");
			$('ul:first',this).css('display', 'none');
	
	});	

	$("#gy").mouseover(function(){
		$("#gy_list").show();		
	});
	$("#gy_list").mouseout(function(){
		$("#gy_list").hide();
	});
	$("#kc").mouseover(function(){
		$("#kc_list").show();		
	});
	$("#kc_list").mouseout(function(){
		$("#kc_list").hide();
	});
		$("#tz").mouseover(function(){
		$("#tz_list").show();		
	});
	$("#tz_list").mouseout(function(){
		$("#tz_list").hide();
	});
	$("#td").mouseover(function(){
		$("#td_list").show();		
	});
	$("#td_list").mouseout(function(){
		$("#td_list").hide();
	});
	$("#lx").mouseover(function(){
		$("#lx_list").show();		
	});
	$("#lx_list").mouseout(function(){
		$("#lx_list").hide();
	});
	
});
