Ext.define('Evcorp.view.callcar.SubmitApplicationToManufacturerWin', {
	extend : 'Ext.window.Window',
	alias : 'widget.SubmitApplicationToManufacturerWin',
	requires : [ 'Evcorp.view.callcar.SubmitApplicationToManufacturerWinViewController',
			'Evcorp.view.callcar.SubmitApplicationToManufacturerWinViewModel',
			'Ext.grid.Panel', 'Ext.tab.Panel', 'Ext.grid.column.Column',
			'Ext.grid.View', 'Ext.toolbar.Toolbar', 'Ext.button.Button',
			'Ext.toolbar.Fill', 'Ext.form.Panel', 'Ext.form.field.ComboBox',
			'Ext.form.DateField' 
			],
	viewModel : {
		type : 'SubmitApplicationToManufacturerWin'
	},
	controller : 'SubmitApplicationToManufacturerWin',
	referenceHolder: true,
	//autoScroll : true,
	modal : true,
	autoScroll:true,
	title : '向厂商提交call车申请',
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
		padding:10,
		items:[
		         {
	                 xtype: 'form',
	                 width:'100%',
	                 reference:'commentForm',
	                 height:200,
	                 api:{
	                	 submit:callCarContro.uploadApplyFile
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
	                	 html:'<div class="alert alert-info">注：完成call车申请后请上传call车申请附件</div>',
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
	                    	 click:'onSubmitClick'
	                     },
	                 }]
		         }
		       ]
	}]
});