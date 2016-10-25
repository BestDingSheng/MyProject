var valiadation = {
		phone: function(phoneNum) {
			var ptest = /^((?:13\d|14\d|15[\d]|17[\d]|18[\d])-?\d{5}(\d{3}|\*{3}))$/; //手机正则
			if (!ptest.test(phoneNum)) {
				mui.toast('请输入正确的手机号码');
				return false;
			};
			return true;
		},
		password: function(password) {
			if (password.trim().length == 0) {
				mui.toast('密码不能为空')
				return false;
			}
			return true;
		},
		new_password: function(password,alter) {
			if (password.trim().length == 0) {
				mui.toast(alter)
				return false;
			}
			return true;
		},
		identification: function(identification) {
			var ptest = /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/; //身份证正则
			if (!ptest.test(pidentification)) {
				mui.toast('请输入正确的身份证号码');
				return false;
			};
			return true;
		},
		licensePlateNumber: function(licensePlateNumber) {
			var ptest = /^[\u4e00-\u9fa5]{1}[A-Z]{1}[A-Z_0-9]{5}$/; //车牌号正则
			if (!ptest.test(licensePlateNumber)) {
				mui.toast('请输入正确的车牌号');
				return false;
			};
			return true;
		},
		card_Number: function(cardNumber) {
			var ptest = /^[A-Z_0-9]{10}$/; //会员卡号正则
			if (!ptest.test(cardNumber)) {
				mui.toast('请输入正确会员卡号');
				return false;
			};
			return true;
		},
		notnull: function(argument,alter) {
			if (argument.trim().length == 0) {
				mui.toast(alter)
				return false;
			}
			return true;
	}
	}
	//navbar后退箭头事件
//$('.mui-bar-nav.mui-bar .mui-icon').on('tap', function() {
//	history.back();
//});