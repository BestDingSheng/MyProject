Ext.define('Evcorp.view.orderList.OrderListPayWin', {
	extend : 'Ext.window.Window',
	alias : 'widget.orderlistpaywin',
	requires : [ 'Evcorp.view.orderList.OrderListPayWinViewController',
			'Evcorp.view.orderList.OrderListPayWinViewModel',
			'Ext.grid.Panel', 'Ext.tab.Panel', 'Ext.grid.column.Column',
			'Ext.grid.View', 'Ext.toolbar.Toolbar', 'Ext.button.Button',
			'Ext.toolbar.Fill', 'Ext.form.Panel', 'Ext.form.field.ComboBox',
			'Ext.form.DateField' ],
	viewModel : {
		type : 'orderlistpaywin'
	},
	controller : 'orderlistpaywin',
	autoScroll : true,
	modal : true,
	closable : true,
	title : '新建支付信息',
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
		reference : 'OrderListPayWinForm',
		layout : 'vbox',
		bodyPadding : 20,
		collapseDirection : 'top',
		collapsed : false,
		buttonAlign : "center",
		items : [ {
			xtype : 'form',
			layout : 'vbox',
			margin : '10 0',
			border : false,
			buttonAlign : "center",
			defaults : {
				flex : 1,
				labelAlign : "left",
			},
			items : [ {
				xtype : 'hidden',
				name : 'id',
			}, {
				xtype : 'hidden',
				name : 'contractCarOrderId',
			}, {
				xtype : 'textfield',
				name : 'payNo',
				labelWidth : 80,
				width : 250,
				margin : '10 0',
				fieldLabel : '编号',
				value : ''
			}, {
				xtype : 'combobox',
				name : 'payType',
				labelWidth : 80,
				width : 250,
				margin : '10 0',
				fieldLabel : '支付类型',
				valueField : "code",
				displayField : "nameCn",
				queryModel : 'local',
				bind : '{contractCarOrderPayLogGrid.selection.payType}',
				forceSelection : true,
				editable : false,
				store : Ext
						.create(
								'Ext.data.Store',
								{
									autoLoad : true,
									fields : [
											'code',
											'nameCn' ],
									proxy : {
										type : 'direct',
										directFn : chooseOptionContro.getChooseOptionWithSelect,
										extraParams : {
											type : 'orderPayType'
										}
									}
								}),
			}, {
				xtype : 'combo',
				name : 'payChannel',
				labelWidth : 80,
				width : 250,
				margin : '10 0',
				fieldLabel : '支付方式',
				valueField : "code",
				displayField : "nameCn",
				queryModel : 'local',
				bind : '{contractCarOrderPayLogGrid.selection.payChannel}',
				forceSelection : true,
				editable : false,
				store : Ext
						.create(
								'Ext.data.Store',
								{
									autoLoad : true,
									fields : [
											'code',
											'nameCn' ],
									proxy : {
										type : 'direct',
										directFn : chooseOptionContro.getChooseOptionWithSelect,
										extraParams : {
											type : 'orderPayChannel'
										}
									}
								}),
			}, {
				xtype : 'textfield',
				name : 'payAmount',
				labelWidth : 80,
				width : 250,
				margin : '10 0',
				fieldLabel : '金额',
				bind : '{contractCarOrderPayLogGrid.selection.payAmount}',
			}, {
				xtype : 'datefield',
				name : 'payTime',
				labelWidth : 80,
				width : 250,
				margin : '10 0',
				fieldLabel : '支付日期',
				bind : '{contractCarOrderPayLogGrid.selection.payTime}',
				format : 'Y-m-d',
			}, {
				xtype : 'textfield',
				name : 'remark',
				labelWidth : 80,
				width : 250,
				margin : '10 0',
				fieldLabel : '备注',
				bind : '{contractCarOrderPayLogGrid.selection.remark}',
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
				handler : function() {
					this.up("window").close();
				}
			} ]
		},

		]

	} ]

});