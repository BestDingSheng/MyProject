
/*
	时间：2015年6月2日21:48:26
	目的：封装表单验证插件
	功能：表单验证
*/

//接收一个回调函数
$.fn.FormeCheckByYangYU = function(callback){
	//声明变量和主要函数
	var CheckForme = {

		//检查电话号码
		phoneNumber : function(obj){
			var val = obj.val(),
				Ret = /^1[3|4|5|8][0-9]\d{4,8}$/,
				war = '请输入正确格式的手机号';
			if( !Ret.test(val) ){
				CheckForme.warming(obj,war);
				return false;
			}else{
				CheckForme.warming(obj,'');
				return true;
			}
		},

		//检查密码
		password : function(obj){
			var val = obj.val(),
				war = '密码不能为空,且长度不能小于6';

			if( val.length < 6 ){
				CheckForme.warming(obj,war);
				return false;
			}else{
				CheckForme.warming(obj,'');
				return true;
			}
		},

		//再次检查密码
		passwordAgain : function(obj){
			var Inp     = obj.parents('form').find('input'),
				Thisval = obj.val(),
				OnceVal = NaN,
				war     = '两次输入不一致';
            
            Inp.each(function(i){
            	if( $(this).attr('FunctionName') == 'password' ){
            		OnceVal = $(this).val();
            	}
            });

            if( Thisval != OnceVal ){
            	CheckForme.warming(obj,war);
            	return false;
            }else{
            	CheckForme.warming(obj,'');
            	return true;
            }

		},

		//没有空值
		noValue : function(obj){
			var val = obj.val(),
				war = '该项不能为空,且长度不能小于2';

			if( val.length < 2 ){
				CheckForme.warming(obj,war);
				return false;
			}else{
				CheckForme.warming(obj,'');
				return true;
			}
		},

		//用户名
		userName : function(obj){
			var val = obj.val(),
				war = '用户名不能为空,且长度不能小于2';

			if( val.length < 2 ){
				CheckForme.warming(obj,war);
				return false;
			}else{
				CheckForme.warming(obj,'');
				return true;
			}
		},

		//报错方法
		warming : function(obj,war){
			var warCon = obj.parents('li').find('p');
			warCon.text(war);
		},

		//失去焦点
		BlurFun : function(obj,FunName){
			obj.blur(function(){
				CheckForme[FunName](obj);
			});
		}

	};
	var that   = $(this);//forme表单对象
		Input  = that.find('input'),//获取到所有的input表单
		submit = null,
		InpArr = [],//需要检查的对象角标
		FunArr = [];//记录当前对象的functionName

	//获取提交按钮
	Input.each(function(i){
		if( $(this).attr('type') == 'submit' ){
			submit = $(this);
		}
	});

	//获取到每个有FunctionName的input添加失去焦点方法，
	Input.each(function(i){
		//获取当前对象存在FunctionName
		var FN = $(this).attr('FunctionName');
		//,如果存在，那么添加方法
		if( FN ){
			CheckForme.BlurFun($(this),FN);
			InpArr.push(i);
			FunArr.push(FN);
		}

	});


	submit.click(function(){
		
		//检查全部
		function changeAll(){
			var YN = false;
			for( var i = 0; i < InpArr.length; i++){
				if( CheckForme[FunArr[i]](Input.eq(InpArr[i])) ){
					YN = true;
				}else{
					YN = false;
					break;
				}
			}
			return YN;
		}

		if( changeAll() ){
			console.log('表单验证成功');
			//执行传递进来的函数
			callback();
			return true;
		}else{
			console.log('验证失败');
			return false;
		}

	});

}
