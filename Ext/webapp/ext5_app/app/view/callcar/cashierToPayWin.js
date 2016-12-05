Ext.define('Evcorp.view.callcar.cashierToPayWin', {
	extend : 'Ext.window.Window',
	alias : 'widget.cashierToPayWin',
	requires : [ 'Evcorp.view.callcar.cashierToPayWinViewController',
			'Evcorp.view.callcar.cashierToPayWinViewModel',
			'Ext.grid.Panel', 'Ext.tab.Panel', 'Ext.grid.column.Column',
			'Ext.grid.View', 'Ext.toolbar.Toolbar', 'Ext.button.Button',
			'Ext.toolbar.Fill', 'Ext.form.Panel', 'Ext.form.field.ComboBox',
			'Ext.form.DateField' 
			],
	viewModel : {
		type : 'cashierToPayWin'
	},
	controller : 'cashierToPayWin',
	referenceHolder: true,
	modal : true,
	autoScroll:true,
	title : '出纳付款',
	closeAction : 'destory',
	layout : {
		type : 'vbox',
		align : 'stretch'
	},
	items: [
	        {
				xtype:'flowChartPanel',
				reference:'flowChartPanel',
				border:false,
	        },{
	        	xtype:'uploadAttachmentPanel'
	        },{
		xtype:'panel',
		autoScroll:false,
		items:[
		         {
	                 xtype: 'form',
	                 width:'100%',
	                 height:200,
	                 reference:'commentForm',
	                 api:{
	                	 submit:callCarContro.uploadTellerFile
	                 },
	                 autoScroll:true,
	                 buttonAlign:'center',
	                 items: [{
	                     xtype: "textarea",
	                     margin:'15 auto',
	                     padding:'15',
	                     fieldLabel: "备注",
	                     name: "comment",
	                     labelSepartor: "：",
	                     labelWidth: 80,
	                     width: '90%',
	                 },{
	                	 border:false,
	                	 html:'<div class="alert alert-info">注：完成付款后请上传付款凭证扫描件货拍照照片</div>',
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
	                     text : "提交",
	                     icon:'images/user_sure.png',
	                     margin : "0 50 0 0",
	                     listeners:{
	                    	 click:'onPayClick'
	                     },
	                 }]
		         }
		       ]
	
	}]
});