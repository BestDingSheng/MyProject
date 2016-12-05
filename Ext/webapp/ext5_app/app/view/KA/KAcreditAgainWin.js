Ext
		.define(
				'Evcorp.view.KA.KAcreditAgainWin',
				{
					extend : 'Ext.window.Window',
					alias : 'widget.KAcreditAgainWin',
					requires : [
							'Evcorp.view.KA.KAcreditAgainWinViewController',
							'Evcorp.view.KA.KAcreditAgainWinViewModel',
							'Ext.grid.Panel', 'Ext.tab.Panel',
							'Ext.grid.column.Column', 'Ext.grid.View',
							'Ext.toolbar.Toolbar', 'Ext.button.Button',
							'Ext.toolbar.Fill', 'Ext.form.Panel',
							'Ext.form.field.ComboBox', 'Ext.form.DateField'],
					viewModel : {
						type : 'KAcreditAgainWin'
					},
					controller : 'KAcreditAgainWin',
					modal : true,
					closable : true,
					title : '征信审核',
					layout : {
						type : 'vbox',
						align : 'stretch'
					},
					autoScroll : true,
					heigth : '300px',
					buttonAlign:'center',
					items : [ {
						xtype : 'form',
						autoScroll : true,
						bodyPadding : '10',
						border : false,
						reference : 'snCreditInfoForm',
//						flex : 1,
						items : [
						         {
										xtype : 'container',
										layout : 'hbox',
										items : [
													{
													xtype : 'container',
													layout : 'hbox',
													flex : 1,
													defaults : {
														width : 260
													},
													items:[
															{
																xtype : 'textfield',
																fieldLabel : '操作类型',
																name : 'operateType',
																itemId : 'operateTypeItemId',
																readOnly : true,
																hidden : true,
																labelWidth : 60,
																width : 180,
															},{
																xtype : 'textfield',
																fieldLabel : 'ID',
																name : 'id',
																itemId : 'idItemId',
																hidden : true,
																readOnly : true,
																labelWidth : 60,
																width : 180,
															},{
																xtype : 'textfield',
																fieldLabel : '编号',
																name : 'creditCode',
																itemId : 'creditCodeItemId',
																readOnly : true,
																labelWidth : 60,
																width : 180,
															}
														  ]
													},{
													xtype : 'container',
													layout : 'hbox',
													flex : 1,
													defaults : {
														width : 260
													},
													items:[
/*															{
																xtype : 'combobox',
																fieldLabel : '二网',
																name : 'snCustomerCode',
																itemId : 'snCustomerCodeItemId',
																labelWidth : 60,
																width : 180,
																valueField : 'code',
																displayField : 'nameCn',
																editable : false,
																allowBlank : false,
																bind : {
																	store : '{snCustomerStore}',
																},
																listeners : {
																	change : 'onSnCustomerCodeCoboChange'
																},
															},*/
															{
																xtype : 'textfield',
																fieldLabel : '二网',
																name:'snCustomerName',
																itemId : 'snCustomerNameItemId',
																readOnly : true,
																labelWidth : 60,
																width : 180,
															}
														  ]
													},{
													xtype : 'container',
													layout : 'hbox',
													flex : 2,
													defaults : {
														width : 260
													},
													items:[
																	{
																		xtype : 'textfield',
																		fieldLabel : '产品code',
																		name : 'carProductCode',
																		itemId : 'carProductCodeItemId',
																		readOnly : true,
																		hidden : true,
																		allowBlank : false,
																		labelWidth : 60,
																		width : 180,
																		
																	},
																	{
																		xtype : 'textfield',
																		fieldLabel : '产品名称',
																		name : 'carProductName',
																		itemId : 'carProductNameItemId',
																		readOnly : true,
																		allowBlank : false,
																		labelWidth : 60,
																		width : 350,
																	}
														  ]
													},
												]

						         },{
										xtype : 'container',
										layout : 'hbox',
										margin:'10 0',
										items : [
													{
													xtype : 'container',
													layout : 'hbox',
													flex : 1,
													defaults : {
														width : 260
													},
													items:[
																{
																	xtype : 'textfield',
																	fieldLabel : '姓名',
																	name : 'cusName',
																	itemId : 'cusNameItemId',
																	readOnly : true,
																	labelWidth : 60,
																	width : 180,
																}
														  ]
													},{
													xtype : 'container',
													layout : 'hbox',
													flex : 1,
													defaults : {
														width : 260
													},
													items:[
																{
																	xtype : 'combobox',
																	fieldLabel : '证件类型',
																	name : 'cusIdType',
																	itemId : 'cusIdTypeItemId',
																	readOnly : true,
																	labelWidth : 60,
																	width : 180,
																	valueField : 'code',
																	displayField : 'nameCn',
																	editable : false,
																	bind : {
																		store : '{cusIdTypeStore}',
																	},
																}
														  ]
													},{
													xtype : 'container',
													layout : 'hbox',
													flex : 1,
													defaults : {
														width : 260
													},
													items:[
																{
																	xtype : 'textfield',
																	fieldLabel : '证件号码',
																	name : 'cusIdNum',
																	itemId : 'cusIdNumItemId',
																	readOnly : true,
																	labelWidth : 60,
																	width : 180,
																}	
														  ]
													},{
													xtype : 'container',
													layout : 'hbox',
													flex : 1,
													defaults : {
														width : 260
													},
													items:[
																{
																	xtype : 'combobox',
																	fieldLabel : '申请人性质',
																	name : 'cusNature',
																	itemId : 'cusNatureItemId',
																	readOnly : true,
																	labelWidth : 80,
																	width : 180,
																	valueField : 'code',
																	displayField : 'nameCn',
																	editable : false,
																	bind : {
																		store : '{cusNatureStore}',
																	},
																}
														  ]
													}		

												
												 ]
									
						         },{
										xtype : 'container',
										layout : 'hbox',
										margin:'10 0',
										items : [
													{
													xtype : 'container',
													layout : 'hbox',
													flex : 1,
													defaults : {
														width : 260
													},
													items:[
															{
																xtype : 'textfield',
																fieldLabel : '国籍',
																name : 'nationality',
																itemId : 'nationalityItemId',
																readOnly : true,
																labelWidth : 60,
																width : 180,
															}
														  ]
													},{
													xtype : 'container',
													layout : 'hbox',
													flex : 3,
														align:'left',
													defaults : {
														width : 260
													},
													items:[
															{
																xtype: 'datefield',
																fieldLabel : '出生日期',
																name : 'birthday',
																itemId : 'birthdayItemId',
																readOnly : true,
																labelWidth : 60,
																width : 180,
																format : 'Y-m-d'
															}
														  ]
													},
								                 {
								                     xtype: "textfield",
								                     fieldLabel: "taskId",
								                     name: "taskId",
								                     hidden:true,
								                 },{
								                     xtype: "textfield",
								                     fieldLabel: "processInstanceId",
								                     name: "processInstanceId",
								                     hidden:true,
								                 }		

												
												 ]
									
						         },{
						        	    xtype : 'container',
										layout : 'hbox',
										margin:'10 0',
										items : [
						        	 {
					                     xtype: "textarea",
					                     margin:'15 0',
					                     padding:'15 0',
					                     fieldLabel: "备注",
					                     name: "remark",
					                     itemId: 'remarkItemId',
					                     readOnly : true,
					                     labelSepartor: "：",
					                     labelWidth: 60,
					                     width: '100%',
					                 }]
						         } ],
					},
					{
						xtype : 'fieldset',
						title : '附件信息',
						itemId : 'attachmentFieldset',
						//height : 170,
						margin : '20',
						//flex : 1,
						collapsible : true,
						hidden : true,
						layout : {
							type : 'vbox',
							align : 'stretch'
						},
						items : [ {
							xtype:'uploadAttachmentPanel',
				        	reference:'uploadEWSSDDAttachmentPanel',
				        	itemId:'uploadEWSSDDAttachmentPanelItemId',
							flex : 1,
							autoScroll : true,
							disabled : true,
							margin:'10 0',
							height : 180
						}]

					},{
		        	    xtype : 'container',
						layout : 'hbox',
//						flex : 1,
						margin:'10 0',
						items : [
		        	 {
	                     xtype: "textarea",
	                     margin:'15',
	                     padding:'15',
	                     fieldLabel: "流程备注",
	                     name: "comment",
	                     itemId: 'commentItemId',
	                     labelSepartor: "：",
	                     labelWidth: 60,
	                     width: '100%',
	                 }
	                 ]
		         } ],
    	                buttons : [ {
	                            xtype : "button",
	                            text : "撤销",
	                            margin : "0 50 0 0",
	                            listeners:{
	                            	click: 'onCreditRevokeClick'
	                            }
	                           
	                        }, {
	                            xtype : "button",
	                            text : "重新提交征信",
	                            margin : "0 50 0 0",
	                            listeners:{
	                            	click: 'onCreditSubmitClick'
	                            }
	                        }
	                        ]
				});