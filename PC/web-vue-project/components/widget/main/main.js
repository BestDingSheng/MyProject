// 主入口JS
var Vue = require('vue.js');
var ElementUI = require('element-ui.js');
Vue.use(ElementUI);
var router = require('main/router.js');
// 引入自定义公用JS
require('main/base.js');

window.app = new Vue({
	router: router,
	data: {
		// 登陆名
		username: '',
		// 是否登陆
		login: false,
		// 全局的一个LOADING
		loadingBoxIsShow: false,
		// ajax请求URL
		http: 'http://10.7.111.105:8080/',
		// 函数节流
		lock: false,
		// 登陆页：是否显示修改密码表单
		passwordChangeHandleBoxIsShow: false,
		// 登陆页：是否是第一次登陆
		isFirstLogin: false
	}
}).$mount('#app');