Ext.define('Evcorp.view.common.UploadAttachmentWin',
		{
			extend : 'Ext.window.Window',
			alias : 'widget.UploadAttachmentWin',
			requires : [ 'Evcorp.view.common.UploadAttachmentWinViewController',
					'Evcorp.view.common.UploadAttachmentWinViewModel',
					'Ext.grid.Panel', 'Ext.tab.Panel',
					'Ext.grid.column.Column', 'Ext.grid.View',
					'Ext.toolbar.Toolbar', 'Ext.button.Button',
					'Ext.toolbar.Fill', 'Ext.form.Panel',
					'Ext.form.field.ComboBox', 'Ext.form.DateField' ],
			viewModel : {
				type : 'UploadAttachmentWin'
			},
			controller : 'UploadAttachmentWin',
			referenceHolder : true,
			// itemId:'roleManager',
			title : '附件信息',
			height : 500,
			width : 800,
			closeAction : 'destory',
			layout : {
				type : 'vbox',
				align : 'stretch',
			},
			listeners:{
				show:'initWindow'
			},
			items : [ {
				flex : 1,
				autoScroll : true,
				xtype : 'panel',
				items : [{
					xtype : 'uploadAttachmentPanel',
					margin:'10 0',
					itemId : 'uploadAttachmentPanelItemId',
					autoScroll : false
				} ]
			} ],
			buttons: [{
                xtype : "button",
                text : "关闭",
                margin : "0 340 0 0",
                handler : function() {
                    this.up("window").close();
                },
            }]
		});