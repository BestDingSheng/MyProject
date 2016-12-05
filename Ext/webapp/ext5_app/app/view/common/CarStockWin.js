Ext.define('Evcorp.view.common.CarStockWin', {
	extend : 'Ext.window.Window',
	alias : 'widget.carStockWin',
	requires : [

	'Evcorp.view.common.CarStockWinViewController',
			'Evcorp.view.common.CarStockWinViewModel',
			'Ext.grid.Panel', 'Ext.tab.Panel', 'Ext.grid.column.Column',
			'Ext.grid.View', 'Ext.toolbar.Toolbar', 'Ext.button.Button',
			'Ext.toolbar.Fill', 'Ext.form.Panel', 'Ext.form.field.ComboBox',
			'Ext.form.DateField' 

	],
	viewModel : {
		type : 'carStockWin'
	},
	controller : 'carStockWin',
	modal : true,
	referenceHolder : true,
	closable : true,
	title : '车辆库存信息',
	height : 480,
	width : 800,
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
		bind : '{carStockStore}',
		reference : 'carStocksGridRef',
		itemId:'carStocksItemGrid',
		selModel : {
			selType : 'checkboxmodel',
			mode : 'single'
		}, //选择框
		columns : [ {
			xtype : 'gridcolumn',
			dataIndex : 'carStockId',
			text : 'carStockId',
			hidden:true,
		}, {
			xtype : 'gridcolumn',
			dataIndex : 'vin',
			width : 120,
			text : 'VIN'
		}, {

			xtype : 'gridcolumn',
			dataIndex : 'productName',
			width : 320,
			text : '产品名称'

		}, {

			xtype : 'gridcolumn',
			dataIndex : 'carEngineNo',
			text : '发动机号'

		}, {

			xtype : 'gridcolumn',
			dataIndex : 'carDriveLicenseNo',
			text : '合格证号'

		}, {

			xtype : 'gridcolumn',
			dataIndex : 'carKeyNo',
			text : '钥匙编号'
		}, {

			xtype: 'gridcolumn',
			dataIndex : 'productionDate',
			text : '出厂日期',
			renderer: function(value) {
				if(value == null) {
					return "";
				} else {
					return Ext.Date.format(new Date(value), 'Y-m-d');
				}
			}
		}, {

			xtype : 'gridcolumn',
			dataIndex : 'invoiceNo',
			text : '发货单号'
		} , {

			xtype: 'gridcolumn',
			dataIndex : 'purchaseDate',
			text : '采购日期',
			renderer: function(value) {
				if(value == null) {
					return "";
				} else {
					return Ext.Date.format(new Date(value), 'Y-m-d');
				}
			}
		}, {

			xtype : 'gridcolumn',
			dataIndex : 'stock',
			text : '仓库'
		} , {

			xtype : 'gridcolumn',
			dataIndex : 'stockPositionNo',
			text : '库位'
		} ],
		viewConfig : {
			enableTextSelection : true
		},

		dockedItems : [ {
			xtype : 'toolbar',

			dock : 'top',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '订单编号:',
				itemId:'carStockWinSaleOrderNo',
				reference : 'carStockWinSaleOrderNoRef',
				labelWidth : 80,
				width : 350,
				hidden:true
			},{
				xtype : 'textfield',
				fieldLabel : '产品代码:',
				itemId:'carStockWinProductItem',
				reference : 'carProductField',
				labelWidth : 80,
				width : 350,
				name : 'name',
				hidden:true
			}, {
				xtype : 'checkbox',
				reference : 'carProductIsContract',
				name : 'isContract',
				hidden : true,
				labelAlign : "rigth",
				margin : "0  0 20"
			},{
				xtype : 'textfield',
				fieldLabel : 'VIN:',
				reference : 'vinRef',
				labelWidth : 80,
				width : 250,
				name : 'vin'
			}
			, {
				xtype : 'button',
				text : '查询',

				iconCls : 'common-icon-serach',
				listeners : {
					click : 'onQueryClick'
				}
			}
			, 
			 {
				xtype : 'tbfill'
			},{
				xtype : 'button',
				width : 120,
				text : '选择保存配车',
				itemId : 'selectContractCarId'
			} ]
		}, {
			xtype : 'pagingtoolbar',
			dock : 'bottom',
			bind : {
				store : '{carStockStore}'
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