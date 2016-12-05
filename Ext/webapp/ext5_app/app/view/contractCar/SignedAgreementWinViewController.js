/*
 * File: app/view/menu/menuPanelViewController.js
 *
 * This file was generated by Sencha Architect version 3.1.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 5.0.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 5.0.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Evcorp.view.contractCar.SignedAgreementWinViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.SignedAgreementWin',
    initWindow:function(){
    	var win = this.getView();
    	var olPreSaleOrderNo = '';
    	var store = win.getViewModel().getStore('detail');
		if(store!=null){
			store.load({
				params:{businessKey:win.businessKey},
				callback: function(rr, operation, success) {
					if(success){
						olPreSaleOrderNo = rr[0].data.olPreSaleOrderNo;
						var orderListDetailPanel = win.down('orderlistdetails');
						var orderDetailTab = orderListDetailPanel.lookupReference('orderDetailTab');
						orderDetailTab.tabBar.items.items[1].hide();
						if(orderListDetailPanel!=null){
							var commentForm = win.lookupReference('commentForm');
							commentForm.getForm().setValues({decorationFee:rr[0].data.decorationFee});
							var contractCarOrderDetailListStore = orderListDetailPanel.getViewModel().getStore('contractCarOrderDetailListStore');
							if(contractCarOrderDetailListStore!=null)
								contractCarOrderDetailListStore.load({params:{orderNo:win.businessKey}});
							var contractCarOrderPayLogListStore = orderListDetailPanel.getViewModel().getStore('contractCarOrderPayLogListStore');
				    		if(contractCarOrderPayLogListStore!=null)
								contractCarOrderPayLogListStore.load({params:{orderNo: win.businessKey}});
				    		var replaymentPlanListStore = orderListDetailPanel.getViewModel().getStore('replaymentPlanListStore');
				    		if(replaymentPlanListStore!=null)
					    		replaymentPlanListStore.load({params:{orderNo: win.businessKey}});
							var bankCardInfoStore = win.getViewModel().getStore('bankCardInfoStore');
							var customerCode = orderListDetailPanel.lookupReference('taskDetailForm').getForm().getValues().customerCode;
							bankCardInfoStore.load({params:{customerCode:customerCode}});
				    		
							var businessKey = olPreSaleOrderNo; // 附件业务实体编号：征信材料编号
	        	        	var businessType = 'attachBizEntityType_ZXCL'; // 附件业务实体类型：征信材料代码
	        	        	var businessTypeName = '征信材料'; // 附件业务实体类型名称：征信材料（理论上从字典表去nameCn字段
	        	        	
	        	        	var creditattachmentStore = orderListDetailPanel.getViewModel().getStore('creditattachmentStore');
	    	    			if(creditattachmentStore!=null){
	    	    				creditattachmentStore.load({params:{bizEntityCode:businessKey,bizEntityType:businessType}});
	    	    			}
	    	    			var credittypeStore = orderListDetailPanel.getViewModel().getStore('creditattachmentTypeStore');
	    	    			credittypeStore.load({params:{type:businessType}});
							
				    		var contractCarSuppleAgreementListStore = win.getViewModel().getStore('contractCarSuppleAgreementListStore');
							if(contractCarSuppleAgreementListStore!=null){
								// 加载附件补充协议
					    		contractCarSuppleAgreementListStore.load({
					    	    	params:{orderNo:win.businessKey},
					        	});
							}
						}
					}
			    }
			});
		}
    },
    onDownContractClick:function(){
    	var win = this.getView();
    	var orderListDetailPanel = win.down('orderlistdetails');
    	var olPreSaleOrderNo = orderListDetailPanel.lookupReference('taskDetailForm').getForm().getValues().olPreSaleOrderNo;
    	if (!olPreSaleOrderNo) {
        	Ext.Msg.alert("提示",'租赁合同编号为空。');
        	return;
        }
		var customerName = orderListDetailPanel.lookupReference('taskDetailForm').getForm().getValues().customerName;
		var dingJinFee = orderListDetailPanel.lookupReference('taskDetailForm').getForm().getValues().dingJinFee;
        dingJinFee = dingJinFee == null ? '' : dingJinFee;
		window.location.href = 'ccOrder/download/contract?olPreSaleOrderNo='+olPreSaleOrderNo+'&customerName='+customerName;
	},

	// 上传租赁合同附件
    onUploadContractAttachemetClick : function() {
    	var orderListDetailPanel = this.getView().down('orderlistdetails');
    	var form = orderListDetailPanel.lookupReference('taskDetailForm');
        var olPreSaleOrderNo = form.getForm().getValues().olPreSaleOrderNo;
        if (!olPreSaleOrderNo) {
        	Ext.Msg.alert("提示",'租赁合同编号为空。');
        	return;
        }
        
        var businessKey = olPreSaleOrderNo; // 附件业务实体编号：租赁合同编号
    	var businessType = 'attachBizEntityType_ZLHT'; // 附件业务实体类型：租赁合同代码
    	var businessTypeName = '租赁合同'; // 附件业务实体类型名称：租赁合同（理论上从字典表去nameCn字段）
        
        var uploadAttachmenWin = Ext.create({
			xtype:'UploadAttachmentWin',
			width : 800,
			height : '60%',
			businessKey:businessKey,
			businessType:businessType,
			businessTypeName:businessTypeName,
			closeAction : 'destroy'
		});
		var uploadAttachmentPanel = uploadAttachmenWin.down('#uploadAttachmentPanelItemId');// 附件Panel
		uploadAttachmentPanel.setTitle('');
		uploadAttachmenWin.show();
        
    },
	// 上传补充协议
    onUploadBCXYClick : function (grid, rowIndex) {
    	var ccsaGridStore = grid.getStore();
        var rec = ccsaGridStore.getAt(rowIndex);
        var suppleAgreementNo = rec.get('suppleAgreementNo');
        if (!suppleAgreementNo) {
        	Ext.Msg.alert('提示','请先保存补充协议后再进行上传操作！');
        	return;
        }
    	var businessKey = suppleAgreementNo; // 附件业务实体编号：租赁合同编号
    	var businessType = 'attachBizEntityType_ZLHT'; // 附件业务实体类型：租赁合同代码
    	var businessTypeName = '租赁合同'; // 附件业务实体类型名称：租赁合同（理论上从字典表去nameCn字段）
    	
    	var uploadAttachmenWin = Ext.create({
			xtype:'UploadAttachmentWin',
			width : 800,
			height : '60%',
			businessKey:businessKey,
			businessType:businessType,
			businessTypeName:businessTypeName,
			closeAction : 'destroy'
		});
		var uploadAttachmentPanel = uploadAttachmenWin.down('#uploadAttachmentPanelItemId');// 附件Panel
		uploadAttachmentPanel.setTitle('');
		uploadAttachmenWin.show();
    },
    onSaveContractCarBCYXtClick : function () {
    	var win = this.getView();
    	var orderListDetailPanel = win.down('orderlistdetails');
    	var form = orderListDetailPanel.lookupReference('taskDetailForm');
        var orderCount = form.getForm().getValues().orderCount;
        var olPreSaleOrderNo = form.getForm().getValues().olPreSaleOrderNo;
        
 	   var gridStore = win.getViewModel().getStore('contractCarSuppleAgreementListStore');
 	   var modifyArray = gridStore.getModifiedRecords();
	   if(modifyArray.length == 0){
 		   Ext.Msg.alert('提示','你未进行任何添加或修改操作');
 		   return false;
 	   } else if (gridStore.data.length>orderCount) {
 		   Ext.Msg.alert('提示','补充协议个数不能多于订单数量！');
 		   return false;
 	   } else{
 		  var flag = 0;
		   Ext.each(modifyArray, function(obj,index){
			   if (!obj.get('contractCarOrderId')) {
				   flag = 1;
				   Ext.Msg.alert("提示",'请先选择或新建一条订单记录后再编辑合同补充协议信息。');
				   return false;
			   }
			   if(!obj.get('signDate') || !obj.get('startDate') || !obj.get('endDate') || !obj.get('bankCardInfoId')){
				   flag = 2;
				   Ext.Msg.alert('提示','提交的数据中不能包含空值');
				   return false;
			   }
		   });
		   if(flag == 0){
			   gridStore.sync({
					success: function(ba,op){
					   Ext.Msg.alert("提示","保存合同补充协议成功");
					   gridStore.reload();
				   },
				   failure: function(ba,op){
					   Ext.Msg.alert("提示","保存合同补充协议："+ba.exceptions[0].getError());
				   }
			   }); 
		   }
 	   }
     },
     onSubmitClick:function(){
    	var win = this.getView();
     	var taskId = win.taskId;
     	var processInstanceId = win.processInstanceId;
     	var businessKey = win.businessKey;
     	var commentForm = this.lookupReference('commentForm');
     	var comment = commentForm.getForm().getValues().comment;
     	var isValid = commentForm.getForm().isValid();
     	if(isValid){
     		var decorationFee = commentForm.getForm().getValues().decorationFee;
     		win.mask("请稍等，正在处理中...","x-mask-loading");
     		Ext.Ajax.request({
     			url : 'ccOrder/signAgreementSubmit',
     			params : {
     				taskId : taskId,
     				processInstanceId : processInstanceId,
     				businessKey : businessKey,
     				comment : comment,
     				decorationFee : decorationFee
     			},
                 method: 'POST',	
     			success : function(data) {
     				win.unmask();
     				Ext.Msg.alert("提示",'提交成功',function(){
     	    			var myActiveTaskGrid = Ext.ComponentQuery.query('#myActiveTaskGrid')[0];
     	    			var myActiveTaskStore = myActiveTaskGrid.getStore();
     	    			myActiveTaskStore.loadPage(1 ,{"start":0,"limit":20});
     	    			var eastPanel = Ext.ComponentQuery.query("#eastPanelId")[0];
		    	        eastPanel.removeAll();
     	    			win.close();
     	    		});
     			}
     		});
     	}else{
     		Ext.Msg.alert('提示','请填写装潢费用');
     	}
     },
     // 打印补充协议
     onPrintBCXYClick : function (grid, rowIndex) {
    	var win = this.getView();
     	var orderListDetailPanel = win.down('orderlistdetails');
 		var customerName = orderListDetailPanel.lookupReference('taskDetailForm').getForm().getValues().customerName;
 		var olPreSaleOrderNo = orderListDetailPanel.lookupReference('taskDetailForm').getForm().getValues().olPreSaleOrderNo;
     	var contractCarCode= orderListDetailPanel.lookupReference('taskDetailForm').getForm().getValues().contractCarCode;
     	var ccsaGridStore = grid.getStore();
        var rec = ccsaGridStore.getAt(rowIndex);
        var bankAccountName='';
    	var bankAccountNo='';
    	var bankOpenPlace='';
        var bankCardInfoStore = this.getView().getViewModel().getStore('bankCardInfoStore');
        if (bankCardInfoStore && rec.data.bankCardInfoId && bankCardInfoStore.findRecord('id', rec.data.bankCardInfoId)) {
        	var bankCardInfo = bankCardInfoStore.findRecord('id', rec.data.bankCardInfoId).data.bankAccountInfo;
        	var bankCardInfoArray = bankCardInfo.split(' ');
        	if (bankCardInfoArray.length>=3) {
        		bankAccountNo=bankCardInfoArray[0];
        		bankAccountName=bankCardInfoArray[1];
            	bankOpenPlace=bankCardInfoArray[2];
        	}
        }
 		window.location.href = 'ccOrder/download/bcxy?'
 			+ params;
     },
     onEditBankCardClick:function(){
    	 var twin = this.getView();
    	 var win = Ext.create('Evcorp.view.contractCar.CustomerInfoWin');
    	 win.on('beforeshow',function(){
        	 var orderListDetailPanel = twin.down('orderlistdetails');
//      		 var customerName = orderListDetailPanel.lookupReference('taskDetailForm').getForm().getValues().customerName;
  			 var customerPhone = orderListDetailPanel.lookupReference('taskDetailForm').getForm().getValues().customerPhone;
      		 var store = win.getViewModel().getStore('customer');
      		 store.load({
				params:{cusName:customerPhone},
				callback: function(records, operation, success) {
					if(success){
						win.down('form').loadRecord(records[0]);
						var customerId = records[0].data.id;
						var bankCardInfoListStore = win.getViewModel().getStore('bankCardInfoListStore');
			    		bankCardInfoListStore.load({
					    	params:{ customerId: customerId },
				    	});
					}
			    }
			});
    	 })
    	 win.show();
     },
     // 初始化银行卡下拉框
 	initBankCardInfoCombo:function(){
 		var win = this.getView();
 		var orderListDetailPanel = win.down('orderlistdetails');
 		var customerCode = orderListDetailPanel.lookupReference('taskDetailForm').getForm().getValues().customerCode;
 		var typeStore = win.getViewModel().getStore('bankCardInfoStore');
     	typeStore.load({params:{customerCode:customerCode}});
     },
     bankCardInfoEditor:function(value){
    	var win = this.getView();
 		if(value){
 			var bankCardInfoStore=win.getViewModel().getStore('bankCardInfoStore');
 			if (bankCardInfoStore.findRecord('id', value)) {
				return bankCardInfoStore.findRecord('id', value).data.bankAccountInfo;
			}
			return '';
 		} else {
 			return '';
 		}
 	},
});
