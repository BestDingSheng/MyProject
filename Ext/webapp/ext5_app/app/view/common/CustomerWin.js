Ext
		.define(
				'Evcorp.view.common.CustomerWin',
				{
					extend : 'Ext.window.Window',
					alias : 'widget.customerWin',
					requires : [
							'Evcorp.view.common.CustomerWinViewController',
							'Evcorp.view.common.CustomerWinViewModel',
							'Ext.grid.Panel', 'Ext.tab.Panel',
							'Ext.grid.column.Column', 'Ext.grid.View',
							'Ext.toolbar.Toolbar', 'Ext.button.Button',
							'Ext.toolbar.Fill', 'Ext.form.Panel',
							'Ext.form.field.ComboBox', 'Ext.form.DateField' ],
					viewModel : {
						type : 'customerWin'
					},
					controller : 'customerWin',
					referenceHolder : true,
					itemId : 'CustomerWin',
					layout : {
						type : 'hbox',
						align : 'stretch'
					},
					autoScroll : true,
					modal : true,
					title : '查找客户',
					height : 340,
					width : 900,
					closeAction : 'destory',

					items : [
							{
								xtype : 'gridpanel',
								viewConfig : {
									enableTextSelection : true
								},
								reference : 'customerGrid',
								bind : '{customer}',
								listeners : {
									select : 'onCustomerGridSelect'
								},
								flex : 1,
								selModel : {
									selType : 'checkboxmodel',
									mode : 'single'
								}, // 选择框
								columns : [ {
									xtype : 'gridcolumn',
									dataIndex : 'cusCode',
									width : 130,
									text : '客户编号'
								},{
									xtype : 'gridcolumn',
									dataIndex : 'cusName',
									width : 150,
									text : '客户名称'
								}, {
									xtype : 'gridcolumn',
									text : '手机号',
									width : 120,
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
								},
								{

									xtype : 'gridcolumn',
									text : '客户用户类型',
									dataIndex : 'userType',
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
										itemId:'selectCustomer',
										text : '确定'
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
								reference : 'form',
								api : {
									submit : customerContro.updateCustomer
								},
								autoScroll : true,
								bodyPadding : '10',
								border : false,
								items : [ {
									xtype : 'container',
									layout : {
										type : 'hbox',
										align : 'stretch'
									},
									items : [
												{
													xtype : 'container',
													flex : 1,
													defaults : {
														width : 140
													},
													items : [
															{
																xtype : 'textfield',
																fieldLabel : '姓名',
																name : 'cusName',
																labelWidth : 70,
																width : 200,
																allowBlank : false,
																bind : '{customerGrid.selection.cusName}'
															},
															{
																xtype : 'combobox',
																fieldLabel : '性别',
																name : 'gender',
																labelWidth : 70,
																width : 200,
																valueField : "code",
																displayField : "nameCn",
																mode : 'local ',
																bind : {
																	// store :
																	// '{sexStore}',
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
																						directFn : chooseOptionContro.getChooseOption,
																						extraParams : {
																							type : 'sexType'
																						}
																					}
																				})
															},
															{
																xtype : 'textfield',
																fieldLabel : '邮箱',
																name : 'email',
																labelWidth : 70,
																width : 200,
																bind : '{customerGrid.selection.email}'
															// height:30,

															},
															{
																xtype : 'textfield',
																fieldLabel : '家庭人数',
																name : 'familyNumber',
																labelWidth : 70,
																width : 200,
																bind : '{customerGrid.selection.familyNumber}'
															},
															{
																xtype : 'combobox',
																fieldLabel : '婚姻状况',
																valueField : "code",
																displayField : "nameCn",
																editable : false,
																labelWidth : 70,
																width : 200,
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
																						directFn : chooseOptionContro.getChooseOption,
																						extraParams : {
																							type : 'marryType'
																						}
																					}
																				})
															},{
																xtype : 'textfield',
																fieldLabel : '联系人:',
																name : 'otherContacts',
																labelWidth : 70,
																width : 200,
																bind : '{customerGrid.selection.otherContacts}'
															},{

																xtype : 'gridcolumn',
																text : '联系人',
																dataIndex : 'otherContacts',
																hidden : true
															},
															{
																xtype : 'textfield',
																fieldLabel : '联系人地址:',
																name : 'address',
																labelWidth : 70,
																width : 423,
																bind : '{customerGrid.selection.address}'
															},
															{
																xtype : 'textfield',
																fieldLabel : '住宅地址',
																name : 'residentialAddress',
																labelWidth : 70,
																width : 423,
																bind : '{customerGrid.selection.residentialAddress}'
															} ]
												},
												{
													xtype : 'container',
													items : [
															{
																xtype : 'textfield',
																fieldLabel : '手机号码',
																name : 'phone',
																labelWidth : 70,
																width : 200,
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
															},
															{
																xtype : 'textfield',
																fieldLabel : '身份证号码',
																name : 'customerCid',
																labelWidth : 70,
																width : 200,
																allowBlank : false,
																bind : '{customerGrid.selection.customerCid}'
															},
															{
																xtype : 'combobox',
																fieldLabel : '客户类型:',
																name : 'userType',
																valueField : "code",
																displayField : "nameCn",
																mode : 'local ',
																labelWidth : 70,
																width : 200,
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
																						directFn : chooseOptionContro.getChooseOption,
																						extraParams : {
																							type : 'cusUserType'
																						}
																					}
																				})
															},

															{
																xtype : 'textfield',
																fieldLabel : '学历',
																name : 'education',
																labelWidth : 70,
																width : 200,
																bind : '{customerGrid.selection.education}'
															// height:30,

															},
															{
																xtype : 'textfield',
																fieldLabel : '住宅电话',
																name : 'telphone',
																labelWidth : 70,
																width : 200,
																bind : '{customerGrid.selection.telphone}'
															},
															
															{
																xtype : 'textfield',
																fieldLabel : '住宅邮编',
																name : 'residentialZipCode',
																labelWidth : 70,
																width : 200,
																bind : '{customerGrid.selection.residentialZipCode}'
															}]
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