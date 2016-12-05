Ext.define('Evcorp.view.callcar.LibraryTubeTestCarWin', {
	extend : 'Ext.window.Window',
	alias : 'widget.LibraryTubeTestCarWin',
	requires : [ 'Evcorp.view.callcar.LibraryTubeTestCarWinViewController',
			'Evcorp.view.callcar.LibraryTubeTestCarWinViewModel',
			'Ext.grid.Panel', 'Ext.tab.Panel', 'Ext.grid.column.Column',
			'Ext.grid.View', 'Ext.toolbar.Toolbar', 'Ext.button.Button',
			'Ext.toolbar.Fill', 'Ext.form.Panel', 'Ext.form.field.ComboBox',
			'Ext.form.DateField' 
			],
	viewModel : {
		type : 'LibraryTubeTestCarWin'
	},
	controller : 'LibraryTubeTestCarWin',
	referenceHolder: true,
	//autoScroll : true,
	modal : true,
	autoScroll:true,
	title : '库管验车入库',
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
		xtype:'panel',
		autoScroll:false,
		padding:10,
		items:[
		       {
	                 xtype: 'form',
	                 reference:'commentForm',
	                 width:'100%',
	                 //height:200,
	                 border:false,
	                 autoScroll:false,
	                 buttonAlign:'center',
	                 items: [{
	    		       	 border:false,
	    		    	 html:'<div class="alert alert-info">注：确认到货入库后，请点击［提交］以完成该Call车流程</div>',
	                 },{
                         xtype:'datefield',
	                       width : 280,
	                       labelWidth : 120,
	                       fieldLabel: '到货日期',
	                       format: 'Y-m-d',
	                       name:'arriveDate',
	                       reference:'arriveDate',
	                       allowBlank:false,
	                       editable:false
	                 },{
	                     xtype: "textarea",
	                     margin:'0 auto',
	                     padding:'15',
	                     fieldLabel: "备注",
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