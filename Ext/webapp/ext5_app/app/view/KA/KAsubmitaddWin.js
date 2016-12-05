Ext
		.define(
				'Evcorp.view.KA.KAsubmitaddWin',
				{
					extend : 'Ext.window.Window',
					alias : 'widget.KAsubmitaddWin',
					requires : [
							'Evcorp.view.KA.KAsubmitaddWinViewController',
							'Evcorp.view.KA.KAsubmitaddWinViewModel',
							'Ext.grid.Panel', 'Ext.tab.Panel',
							'Ext.grid.column.Column', 'Ext.grid.View',
							'Ext.toolbar.Toolbar', 'Ext.button.Button',
							'Ext.toolbar.Fill', 'Ext.form.Panel',
							'Ext.form.field.ComboBox', 'Ext.form.DateField'],
					viewModel : {
						type : 'KAsubmitaddWin'
					},
					controller : 'KAsubmitaddWin',
					modal : true,
					closable : true,
					title : '新建',
					layout : {
						type : 'vbox',
						align : 'stretch'
					},
					autoScroll : true,
					heigth : '80%',
					items : [ {
						xtype : 'form',
						api : {
							submit : 'snCreditInfoContro.saveOrUpdateSnCreditInfo'
						},
						autoScroll : true,
						bodyPadding : '10',
						border : false,
						reference : 'snCreditInfoForm',
						flex : 1,
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
															},
													]
												   },
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
																	fieldLabel : '二网',
																	name:'snCustomerName',
																	itemId : 'snCustomerNameItemId',
																	readOnly : true,
																	labelWidth : 60,
																	width : 180,
																},
														]
													},
											       {
													xtype : 'container',
													layout : 'hbox',
													flex : 2,
													defaults : {
														width : 260
													},
													items:[{
														xtype : 'textfield',
														fieldLabel : '产品code',
														name : 'carProductCode',
														itemId : 'carProductCodeItemId',
														readOnly : true,
														hidden : true,
														allowBlank : false,
														labelWidth : 60,
														width : 180,
													},{
														xtype : 'textfield',
														fieldLabel : '产品名称',
														name : 'carProductName',
														itemId : 'carProductNameItemId',
														readOnly : true,
														allowBlank : false,
														labelWidth : 60,
														width : 350,
													},{
														xtype : 'button',
														cls:'nu-btn-nobg',
														iconCls : 'nu-search',
														text : '查找',
														width : 65,
														margin:'0 5',
														handler : 'queryCarList'
													}]
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
																fieldLabel : '姓名',
																name : 'cusName',
																itemId : 'cusNameItemId',
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
													items:[{
														xtype : 'textfield',
														fieldLabel : '证件号码',
														name : 'cusIdNum',
														itemId : 'cusIdNumItemId',
														labelWidth : 60,
														width : 220,
													}],
												},{
													xtype : 'container',
													layout : 'hbox',
													flex : 1,
													defaults : {
														width : 260
													},
													items:[{
														xtype : 'combobox',
														fieldLabel : '申请人性质',
														name : 'cusNature',
														itemId : 'cusNatureItemId',
														labelWidth : 80,
														width : 180,
														valueField : 'code',
														displayField : 'nameCn',
														editable : false,
														bind : {
															store : '{cusNatureStore}',
														}
													}]
												}
												 ]
						         },{
										xtype : 'container',
										layout : 'hbox',
										margin:'10 0',
										items : [
													{
														xtype : 'container',
														flex : 1,
														defaults : {
															width : 260
														},
														items:[{
															xtype : 'textfield',
															fieldLabel : '国籍',
															name : 'nationality',
															itemId : 'nationalityItemId',
															labelWidth : 60,
															width : 180,
															
														}
														       ]
													},{
														xtype : 'container',
														flex : 1,
														align:'left',
														defaults : {
															width : 260
														},
														items:[{
															xtype: 'datefield',
															fieldLabel : '出生日期',
															name : 'birthday',
															itemId : 'birthdayItemId',
															labelWidth : 60,
															width : 180,
															format : 'Y-m-d'
														}]
													},{
														xtype : 'container',
														layout : 'hbox',
														flex : 2,
														defaults : {
															width : 260
														},
														items:[
																{
																	xtype : 'combobox',
																	fieldLabel : '购买方式',
																	name : 'buyType',
																	itemId : 'buyTypeItemId',
																	labelWidth : 60,
																	width : 220,
																	valueField : 'code',
																	displayField : 'nameCn',
																	editable : false,
																	allowBlank : false,
																	readOnly : true,
																	bind : {
																		store : '{buyTypeStore}',
																	},
//																	listeners:{
//																		change:'onBuyTypeChange'
//																	},
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
					                     xtype: "textarea",
					                     margin:'15 0',
					                     padding:'15 0',
					                     fieldLabel: "备注",
					                     name: "remark",
					                     itemId: 'remarkItemId',
					                     labelSepartor: "：",
					                     labelWidth: 60,
					                     width: '100%',
					                 }]
						         } ],
						         buttons : [ {
										xtype : 'tbfill'
									},{
		                                xtype : "button",
		                                text : "取消",
		                                margin : "0 50 0 0",
		                                iconCls:'common-icon-del',
		                                handler : function() {
		                                    this.up("window").close();
		                                },
		                            },
		                            {
		                                xtype : "button",
		                                text : "保存",
		                                margin : "0 50 0 0",
		                                iconCls:'nu-save',
		                                handler : 'onSaveClick',
		                            }
		                            ,{
										xtype : 'button',
										text : '提交征信',
										iconCls:'common-icon-go',
										margin : "0 50 0 0",
										handler : 'onSubmitCreditClick'
									},{
										xtype : 'button',
										text : '直接购车',
										iconCls:'shopping-cart',
										hidden:true,
										handler : 'onContraCarInfoSave'
									},{
										xtype : 'tbfill'
									} ]
					},
					{
						xtype : 'fieldset',
						title : '附件信息',
						itemId : 'attachmentFieldset',
						flex : 1,
						margin : '20',
//						height : 170,
						disabled : true,
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
//				        	flex : 1,
//							autoScroll : true,
////							height : 180
				        }
						]

					} 
					]
				});