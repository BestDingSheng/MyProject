/*
 * File: app/view/role/RoleMangerPanelViewController.js
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

Ext.define('Evcorp.view.INV.checkoutSearchPanelViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.checkoutSearchPanel',
    oncheckinClick : function() {
    	var checkinwin = Ext.create({
    		xtype : 'checkinDolistWin',
    		width : '90%',
    		closeAction : 'destroy'
    	});
    	checkinwin.show();
    },

	checkinOperate:function(e, cell){
			var cellindex=cell.cellIndex;
			if(cellindex==9){
				var window = Ext.create({
					xtype : 'checkinDolistWin',
					width : 900,
					closeAction : 'destroy'
				});
				window.show();
			};

	},
	onProviderSearch : function() {
    	var checkinwin = Ext.create({
    		 xtype : 'providerListWin',
    		//xtype : 'orderlistattachmentwin',
    		width : 600,
    		closeAction : 'destroy'
    	});
    	checkinwin.show();
    },
	
	
	onCreateClaimRule : function() {

		var accModel = new Evcorp.model.checkoutSearchDemand({
					id : -1
				});
		var gridStore = this.getView().getViewModel().getStore('checkinDemandStore');
		gridStore.insert(0,accModel);
	},
	searchClick:function(){
		var checkinDemandSearchForm = this.lookupReference('checkinDemandSearchForm');
        var checkinDemandGrid = this.lookupReference('checkinDemandGrid');
        var extraParams = checkinDemandSearchForm.getForm().getValues();
        var checkinDemandStore = checkinDemandGrid.getStore(); 
        
        checkinDemandStore.on("beforeload", function (checkinDemandStore, operation, eOpts) {
					 Ext.apply(checkinDemandStore.proxy.extraParams, extraParams);
					});
       
        checkinDemandStore.loadPage(1,{"start":0,"limit":20});
        checkinDemandGrid.getSelectionModel().deselectAll();

	},
	oncheckinDemandSelected:function(grid, td, cellIndex, record, tr, rowIndex, e, eOpts){
    	var modify = e.getTarget('.btn-primary');
    	var del = e.getTarget('.btn-danger');
    	if(modify){
    		var win = Ext.create({
        		xtype : 'checkinDolistWin',
        		width : '90%',
        		closeAction : 'destroy'
        	});
    		win.down("form").loadRecord(record);
    		var store = win.getViewModel().getStore('checkinDemandDetailStore');
    		store.load({params:{demandId:record.data.id}});
        	win.show();
    	}
    	if(del){
    		var checkinDemandGrid = this.lookupReference('checkinDemandGrid');
    		var checkinDemandStore = checkinDemandGrid.getStore();
    		Ext.Ajax.request({
				url : 'checkin/deletecheckinDemand',
				params : {
					id : record.data.id
				},
	            method: 'POST',	
				success : function(data) {
					if(data.responseText=='success'){
						checkinDemandStore.loadPage(1 ,{"start":0,"limit":10});
					}
				}
			});
    	}
    },
    onExportClick:function(){
    	var checkinDemandGrid = this.lookupReference('checkinDemandGrid');
    	var sel = checkinDemandGrid.getSelectionModel().getSelection();
    	var ids = [];
    	Ext.each(sel,function(item){
    		ids.push(item.data.id);
		});
    	if(ids.length>0){
    		window.open('checkin/download/checkinDemandFile?ids='+ids);
    	}
    },
    onSubmitClick:function(){
    	var checkinDemandGrid = this.lookupReference('checkinDemandGrid');
    	var checkinDemandStore = checkinDemandGrid.getStore();
    	var sel = checkinDemandGrid.getSelectionModel().getSelection();
    	var ids = [];
    	Ext.each(sel,function(item){
			ids.push(item.data.id);
		});
    	if(ids.length>0){
    		Ext.Ajax.request({
				url : 'checkin/startcheckinProcess',
				params : {
					ids : ids
				},
	            method: 'POST',	
				success : function(data) {
					if(data.responseText=='success'){
						Ext.Msg.alert("提示",'提交成功,CALL车流程已启动',function(){
		        			checkinDemandStore.loadPage(1 ,{"start":0,"limit":10});
		        		});
					}
				}
			});
    	}
    },
    onProviderSearch : function() {
    	var providerWin = Ext.create({
    		xtype : 'providerListWin',
    		width : '60%',
    		height: '60%',
    		closeAction : 'destroy'
    	});
    	providerWin.show();
    }
});
