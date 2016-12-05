Ext.define('Evcorp.view.orderList.OrderListGoodsWin', {
	extend : 'Ext.window.Window',
	alias : 'widget.orderlistgoodswin',
	requires : [

	'Evcorp.view.orderList.OrderListGoodsWinViewController',
			'Evcorp.view.orderList.OrderListGoodsWinViewModel',
			'Ext.grid.Panel', , 'Ext.grid.column.Column', 'Ext.grid.View',
			'Ext.toolbar.Toolbar', 'Ext.button.Button', 'Ext.toolbar.Fill',
			'Ext.form.Panel', 'Ext.form.field.ComboBox'

	],
	viewModel : {
		type : 'orderlistgoodswin'
	},
	controller : 'orderlistgoodswin',

	modal : true,
	referenceHolder : true,
	closable : true,
	title : '商品信息',
	height : 480,
	width : 800,
	id : 'win',
	closeAction : 'destory',
	layout : {
		type : 'fit',
		align : 'stretch'
	},
	items : [ {
		xtype : 'gridpanel',
		viewConfig : {
			enableTextSelection : true
		},
		bind : '{carProduct}',
		reference : 'carProductGrid',
		id : 'carProductGrid',

		selModel : {
			selType : 'checkboxmodel',
			mode : 'single'
		}, // 选择框
		columns : [ {
			xtype : 'gridcolumn',
			dataIndex : 'code',
			text : '商品编号'
		}, {
			xtype : 'gridcolumn',
			dataIndex : 'name',
			width : '40%',
			text : '商品名称'
		}, {
			xtype: "numbercolumn",
			format: '0,0.00',
			dataIndex : 'firstPay',
			text : '首付'
		}, {
			xtype: "numbercolumn",
			format: '0,0.00',
			dataIndex : 'deposit',
			text : '保证金'
		}, {
			xtype: "numbercolumn",
			format: '0,0.00',
			dataIndex : 'monthlyRent',
			text : '月租金'
		}, {
			xtype: "numbercolumn",
			format: '0',
			dataIndex : 'leaseTerm',
			text : '租约年限'
		}, {
			xtype: "numbercolumn",
			format: '0,0.00',
			dataIndex : 'expirePrice',
			text : '到期购买价'
		}, {
			xtype: "numbercolumn",
			format: '0,0.00',
			dataIndex : 'monthlyManagementFee',
			text : '月管理费'
		}, {
			xtype: "numbercolumn",
			format: '0,0.00',
			dataIndex : 'intentionPayment',
			text : '意向金'
		}, {
			xtype: "numbercolumn",
			format: '0,0.00',
			dataIndex : 'liftTheFare',
			text : '提车费用'
		}, {
			xtype: "numbercolumn",
			format: '0,0.00',
			dataIndex : 'outOfRangFee',
			text : '超出里程费用'
		}, {
			xtype: "numbercolumn",
			format: '0,0.00',
			dataIndex : 'chargeFee',
			text : '充电桩费用'
		}, {
			xtype : 'gridcolumn',
			dataIndex : 'brandCode',
			text : '品牌代码',
			hidden : true
		}, {
			xtype : 'gridcolumn',
			dataIndex : 'brandName',
			text : '品牌名称',
			hidden : true
		}, {
			xtype : 'gridcolumn',
			dataIndex : 'seriesCode',
			text : '车系代码',
			hidden : true
		}, {
			xtype : 'gridcolumn',
			dataIndex : 'seriesName',
			text : '车系名称',
			hidden : true
		}, {
			xtype : 'gridcolumn',
			dataIndex : 'modelCode',
			text : '车型代码',
			hidden : true
		}, {
			xtype : 'gridcolumn',
			dataIndex : 'modelName',
			text : '车型名称',
			hidden : true
		}, {
			xtype : 'gridcolumn',
			dataIndex : 'financialPackageCode',
			text : '金融套餐',
			hidden : true
		} ],
		viewConfig : {
			enableTextSelection : true
		},

		dockedItems : [ {
			xtype : 'toolbar',

			dock : 'top',
			items : [

			{
				xtype : 'textfield',
				fieldLabel : '商品名称:',
				reference : 'carProductField',
				labelWidth : 80,
				width : 230,
				name : 'name'
			}, {
				xtype : 'combobox',
				fieldLabel : '金融套餐:',
				reference : 'financialPackageCodeField',
				name : 'financialPackageCode',
				labelWidth : 80,
				width : 230,
				valueField : "code",
				displayField : "nameCn",
				queryModel : 'local',
				bind : {
					store : '{financialPackageStore}'
				},
			}, {
				xtype : 'checkbox',
				reference : 'carProductIsContract',
				name : 'isContract',
				hidden : true,
				labelAlign : "rigth",
				margin : "0  0 20"
			}, {
				xtype : 'label',
				text : '畅想租',
				margin : '4 20 0 20',
				hidden : true
			}, {
				xtype : 'button',
				text : '查询',

				iconCls : 'common-icon-serach',
				listeners : {
					click : 'onQueryClick'
				}
			}, {
				xtype : 'button',
				width : 80,
				text : '确定',
				iconCls : 'common-icon-save',
				itemId : 'selectContractCarId',
				listeners : {
					click : 'onChoiceClick'
				}
			} ]
		}, {
			xtype : 'pagingtoolbar',
			dock : 'bottom',
			bind : {
				store : '{carProduct}'
			},
			displayInfo : true,
			displayMsg : '显示 {0} - {1}条记录，总共 {2}条记录',
			emptyMsg : '暂无数据',
			beforePageText : '页数',
			afterPageText : '总共{0}页',
			firstText : '第一页',
			prevText : '上一页',
			nextText : '下一页',
			lastText : '最后一页',
			width : '100%',
			emptyMsg : '无记录'
		} ]
	} ]

});