/**
 * 公用方法js
 */
var ajax = $.ajax;
$.ajax = function (opt) {
    //备份opt中error和success方法
    var fn = {
        success: function (data, textStatus, jqXHR) {
        },
        beforeSend:function(jqXHR){
        },
        needValidateLogin : true
    }
    if (opt.success) {
        fn.success = opt.success;
    }
    
    if (opt.beforeSend) {
        fn.beforeSend = opt.beforeSend;
    }
    
    if (typeof opt.needValidateLogin != "undefined"){
    	fn.needValidateLogin = opt.needValidateLogin;
    }
    //扩展增强处理
    var _opt = $.extend(opt, {
    	needValidateLogin: fn.needValidateLogin,
        success: function (data, textStatus, jqXHR) {
        	// 如果为字符串类型，且respCode=2，则表示未登录状态
        	if (isNotLogin(data)) {
        		return;
        	}
        	
            fn.success(data, textStatus, jqXHR);
        },
        beforeSend:function(jqXHR){
        	var isLogon = true;
        	if(fn.needValidateLogin)	
        		 isLogon =  needLogin();
        	if(isLogon)
        		return fn.beforeSend(jqXHR)
        	else
        		return isLogon;
        	
       }
        
    });
    var def = ajax.call($, _opt);// 兼容不支持异步回调的版本
    if('done' in def){
        var done = def.done;
        def.done = function (func) {
            function _done(data) {
                // 如果为字符串类型，且respCode=2，则表示未登录状态
	        	if (isNotLogin(data)) {
	        		return;
	        	}
                func(data);
            }

            done.call(def, _done);
            return def;
        };
    }
    return def;
};

/**
 * 是否未登录状态
 * 
 * @param {Object} data
 * @return {type} true:未登录状态, false:已登录状态
 */
function isNotLogin(data) {
	if (typeof data == "string") {
    	var dataObj = JSON.parse(data);
		if(dataObj && dataObj != null && dataObj.respCode && dataObj.respCode==2){
			toLogin();
			return true;
		}
	}
	return false;
}

/**
 * 是否已经登录
 * true:是,false:否
 */
function isLogin() {
	var loginInfo = getLoginInfo();
//	console.log('isLogin:' + JSON.stringify(loginInfo));
	if (loginInfo && loginInfo.loginId && loginInfo.password && loginInfo.ticket && loginInfo.loginTime && loginInfo.expireTime) {
		// 登录信息是否过期
		var now = new Date().format("yyyy-MM-dd");
		var loginTime = new Date(loginInfo.loginTime).format("yyyy-MM-dd");
		var expireTime = loginInfo.expireTime;
        var expireDate = addDate(loginTime,expireTime).format("yyyy-MM-dd");
		if (compareDate(now, expireDate)) {
			return false;
		}
		return true;
	} else {
		return false;
	}
}

/**
 * 准备必备请求参数
 * @param {Object} obj 要发送的json数据对象
 * @param {Object} loginInfo 本地存储的登录认证信息
 */
function prepareParams(obj, loginInfo) {
	loginInfo = loginInfo || getLoginInfo();
	if (!obj.loginId && loginInfo && loginInfo.loginId) {
		obj.loginId = loginInfo.loginId
	}
	if (!obj.clientId) {
		obj.clientId = getDeviceUuid() || "";
	}
	if (!obj.ticket && loginInfo && loginInfo.ticket) {
		obj.ticket = loginInfo.ticket;
	}
	return obj;
}

/**
 * 本地存储登录信息
 * @param {Object} loginInfo
 */
function storageLoginInfo(loginInfo) {
	if (typeof loginInfo == 'object') {
		if (!loginInfo.loginTime) {
			loginInfo.loginTime = new Date();
		}
		if (!loginInfo.expireTime) {
			loginInfo.expireTime = 30;
		}
		loginInfo = JSON.stringify(loginInfo);
	}
	localStorage.setItem('LOGIN_INFO', loginInfo);
}

/**
 * 获取本地存储登录信息
 */
function getLoginInfo() {
	var loginInfo = localStorage.getItem('LOGIN_INFO');
	if(loginInfo==null)
		return null;
	return JSON.parse(loginInfo);
}



/**
 * 清空本地存储登录信息
 */
function clearLoginInfo() {
	localStorage.removeItem("LOGIN_INFO");
}

/**
 * 获取第三方登录认证的唯一标识id
 * @param {Object} auth
 */
function getCredentialIdByOAuth(auth) {
	if (auth != null) {
		if (auth.authResult) {
			return auth.authResult.openid;
		}
	} else {
		auth = getOAuthInfo();
		if (auth && auth.authResult) {
			return auth.authResult.openid;
		}
	}
	return null;
}

/**
 * 登录渠道，即：auth.id
 * @param {Object} auth
 */
function getCredentialChannelByOAuth(auth) {
	if (auth != null) {
		return auth.id;
	} else {
		auth = getOAuthInfo();
		return auth.id;
	}
	return null;
}

function getCredentialChannelDescByOAuth(auth) {
	if (auth != null) {
		return auth.description;
	} else {
		auth = getOAuthInfo();
		return auth.description;
	}
	return null;
}

function getHeadImgUrlByOAuth(auth) {
	if (auth != null) {
		if (auth.userInfo) {
			return auth.userInfo.headimgurl;
		}
	} else {
		auth = getOAuthInfo();
		if (auth && auth.userInfo) {
			return auth.userInfo.headimgurl;
		}
	}
	return null;
}

function getOAuthInfo() {
	var authStr = localStorage.getItem('OAUTH_INFO');
	return authStr ? JSON.parse(authStr) : null;
}

/**
 * 获取客户端id
 */
function getDeviceUuid() {
	return plus.device.uuid;
}

$.fn.serializeObject = function()
{    
   var o = {};    
   var a = this.serializeArray();    
   $.each(a, function() {    
       if (o[this.name]) {    
           if (!o[this.name].push) {    
               o[this.name] = [o[this.name]];    
           }    
           o[this.name].push(this.value || '');    
       } else {    
           o[this.name] = this.value || '';    
       }    
   });    
   return o;    
};  
var isTrue = false;
$("#chargeMore").on('click',function(event){
	event.stopPropagation();
	console.log(isTrue);
	if(isTrue == false){
		$(".chargeMore").show();
		$('#device').css('pointer-events','none')
		isTrue = true;
	}
	
});
$(document).on('tap',function(){
	var lg=$('.chargeMore:hidden').length;
	if(lg==0){
		$('.chargeMore').hide();
		setTimeout(function(){
			$('#device').css('pointer-events','all');
		},500)
		
		isTrue=false;
	}
})

function needLogin(){
	var isLoginFlag = isLogin();
	if(!isLoginFlag){
		toLogin();
	}
	return isLoginFlag;
}
/**
 * 窗口切换js
 */
function toLogin(params) {
	var parentWebview = plus.webview.getWebviewById("main");
	if(parentWebview){
		mui.fire(parentWebview,'newWebView',{
					id: WEBVIEW_IDS.LOGIN,
					href:"login.html",
					aniShow:'slide-in-bottom',
					title:"登录",
					extras : params,
				});
	}
	else{
		toPage("basic/login.html",params);
	}
}

function toPage(pageUrl,params) {
	var curUrl = plus.webview.currentWebview().getURL();
	var forwardPageUrl = '';	
	if (curUrl.indexOf('www')) {
		var lastUrl = curUrl.substring(curUrl.indexOf('www/') + 4);
		if(lastUrl.substring(0,lastUrl.lastIndexOf('/')) == pageUrl.substring(0,pageUrl.lastIndexOf('/'))) {
			forwardPageUrl = pageUrl.substring(pageUrl.lastIndexOf('/')+1);
		} else {
			var urls = lastUrl.split('/');
			for (var i = 0; i < urls.length - 1; i++) {				 
					forwardPageUrl += "../";
			}
			forwardPageUrl = forwardPageUrl + pageUrl;
		}
	}
	if(forwardPageUrl){
			mui.openWindow({
				id: forwardPageUrl,
				url: forwardPageUrl,
				extras : params,
				createNew:false,
				show: {
					aniShow: "slide-in-right"
				},
				waiting: {
					autoShow: false
				}
			});
	}
}

Date.prototype.Format = function(fmt)   
{ //author: meizz   
  var o = {   
    "M+" : this.getMonth()+1,                 //月份   
    "d+" : this.getDate(),                    //日   
    "h+" : this.getHours(),                   //小时   
    "m+" : this.getMinutes(),                 //分   
    "s+" : this.getSeconds(),                 //秒   
    "q+" : Math.floor((this.getMonth()+3)/3), //季度   
    "S"  : this.getMilliseconds()             //毫秒   
  };   
  if(/(y+)/.test(fmt))   
    fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));   
  for(var k in o)   
    if(new RegExp("("+ k +")").test(fmt))   
  fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));   
  return fmt;   
}  

/**
 * 日期加减（单位：天）
 * @param {Object} dd 要操作的日期对象
 * @param {Object} dadd 要加减的天数
 */
function addDate(dd,dadd){
	var a = new Date(dd)
	a = a.valueOf()
	a = a + dadd * 24 * 60 * 60 * 1000
	a = new Date(a)
	return a;
}

/**
 * 日期比较
 * @param {Object} a
 * @param {Object} b
 */
 function compareDate(a, b) {
    var arr = a.split("-");
    var starttime = new Date(arr[0], arr[1], arr[2]);
    var starttimes = starttime.getTime();

    var arrs = b.split("-");
    var lktime = new Date(arrs[0], arrs[1], arrs[2]);
    var lktimes = lktime.getTime();

 	if (starttimes > lktimes) {
        return true;
    } 
    return false;
}

/**
 * 日期格式化处理
 * @param {Object} format
 */
Date.prototype.format = function(format){ 
	var o = { 
		"M+" : this.getMonth()+1, //month 
		"d+" : this.getDate(), //day 
		"h+" : this.getHours(), //hour 
		"m+" : this.getMinutes(), //minute 
		"s+" : this.getSeconds(), //second 
		"q+" : Math.floor((this.getMonth()+3)/3), //quarter 
		"S" : this.getMilliseconds() //millisecond 
	} 
	
	if(/(y+)/.test(format)) { 
		format = format.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length)); 
	} 
	
	for(var k in o) { 
		if(new RegExp("("+ k +")").test(format)) { 
			format = format.replace(RegExp.$1, RegExp.$1.length==1 ? o[k] : ("00"+ o[k]).substr((""+ o[k]).length)); 
		}	 
	} 
	return format; 
}

