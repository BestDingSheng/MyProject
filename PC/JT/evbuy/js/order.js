$('.payIcon').find('span').on('click', function() {
	$(this).addClass('active').siblings().removeClass('active');
})

$('#SubmitOrder').on('click', function() {
	var phoneVal = $('#phoneNum').val().trim();
	var yanCodeVal = $('#validationCode').val().trim();
	var activeVal = $('#activationCode').val().trim();
	var phoneReg = /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;
	if(!phoneReg.test(phoneVal)) {
		alert('输入正确的手机号码');
		return;
	};
	if(!yanCodeVal) {
		alert('请输入验证码');
		return;
	}
	if(!activeVal) {
		alert('请输入激活码');
		return;
	}

});

//同意生成
$('.generateBtn').on('click', function() {
	var nameVal = $('#username').val().trim();
	var idCardReg = /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/;

	var idCardVal = $('#idCard').val().trim();
	var emailReg = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
	var emailVal = $('#email').val().trim();
	var otherVal = $('#other').val().trim();
	var addressVal = $('#address').val().trim();

	if(!nameVal) {
		alert('请输入您的姓名')
		return;
	}
	if(!idCardReg.test(idCardVal)) {
		alert('请输入正确的身份证号码');
		return;
	};
	if(!emailReg.test(emailVal)) {
		alert('请输入正确的邮箱');
		return;
	}
	if(!otherVal) {
		alert('请输入联系人姓名');
		return;
	}
	if(!addressVal) {
		alert('请输入地址');
		return;
	}
});

//
$('.first').click(function() {
	$('#file1').click()
});
$('#file1').change(function(){
	preImg('file1', 'positive');
})
$('.last').click(function() {
	$('#file2').click();
})
$('#file2').change(function(){
	preImg('file2', 'reverse');
})
/**
 * 从 file 域获取 本地图片 url
 */
function getFileUrl(sourceId) {
	var url;
	if(navigator.userAgent.indexOf("MSIE") >= 1) { // IE
		url = document.getElementById(sourceId).value;
	} else if(navigator.userAgent.indexOf("Firefox") > 0) { // Firefox
		url = window.URL.createObjectURL(document.getElementById(sourceId).files.item(0));
	} else if(navigator.userAgent.indexOf("Chrome") > 0) { // Chrome
		url = window.URL.createObjectURL(document.getElementById(sourceId).files.item(0));
	}
	return url;
}

/**
 * 将本地图片 显示到浏览器上
 */
function preImg(sourceId, targetId) {
	var url = getFileUrl(sourceId);
	var imgPre = document.getElementById(targetId);
	imgPre.src = url;
}
//

//验证码倒计时
document.getElementById("validationBtn").onclick = function() {
	var wait = 60;
	time(this);

	function time(o) {
		if(wait == 0) {
			o.removeAttribute("disabled");
			o.innerHTML = "免费获取验证码";
			wait = 60;
		} else {
			o.setAttribute("disabled", true);
			o.innerHTML = "重新发送(" + wait + ")";
			wait--;
			setTimeout(function() {
					time(o)
				},
				1000)
		}
	}
};