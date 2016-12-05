Ext.define('Evcorp.view.intention.IntentionOrderGoodsWin', {
	extend : 'Ext.window.Window',
	alias : 'widget.intentionordergoodswin',
	requires : [ 
	        'Evcorp.view.intention.IntentionOrderGoodsWinViewController',
			'Evcorp.view.intention.IntentionOrderGoodsWinViewModel',
			'Ext.grid.Panel', 'Ext.tab.Panel', 'Ext.grid.column.Column',
			'Ext.grid.View', 'Ext.toolbar.Toolbar', 'Ext.button.Button',
			'Ext.toolbar.Fill', 'Ext.form.Panel', 'Ext.form.field.ComboBox',
			'Ext.form.DateField' ],
	viewModel : {
		type : 'intentionordergoodswin'
	},
	controller : 'intentionordergoodswin',
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
	items: [{
		retion: 'center',
		flex: 1,
		xtype: 'panel',
		align: 'left',

		autoScroll: true,
		reference: 'evcAaSearchForm',
		layout: 'vbox',
		bodyPadding: 10,
		collapseDirection: 'top',
		collapsed: false,
		items: [{
				xtype: 'container',
				layout: 'hbox',
				margin: '10 0',
				defaults: {
					flex: 1,
					labelAlign: "left",
				},
				items: [{
					xtype: 'textfield',
					name: 'cardNumber',
					labelWidth: 50,
					width: 250,
					margin: '0 0',
					value: ''
				}, {
					xtype: 'checkbox',								
					name: 'valid',						
					inputValue: 'true',
					labelAlign: "rigth",
					margin:"0 0 0 20"
				}, 
				{
					xtype:'label',
					text:'畅想租',
					margin:'4 0 0 20'
				}
				]
			}, {
				//								/border: false,
				xtype: 'gridpanel',
				width: '100%',
				flex: 1,
				//forceFit: true,
				autoScroll: true,
				columns: [{

					text: '产品名称',
					dataIndex: 'cataId',
					align: 'center'

				}, {

					text: '畅享租',
					dataIndex: 'cataId',
					align: 'center'

				}, {

					text: '颜色',
					dataIndex: 'cataId',
					align: 'center'

				},
				{

					text: '内饰',
					dataIndex: 'cataId',
					align: 'center'

				}
				]
			}

		]

	}]

});