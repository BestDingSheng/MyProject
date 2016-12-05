Ext.define('Evcorp.view.callcar.COOWin', {
	extend : 'Ext.window.Window',
	alias : 'widget.COOWin',
	requires : [ 'Evcorp.view.callcar.COOWinViewController',
			'Evcorp.view.callcar.COOWinViewModel',
			'Ext.grid.Panel', 'Ext.tab.Panel', 'Ext.grid.column.Column',
			'Ext.grid.View', 'Ext.toolbar.Toolbar', 'Ext.button.Button',
			'Ext.toolbar.Fill', 'Ext.form.Panel', 'Ext.form.field.ComboBox',
			'Ext.form.DateField'
			],
	viewModel : {
		type : 'COOWin'
	},
	controller : 'COOWin',
	referenceHolder: true,
	layout: {
	        type: 'hbox',
	        align: 'stretch'
	    },
	//autoScroll : true,
	modal : true,
	
	title : 'COO审核',
	closeAction : 'destory',
	layout : {
		type : 'vbox',
		align : 'stretch'
	},
	items: [{
		xtype:'flowChartPanel',
		reference:'flowChartPanel',
		border:false,
	},{
		xtype:'panel',
		autoScroll:false,
		items:[
		         {
	                 xtype: 'form',
	                 width:'100%',
	                 height:200,
	                 reference:'commentForm',
	                 autoScroll:true,
	                 buttonAlign:'center',
	                 items: [{
	                     xtype: "textarea",
	                     margin:'15 auto',
	                     padding:'15',
	                     fieldLabel: "审批意见",
	                     name: "comment",
	                     labelSepartor: "：",
	                     labelWidth: 80,
	                     width: '90%',
	                 }],
	                 buttons: [{
	                     xtype : "button",
	                     text : "取消",
	                     margin : "0 50 0 0",
	                     iconCls:'common-icon-del',
	                     handler : function() {
	                         this.up("window").close();
	                     },
	                 }, 
	                 {
	                     xtype : "button",
	                     cls:'btn-success',
	                     text : "审批通过",
	                     iconCls:'common-icon-add',
	                     margin : "0 50 0 0",
	                     listeners:{
	                   	  click:'onAgreeClick',
	                     },
	                 },
	                     {
	                         xtype : "button",
	                         cls:'btn-danger',
	                         text : "审批驳回",
	                         iconCls:'common-icon-add',
	                         margin : "0 50 0 0",
	                         listeners:{
	                       	  click:'onRejectClick',
	                         }
	                 }]
		         }
		       ]
	
	}]
});