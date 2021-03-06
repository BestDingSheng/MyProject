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

Ext.define('Evcorp.view.task.TaskDetailPanelViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.taskDetailPanelc',
    accept:function(){
    	var taskDetailForm = this.lookupReference('taskDetailForm');
    	var taskId = taskDetailForm.getForm().getValues().taskId;
    	var myActiveTaskGrid = Ext.ComponentQuery.query("#myActiveTaskGrid")[0];
    	var myActiveTaskStore = myActiveTaskGrid.getStore();
    	Ext.Ajax.request({
			url : 'task/acceptTask',
			params : {
				taskId : taskId
			},
            method: 'POST',	
			success : function(data) {
				myActiveTaskStore.loadPage(1 ,{"start":0,"limit":20});
			}
		});
    },
    creditAccept:function(){
    	var taskDetailForm = this.lookupReference('taskDetailForm');
    	var taskId = taskDetailForm.getForm().getValues().taskId;
    	var myActiveTaskGrid = Ext.ComponentQuery.query("#myActiveTaskGrid")[0];
    	var myActiveTaskStore = myActiveTaskGrid.getStore();
    	Ext.Ajax.request({
			url : 'task/creditAccept',
			params : {
				taskId : taskId
			},
            method: 'POST',	
			success : function(data) {
				myActiveTaskStore.loadPage(1 ,{"start":0,"limit":20});
			}
		});
    },
    creditReject:function(){
    	var taskDetailForm = this.lookupReference('taskDetailForm');
    	var taskId = taskDetailForm.getForm().getValues().taskId;
    	var myActiveTaskGrid = Ext.ComponentQuery.query("#myActiveTaskGrid")[0];
    	var myActiveTaskStore = myActiveTaskGrid.getStore();
    	Ext.Ajax.request({
			url : 'task/creditReject',
			params : {
				taskId : taskId
			},
            method: 'POST',	
			success : function(data) {
				myActiveTaskStore.loadPage(1 ,{"start":0,"limit":20});
			}
		});
    },
    viewHistory:function(){
    	var taskDetailForm = this.lookupReference('taskDetailForm');
    	var processInstanceId = taskDetailForm.getForm().getValues().processInstanceId;
    	var win = Ext.create('Ext.window.Window',{
    		title:'查看流程历史',
    		width:'70%',
    		height:'85%',
    		modal:true,
    		autoScroll:true,
    		closable: true,
    		layout:'border',
    		items:[{
    			xtype:'processrightpanel',
    			region:'center'
    		}],
    		closeAction : 'destroy',
    		listeners:{
    			beforeshow:function(){
    				var panel = this.down('panel');
    				var variableGrid = panel.lookupReference('variableGrid');
    	    		var variableStore = panel.getViewModel().getStore('variableStore');
    	    		var historicTaskGrid = panel.lookupReference('historicTaskGrid');
    	        	var historicTaskStore = panel.getViewModel().getStore('historicTaskStore');
    	        	Ext.Ajax.request({
    	    			url : 'process/toActiveTaskImg',
    	    			params : {
    	    				processInstanceId : processInstanceId
    	    			},
    	                method: 'POST',	
    	    			success : function(data) {
    	    				var imgPanel = panel.lookupReference('imgPanel');
    	    				imgPanel.body.update(data.responseText);
    	    				variableStore.load({params:{processInstanceId : processInstanceId,finished:false}});
    	    				historicTaskStore.load({params:{processInstanceId:processInstanceId}});
    	    			}
    	    		});
    			}
    		}
		});
		win.show();
    },
    viewDetail:function(){
    	var taskDetailForm = this.lookupReference('taskDetailForm');
    	var businessKey = taskDetailForm.getForm().getValues().businessKey;
    	var taskId = taskDetailForm.getForm().getValues().taskId;
    	var processInstanceId = taskDetailForm.getForm().getValues().processInstanceId;
    	var businessType = taskDetailForm.getForm().getValues().businessType;
    	var businessTypeName = taskDetailForm.getForm().getValues().businessTypeName;
    	var winName = taskDetailForm.getForm().getValues().formKey;
    	var taskName = taskDetailForm.getForm().getValues().taskName;
    	var win = Ext.create({
			xtype : winName,
			width : 1000,
			height : '85%',
			taskId:taskId,
			businessKey:businessKey,
			processInstanceId:processInstanceId,
			closeAction : 'destroy',
			listeners:{
    			beforeshow:function(){
    				var store = win.getViewModel().getStore('detail');
    				if(store!=null){
    					store.load({
        					params:{businessKey:businessKey},
        					callback: function(records, operation, success) {
        						if(success){
        							win.down('form').loadRecord(records[0]);
        							win.down('form').getForm().setValues({taskId:taskId,processInstanceId:processInstanceId});
        						}
        				    }
        				});
    				}
    				if(businessType=='salesOrder'){
    					win.down('#createOrUpdateItem').setValue(1);
    					var salesOrderForm = win.lookupReference('salesOrderForm');
    					setFormReadOnly(salesOrderForm,true);//表单控件readonly置为true
    					var queryCustomerButton = win.lookupReference('queryCustomerButton');
    					var queryCarButton = win.lookupReference('queryCarButton');
    					var assignCarButton = win.lookupReference('assignCarButton');
    					var contactButton = win.lookupReference('contactButton');
    					var mortgageButton = win.lookupReference('mortgageButton');
    					var insuranceButton = win.lookupReference('insuranceButton');
    					var collectButton = win.lookupReference('collectButton');
    					var paymentButton = win.lookupReference('paymentButton');
    					var chargeButton = win.lookupReference('chargeButton');
    					var licenseButton = win.lookupReference('licenseButton');
    					var sixPieceButton = win.lookupReference('sixPieceButton');
    					queryCustomerButton.setHidden(true);
    					queryCarButton.setHidden(true);
    					assignCarButton.setHidden(true);
    					contactButton.setHidden(true);
    					mortgageButton.setHidden(true);
    					insuranceButton.setHidden(true);
    					collectButton.setHidden(true);
    					paymentButton.setHidden(true);
    					chargeButton.setHidden(true);
    					licenseButton.setHidden(true);
    					sixPieceButton.setHidden(true);
    					var commentForm = win.lookupReference('commentForm');
    					var comment = win.lookupReference('comment');
    					var agreeButton = win.lookupReference('agreeButton');
    					var rejectButton = win.lookupReference('rejectButton');
    					var submitButton = win.lookupReference('submitButton');
    					var deleteButton = win.lookupReference('deleteButton');
    					var saveOrderButton = win.lookupReference('saveOrderButton');
    					saveOrderButton.setHidden(true);
    					commentForm.setHidden(false);
    					deleteButton.setHidden(true);
    					if(taskName=='合同签订'){
    						comment.setHidden(true);
    						agreeButton.setHidden(true);
    						rejectButton.setHidden(true);
    						contactButton.setHidden(false);
    					}else if(taskName=='支付定金'||taskName=='合同尾款收款'||taskName=='财务核算'){
    						comment.setHidden(true);
    						agreeButton.setHidden(true);
    						rejectButton.setHidden(true);
    						paymentButton.setHidden(false);
    					}else if(taskName=='收集征信材料'){
    						comment.setHidden(true);
    						agreeButton.setHidden(true);
    						rejectButton.setHidden(true);
    						collectButton.setHidden(false);
    					}else if(taskName=='征信审核'){
    						collectButton.setHidden(false);
    						comment.setReadOnly(false);
    						comment.setFieldStyle("background:#FFFFFF");
    						submitButton.setHidden(true);
    					}else if(taskName=='贷款审批'){
    						comment.setReadOnly(false);
    						comment.setFieldStyle("background:#FFFFFF");
    						submitButton.setHidden(true);
    						mortgageButton.setHidden(false);
    					}else if(taskName=='购买车辆保险'){
    						comment.setHidden(true);
    						agreeButton.setHidden(true);
    						rejectButton.setHidden(true);
    						insuranceButton.setHidden(false);
    					}else if(taskName=='退单流程'){
    						comment.setReadOnly(false);
    						comment.setFieldStyle("background:#FFFFFF");
    						agreeButton.setHidden(true);
    						rejectButton.setHidden(true);
    						submitButton.setHidden(true);
    						deleteButton.setHidden(false);
    					}else if(taskName=='配车'){
    						comment.setHidden(true);
    						agreeButton.setHidden(true);
    						rejectButton.setHidden(true);
    						assignCarButton.setHidden(false);
    					}else if(taskName=='交车'){
    						comment.setHidden(true);
    						submitButton.setText('交车');
    						agreeButton.setHidden(true);
    						rejectButton.setHidden(true);
    					}else if(taskName=='出库'){
    						comment.setHidden(true);
    						submitButton.setText('出库');
    						agreeButton.setHidden(true);
    						rejectButton.setHidden(true);
    					}else if(taskName=='申请上牌额度单/发票合格证'){
    						comment.setHidden(true);
    						agreeButton.setHidden(true);
    						rejectButton.setHidden(true);
    					}else if(taskName=='电桩安装后信息反馈'){
    						chargeButton.setHidden(false);
    						comment.setHidden(true);
    						agreeButton.setHidden(true);
    						rejectButton.setHidden(true);
    					}else if(taskName=='上铁牌'){
    						comment.setHidden(true);
    						agreeButton.setHidden(true);
    						rejectButton.setHidden(true);
    						licenseButton.setHidden(false);
    					}else if(taskName=='车厂材料上传'){
    						comment.setHidden(true);
    						agreeButton.setHidden(true);
    						rejectButton.setHidden(true);
    						sixPieceButton.setHidden(false);
    					}
    				}
    				var gridStore = win.getViewModel().getStore('detailGrid');
    				if(gridStore!=null){
    					var detailPanel = win.down('flowChartPanel');//CALL车详情panel
    					if(detailPanel!=null){
    						var carUsageStore = detailPanel.getViewModel().getStore('carUsageStore');//车辆用途
        					if(carUsageStore!=null)
        						carUsageStore.load();
    					}
    					gridStore.load({params:{businessKey:businessKey}});
    				}
    				var uploadAttachmentPanel = win.down('uploadAttachmentPanel');
    				if(uploadAttachmentPanel!=null){
    					var attachmentStore = uploadAttachmentPanel.getViewModel().getStore('attachmentStore');
    					if(attachmentStore!=null){
    						attachmentStore.load({params:{bizEntityCode:businessKey}});
    					}
    					var typeStore = uploadAttachmentPanel.getViewModel().getStore('attachmentTypeStore');
    			    	typeStore.load({params:{type:businessType}});
    			    	var form = uploadAttachmentPanel.down('form');
    			    	if(form!=null){
    			    		form.getForm().setValues({businessKey:businessKey,businessType:businessType,businessTypeName:businessTypeName});
    			    	}
    				}
    			}
    		}
		});
    	win.show();
    }
});
setFormReadOnly = function(form, readOnly) {
    setItemsReadOnly = function(items, readOnly) {
        items.each(function(item) {
                    var childitems = item.items;
                    if (!Ext.isEmpty(childitems, false)) {
                        setItemsReadOnly(childitems, readOnly);
                    } else {
                        if (item.xtype != "button" && (item.xtype != "gridview")) {
                            if(!Ext.isEmpty(item.stateId) && (item.stateId == "readOnly")){
                                return ;
                            }
                            item.setReadOnly(readOnly);
                            if (readOnly) {
                                item.setFieldStyle("background:#E6E6E6");
                            } else {
                                item.setFieldStyle("background:#FFFFFF");
                            }
                        }
                    }
                });
    }
    setItemsReadOnly(form.items, readOnly);
};
