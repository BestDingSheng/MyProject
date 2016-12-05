Ext.define('Evcorp.view.intention.OlOrderListSalesWin', {
	extend : 'Ext.window.Window',
	alias : 'widget.olorderlistsaleswin',
	requires : [ 'Evcorp.view.intention.OlOrderListSalesWinViewController',
			'Evcorp.view.intention.OlOrderListSalesWinViewModel',
			'Ext.grid.Panel', 'Ext.tab.Panel', 'Ext.grid.column.Column',
			'Ext.grid.View', 'Ext.toolbar.Toolbar', 'Ext.button.Button',
			'Ext.toolbar.Fill', 'Ext.form.Panel', 'Ext.form.field.ComboBox',
			'Ext.form.DateField' ],
	viewModel : {
		type : 'olorderlistsaleswin'
	},
	controller : 'olorderlistsaleswin',
	autoScroll : true,
	modal : true,
	closable : true,
	title : '执行销售',
//	height : 260,
//	width : 630,
	closeAction : 'destory',
	layout : {
		type : 'fit',
		align : 'stretch'
	},
	items : [ {
		flex : 1,
		xtype : 'panel',
		align : 'left',
		autoScroll : true,
		layout : 'vbox',
		bodyPadding : 20,
		collapseDirection : 'top',
		collapsed : false,
		buttonAlign : "center",
		items : [ {
			xtype : 'form',
			reference : 'saleWinFormRef',
			layout : 'vbox',
			margin : '10 0',
			border : false,
			buttonAlign : "center",
			defaults : {
				flex : 1,
				labelAlign : "left",
			},
			items : [ {
				xtype : 'combo',
				name : 'implementSale',
				reference : 'implementSaleRef',
				allowBlank : false,
				labelWidth : 80,
				width : 250,
				margin : '10 0',
				fieldLabel : '执行销售',
				valueField : 'id',
				displayField : 'username',
				store : Ext.create('Ext.data.Store', {
					autoLoad : true,
					fields : [ 'id', 'username' ],
					proxy : {
						type : 'direct',
						directFn : auUserContro.findUsersByRole,
						extraParams: {
		        			roleCode: 'sales'
		        		}
					}
				}),
				queryMode: 'local'
			}, 
			 {
				xtype : 'textareafield',
				name : 'remark',
				reference : 'remarkRef',
				labelWidth : 80,
				width : 250,
				margin : '10 0',
				fieldLabel : '备注',
				value : ''
			} ],
			buttons : [ {
				xtype : "button",
				text : "取消",
				margin : '0 20 0 0',
				handler : function() {
					this.up("window").close();
				}
			}, {
				xtype : "button",
				text : "保存",
				handler : 'saveSale'
			} ]
		},

		]

	} ]

});