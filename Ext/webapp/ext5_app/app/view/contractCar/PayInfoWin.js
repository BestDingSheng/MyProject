Ext.define('Evcorp.view.contractCar.PayInfoWin', {
	extend : 'Ext.window.Window',
	alias : 'widget.PayInfoWin',
	requires : [ 
	        'Evcorp.view.contractCar.PayInfoWinViewController',
			'Evcorp.view.contractCar.PayInfoWinViewModel',
			'Ext.grid.Panel', 'Ext.tab.Panel',
			'Ext.grid.column.Column', 'Ext.grid.View',
			'Ext.toolbar.Toolbar', 'Ext.button.Button',
			'Ext.toolbar.Fill', 'Ext.form.Panel',
			'Ext.form.field.ComboBox', 'Ext.form.DateField' 
			],
	viewModel : {
		type : 'PayInfoWin'
	},
	controller : 'PayInfoWin',
	referenceHolder: true,
//	itemId:'roleManager',	
	title : '支付信息',
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
		xtype: 'orderlistdetails',
		layout: 'auto',
		flex: 1,
		width: '100%',
		autoScroll: true,

	}, {
		flex: 1,
		autoScroll: true,
		xtype : 'panel',
		title : '支付信息',
		items:[{
			xtype: 'form',
			layout: 'auto',
			buttonAlign: 'center',
			items: [ {
				xtype : 'numberfield',
				decimalPrecision:2,
				isMoney:true,
				fieldLabel : '待收金额',
				reference:'totalAmountReceivableForFirstPaymentRef',
				border: false,
				margin:'0 20'
			},{
				layout : 'hbox',
				xtype : 'gridpanel',
				border : false,
				margin : '5px 0',
				reference : 'contractCarOrderPayLogGrid',
				itemId : 'contractCarOrderPayLogGrid',
				bind : '{contractCarOrderPayLogListStore}',
				viewConfig : {
					emptyText : '暂无支付信息！',
					enableTextSelection : true
				},
//	    		selModel: {
//					selType:'checkboxmodel',
//					mode : 'SIMPLE'
//				},
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
							dataIndex : 'contractCarOrderId',
							hidden : true,
						},
						{
							text : '支付凭据单号',
							dataIndex : 'payNo',
							align : 'center',
							name:'payNo',
							editor:{
		                		xtype:'textfield',
		                		allowBlank: false,
		                		/*listeners:{
		                			blur: 'onNumBlur'
		                		},*/
		                		name:'payNo'
		                	}
						},
						{
							xtype : 'gridcolumn',
							text : '支付类型',
							dataIndex : 'payType',
							align : 'center',
							name:'payType',
							hidden: false,
							editor:{
								xtype: 'combobox',
		                		valueField: 'code',
		                		displayField: 'nameCn',
		                		editable : false,
		                		allowBlank: false,
		                        bind : {
		                        	store : '{orderPayTypeStore}',
		                        },
		                	},
		                	renderer: 'orderPayTypeEditor',
						},
						{
							text : '支付方式',
							dataIndex : 'payChannel',
							align : 'center',
							name:'payChannel',
	                		editor:{
								xtype: 'combobox',
		                		valueField: 'code',
		                		displayField: 'nameCn',
		                		editable : false,
		                		allowBlank: false,
		                		bind : {
		                        	store : '{orderPayChannelStore}',
		                        },
		                	},
		                	renderer: 'orderPayChannelEditor',
						},
						{
							text : '金额',
							dataIndex : 'payAmount',
							align : 'center',
							name:'payAmount',
//							formatter: 'usMoney',
							regex : /^[0-9]+(\.[0-9]{2})?$/,
							editor:{
		                		xtype:'numberfield',
		                		allowBlank: false,
		                		name:'payAmount'
		                	}
						},
						{
							text : '支付日期',
							dataIndex : 'payTime',
							align : 'center',
							name:'payTime',
							editor:{
								xtype: 'datefield',
								format : 'Y-m-d',
		                		allowBlank: false,
		                		name:'payTime'
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
			                    handler: 'onContractCarOrderPaySaveClick'
			                }, {
			                    icon: 'images/common_delete.png',
			                    tooltip: '删除',
			                    handler: 'onContractCarOrderPayRemoveClick'
			                }, {
			                	 icon: 'images/upload.png',
			                	 tooltip: '上传支付信息附件',
			                	 handler: 'onUploadContractCarOrderPayClick'
			                }]
						},
						
						 ],
						 tbar : [ {
								xtype : 'button',
								text : '新建',
								iconCls : 'common-icon-add',
								listeners : {
									click : 'onPayAddClick'
								}
							} ],
						}, 
			],
			buttons: [{
	            xtype : "button",
	            text : "取消",
	            margin : "0 50 0 0",
	            handler : function() {
	                this.up("window").close();
	            },
	        }, 
	        {
	            xtype : "button",
	            cls:'btn-success',
	            text : "提交",
	            margin : "0 50 0 0",
	            listeners:{
	          	  click:'onSubmitClick',
	            },
	        }]

		}]
	}]
});