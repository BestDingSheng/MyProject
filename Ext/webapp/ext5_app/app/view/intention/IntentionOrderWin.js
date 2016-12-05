Ext.define('Evcorp.view.intention.IntentionOrderWin', {
	extend : 'Ext.window.Window',
	alias : 'widget.intentionorderwin',
	requires : [ 'Evcorp.view.intention.IntentionOrderWinViewController',
			'Evcorp.view.intention.IntentionOrderWinViewModel',
			'Ext.grid.Panel', 'Ext.tab.Panel', 'Ext.grid.column.Column',
			'Ext.grid.View', 'Ext.toolbar.Toolbar', 'Ext.button.Button',
			'Ext.toolbar.Fill', 'Ext.form.Panel', 'Ext.form.field.ComboBox',
			'Ext.form.DateField' ],
	viewModel : {
		type : 'intentionorderwin'
	},
	controller : 'intentionorderwin',
	autoScroll : true,
	modal : true,
	closable : true,
	title : '查找客户',
	height : 260,
	width : 630,
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
		reference : 'evcAaSearchForm',
		layout : 'vbox',
		bodyPadding : 10,
		collapseDirection : 'top',
		collapsed : false,
		items : [ {
			xtype : 'container',
			layout : 'hbox',
			margin : '10 0',
			defaults : {
				flex : 1,
				labelAlign : "left",
			},
			items : [ {
				xtype : 'textfield',
				name : 'cardNumber',
				labelWidth : 50,
				width : 250,
				margin : '0 0',
				value : '姓名或手机号码'
			}, {
				xtype : 'button',
				text : '搜索',
				margin : '0 0 0 20'
			} ]
		}, {
			// /border: false,
			xtype : 'gridpanel',
			width : '100%',
			flex : 1,
			// forceFit: true,
			autoScroll : true,
			columns : [ {

				text : '姓名',
				dataIndex : 'cataId',
				align : 'center'

			}, {

				text : '手机号码',
				dataIndex : 'cataId',
				align : 'center'

			}, {

				text : '电话',
				dataIndex : 'cataId',
				align : 'center'

			} ]
		}

		]

	} ]

});