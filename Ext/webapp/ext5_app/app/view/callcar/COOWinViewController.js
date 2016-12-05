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

Ext.define('Evcorp.view.callcar.COOWinViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.COOWin',
    onAgreeClick:function(){
    	var taskId = this.lookupReference('flowChartPanel').lookupReference('detailForm').getForm().getValues().taskId;
    	var processInstanceId = this.lookupReference('flowChartPanel').lookupReference('detailForm').getForm().getValues().processInstanceId;
    	var businessKey = this.lookupReference('flowChartPanel').lookupReference('detailForm').getForm().getValues().code;
    	var comment = this.lookupReference('commentForm').getForm().getValues().comment;
    	var win = this.getView();
    	win.mask("请稍等，正在处理中...","x-mask-loading");
    	Ext.Ajax.request({
			url : 'callCar/cooAgree',
			params : {
				taskId : taskId,
				processInstanceId : processInstanceId,
				businessKey : businessKey,
				comment : comment
			},
            method: 'POST',	
			success : function(data) {
				win.unmask();
				Ext.Msg.alert("提示",'审批通过成功',function(){
	    			var myActiveTaskGrid = Ext.ComponentQuery.query('#myActiveTaskGrid')[0];
	    			var myActiveTaskStore = myActiveTaskGrid.getStore();
	    			myActiveTaskStore.loadPage(1 ,{"start":0,"limit":20});
	    			var eastPanel = Ext.ComponentQuery.query("#eastPanelId")[0];
	    	        eastPanel.removeAll();
	    			win.close();
	    		});
			}
		});
    },
    onRejectClick:function(){
    	var taskId = this.lookupReference('flowChartPanel').lookupReference('detailForm').getForm().getValues().taskId;
    	var processInstanceId = this.lookupReference('flowChartPanel').lookupReference('detailForm').getForm().getValues().processInstanceId;
    	var businessKey = this.lookupReference('flowChartPanel').lookupReference('detailForm').getForm().getValues().code;
    	var comment = this.lookupReference('commentForm').getForm().getValues().comment;
    	var win = this.getView();
    	if(comment==null||comment==''){
    		Ext.Msg.alert("提示",'请填写审批意见')
    	}else{
    		win.mask("请稍等，正在处理中...","x-mask-loading");
    		Ext.Ajax.request({
    			url : 'callCar/cooReject',
    			params : {
    				taskId : taskId,
    				processInstanceId : processInstanceId,
    				businessKey : businessKey,
    				comment : comment
    			},
                method: 'POST',	
    			success : function(data) {
    				win.unmask();
    				Ext.Msg.alert("提示",'审批驳回成功',function(){
    	    			var myActiveTaskGrid = Ext.ComponentQuery.query('#myActiveTaskGrid')[0];
    	    			var myActiveTaskStore = myActiveTaskGrid.getStore();
    	    			myActiveTaskStore.loadPage(1 ,{"start":0,"limit":20});
    	    			var eastPanel = Ext.ComponentQuery.query("#eastPanelId")[0];
		    	        eastPanel.removeAll();
    	    			win.close();
    	    		});
    			}
    		});
    	}
    	
    }
});
