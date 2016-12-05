Ext.define('Evcorp.view.salesOrder.PaymentRecordWin', {
	extend : 'Ext.window.Window',
	alias : 'widget.paymentRecordWin',
	requires : [ 
	        'Evcorp.view.salesOrder.PaymentRecordWinViewController',
			'Evcorp.view.salesOrder.PaymentRecordWinViewModel',
			'Ext.grid.Panel', 'Ext.tab.Panel',
			'Ext.grid.column.Column', 'Ext.grid.View',
			'Ext.toolbar.Toolbar', 'Ext.button.Button',
			'Ext.toolbar.Fill', 'Ext.form.Panel',
			'Ext.form.field.ComboBox', 'Ext.form.DateField' 
			],
	viewModel : {
		type : 'paymentRecordWin'
	},
	controller : 'paymentRecordWin',
	referenceHolder: true,
//	itemId:'roleManager',	
	title : '付款信息',
	listeners:{
		show:'initWindow'
	},
	height : 600,
	width : 1000,
	closeAction : 'destory',
	layout: {
		type: 'vbox',
		align: 'stretch',
	},
	items: [{
		flex: 1,
		autoScroll: true,
		xtype : 'panel',
//		title : '支付信息',
		items:[{
			xtype: 'form',
			layout: 'auto',
			buttonAlign: 'center',
			items: [{
				layout : 'hbox',
				xtype : 'gridpanel',
				border : false,
				height:290,
				margin : '5px 0',
				reference : 'salesOrderPaymentGrid',
				itemId : 'salesOrderPaymentGridId',
				bind : '{salesOrderPaymentStore}',
				viewConfig : {
					emptyText : '暂无支付信息！',
					enableTextSelection : true
				},
	            plugins:[
	                Ext.create('Ext.grid.plugin.CellEditing',{
	                	clicksToEdit:1
	                })
	            ],
				columns : [
						{
							dataIndex : 'id',
							hidden : true,
						},
						{
							dataIndex : 'salesOrderId',
							hidden : true,
						},
						{
							dataIndex : 'salesOrderCode',
							hidden : true,
						},
						{
							text : '付款凭据编号',
							dataIndex : 'paymentNo',
							align : 'center',
							name:'paymentNo',
							editor:{
		                		xtype:'textfield',
		                		allowBlank: false,
		                		name:'paymentNo'
		                	}
						},
						{
							xtype : 'gridcolumn',
							text : '付款类型',
							dataIndex : 'paymentType',
							align : 'center',
							name:'paymentType',
							hidden: false,
							editor:{
								xtype: 'combobox',
		                		valueField: 'code',
		                		displayField: 'nameCn',
		                		editable : false,
		                		allowBlank: false,
		                        bind : {
		                        	store : '{salesOrderPayTypeStore}',
		                        },
		                	},
		                	renderer: 'orderPayTypeEditor'
						},
//						{
//							text : '应收金额',
//							dataIndex : 'arAmount',
//							align : 'center',
//							name:'arAmount',
////							formatter: 'usMoney',
//							regex : /^[0-9]+(\.[0-9]{2})?$/,
//							editor:{
//		                		xtype:'numberfield',
//		                		allowBlank: false,
//		                		name:'arAmount'
//		                	}
//						},
						{
							text : '实收金额',
							dataIndex : 'actAmount',
							align : 'center',
							name:'actAmount',
//							formatter: 'usMoney',
							regex : /^[0-9]+(\.[0-9]{2})?$/,
							editor:{
		                		xtype:'numberfield',
		                		allowBlank: false,
		                		name:'actAmount'
		                	}
						},
						{
							text : '付款日期',
							dataIndex : 'paymentDate',
							align : 'center',
							name:'paymentDate',
							editor:{
								xtype: 'datefield',
								format : 'Y-m-d',
		                		allowBlank: false,
		                		name:'paymentDate'
		                	},
							renderer:function(value){ 
		                    	if(value==null){
		                    		return "";
		                    	}else{
		                    		return	Ext.Date.format(new Date(value), 'Y-m-d')
		                    	}
		                    }
						},
						{
							text : '付款方式',
							dataIndex : 'paymentMethod',
							align : 'center',
							name:'paymentMethod',
	                		editor:{
								xtype: 'combobox',
		                		valueField: 'code',
		                		displayField: 'nameCn',
		                		editable : false,
		                		allowBlank: false,
		                		bind : {
		                        	store : '{salesOrderPayChannelStore}',
		                        },
		                	},
		                	renderer: 'orderPayChannelEditor',
						},
						{
							text : '备注',
							dataIndex : 'remark',
							align : 'center',
							name:'remark',
							editor:{
		                		xtype:'textfield',
		                		name:'remark'
		                	}
						},
						{
							xtype: 'actioncolumn',
			                width: 80,
			                sortable: false,
			                menuDisabled: true,
			                text : '操作',
			                align : "center",
			                items: [{
			                    icon: 'images/common_save.png',
			                    tooltip: '保存',
//			                    scope: this,
			                    handler: 'onSaveClick'
			                }, {
			                    icon: 'images/common_delete.png',
			                    tooltip: '删除',
			                    handler: 'onRemoveClick'
			                }]
						},
						 ],
						 tbar : [ {
								xtype : 'button',
								text : '新建',
								iconCls : 'common-icon-add',
								listeners : {
									click : 'onAddClick'
								}
							} ],
						} 
			],
			buttons: [{
	            xtype : "button",
	            text : "关闭",
	            margin : "0 50 0 0",
	            handler : function() {
	                this.up("window").close();
	            },
	        }]

		}]
	}]
});