var auths={};
function plusReady(){
	// 获取登录认证通道
	plus.oauth.getServices(function(services){
		for(var i in services){
			var service=services[i];
			console.log(service.id+": "+service.authResult+", "+service.userInfo);
			auths[service.id]=service;
		}
	},function(e){
		console.log("获取登录认证失败："+e.message);
	});
}
document.addEventListener('plusready',plusReady,false);
// 第三方登录认证

function oauthLogin(id){
	console.log("----- 登录认证 -----");
	var auth=auths[id];
	if(auth){
		var w=null;
		if(plus.os.name=="Android"){
			w=plus.nativeUI.showWaiting();
		}
		document.addEventListener("pause",function(){
			setTimeout(function(){
				w&&w.close();w=null;
			},2000);
		}, false );
		auth.login(function(){
			w&&w.close();w=null;
			console.log("登录认证成功：");
			console.log(JSON.stringify(auth));
			userinfo(auth);
		},function(e){
			w&&w.close();w=null;
			plus.nativeUI.alert("登录认证失败：["+e.code+"]："+e.message);
			console.log("登录认证失败：");
			console.log("["+e.code+"]："+e.message);
		});
	}else{
		console.log("无效的登录认证通道！");
		plus.nativeUI.alert("无效的登录认证通道！",null,"登录");
	}
}
/*
 * 获取微信用户信息
 */
function userinfo(auth){
	auth.getUserInfo(function(){
		toAssociatedLogin(auth);
	},function(e){
		console.log("获取用户信息失败： ["+e.code+"]："+e.message);
		plus.nativeUI.alert("获取用户信息失败！",null,"登录");
	});
}

/**
 * 转到联合登录界面
 * @param {Object} auth
 */
function toAssociatedLogin(auth) {
	var credentialId = getCredentialIdByOAuth(auth);
	// 判断是否已经关联过益虫账号
	$.ajax({
		type: "post",
		url: webRoot + "/app/auth/hasBeenAssociatedLogin",
		dataType: 'json',
		data: {
			credentialId: credentialId,
			credentialChannel: auth.id,
			userinfos: JSON.stringify(auth.userInfo)
		},
		needValidateLogin:false,
		success: function(msg) {
			clearLoginInfo();
			if(msg.respCode==1){
				var data = msg.data;
				if (data && data.loginId && data.password) {
					// 若已经关联，则跳转到登录界面，执行自动登录
					data.loginChannel = auth.id;
					storageLoginInfo(data);
					mui.toast('登录成功');
					mui.fire(plus.webview.currentWebview(), "autoLoginOtherView");
				} else {
					// 若无关联，则转到关联界面
					localStorage.setItem('OAUTH_INFO', JSON.stringify(auth))
					toPage('basic/associated.html');
				}
			} else {
				if (msg.respMsg && msg.respMsg.length > 0) {
					plus.nativeUI.alert(msg.respMsg)
				} else {
					plus.nativeUI.alert('网络异常，请重新尝试！');
				}
				//toLogin();
			}
		},
		error: function(e) {
			// 清空本地缓存，让用户手动登录
			clearLoginInfo();
			plus.nativeUI.alert('网络出现小差，登录失败！');
			toLogin();
		}
	});
}

// 注销登录
function logoutAll(){
	console.log("----- 注销登录认证 -----");
	localStorage.clear();
	for(var i in auths){
		logout(auths[i]);
	}
	toLogin();
}
function logout(auth){
	auth.logout(function(){
		console.log("注销\""+auth.description+"\"成功");
	},function(e){
		console.log("注销\""+auth.description+"\"失败："+e.message);
	});
}