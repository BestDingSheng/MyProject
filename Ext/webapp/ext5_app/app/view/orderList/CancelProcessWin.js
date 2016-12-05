Ext.define('Evcorp.view.orderList.CancelProcessWin', {
	extend : 'Ext.window.Window',
	alias : 'widget.CancelProcessWin',
	requires : [

	'Evcorp.view.orderList.CancelProcessWinViewController',
			'Evcorp.view.orderList.CancelProcessWinViewModel',
			'Ext.grid.Panel', , 'Ext.grid.column.Column', 'Ext.grid.View',
			'Ext.toolbar.Toolbar', 'Ext.button.Button', 'Ext.toolbar.Fill',
			'Ext.form.Panel', 'Ext.form.field.ComboBox'

	],
	viewModel : {
		type : 'CancelProcessWin'
	},
	controller : 'CancelProcessWin',

	modal : true,
	referenceHolder : true,
	closable : true,
	title : '合约车订单取消',
	id : 'CancelProcessWin',
	closeAction : 'destory',
	layout : {
		type : 'vbox',
		align : 'stretch'
	},
	items : [ {
		xtype : 'form',
		reference : 'cancelProcessForm',
		itemId : 'cancelProcessFormItemId',
		api : {
			submit : 'contractCarOrderContro.cancelContractCarProcess'
		},
		items : [ {
			xtype : 'container',
			margin : '10 50',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '合约车订单ID',
				name : 'contractCarOrderId',
				itemId : 'contractCarOrderIdItemId',
				hidden:true,
				allowBlank : false,
			}, {
				xtype : 'textarea',
				fieldLabel : '取消原因',
				name : 'cancelReason',
				itemId : 'cancelReasonItemId',
				allowBlank : false,
			},
			]
		}, {
			xtype : 'container',
			layout : 'hbox',
			items : [ {
				xtype : 'button',
				margin : '5 100',
				text : '确定',
				itemId : 'saveCancelProcessOKBtn',
			}, {
				xtype : 'button',
				margin : '5 10',
				text : '取消',
				handler : 'onCancel'
			} ]
		} ]
	} ]

});