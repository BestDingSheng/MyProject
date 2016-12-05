Ext
		.define(
				'Evcorp.view.contractCar.CustomerInfoWin',
				{
					extend : 'Ext.window.Window',
					alias : 'widget.customerInfowin',
					requires : [
							'Evcorp.view.contractCar.CustomerInfoWinViewController',
							'Evcorp.view.contractCar.CustomerInfoWinViewModel',
							'Ext.grid.Panel', 'Ext.tab.Panel',
							'Ext.grid.column.Column', 'Ext.grid.View',
							'Ext.toolbar.Toolbar', 'Ext.button.Button',
							'Ext.toolbar.Fill', 'Ext.form.Panel',
							'Ext.form.field.ComboBox', 'Ext.form.DateField' ],
					viewModel : {
						type : 'customerInfowin'
					},
					controller : 'customerInfowin',
					referenceHolder : true,
					itemId : 'customerInfoId',
					layout : {
						type : 'hbox',
						align : 'stretch'
					},
					autoScroll : true,
					modal : true,

					title : '查找客户',
					height : 450,
					width : 1050,
					closeAction : 'destory',

					items : [
							{
								xtype : 'form',
								flex : 1,
								layout : 'auto',
								bodyPadding : 10,
								reference : 'form',
								api : {
									submit : customerContro.updateCustomer
								},
								paramsAsHash : true,
								animCollapse : false,
								collapseDirection : 'left',
								collapsed : false,
								autoScroll : true,
								collapsible : true,
								titleCollapse : false,
								title : '客户详细信息',
								items : [
										{
											flex : 1,
											title : "客户信息",
											xtype : 'fieldset',
											align : 'left',
											collapsed : false,
											collapsible : true,
											autoScroll : true,
											items : [
													{
														xtype : 'container',
														layout : 'hbox',
														margin : '10 0',

														defaults : {
															flex : 1,
															labelAlign : "left",
														},

														items : [
																{
																	xtype : 'textfield',
																	fieldLabel : '姓名',
																	name : 'cusName',
																	labelWidth : 70,
																	width : 250,
																	margin : '0 20',
																	allowBlank : false,
																	bind : '{customerGrid.selection.cusName}'
																// height:30,

																},
																{
																	xtype : 'textfield',
																	fieldLabel : '手机号码',
																	name : 'phone',
																	labelWidth : 80,
																	width : 250,
																	allowBlank : false,
																	bind : '{customerGrid.selection.telphone}'
																},
																{
																	xtype : 'textfield',
																	fieldLabel : 'cusCode',
																	name : 'cusCode',
																	hidden : true,
																	bind : '{customerGrid.selection.cusCode}'
																},
																{
																	xtype : 'textfield',
																	fieldLabel : 'cusId',
																	name : 'id',
																	hidden : true,
																	bind : '{customerGrid.selection.id}'
																} ]
													},
													{
														margin : '10 0',
														xtype : 'container',
														layout : 'hbox',
														defaults : {
															flex : 1,
															labelAlign : "left",
														},
														items : [
																{
																	xtype : 'combobox',
																	fieldLabel : '性别',
																	name : 'gender',
																	labelWidth : 70,
																	width : 250,
																	margin : '0 20',
																	valueField : "code",
																	displayField : "nameCn",
																	mode : 'local ',
																	bind : {
																		//store : '{sexStore}',
																		value : '{customerGrid.selection.gender}'
																	},
																	store : Ext
																			.create(
																					'Ext.data.Store',
																					{
																						autoLoad : true,
																						fields : [
																								'code',
																								'nameCn' ],
																						proxy : {
																							type : 'direct',
																							directFn : chooseOptionContro.getChooseOptionWithSelect,
																							extraParams : {
																								type : 'sexType'
																							}
																						}
																					})
																},
																{
																	xtype : 'textfield',
																	fieldLabel : '身份证号码',
																	name : 'customerCid',
																	labelWidth : 80,
																	width : 250,
																	allowBlank : false,
																	bind : '{customerGrid.selection.customerCid}'
																}

														]
													},
													{
														margin : '10 0',
														xtype : 'container',
														layout : 'hbox',
														defaults : {
															flex : 1,
															labelAlign : "left",
														},
														items : [
																{
																	xtype : 'textfield',
																	fieldLabel : '邮箱',
																	name : 'email',
																	labelWidth : 70,
																	width : 250,
																	margin : '0 20',
																	bind : '{customerGrid.selection.email}'
																// height:30,

																},
																{
																	xtype : 'combobox',
																	fieldLabel : '客户用户类型:',
																	name : 'userType',
																	valueField : "code",
																	displayField : "nameCn",
																	mode : 'local ',
																	labelWidth : 80,
																	width : 250,
																	allowBlank : false,
																	bind : '{customerGrid.selection.userType}',
																	store : Ext
																			.create(
																					'Ext.data.Store',
																					{
																						autoLoad : true,
																						fields : [
																								'code',
																								'nameCn' ],
																						proxy : {
																							type : 'direct',
																							directFn : chooseOptionContro.getChooseOptionWithSelect,
																							extraParams : {
																								type : 'cusUserType'
																							}
																						}
																					})
																},
																{

																	xtype : 'gridcolumn',
																	text : 'cusCode',
																	dataIndex : 'cusCode',
																	hidden : true
																}

														]
													},
													{
														margin : '10 0',
														xtype : 'container',
														layout : 'hbox',
														defaults : {
															flex : 1,
															labelAlign : "left",
														},
														items : [
																{
																	xtype : 'textfield',
																	fieldLabel : '联系人:',
																	name : 'otherContacts',
																	labelWidth : 70,
																	width : 250,
																	margin : '0 20',
																	bind : '{customerGrid.selection.otherContacts}'
																},
																{
																	xtype : 'textarea',
																	fieldLabel : '联系人地址:',
																	name : 'address',
																	labelWidth : 80,
																	width : 250,
																	bind : '{customerGrid.selection.address}'
																}

														]
													},
													{
														margin : '10 0',
														xtype : 'container',
														layout : 'hbox',
														defaults : {
															flex : 1,
															labelAlign : "left",
														},
														items : [
																{
																	xtype : 'combobox',
																	fieldLabel : '婚姻状况',
																	valueField : "code",
																	displayField : "nameCn",
																	editable : false,
																	labelWidth : 70,
																	width : 250,
																	margin : '0 20',

																	name : 'maritalStatus',
																	bind : {
																		value : '{customerGrid.selection.maritalStatus}'
																	},
																	store : Ext
																			.create(
																					'Ext.data.Store',
																					{
																						autoLoad : true,
																						fields : [
																								'code',
																								'nameCn' ],
																						proxy : {
																							type : 'direct',
																							directFn : chooseOptionContro.getChooseOptionWithSelect,
																							extraParams : {
																								type : 'marryType'
																							}
																						}
																					})
																},
																{
																	xtype : 'textfield',
																	fieldLabel : '家庭人数',
																	name : 'familyNumber',
																	labelWidth : 80,
																	width : 250,
																	bind : '{customerGrid.selection.familyNumber}'
																} ]
													},
													{
														margin : '10 0',
														xtype : 'container',
														layout : 'hbox',
														defaults : {
															flex : 1,
															labelAlign : "left",
														},
														items : [
																{
																	xtype : 'textfield',
																	fieldLabel : '学历',
																	name : 'education',
																	labelWidth : 70,
																	width : 250,
																	margin : '0 20',
																	bind : '{customerGrid.selection.education}'
																// height:30,

																},
																{
																	xtype : 'textfield',
																	fieldLabel : '住宅邮编',
																	name : 'residentialZipCode',
																	labelWidth : 80,
																	width : 250,
																	bind : '{customerGrid.selection.residentialZipCode}'
																} ]
													},
													{
														margin : '10 0',
														xtype : 'container',
														layout : 'hbox',
														defaults : {
															flex : 1,
															labelAlign : "left",
														},
														items : [
																{
																	xtype : 'textfield',
																	fieldLabel : '住宅电话',
																	name : 'telphone',
																	labelWidth : 70,
																	width : 250,
																	margin : '0 20',
																	bind : '{customerGrid.selection.telphone}'
																},
																{
																	xtype : 'textarea',
																	fieldLabel : '住宅地址',
																	name : 'residentialAddress',
																	labelWidth : 80,
																	width : 250,
																	bind : '{customerGrid.selection.residentialAddress}'
																} ]
													} ]
										},
										{
											flex : 1,
											title : "客户银行卡信息",
											xtype : 'fieldset',
											align : 'left',
											collapsed : false,
											collapsible : true,
											autoScroll : true,
											items : [ {
												xtype : 'container',
												layout : 'hbox',
												margin : '10 0',

												defaults : {
													flex : 1,
													labelAlign : "left",
												},

												items : [ {
													xtype : 'panel',
													title : '银行卡信息',
													layout : {
														type : 'vbox',
														align : 'stretch'
													},
													border : false,
													items : [ {
														xtype : 'gridpanel',
														reference : 'bankCardInfoGrid',
														bind : '{bankCardInfoListStore}',
														margin : "0 0 10px 0",
														autoScroll : 'true',
														viewConfig : {
															emptyText : '暂无银行卡信息！',
															enableTextSelection : true
														},
														plugins : [ 
												            Ext.create('Ext.grid.plugin.CellEditing', { 
												            		clicksToEdit : 1 
												            	}
												            ) 
														],
														tbar : [ {
															xtype : 'button',
															text : '新建',
															iconCls : 'common-icon-add',
															listeners : {
																click : 'onBankCardInfoAddClick'
															}
														} ],
														columns : [
																{
																	xtype: 'actioncolumn',
																    width: 150,
																    sortable: false,
																    menuDisabled: true,
																    text : '操作',
																    align : "center",
																    items: [{
																        icon: 'images/common_save.png',
																        tooltip: '保存',
																//        scope: this,
																        handler: 'onBankCardInfoSaveClick'
																    }, {
																        icon: 'images/common_delete.png',
																        tooltip: '删除',
																        handler: 'onBankCardInfoRemoveClick'
																    }, {
													                	 icon: 'images/upload.png',
													                	 tooltip: '上传银行卡信息附件',
													                	 handler: 'onUploadBankCardInfoClick'
													                }]
																},
																{
																	dataIndex : 'id',
																	hidden : true,
																},
																{
																	dataIndex : 'customerId',
																	hidden : true,
																},
																{
																	text : '银行卡户名',
																	dataIndex : 'bankAccountName',
																	align : 'center',
																	editor:{
																		xtype:'textfield',
																		allowBlank: false,
																		name:'bankAccountName'
																	},
																}, {
																	text : '银行卡帐号',
																	dataIndex : 'bankAccountNo',
																	align : 'center',
																	editor:{
																		xtype:'textfield',
																		allowBlank: false,
																		name:'bankAccountNo'
																	},
																}, {
																	text : '银行卡开户行',
																	dataIndex : 'bankOpenPlace',
																	align : 'center',
																	editor:{
																		xtype:'textfield',
																		allowBlank: false,
																		name:'bankOpenPlace'
																	},
																} ]
													}, 
													]
												} ]
											} ]
										}

								],
								dockedItems : [ {
									xtype : 'toolbar',
									dock : 'top',
									items : [ {
										xtype : 'button',
										text : '保存',
										icon : 'images/save.png',
										handler : 'onModifyClick'
									}

									]
								} ]
							} ]
				});