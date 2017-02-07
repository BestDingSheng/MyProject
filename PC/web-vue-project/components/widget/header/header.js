var Vue = require('vue.js');
Vue.component('myHeader',{
	template : __inline('header.html'),
	created : function(){
	},
	data : function(){
		return {
			logoutIsShow : false
		}
	},
	methods:{
		// 登录
		login : function(){
			console.log("登录成功！！");
			this.$root.login = true;
		},
		// 退出
		logout : function(){
			this.logoutIsShow = true;
		},
		logoutConfirm :function(){
			console.log("退出成功！！");
			this.$root.login = false;
			window.location.hash = '';
			this.$root.passwordChangeHandleBoxIsShow = false;
		},
		changePassword : function(){
			// 1.跳转URL
			window.location.hash = '';
			// 2.login页显示changePassword
			this.$root.passwordChangeHandleBoxIsShow = true;
		}
	}
})