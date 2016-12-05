Ext.define('Evcorp.view.common.CarProductBySnCustomerListWin', {
	extend : 'Ext.window.Window',
	alias : 'widget.CarProductBySnCustomerListWin',
	requires : [

	'Evcorp.view.common.CarProductBySnCustomerListWinViewController',
			'Evcorp.view.common.CarProductBySnCustomerListWinViewModel',
			'Ext.grid.Panel', , 'Ext.grid.column.Column', 'Ext.grid.View',
			'Ext.toolbar.Toolbar', 'Ext.button.Button', 'Ext.toolbar.Fill',
			'Ext.form.Panel', 'Ext.form.field.ComboBox'

	],
	viewModel : {
		type : 'CarProductBySnCustomerListWin'
	},
	controller : 'CarProductBySnCustomerListWin',

	modal : true,
	referenceHolder : true,
	closable : true,
	title : '二网可售商品信息',
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
		bind : '{carProductStore}',
		reference : 'carProductsBySnCustomerGrid',
		id : 'carProductsBySnCustomerGridItemId',
		selModel : {
			selType : 'checkboxmodel',
			mode : 'single'
		}, //选择框
		columns : [ {
			xtype : 'gridcolumn',
			text : 'code',
			dataIndex : 'code',
			text : '商品编号'

		}, {
			xtype : 'gridcolumn',
			dataIndex : 'displayName',
			width : '40%',
			text : '商品名称',
			hidden : true,
		}, {
			xtype : 'gridcolumn',
			dataIndex : 'name',
			width : '40%',
			text : '商品名称'
		}, {

			xtype : 'gridcolumn',
			text : 'firstPay',
			dataIndex : 'brandName',
			text : '品牌'

		}, {

			xtype : 'gridcolumn',
			text : 'deposit',
			dataIndex : 'seriesName',
			text : '车系'

		}, {

			xtype : 'gridcolumn',
			text : 'monthlyRent',
			dataIndex : 'modelName',
			text : '车型'

		}, {

			xtype : 'gridcolumn',
			text : 'liftTheFare',
			dataIndex : 'brandCode',
			text : '品牌代码',
			hidden : true
		}, {

			xtype : 'gridcolumn',
			text : 'liftTheFare',
			dataIndex : 'seriesCode',
			text : '车系代码',
			hidden : true
		}, {

			xtype : 'gridcolumn',
			text : 'liftTheFare',
			dataIndex : 'modelCode',
			text : '车型代码',
			hidden : true
		} ],
		viewConfig : {
			enableTextSelection : true
		},

		dockedItems : [ {
			xtype : 'toolbar',

			dock : 'top',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '商品名称:',
				reference : 'carProductField',
				labelWidth : 80,
				width : 230,
				name : 'name'
			},{
				xtype : 'combobox',
				fieldLabel : '购买方式',
				name : 'productType',
				itemId : 'productTypeItemId',
				reference : 'productTypeRef',
				labelWidth : 60,
				width : 220,
				valueField : 'code',
				displayField : 'nameCn',
				editable : false,
				allowBlank : false,
				hidden : true,
				bind : {
					store : '{buyTypeStore}',
				},
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
				iconCls : 'common-icon-save' ,
				itemId : 'selectContractCarId'
			} ]
		}, {
			xtype : 'pagingtoolbar',
			dock : 'bottom',
			bind : {
				store : '{carProductStore}'
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