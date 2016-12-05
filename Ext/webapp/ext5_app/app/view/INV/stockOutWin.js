Ext.define('Evcorp.view.INV.stockOutWin', {
	extend : 'Ext.window.Window',
	alias : 'widget.stockOutWin',
	requires : [
	'Evcorp.view.INV.stockOutWinViewController',
			'Evcorp.view.INV.stockOutWinViewModel',
			'Ext.grid.Panel', , 'Ext.grid.column.Column', 'Ext.grid.View',
			'Ext.toolbar.Toolbar', 'Ext.button.Button', 'Ext.toolbar.Fill',
			'Ext.form.Panel', 'Ext.form.field.ComboBox'

	],
	viewModel : {
		type : 'stockOutWin'
	},
	controller : 'stockOutWin',

	modal : true,
	referenceHolder : true,
	closable : true,
	title : '出库',
	id : 'stockOutWin',
	closeAction : 'destory',
	layout : {
		type : 'vbox',
		align : 'stretch'
	},
	items : [ {
		xtype : 'form',
		reference : 'carStockOutForm',
		itemId : 'carStockOutFormItemId',
		api : {
			submit : 'carStockContro.stockOut'
		},
		items : [ {
			xtype : 'container',
			margin : '10 50',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'VIN',
				name : 'vin',
				itemId : 'vinItemId',
				readOnly : true,
				allowBlank : false,
			}, {
				xtype : 'combobox',
				fieldLabel : '出库类型',
				name : 'stockOutType',
				itemId : 'stockOutTypeItemId',
				editable : false,
				allowBlank : false,
				valueField : 'code',
				displayField : 'nameCn',
				bind : {
					store : '{stockOutTypeStore}',
				},
			
			}, {
				xtype : 'datefield',
				fieldLabel : '出库日期',
				name : 'stockOutDate',
				itemId : 'stockOutDateItemId',
				format : 'Y-m-d',
				editable : false,
				allowBlank : false,
			}, {
				xtype : 'textarea',
				fieldLabel : '出库备注',
				name : 'remark',
				itemId : 'remarkItemId',
			} ]
		}, {
			xtype : 'container',
			layout : 'hbox',
			items : [ {
				xtype : 'button',
				margin : '5 100',
				text : '确定',
				itemId : 'stockOutOKItemId',
			}, {
				xtype : 'button',
				margin : '5 10',
				text : '取消',
				handler : 'onCancel'
			} ]
		} ]
	} ]

});