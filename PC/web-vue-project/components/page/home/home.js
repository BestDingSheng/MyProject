var Vue = require('vue.js');
require('header/header.js');
require('leftMenu/leftMenu.js');
module.exports = Vue.extend({
	template : __inline('home.html'),
	created : function(){
		// 进行登陆判断
		if(!this.$root.login){
			window.location.hash = '';
		}
	}
});