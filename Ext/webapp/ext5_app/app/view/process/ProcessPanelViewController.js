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

Ext.define('Evcorp.view.process.ProcessPanelViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.processpanelc',
    onMyStartedProcessSelected:function(){
    	var myStartedProcessGrid = this.lookupReference('myStartedProcessGrid');
    	var myStartedProcessStore = myStartedProcessGrid.getStore();
    	var variableGrid = Ext.ComponentQuery.query('#variableGridId')[0];
		var variableStore = variableGrid.getStore();
		var historicTaskGrid = Ext.ComponentQuery.query('#historicTaskGridId')[0];
    	var historicTaskStore = historicTaskGrid.getStore();
    	var sel = myStartedProcessGrid.getSelectionModel().getSelection();
    	Ext.Ajax.request({
			url : 'process/toActiveTaskImg',
			params : {
				processInstanceId : sel[0].data.processInstanceId
			},
            method: 'POST',	
			success : function(data) {
				var processRightPanel = Ext.ComponentQuery.query("#imgPanel")[0];
				processRightPanel.body.update(data.responseText);
				bodyHtml=data.responseText;
				variableStore.load({params:{processInstanceId : sel[0].data.processInstanceId,finished:false}});
				historicTaskStore.load({params:{processInstanceId:sel[0].data.processInstanceId}});
			}
		});
    },
    onMyInvovledProcessSelected:function(){
    	var myInvovledProcessGrid = this.lookupReference('myInvovledProcessGrid');
    	var myInvovledProcessStore = myInvovledProcessGrid.getStore();
    	var variableGrid = Ext.ComponentQuery.query('#variableGridId')[0];
		var variableStore = variableGrid.getStore();
		var historicTaskGrid = Ext.ComponentQuery.query('#historicTaskGridId')[0];
    	var historicTaskStore = historicTaskGrid.getStore();
    	var sel = myInvovledProcessGrid.getSelectionModel().getSelection();
    	Ext.Ajax.request({
			url : 'process/toActiveTaskImg',
			params : {
				processInstanceId : sel[0].data.processInstanceId
			},
            method: 'POST',	
			success : function(data) {
				var processRightPanel = Ext.ComponentQuery.query("#imgPanel")[0];
				processRightPanel.body.update(data.responseText);
				bodyHtml=data.responseText;
				variableStore.load({params:{processInstanceId : sel[0].data.processInstanceId,finished:false}});
				historicTaskStore.load({params:{processInstanceId:sel[0].data.processInstanceId}});
			}
		});
    },
    onMyFinishedProcessSelected:function(){
    	var myFinishedProcessGrid = this.lookupReference('myFinishedProcessGrid');
    	var myFinishedProcessStore = myFinishedProcessGrid.getStore();
    	var variableGrid = Ext.ComponentQuery.query('#variableGridId')[0];
		var variableStore = variableGrid.getStore();
    	var sel = myFinishedProcessGrid.getSelectionModel().getSelection();
    	var historicTaskGrid = Ext.ComponentQuery.query('#historicTaskGridId')[0];
    	var historicTaskStore = historicTaskGrid.getStore();
    	var processRightPanel = Ext.ComponentQuery.query("#imgPanel")[0];
		processRightPanel.body.update('');
    	variableStore.load({params:{processInstanceId : sel[0].data.processInstanceId,finished:true}});
    	historicTaskStore.load({params:{processInstanceId:sel[0].data.processInstanceId}});
    },
    onNotDeletedQueryClick:function(){
    	var myFinishedProcessGrid = this.lookupReference('myFinishedProcessGrid');
    	var myFinishedProcessStore = myFinishedProcessGrid.getStore();
    	myFinishedProcessStore.load({params:{deleted:false}});
    	myFinishedProcessGrid.down('#deleteReasonGridId').hide();
    },
    onDeletedQueryClick:function(){
    	var myFinishedProcessGrid = this.lookupReference('myFinishedProcessGrid');
    	var myFinishedProcessStore = myFinishedProcessGrid.getStore();
    	myFinishedProcessStore.load({params:{deleted:true}});
    	myFinishedProcessGrid.down('#deleteReasonGridId').show();
    }
});
var bodyHtml = '';
function showBigImg(){
	var win = Ext.create('Ext.window.Window',{
		title:'查看流程图',
		width:'90%',
		height:'90%',
		modal:true,
		closable: true,
		layout:'border',
		items:[{
			xtype:'panel',
			region:'center',
			html:bodyHtml,
			autoScroll:true,
		}],
		closeAction : 'destroy',
	});
	win.show();
}
