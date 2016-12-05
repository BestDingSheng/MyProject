Ext
		.define(
				'Evcorp.view.orderList.OrderListWin',
				{
					extend : 'Ext.window.Window',
					alias : 'widget.orderlistwin',
					requires : [
							'Evcorp.view.orderList.OrderListWinViewController',
							'Evcorp.view.orderList.OrderListWinViewModel',
							'Ext.grid.Panel', 'Ext.tab.Panel',
							'Ext.grid.column.Column', 'Ext.grid.View',
							'Ext.toolbar.Toolbar', 'Ext.button.Button',
							'Ext.toolbar.Fill', 'Ext.form.Panel',
							'Ext.form.field.ComboBox', 'Ext.form.DateField' ],
					viewModel : {
						type : 'orderlistwin'
					},
					controller : 'orderlistwin',
					referenceHolder : true,
					itemId : 'customerId',

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
								xtype : 'gridpanel',
								viewConfig : {
									enableTextSelection : true
								},
								reference : 'customerGrid',
								bind : '{customer}',
								listeners:{
									select:'onCustomerGridSelect'
								},
								flex : 1,
								title : '客户列表',
								selModel : {
									selType : 'checkboxmodel',
									mode : 'single'
								}, //选择框
								columns : [ {
									xtype : 'gridcolumn',
									dataIndex : 'cusName',
									width : '20%',
									text : '名称'
								}, {
									xtype : 'gridcolumn',
									dataIndex : 'telphone',
									width : '35%',
									text : '电话'
								}, {
									xtype : 'gridcolumn',
									text : '手机',
									width : '30%',
									dataIndex : 'phone'

								}, {

									xtype : 'gridcolumn',
									text : '客户id',
									dataIndex : 'id',
									hidden : true
								}, {

									xtype : 'gridcolumn',
									text : '性别',
									dataIndex : 'gender',
									hidden : true
								}, {

									xtype : 'gridcolumn',
									text : '身份证号码',
									dataIndex : 'customerCid',
									hidden : true
								}, {

									xtype : 'gridcolumn',
									text : '邮箱',
									dataIndex : 'email',
									hidden : true
								}, {

									xtype : 'gridcolumn',
									text : '客户用户类型',
									dataIndex : 'userType',
									hidden : true
								}, {

									xtype : 'gridcolumn',
									text : '联系人',
									dataIndex : 'otherContacts',
									hidden : true
								}, {

									xtype : 'gridcolumn',
									text : '联系人地址',
									dataIndex : 'address',
									hidden : true
								}, {

									xtype : 'gridcolumn',
									text : '婚姻状况',
									dataIndex : 'maritalStatus',
									hidden : true
								}, {

									xtype : 'gridcolumn',
									text : '家庭人数',
									dataIndex : 'familyNumber',
									hidden : true
								}, {

									xtype : 'gridcolumn',
									text : '住宅地址',
									dataIndex : 'residentialAddress',
									hidden : true
								}, {

									xtype : 'gridcolumn',
									text : '学历',
									dataIndex : 'education',
									hidden : true
								}, {

									xtype : 'gridcolumn',
									text : '住宅邮编',
									dataIndex : 'residentialZipCode',
									hidden : true
								}

								],
								viewConfig : {
									enableTextSelection : true
								},

								dockedItems : [ {
									xtype : 'toolbar',
									dock : 'top',
									items : [

									{
										xtype : 'button',
										text : '刷新',
										icon : 'images/refresh.png',
										handler : 'onRefreshClick'

									},

									{
										xtype : 'tbfill'
									}, {
										xtype : 'textfield',
										reference : 'customerSearch',
										itemId : 'nameOrPhoneId',
										fieldLabel : '姓名或电话:',
										labelWidth : 80,
										width : 180,
										name : 'cusName'
									}, {
										xtype : 'button',
										text : '查询',
										iconCls : 'common-icon-serach',
										handler : 'onQueryClick'
									}, {
										xtype : 'button',
										text : '确定',

										handler : 'onChoiceClick'
									}, ]
								}, {
									xtype : 'pagingtoolbar',
									dock : 'bottom',
									bind : {
										store : '{customer}'
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
									emptyMsg : '没有记录'
								} ]
							},
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
																	allowBlank : false,
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