Ext.define('Evcorp.view.common.SnCustomerListWin', {
	extend : 'Ext.window.Window',
	alias : 'widget.snCustomerListWin',
	requires : [

	        'Evcorp.view.common.SnCustomerListWinViewController',
			'Evcorp.view.common.SnCustomerListWinViewModel',
			'Ext.grid.Panel', , 'Ext.grid.column.Column', 'Ext.grid.View',
			'Ext.toolbar.Toolbar', 'Ext.button.Button', 'Ext.toolbar.Fill',
			'Ext.form.Panel', 'Ext.form.field.ComboBox'

	],
	viewModel : {
		type : 'snCustomerListWin'
	},
	controller : 'snCustomerListWin',

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
		bind : '{snCustomerStore}',
		reference : 'snCustomerGrid',
		id : 'snCustomerGrid',
		selModel : {
			selType : 'checkboxmodel',
			mode : 'single'
		}, //选择框
		columns : [ {
			xtype : 'gridcolumn',
			text : 'code',
			dataIndex : 'cusCode',
			text : '二网编号'

		}, {
			xtype : 'gridcolumn',
			dataIndex : 'cusName',
			width : '40%',
			text : '二网名称',
			hidden : true,
		}, {
			xtype : 'gridcolumn',
			dataIndex : 'cusShortName',
			width : '40%',
			text : '二网简称'
		}, {

			xtype : 'gridcolumn',
			dataIndex : 'contactPersonName',
			text : '联系人'

		}, {

			xtype : 'gridcolumn',
			text : '联系电话',
			dataIndex : 'contactPersonPhone',

		}, {

			xtype : 'gridcolumn',
			text : '邮箱',
			dataIndex : 'email',

		}, {
			xtype : 'gridcolumn',
			text : '地址',
			dataIndex : 'address',
		} ],
		viewConfig : {
			enableTextSelection : true
		},

		dockedItems : [ {
			xtype : 'toolbar',

			dock : 'top',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '二网名称:',
				reference : 'snCustomerField',
				labelWidth : 80,
				width : 230,
				name : 'name'
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
				itemId : 'selectSnCustomerOKBtn'
			} ]
		}, {
			xtype : 'pagingtoolbar',
			dock : 'bottom',
			bind : {
				store : '{snCustomerStore}'
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