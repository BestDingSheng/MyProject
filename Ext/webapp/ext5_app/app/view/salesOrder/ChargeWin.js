Ext.define('Evcorp.view.salesOrder.ChargeWin',
		{
			extend : 'Ext.window.Window',
			alias : 'widget.chargeWin',
			requires : [ 'Evcorp.view.salesOrder.ChargeWinViewController',
					'Evcorp.view.salesOrder.ChargeWinViewModel',
					'Ext.grid.Panel', 'Ext.tab.Panel',
					'Ext.grid.column.Column', 'Ext.grid.View',
					'Ext.toolbar.Toolbar', 'Ext.button.Button',
					'Ext.toolbar.Fill', 'Ext.form.Panel',
					'Ext.form.field.ComboBox', 'Ext.form.DateField' ],
			viewModel : {
				type : 'chargeWin'
			},
			controller : 'chargeWin',
			referenceHolder : true,
			// itemId:'roleManager',
			title : '电桩信息',
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
					itemId : 'chargeAttachmentPanelId',
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