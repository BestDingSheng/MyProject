mui.init({
	keyEventBind: {
		backbutton: false
	}
});
mui.init({
	pullRefresh: {
		container: '.iscrool',
		down: {
			callback: pulldownRefresh
		}
	}
});
/** 下拉刷新设备最新状态 **/
function pulldownRefresh() {
	var device = $('#device').val();
	if (device && device.length > 0 && device != 'none') {
		selectedDevice(device, true);
	}
	mui('.iscrool').pullRefresh().endPulldownToRefresh();
}
/**
 * deviceInfo
 * 设备充电设备状态信息
 * json结构：[{chargeBoxSerialNumber:"1012090561", status:DEVICE_STATUS.READY, chargingStatusNofity:{isRunning:false, isAbort:false}}]
 * chargeBoxSerialNumber:设备编号
 * status:设备充电状态
 * chargingStatusNofity:充电状态通知长轮询启动、关闭标识
 * chargingStatusNofity.isRunning:状态长轮询是否启动
 * chargingStatusNofity.isAbort:状态长轮询是要强制终止
 */
var deviceInfo = [];
var chargeMoreList = document.getElementById("chargeMoreList");
var help = document.getElementById("help");
var chargeRecord =document.getElementById("chargeRecord");
var status_start = document.getElementById("status_start");
var boundChargeBox = document.getElementById("boundChargeBox");
help.addEventListener('tap',function(){
	chargeMoreList.style.display = "none";
	isTrue=false;
	$('#device').css('pointer-events','all');
	toPage('basic/help.html');
});
chargeRecord.addEventListener('tap',function(){
	if(isLogin()){
		toPage('account/charge_record.html');
	}else{
		toLogin();
	}
});
var isBoundChargeBox = false;
boundChargeBox.addEventListener('tap', function(){
	if(isLogin()){
		isBoundChargeBox = true;
		clicked('device_scan.html',true,true);
	}else{
		toLogin();
	}
});
status_start.addEventListener('tap',function(){
	var device = $('#device').val();
	var isCharging = $("#status_start").attr('alt') == 'charging';
	if (!device || device == 'none') {
		if (isCharging) {
			mui.toast('请选择要停止的充电设备！');
		} else {
			mui.toast('请先选择充电桩设备或者直接扫描充电桩上二维码开始充电！');
		}
		return;
	}
	$("#status_start").addClass("kaiguan-animate");
	setTimeout(function() {
		if (isCharging) {
			$("#status_start").attr('src','../images/kaiguan.png');
			$("#status_start").removeAttr('alt');
			stopCharge();
		} else {
			$("#status_start").attr('src','../images/charging.png');
			$("#status_start").attr('alt', 'charging');
			startCharge();
		}
		$("#status_start").removeClass("kaiguan-animate");
	},800);
});
mui('.beforeask').on('tap', 'img', function() {
	isBoundChargeBox = false;
	if(isLogin()) {
		clicked('device_scan.html',true,true);
	} else {
		toLogin();
	}
});
//添加监听事件
function addWebViewEvent() {
	// 绑定充电桩界面触发
	document.addEventListener('showPageByBoundPileView', showPageByBoundPile, false);
	// 登录界面触发
	document.addEventListener('showPageByLoginView', showPageByLogin, false);
}

// 绑定充电桩界面触发
function showPageByBoundPile(event) {
	var chargingBoxSerialNumber = event.detail.chargingBoxSerialNumber;
	var siteName = event.detail.siteName;
	// 渲染已绑定设备
	randeringBoundDevice();
	// 渲染正在充电设备
	randeringChargingDeviceFromServer();
	// 选中此设备
	selectedDevice(chargingBoxSerialNumber, true);
}

// 登录界面触发
function showPageByLogin(event) {
	// 获取最新充电情况，更新界面
	updateChargingPage();
}

var loginInfo = null;
function plusReady() {
	// 获取登录信息
	loginInfo = getLoginInfo();
	//添加监听事件
	addWebViewEvent();
	// 绑定事件
	boundEvent();
	// 获取最新充电情况，更新界面
	updateChargingPage();
}
mui.plusReady(plusReady);

// 绑定事件
function boundEvent() {
	$('#device').on("change", function () {
		deviceChange(true);
	});
}

// 设备切换, isNotChange2OtherChargingDevice是否【不切换】到其他正在充电设备，true:不切换,false:自动切换
function deviceChange(isNotChange2OtherChargingDevice) {
	var device = $("#device").val();
	// 设备信息重置
	resetDeviceChargingInfo();
	// 重置界面充电数据
	resetPageData();
	// 重置界面
	if (!device || device.length == 0 || device == 'none') {
		resetChargingInfo2Scan();
		chargingBtnOff();
	} else {
		getChargingStatus(isNotChange2OtherChargingDevice);
	}
}

// 获取最新充电情况，更新界面
function updateChargingPage() {
	// 清空设备列表
	clearDevice2Unkown();
	// 渲染已经绑定的充电桩
	randeringBoundDevice();
	// 渲染并选中正在充电的充电桩（正在充电设备可能有多个，选中的只有一个）
	randeringAndSelectedChargingDevice();
}

// 设备列表是否存在设备
function isExistDevice(chargeBoxSerialNumber) {
	var isExists = false;
	$('option','#device').each(function(idx) {
		if ($(this).attr('value')==chargeBoxSerialNumber) {
			isExists = true;
			return false;
		}
	});
	return isExists;
}

// 重置设备充电信息
function resetDeviceChargingInfo() {
	var isExistsDeviceInfo = false;;
	var selectedDeviceSerialNumber = $("#device").val();
	for (var idx in deviceInfo) {
		var device = deviceInfo[idx];
		var notify = device.chargingStatusNofity;
		notify.isRunning = false;
		if (device.chargeBoxSerialNumber == selectedDeviceSerialNumber) {
			isExistsDeviceInfo = true;
			notify.isAbort = false;
		} else {
			notify.isAbort = true;
		}
	}
	if (!isExistsDeviceInfo) {
		if (selectedDeviceSerialNumber && selectedDeviceSerialNumber != 'none') {
			deviceInfo[deviceInfo.length] = {chargeBoxSerialNumber:selectedDeviceSerialNumber, status:DEVICE_STATUS.READY, chargingStatusNofity: {isRunning:false, isAbort: false}};
		}
	}
}

function getChargingStatus(isUserClickTrigger) {
	// 用户是否登录状态
	if (!isLogin()) {
		toLogin();
		return;
	}
	var chargeBoxSerialNumber = $('#device').val();
	if (!chargeBoxSerialNumber || 'none'==chargeBoxSerialNumber) {
		return;
	}
	
	var paramsJson = { chargeBoxSerialNumber:chargeBoxSerialNumber };
	paramsJson = prepareParams(paramsJson, loginInfo);
	$.ajax({
		url:webRoot + "/app/charge/getChargingBoxStatus",
		type:"GET",
		datatype:"json",
		data: paramsJson,
		success: function(msg) {
			if (msg.respCode==1) {
				var data = msg.data;
				var chargingStatus = data.chargingStatus; // 充电状态
				var onOffLineStatus = data.onOffLineStatus; // 对应桩的在(离)线状态
				var isStopped = data.stopped; // 设备Occupied状态，是否已经发送过STOP_TRANS
				
				if(ON_OFF_LINE_STATUS.OFF == onOffLineStatus) {// 离线
					showAbnormalSituation(chargingStatus, true);
					chargingBtnOff();
					updateDeviceStatus(chargeBoxSerialNumber, DEVICE_STATUS.ERROR);
				} else {// 在线
					if (chargingStatus == "Available") { // 可用状态
						showDevice2OtherChargingBoxOrUnkown(chargeBoxSerialNumber, isUserClickTrigger);
					} else if (chargingStatus == "Occupied") { // 正在充电状态
						if (isStopped) {
							// 充电已停止
							showStopStatus(data);
							chargingBtnOff();
							updateDeviceStatus(chargeBoxSerialNumber, DEVICE_STATUS.ABORT_TRANS);
						} else {
							showStartStatus();
							showStartData(data);
							chargingBtnOn();
							updateDeviceStatus(chargeBoxSerialNumber, DEVICE_STATUS.START_TRANS);
						}
						// 启动状态长轮询
						startChargingStateNotify();
					} else {
						showAbnormalSituation(chargingStatus); // 非正常充电状态
						chargingBtnOff();
						updateDeviceStatus(chargeBoxSerialNumber, DEVICE_STATUS.ERROR); 
					}
				}
			} else {
				showReadyStatus();
				chargingBtnOff();
				updateDeviceStatus(chargeBoxSerialNumber, DEVICE_STATUS.READY);
			}
		},
		error:function(e) {
			showReadyStatus();
			chargingBtnOff();
			updateDeviceStatus(chargeBoxSerialNumber, DEVICE_STATUS.READY);
		}
	});
}

// 更新当前充电桩状态
function updateDeviceStatus(chargeBoxSerialNumber, curStatus) {
	if (!chargeBoxSerialNumber || !curStatus) {
		return false;
	}
	for (var idx in deviceInfo) {
		var device = deviceInfo[idx];
		if (device.chargeBoxSerialNumber == chargeBoxSerialNumber) {

			// 设备在READY状态才可以发起开始充电，在START_TRANS状态才可以发起结束充电
			if (curStatus == DEVICE_STATUS.SEND_START && device.status != DEVICE_STATUS.READY) {
				return false;
			} else if (curStatus == DEVICE_STATUS.SEND_STOP && device.status != DEVICE_STATUS.START_TRANS) {
				return false;
			}
			
			device.status = curStatus;
			return true;
		}
	}
	return false;
}

// 从本地获取设备充电状态
function getDeviceChargingStatusFromLocal(chargeBoxSerialNumber) {
	for (var idx in deviceInfo) {
		var device = deviceInfo[idx];
		if (device.chargeBoxSerialNumber == chargeBoxSerialNumber) {
			return device.status;
		}
	}
	return null;
}

// 渲染已绑定设备
function randeringBoundDevice() {
	var boundDeviceLocal = getBoundDeviceFromLocal();
	if (boundDeviceLocal && boundDeviceLocal.length > 0) {
		for (var idx in boundDeviceLocal) {
			var device = boundDeviceLocal[idx];
			
			var isExists = isExistDevice(device.chargeBoxSerialNumber);
			if (!isExists) {
				addDeviceByObj(device);
			}
		}
	} else { // 从服务器拿已绑定充电桩
		// 未登录
		if (!isLogin()) {
			return;
		}
		// 从服务器已绑定充电桩
		var paramsJson = {};
		paramsJson = prepareParams(paramsJson);
		$.ajax({
			url:webRoot + "/app/charge/getBoundChargeBox",
			type:"GET",
			datatype:"json",
			data: paramsJson,
			async: false,
			success: function(msg) {
				if (msg.respCode==1) {
					var data = msg.data;
					if (data) {
						// 更新本地缓存
						var boundDevice = JSON.stringify(data);
						localStorage.setItem("BOUND_DEVICE", boundDevice);
						// 渲染设备下拉框
						for (var idx in data) {
							var c = data[idx];
							addDeviceByObj(c);
						}
					}
				}
			},
			error:function(e) {	}
		});
	}
}

// 从服务器端获取用户正在充电设备，并渲染，并返回当前正在充电设备信息
function randeringChargingDeviceFromServer() {
	// 未登录
	if (!isLogin()) {
		return;
	}
	var selectedChargingBoxSerialNumber = null;
	// 从服务器查询用户正在充电的充电桩列表
	var paramsJson = {};
	paramsJson = prepareParams(paramsJson);
	$.ajax({
		url:webRoot + "/app/charge/getUserChargingDevices",
		type:"GET",
		datatype:"json",
		data: paramsJson,
		async: false,
		success: function(msg) {
			if (msg.respCode==1) {
				var data = msg.data;
				if (data && data.chargingDevices && data.chargingDevices.length > 0) {
					var chargingDevices = data.chargingDevices;
					// 渲染充电设备
					for (var idx in chargingDevices) {
						var c = chargingDevices[idx];
						var isExists = isExistDevice(c.chargeBoxSerialNumber);
						if (!isExists) {
							addDeviceByObj(c);
						}
						// 保存正在充电设备信息
						addChargingDeviceInfo(c.chargeBoxSerialNumber);
						if (idx == 0) {
							selectedChargingBoxSerialNumber = c.chargeBoxSerialNumber;
						}
					}
				}
			}
		},
		error:function(e) {}
	});
	
	return selectedChargingBoxSerialNumber;
}

// 渲染并选中正在充电的设备（正在充电设备可能有多个，选中的只有一个）
function randeringAndSelectedChargingDevice() {
	// 要显示的设备序列码
	var chargeBoxSerialNumber = randeringChargingDeviceFromServer();
	if (!chargeBoxSerialNumber) {
		return;
	}
	
	selectedDevice(chargeBoxSerialNumber);
}

// 新增正在充电设备信息
function addChargingDeviceInfo(chargeBoxSerialNumber) {
	if (!chargeBoxSerialNumber) {
		return;
	}
	var isExists = false;
	for (var idx in deviceInfo) {
		var device = deviceInfo[idx];
		if (device.chargeBoxSerialNumber == chargeBoxSerialNumber) {
			device.status = DEVICE_STATUS.START_TRANS;
			isExists = true;
			break;
		}
	}
	
	if (!isExists) {
		deviceInfo[deviceInfo.length] = {chargeBoxSerialNumber:chargeBoxSerialNumber, status:DEVICE_STATUS.START_TRANS, chargingStatusNofity: {isRunning:false, isAbort: false}};
	}
}

// 新增设备
function addDeviceByObj(d) {
	var newOption = $("<option value='"+d.chargeBoxSerialNumber+"'>"+d.siteName+"-"+d.chargeBoxSerialNumber+"</option>");
	$('#device').append(newOption);
}

// 新增设备
function addDevice(chargeBoxSerialNumber, siteName) {
	var data = {chargeBoxSerialNumber:chargeBoxSerialNumber, siteName:siteName};
	addDeviceByObj(data);
}

// 选中设备
function selectedDevice(chargeBoxSerialNumber, isUserClickTrigger) {
	$('#device').val(chargeBoxSerialNumber);
	deviceChange(isUserClickTrigger);
}

// 清空设备，并重置为未知
function clearDevice2Unkown() {
	var newOption = $("<option value='none' selected='selected'>未知</option>");
	$('#device').empty();
	$('#device').append(newOption);
}

// 充电按钮On（未充电状态）
function chargingBtnOff() {
	$("#status_start").removeClass("kaiguan-animate");
	$("#status_start").attr('src','../images/kaiguan.png');
	$("#status_start").removeAttr('alt');
}

// 充电按钮On（充电状态）
function chargingBtnOn() {
	$("#status_start").removeClass("kaiguan-animate");
	$("#status_start").attr('src','../images/charging.png');
	$("#status_start").attr('alt', 'charging');
}

// 充电按钮重置
function chargingBtnOnOrOff() {
	if ($("#status_start").attr('alt') == 'charging') {
		chargingBtnOff();
	} else {
		chargingBtnOn();
	}
}

// 重置图片部分到可扫码状态
function resetChargingInfo2Scan() {
	$(".beforeask").show();
	$(".statusRunning").hide();
	$(".station").hide();
	$('#chargigOnPic').show();
	$('#chargigOffPic').hide();
	$('#chargeMarkBottom').hide();
	$('#chargeMarkBottomStatus').hide();
	$('.chargestop', '#chargeMarkBottomStatus').html('');
}

// 显示准备充电ready状态界面
function showReadyStatus() {
	$(".beforeask").hide();
	$(".station").show();
	$(".statusRunning").hide();
	$('#chargigOnPic').show();
	$('#chargigOffPic').hide();
	$('#chargeMarkBottom').show();
	$('#chargeMarkBottomStatus').hide();
	$('.chargestop', '#chargeMarkBottomStatus').html('');
}

// 显示正在充电状态界面
function showStartStatus() {
	$(".beforeask").hide();
	$(".station").hide();
	$(".statusRunning").show();
	$('#chargigOnPic').show();
	$('#chargigOffPic').hide();
	$('#chargeMarkBottom').show();
	$('#chargeMarkBottomStatus').hide();
	$('.chargestop', '#chargeMarkBottomStatus').html('');
}

// 显示正在充电状态界面数据
function showStartData(data) {
	$("#enercy").html(data.enercyTxt);
	$("#chargingStartTime").html(data.startChargingTime);
	$("#currentElectric").html(data.currentElectric);
}

/**
 * 显示非正常充电状态界面
 * @param {Object} chargingStatus 充电桩状态
 * @param {Object} isOffLine 是否桩处于离线状态
 */
function showAbnormalSituation(chargingStatus, isOffLine) {
	var showText = "设备状态：";
	if (isOffLine) {
		showText += "离线";
	} else {
		if (chargingStatus == CHARGING_BOX_STATUS.Reserved) { // 预订状态
			showText += CHARGING_BOX_STATUS_TXT.Reserved;
		} else if (chargingStatus == CHARGING_BOX_STATUS.Unavailable) { // 不可用状态
			showText += CHARGING_BOX_STATUS_TXT.Unavailable;
		} else if (chargingStatus == CHARGING_BOX_STATUS.Faulted) { // 故障状态
			showText =+ CHARGING_BOX_STATUS_TXT.Faulted;
		} else {
			showText =+ "未知"+(chargingStatus || "["+chargingStatus+"]");
		}
	}
	showErrorMsg(showText);
}

// 显示错误信息
function showErrorMsg(showText) {
	$(".beforeask").hide();
	$(".station").hide();
	$(".statusRunning").show();
	$('#chargigOnPic').hide();
	$('#chargigOffPic').show();
	$('#chargeMarkBottom').hide();
	$('#chargeMarkBottomStatus').show();
	$('.chargestop', '#chargeMarkBottomStatus').html(showText);
}

// 显示发送命令（开始、结束充电）后界面
function showSendCmd(showTxt) {
	$(".beforeask").hide();
	$(".station").hide();
	$(".statusRunning").show();
	$('#chargigOnPic').hide();
	$('#chargigOffPic').show();
	$('#chargeMarkBottom').hide();
	$('#chargeMarkBottomStatus').show();
	$('.chargestop', '#chargeMarkBottomStatus').html(showTxt+"<br/>请稍等...");
}

// 显示结束充电状态界面
function showStopStatus(data) {
	$(".beforeask").hide();
	$(".station").hide();
	$(".statusRunning").show();
	$('#chargigOnPic').hide();
	$('#chargigOffPic').show();
	$('#chargeMarkBottom').hide();
	$('#chargeMarkBottomStatus').show();
	$('.chargestop', '#chargeMarkBottomStatus').html('充电已停止<br/>请拔枪');
	if (data && data.enercyTxt) {
		$('#enercy').html(data.enercyTxt);
	}
}

// 显示电流电压电量
function showMeterValues(data) {
	$(".beforeask").hide();
	$(".station").hide();
	$(".statusRunning").show();
	$('#chargigOnPic').show();
	$('#chargigOffPic').hide();
	$('#chargeMarkBottom').show();
	$('#chargeMarkBottomStatus').hide();
	$('.chargestop', '#chargeMarkBottomStatus').html('');
	$("#enercy").html(data.enercyTxt);
	$("#currentElectric").html(data.currentElectric);
}

/**
 * 1）若设备A已经停止充电，则看看是否有其他正在充电的设备，
 * 2）若有设备B也正在充电，则选中B设备，且拉取设备B最新充电状态，并做进一步操作，
 * 		且清空设备A本地缓存的充电信息，且根据设备A是否为当前登录账号已绑定的设备，选择是否清空设备列表中设备A信息；
 * 3）若无设备B正在充电，则清空设备A本地缓存的充电信息，且设备选中“未知”，界面重置到可扫码充电状态，
 * 		且根据设备A是否为当前登录账号已绑定的设备，选择是否清空设备列表中设备A信息；
 * @param {String} chargeBoxSerialNumber 充电桩序列码
 * @param {Boolean} isUserClickTrigger 是否为设备列表改变事件触发，true:是,false:否
 * @param {Boolean} isStopTrans 是否是拔枪触发
 */
function showDevice2OtherChargingBoxOrUnkown(chargeBoxSerialNumber, isUserClickTrigger, isStopTrans) {
	var otherChargingDeviceSerialNumber = null;
	var isFirst = true;
	if (deviceInfo && deviceInfo.length > 0) {
		for (var idx in deviceInfo) {
			var device = deviceInfo[idx];
			if (device.chargeBoxSerialNumber == chargeBoxSerialNumber) {
				updateDeviceStatus(device.chargeBoxSerialNumber, DEVICE_STATUS.READY);
			} else {
				if (isFirst && device.status == DEVICE_STATUS.START_TRANS) {
					otherChargingDeviceSerialNumber = device.chargeBoxSerialNumber;
					isFirst = false;
				}
			}
		}
	}
	
	if(isStopTrans) {
		otherChargingDeviceSerialNumber = 'none';
	}
	
	// 更新设备选中
	removeDevice(chargeBoxSerialNumber, otherChargingDeviceSerialNumber, isUserClickTrigger);
}

// 如果是未绑定（直接扫码充电）的充电桩，则设备列表清除此设备信息
function removeDevice(removeChargeBoxSerialNum, otherChargingDeviceSerialNumber, isUserClickTrigger) {
	if (isUserClickTrigger) {
		showReadyStatus();
		chargingBtnOff();
	} else {
		var isExist = isBoxInBoundDeviceFromLocal(removeChargeBoxSerialNum);
		if (!isExist) {
			$("#device").find("option[value='"+removeChargeBoxSerialNum+"']").remove();
		}
		otherChargingDeviceSerialNumber = otherChargingDeviceSerialNumber ||  'none';
		selectedDevice(otherChargingDeviceSerialNumber);
	}
}

// 页面数据重置
function resetPageData() {
	$("#enercy").html('0');
	$("#chargingStartTime").html('00:00:00');
	$("#currentElectric").html('0');
}

// 充电桩是否是已绑定充电桩
function isBoxInBoundDeviceFromLocal(chargeBoxSerialNumber) {
	var boundDeviceLocal = getBoundDeviceFromLocal();
	for (var idx in boundDeviceLocal) {
		var device = boundDeviceLocal[idx];
		if (device.chargeBoxSerialNumber == chargeBoxSerialNumber) {
			return true;
		}
	}
	return false;
}

// 从本地存储获取已绑定账户信息
function getBoundDeviceFromLocal() {
	var boundDeviceLocal = localStorage.getItem('BOUND_DEVICE');
	return JSON.parse(boundDeviceLocal);
}

/**
 * 开始充电
 */
function startCharge() {
	loginInfo = loginInfo || getLoginInfo();
	var loginId = loginInfo.loginId;
	var chargeBoxSerialNumber = $('#device').val();
	if (!loginId) {
		toLogin();
		return;
	}
	if (!chargeBoxSerialNumber || chargeBoxSerialNumber == 'none') {
		mui.toast('请选择充电设备！');
		chargingBtnOff();
		return;
	}
	var paramsJson = { mobileNumber:loginId, chargeBoxSerialNumber:chargeBoxSerialNumber};
	paramsJson = prepareParams(paramsJson, loginInfo);
	
	var isExecuted = updateDeviceStatus(chargeBoxSerialNumber, DEVICE_STATUS.SEND_START); // 更新设备充电状态
	if (!isExecuted) {
		mui.toast('设备当前状态下不能发起开始充电，请下拉刷新最新设备状态！');
		chargingBtnOff();
		return;
	}
	showSendCmd('发起开始充电命令');
	$.ajax({
		url:webRoot + "/app/charge/reqToStartTrans",
		type:"post",
		datatype:"json",
		data: paramsJson,
		success: function(msg) {
			if (msg.respCode!=1) {
				mui.toast(msg.respMsg);
				showReadyStatus();
				chargingBtnOff();
				updateDeviceStatus(chargeBoxSerialNumber, DEVICE_STATUS.READY); // 更新设备充电状态
			}
		},
		error:function(e) {
			mui.toast('网络不给力，请重新尝试！');
			showReadyStatus();
			chargingBtnOff();
			updateDeviceStatus(chargeBoxSerialNumber, DEVICE_STATUS.READY); // 更新设备充电状态
		},
		complete:function (XHR, textStatus) {
			startChargingStateNotify(); // 启动充电状态长轮询
		}
	});
}

/**
 * 结束充电
 */
function stopCharge() {
	loginInfo = loginInfo || getLoginInfo();
	var loginId = loginInfo.loginId;
	if (!loginId) {
		toLogin();
		return;
	}
	var chargeBoxSerialNumber = $('#device').val();
	if (!chargeBoxSerialNumber || chargeBoxSerialNumber == 'none') {
		mui.toast('请选择充电设备！');
		chargingBtnOn();
		return;
	}
	var paramsJson = { mobileNumber:loginId, chargeBoxSerialNumber:chargeBoxSerialNumber};
	paramsJson = prepareParams(paramsJson, loginInfo);
	
	var isExecuted = updateDeviceStatus(chargeBoxSerialNumber, DEVICE_STATUS.SEND_STOP); // 更新设备充电状态
	if (!isExecuted) {
		mui.toast('设备当前状态下不能发起结束充电，请下拉刷新最新设备状态！');
		chargingBtnOn();
		return;
	}
	showSendCmd('发起结束充电命令');
	$.ajax({
		url:webRoot + "/app/charge/reqToStopTrans",
		type:"post",
		datatype:"json",
		data: paramsJson,
		success: function(msg) {
			if (msg.respCode!=1) {
				mui.toast(msg.respMsg);
				showStartStatus();
				chargingBtnOn();
				updateDeviceStatus(chargeBoxSerialNumber, DEVICE_STATUS.START_TRANS); // 更新设备充电状态
			}
		},
		error:function(e) {
			mui.toast('网络出现小差，请重新尝试！');
			showStartStatus();
			chargingBtnOn();
			updateDeviceStatus(chargeBoxSerialNumber, DEVICE_STATUS.START_TRANS); // 更新设备充电状态
		},
		complete:function (XHR, textStatus) {
			startChargingStateNotify();
		}
	});
}

// 启动充电状态长轮询
function startChargingStateNotify() {
	
	loginInfo = loginInfo || getLoginInfo();
	var loginId = loginInfo.loginId;
	if (!loginId) {
		toLogin();
		return;
	}
	
	var deviceSerialNumber = $('#device').val();
	if (!deviceSerialNumber || deviceSerialNumber.length<=0 || deviceSerialNumber=='none') {
		return;
	}
	for (var idx in deviceInfo) {
		var device = deviceInfo[idx];
		var notify = device.chargingStatusNofity;
		if (device.chargeBoxSerialNumber == deviceSerialNumber) {
			if (notify.isRunning) {
				return;
			}
			break;
		}
	}
	chargingStateNotify(deviceSerialNumber, loginInfo);
}

// 充电通知长轮询状态isRunning置为true
function setChargingStateNotifyIsRunning2True(chargeBoxSerialNumber) {
	for (var idx in deviceInfo) {
		var device = deviceInfo[idx];
		var notify = device.chargingStatusNofity;
		if (device.chargeBoxSerialNumber == chargeBoxSerialNumber) {
			notify.isRunning = true;
			break;
		}
	}
}

// 强制终止充电状态通知轮询
function abortChargingStateNotify(chargeBoxSerialNumber) {
	for (var idx in deviceInfo) {
		var device = deviceInfo[idx];
		var notify = device.chargingStatusNofity;
		if (device.chargeBoxSerialNumber == chargeBoxSerialNumber) {
			notify.isRunning = true;
			notify.isAbort = true;
		}
	}
}

// 状态通知，long polling
function chargingStateNotify(chargeBoxSerialNumber, loginInfo) {
	
	var paramsJson = { loginId:loginInfo.loginId, chargeBoxSerialNumber:chargeBoxSerialNumber};
	paramsJson = prepareParams(paramsJson, loginInfo);
	
	// 充电通知长轮询状态isRunning置为true
	setChargingStateNotifyIsRunning2True(chargeBoxSerialNumber);
	
	$.ajax({
		url:webRoot + "/app/charge/chargingStateNotify",
		type:"post",
		datatype:"json",
		data: paramsJson,
		success: function(msg) {
			if (msg.respCode==1) {
				var data = msg.data;
				// 获取充电信息（状态、电流电压等）
				console.log("long polling:"+JSON.stringify(msg))
				if (data.notifyType == PUSH_MSG_NOTIFY_TYPE.START_TRANS) { // 开始充电
					// 开始充电时间显示
					$('#chargingStartTime').html(data.startTime);
					showStartStatus();
					chargingBtnOn();
					updateDeviceStatus(chargeBoxSerialNumber, DEVICE_STATUS.START_TRANS);
				} else if (data.notifyType == PUSH_MSG_NOTIFY_TYPE.STOP_TRANS) { // 拔枪
					// 强制终止状态长轮询
					abortChargingStateNotify(chargeBoxSerialNumber);
					showStopStatus();
					setTimeout("showDevice2OtherChargingBoxOrUnkown("+chargeBoxSerialNumber+", false, true)", 1000);
				} else if (data.notifyType == PUSH_MSG_NOTIFY_TYPE.ABORT_TRANS) {
					showStopStatus();
					chargingBtnOff();
					updateDeviceStatus(chargeBoxSerialNumber, DEVICE_STATUS.ABORT_TRANS);
				} else if (data.notifyType == PUSH_MSG_NOTIFY_TYPE.METER_VALUES) {
					var chargingStatus = getDeviceChargingStatusFromLocal(chargeBoxSerialNumber);
					if (DEVICE_STATUS.START_TRANS == chargingStatus) {
						showMeterValues(data);
						chargingBtnOn();
					}
				} else {
					//alert("notifyType:" + data.notifyType);
				}
			}
		},
		error:function(e) {
		}
	})
	.always(function () {
		
		var isAbort = false;
		if (chargeBoxSerialNumber != $('#device').val()) {
			isAbort = true;
		}
		for (var idx in deviceInfo) {
			var device = deviceInfo[idx];
			var notify = device.chargingStatusNofity;
			if (device.chargeBoxSerialNumber == chargeBoxSerialNumber && (isAbort || notify.isAbort)) {
				notify.isRunning = false;
				notify.isAbort = false;
				return false; // 退出轮询
			}
		}
		chargingStateNotify(chargeBoxSerialNumber, loginInfo);
	});
}

/*****************是否阅读过充电说明**************************/
$(document).ready(function() {
	// 安装APP后是否阅读过充电指示
	var isReadChargingReadme = localStorage.getItem('IS_READ_CHARGING_README');
	if (!isReadChargingReadme) {
		$(".mask-black").on('click',function(){
			$(".mask-black").fadeOut(800);
			localStorage.setItem('IS_READ_CHARGING_README', "Y");
		});
		$(".mask-scan").on('click',function(){
			$(".mask-scan").fadeOut(800);
			localStorage.setItem('IS_READ_CHARGING_README', "Y");
		});
		$('.mask-black').show();
		$('.mask-scan').show();
	}
});


/*****************扫码部分**************************/
var img = null;
var blist = [];
function scaned( t, r, f ) {
	console.log("t:"+t+",r:"+r+",f:"+f);
	if (!r) {
		isBoundChargeBox = false;
		mui.toast("扫码失败，请重新尝试！");
		return;
	}
	if (isBoundChargeBox) {
		isBoundChargeBox = false;
		var params = {barcodeUrl:r};
		toPage('nav/bind_pile.html', params);
	} else {
		isBoundChargeBox = false;
		updateCurrentDevice(r);
	}
}
function updateCurrentDevice(barcodeUrl) {
	// 获取当前设备编号
	var paramsJson = { barcodeUrl:barcodeUrl};
	paramsJson = prepareParams(paramsJson, loginInfo);
	$.ajax({
		url:webRoot + "/app/charge/getChargingBox",
		type:"GET",
		datatype:"json",
		data: paramsJson,
		success: function(msg) {
			if (msg.respCode==1) {
				var data = msg.data;
				if (data.chargeBoxSerialNum) {
					// 显示扫码设备
					showScanDevice(data.chargeBoxSerialNum, data.siteName);
				} else {
					mui.toast("获取设备信息失败！");
					selectedDevice('none', true);
				}
			} else {
				mui.toast(msg.respMsg);
			}
		},
		error:function(e) {
			mui.toast('网络不给力！');
		}
	});
}

// 显示扫码的设备
function showScanDevice(chargeBoxSerialNumber, siteName) {
	var isExists = isExistDevice(chargeBoxSerialNumber);
	if (!isExists) {
		addDevice(chargeBoxSerialNumber, siteName);
	}
	
	// 选中设备
	selectedDevice(chargeBoxSerialNumber, true);
}
