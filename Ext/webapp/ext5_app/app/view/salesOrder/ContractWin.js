Ext.define('Evcorp.view.salesOrder.ContractWin',
		{
			extend : 'Ext.window.Window',
			alias : 'widget.contractWin',
			requires : [ 'Evcorp.view.salesOrder.ContractWinViewController',
					'Evcorp.view.salesOrder.ContractWinViewModel',
					'Ext.grid.Panel', 'Ext.tab.Panel',
					'Ext.grid.column.Column', 'Ext.grid.View',
					'Ext.toolbar.Toolbar', 'Ext.button.Button',
					'Ext.toolbar.Fill', 'Ext.form.Panel',
					'Ext.form.field.ComboBox', 'Ext.form.DateField' ],
			viewModel : {
				type : 'contractWin'
			},
			controller : 'contractWin',
			referenceHolder : true,
			// itemId:'roleManager',
			title : '合同签订',
			height : 500,
			width : 800,
			closeAction : 'destory',
			layout : {
				type : 'vbox',
				align : 'stretch',
			},
			listeners:{
				show:'initWindow'
			},
			items : [ {
				flex : 1,
				autoScroll : true,
				xtype : 'form',
				reference : 'contractForm',
				items : [ {
					xtype : 'container',
					margin:'20 30',
					layout : 'hbox',
					items : [ {
						xtype : 'textfield',
						fieldLabel : '订单编号',
						name : 'saleOrderNo',
						itemId:'saleOrderNoItem',
						reference : 'saleOrderNoRef',
						labelWidth : 70,
						width : 200,
						hidden:true
					},{
						xtype : 'textfield',
						fieldLabel : '合同编号',
						reference : 'contractNoRef',
						border:'0 0 0 0',
						name : 'contractNo',
						itemId:'contractNoItem',
						labelWidth : 70,
						width : 200
					}, {
						xtype : 'datefield',
						fieldLabel : '合同签订日期',
						format : 'Y-m-d',
						name : 'contractSignedDate',
						itemId:'contractSignedDateItem',
						margin:'0 50',
						labelWidth : 100,
						width : 230
					}, {
						xtype : 'button',
						text : '保存',
						itemId:'contractSaveButton',
						margin:'0 10',
						handler:'saveContract'
					},
					{
						xtype : 'button',
						text : '租赁合同下载',
						itemId:'contractPdfDown',
						iconCls : 'pdf',
						listeners : {
							click : 'onDownContractClick'
						}
					
					}]
				}, {
					xtype : 'uploadAttachmentPanel',
					margin:'10 0',
					itemId : 'contractAttachmentPanelId',
					autoScroll : false
				} ]
			} ],
			buttons: [{
                xtype : "button",
                text : "关闭",
                margin : "0 340 0 0",
                handler : function() {
                    this.up("window").close();
                },
            }]
		});