Ext.define('Evcorp.view.KA.KAsubmitEditWin',
		{
			extend : 'Ext.window.Window',
			alias : 'widget.KAsubmitEditWin',
			requires : [ 'Evcorp.view.KA.KAsubmitEditWinViewController',
					'Evcorp.view.KA.KAsubmitEditWinViewModel',
					'Ext.grid.Panel', 'Ext.tab.Panel',
					'Ext.grid.column.Column', 'Ext.grid.View',
					'Ext.toolbar.Toolbar', 'Ext.button.Button',
					'Ext.toolbar.Fill', 'Ext.form.Panel',
					'Ext.form.field.ComboBox', 'Ext.form.DateField' ],
			viewModel : {
				type : 'KAsubmitEditWin'
			},
			controller : 'KAsubmitEditWin',
			modal : true,
			closable : true,
			title : '修改',
			layout : {
				type : 'vbox',
				align : 'stretch'
			},
			autoScroll : true,
			heigth : '80%',
			items : [ {
				xtype : 'form',
				api : {
					submit : 'snCusSalesOrderContro.saveOrUpdateSnCustomerSalesOrder'
				},
				autoScroll : true,
				bodyPadding : '10',
				border : false,
				reference : 'snCustomerSalesOrderForm',
				flex : 1,
				items : [ {
					xtype : 'container',
					layout : 'hbox',
					margin : '10',
					items : [ {
						xtype : 'container',
						layout : 'hbox',
						flex : 1,
						defaults : {
							width : 260
						},
						items : [ 
			            {
							xtype : 'textfield',
							fieldLabel : 'ID',
							name : 'id',
							itemId : 'idItemId',
							hidden : true,
							readOnly : true,
							labelWidth : 60,
							width : 180,
						},
						{
							xtype : 'textfield',
							fieldLabel : '编号',
							name : 'code',
							itemId : 'codeItemId',
							labelWidth : 60,
							width : 200,
						} ]
					}, {
						xtype : 'container',
						layout : 'hbox',
						flex : 1,
						defaults : {
							width : 260
						},
						items : [ {
							xtype : 'textfield',
							fieldLabel : '创建人',
							name : 'createBy',
							itemId : 'createByItemId',
							readOnly : true,
							labelWidth : 60,
							width : 200,

						} ]
					}, {
						xtype : 'container',
						layout : 'hbox',
						flex : 1,
						defaults : {
							width : 260
						},
						items : [ {
							xtype : 'datefield',
							format : 'Y-m-d',
							fieldLabel : '创建日期',
							name : 'createDate',
							itemId : 'createDateItemId',
							readOnly : true,
							labelWidth : 60,
							width : 200,
						} ],
					}, {
						xtype : 'container',
						layout : 'hbox',
						flex : 1,
						defaults : {
							width : 260
						},
						items : [ {
							xtype : 'combobox',
							fieldLabel : '状态',
							name : 'status',
							itemId : 'statusItemId',
							valueField : 'code',
								displayField : 'nameCn',
								editable : false,
								bind : {
									store : '{orderStatusStore}',
								},
							labelWidth : 60,
							width : 200,
						} ]
					} ]
				}, {
					xtype : 'container',
					layout : 'hbox',
					margin : '10',
					items : [ {
						xtype : 'container',
						layout : 'hbox',
						flex : 1,
						defaults : {
							width : 260
						},
						items : [ {
							xtype : 'textfield',
							fieldLabel : '交车人',
							name : 'deliveryMan',
							itemId : 'deliveryManItemId',
							labelWidth : 60,
							width : 200,
						} ]
					}, {
						xtype : 'container',
						layout : 'hbox',
						algin : 'left',
						flex : 3,
						defaults : {
							width : 260
						},
						items : [ {
							xtype : 'datefield',
							format : 'Y-m-d',
							fieldLabel : '交车日期',
							name : 'deliveryDate',
							itemId : 'deliveryDateItemId',
							labelWidth : 60,
							width : 200,
						} ],
					} ]
				}, {
					xtype : 'fieldset',
					title : '客户',
					collapsible : true,
					layout : {
						type : 'vbox',
						align : 'stretch'
					},
					items : [{
						xtype : 'container',
						layout : 'hbox',
						//margin : '0 0 10 0',
						items : [ {
							xtype : 'container',
							layout : 'hbox',
							flex : 1,
							defaults : {
								width : 260
							},
							items : [ {
								xtype : 'textfield',
								fieldLabel : '二网code',
								name : 'snCustomerCode',
								itemId : 'snCustomerCodeItemId',
								allowBlank : false,
								hidden : true,
							},{
								xtype : 'textfield',
								fieldLabel : '二网名称',
								name:'snCustomerName',
								itemId : 'snCustomerNameItemId',
								allowBlank : false,
								readOnly : true,
								labelWidth : 60,
								width : 170,
							},
							{
								xtype : 'button',
								// text:'查找',
								cls : 'nu-btn-nobg',
								iconCls : 'nu-search',
								handler : 'querySnCustomerList',
								width:25,
								margin : '0 5',
							} ]
						}, {
							xtype : 'container',
							layout : 'hbox',
							flex : 1,
							defaults : {
								width : 260
							},
							items : [ {
								xtype : 'textfield',
								fieldLabel : '联系人',
								name : 'snCustomerContactUserName',
								itemId : 'snCustomerContactUserNameItemId',
								labelWidth : 60,
								width : 200,

							} ]
						}, {
							xtype : 'container',
							layout : 'hbox',
							flex : 1,
							defaults : {
								width : 200
							},
							items : [ {
								xtype : 'textfield',
								fieldLabel : '联系人电话',
								name : 'snCustomerContactUserPhone',
								itemId : 'snCustomerContactUserPhoneItemId',
								labelWidth : 60,
								width : 200,

							} ],
						}, {
							xtype : 'container',
							layout : 'hbox',
							flex : 1,
							defaults : {
								width : 260
							},
							items : [ {
								xtype : 'textfield',
								fieldLabel : '姓名',
								name : 'cusName',
								itemId : 'cusNameItemId',
								labelWidth : 60,
								width : 200,
							} ]
						} ]
					},{
						xtype : 'container',
						layout : 'hbox',
						margin : '0 0 10 0',
						items : [ {
							xtype : 'container',
							layout : 'hbox',
							flex : 1,
							defaults : {
								width : 260
							},
							items : [ {
								xtype : 'combobox',
								fieldLabel : '证件类型',
								name : 'cusIdType',
								itemId : 'cusIdTypeItemId',
								valueField : 'code',
								displayField : 'nameCn',
								bind : {
									store : '{cusIdTypeStore}',
								},
								editable : false,
								labelWidth : 60,
								width : 200,
							} ]
						}, {
							xtype : 'container',
							layout : 'hbox',
							flex : 1,
							defaults : {
								width : 260
							},
							items : [ {
								xtype : 'textfield',
								fieldLabel : '证件号码',
								name : 'cusIdNum',
								itemId : 'cusIdNumItemId',
								labelWidth : 60,
								width : 200,

							} ]
						}, {
							xtype : 'container',
							layout : 'hbox',
							flex : 1,
							defaults : {
								width : 260
							},
							items : [ {
								xtype : 'datefield',
								format : 'Y-m-d',
								fieldLabel : '出生日期',
								name : 'birthday',
								itemId : 'birthdayItemId',
								labelWidth : 60,
								width : 200,
							} ]
						}, {
							xtype : 'container',
							layout : 'hbox',
							flex : 1,
							defaults : {
								width : 200
							},
							items : [ {
								xtype : 'textfield',
								fieldLabel : '国籍',
								name : 'nationality',
								itemId : 'nationalityItemId',
								labelWidth : 60,
								width : 200,

							} ],
						} ]
					},{
						xtype : 'container',
						layout : 'hbox',
						margin : '0 0 10 0',
						items : [ {
							xtype : 'container',
							layout : 'hbox',
							flex : 4,
							align:'left',
							defaults : {
								width : 260
							},
							items : [ {
								xtype : 'combobox',
								fieldLabel : '申请人性质',
								name : 'cusNature',
								itemId : 'cusNatureItemId',
								valueField : 'code',
								displayField : 'nameCn',
								bind : {
									store : '{cusNatureStore}',
								},
								editable : false,
								labelWidth : 60,
								width : 200,

							} ]
						}]
					}]
				}, {

					xtype : 'fieldset',
					title : '车辆',
					collapsible : true,
					layout : {
						type : 'vbox',
						align : 'stretch'
					},
					items : [ {
						xtype : 'container',
						layout : 'hbox',
						margin : '10 0',
						items : [ {
							xtype : 'container',
							layout : 'hbox',
							flex : 2,
							defaults : {
								width : 260
							},
							items : [ {
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
								name : 'productName',
								itemId : 'productNameItemId',
								allowBlank : false,
								readOnly : true,
								labelWidth : 60,
								width : 360,
							}, {
								xtype : 'button',
								text : '查找',
								cls : 'nu-btn-nobg',
								iconCls : 'nu-search',
								handler : 'queryCarProductList',
								width : 65 ,
								margin : '0 5',
							} ]
						}, {
							xtype : 'container',
							layout : 'hbox',
							flex : 2,
							defaults : {
								width : 260
							},
							items : [ {
								xtype : 'textfield',
								fieldLabel : '车架号',
								name : 'vin',
								itemId : 'vinItemId',
								labelWidth : 60,
								width : 245,
							}, {
								xtype : 'button',
								cls : 'nu-btn-nobg',
								iconCls : 'common-icon-car',
								text : '配车',
								itemId : 'allocationCarBtn',
								handler : 'onAllocationCarClick',
								width : 85,
								margin : '0 5',
							},
							{
								xtype : 'button',
								cls : 'nu-btn-nobg',
								iconCls : 'common-icon-cancel',
								text : '取消配车',
								itemId : 'cancelAllocationCarBtn',
								handler : 'onCancelAllocationCarClick',
								width : 85,
								margin : '0 5',
							} ]
						} ]
					}, {
						xtype : 'container',
						layout : 'hbox',
						margin : '0 0 10 0',
						items : [ {
							xtype : 'container',
							layout : 'hbox',
							flex : 1,
							defaults : {
								width : 260
							},
							items : [ {
								xtype : 'textfield',
								fieldLabel : '发动机号',
								name : 'carEngineNo',
								itemId : 'carEngineNoItemId',
								labelWidth : 60,
								width : 200,
							} ]
						}, {
							xtype : 'container',
							layout : 'hbox',
							flex : 1,
							defaults : {
								width : 260
							},
							items : [ {
								xtype : 'combobox',
								fieldLabel : '仓库',
								name : 'storageCode',
								itemId : 'storageCodeItemId',
								valueField : 'code',
								displayField : 'nameCn',
								bind : {
									store : '{carStockStore}',
								},
								editable : false,
								labelWidth : 60,
								width : 200,

							} ]
						}, {
							xtype : 'container',
							layout : 'hbox',
							flex : 1,
							defaults : {
								width : 200
							},
							items : [ {
								xtype : 'textfield',
								fieldLabel : '库位',
								name : 'slocCode',
								itemId : 'slocCodeItemId',
								labelWidth : 60,
								width : 200,

							} ],
						}, {
							xtype : 'container',
							layout : 'hbox',
							flex : 1,
							defaults : {
								width : 260
							},
							items : [ {
								xtype : 'datefield',
								format : 'Y-m-d',
								fieldLabel : '配车日期',
								name : 'dispatchedDate',
								itemId : 'dispatchedDateItemId',
								labelWidth : 60,
								width : 200,
							} ]
						} ]
					} ]
				}, {
					xtype : 'fieldset',
					title : '电桩',
					collapsible : true,
					layout : {
						type : 'vbox',
						align : 'stretch'
					},
					items : [ {

						xtype : 'container',
						layout : 'hbox',
						margin : '10 0',
						items : [ {
							xtype : 'container',
							layout : 'hbox',
							flex : 1,
							defaults : {
								width : 260
							},
							items : [ {
								xtype : 'combobox',
								fieldLabel : '充电桩服务方式',
								name : 'chargerMethod',
								itemId : 'chargerMethodItemId',
								valueField : 'code',
								displayField : 'nameCn',
								bind : {
									store : '{chargerMethodStore}',
								},
								listeners : {
								change : 'onChargerMethodChange'
								},
								editable : false,
								labelWidth : 100,
								width : 200,
							} ]
						},{
							xtype : 'container',
							layout : 'hbox',
							flex : 1,
							defaults : {
								width : 260
							},
							items : [ {
								xtype : 'checkbox',
								fieldLabel : '是否固定车位',
								name : 'isFixedPark',
								itemId : 'isFixedParkItemId',
								labelWidth : 100,
								width : 200,
							} ]
						}, {
							xtype : 'container',
							layout : 'hbox',
							flex : 1,
							defaults : {
								width : 260
							},
							items : [ {
								xtype : 'numberfield',
								fieldLabel : '电桩挂靠金额',
								name : 'chargerFee',
								itemId : 'chargerFeeItemId',
								reference : 'chargerFeeRef',
								listeners : {
									change : 'onMoneyChange'
								},
								labelWidth : 100,
								width : 200,
							} ]
						},]
					}, ]

				}, {
					xtype : 'fieldset',
					title : '订单金额',
					collapsible : true,
					layout : {
						type : 'vbox',
						align : 'stretch'
					},
					items : [ {
						xtype : 'container',
						layout : 'hbox',
						margin : '10 0',
						items : [ {
							xtype : 'container',
							layout : 'hbox',
							flex : 1,
							defaults : {
								width : 260
							},
							items : [ {
								xtype : 'numberfield',
								fieldLabel : '销售指导价格',
								name : 'directivePrice',
								itemId : 'directivePriceItemId',
								readOnly : true,
								labelWidth : 100,
								width : 200,
							} ]
						}, {
							xtype : 'container',
							layout : 'hbox',
							flex : 1,
							defaults : {
								width : 260
							},
							items : [ {
								xtype : 'numberfield',
								fieldLabel : '车辆销售金额',
								name : 'actualPrice',
								itemId : 'actualPriceItemId',
								reference : 'actualPriceRef',
								listeners : {
									change : 'onMoneyChange'
								},
								labelWidth : 100,
								width : 200,
							} ]
						}, {
							xtype : 'container',
							layout : 'hbox',
							flex : 1,
							defaults : {
								width : 260
							},
							items : [ {
								xtype : 'numberfield',
								fieldLabel : '总订单金额',
								name : 'orderAmount',
								itemId : 'orderAmountItemId',
								reference : 'orderAmountRef',
								readOnly : true,
								labelWidth : 100,
								width : 200,
							} ]
						}, {
							xtype : 'container',
							layout : 'hbox',
							flex : 1,
							defaults : {
								width : 260
							},
							items : [ {
								xtype : 'datefield',
								format : 'Y-m-d',
								fieldLabel : '收款到账日期',
								name : 'receiveMoneyConfirmDate',
								itemId : 'receiveMoneyConfirmDateItemId',
								labelWidth : 100,
								width : 200,
							} ]
						} ]
					},{
						xtype : 'container',
						layout : 'hbox',
						margin : '10 0',
						items : [ {
							xtype : 'container',
							layout : 'hbox',
							flex : 4,
							align:'left',
							defaults : {
								width : 260
							},
							items : [ {
								xtype : 'combobox',
								fieldLabel : '是否收款',
								name : 'isReceiveMoney',
								itemId : 'isReceiveMoneyItemId',
								valueField : 'code',
								displayField : 'nameCn',
								editable : false,
								bind : {
									store : '{isReceiveMoneyStore}',
								},
								labelWidth : 100,
								width : 200,
							} ]
						}]
					} ]
				}, {
					xtype : 'fieldset',
					title : '合同信息',
					collapsible : true,
					layout : {
						type : 'vbox',
						align : 'stretch'
					},
					items : [ {
						xtype : 'container',
						layout : 'hbox',
						margin : '10 0',
						items : [ {
							xtype : 'container',
							layout : 'hbox',
							flex : 1,
							defaults : {
								width : 260
							},
							items : [{
								xtype : 'textfield',
								fieldLabel : '租赁合同编号',
								name : 'contractNo',
								itemId : 'contractNoItemId',
								labelWidth : 100,
								width : 200,
							},{
								xtype : 'textfield',
								fieldLabel : '租赁合同编号',
								name : 'contractNoOld',
								itemId : 'contractNoOldItemId',
								hidden : true,
								labelWidth : 100,
								width : 200,
							} ]
						},{
							xtype : 'container',
							layout : 'hbox',
							flex : 1,
							defaults : {
								width : 260
							},
							items : [ {
								xtype : 'datefield',
								format : 'Y-m-d',
								fieldLabel : '签订日期',
								name : 'contractSignedDate',
								itemId : 'contractSignedDateItemId',
								labelWidth : 100,
								width : 200,
							} ]
						}, {
							xtype : 'container',
							layout : 'hbox',
							flex : 2,
							align:'left',
							defaults : {
								width : 160
							},
							items : [ {
								xtype : 'button',
								cls : 'nu-btn-nobg',
								iconCls : 'download',
								text : '下载合同',
								width : 90,
								margin : '0 5',
								} ]
						} ]
					}]

				},{
					xtype : 'fieldset',
					title : '备注',
					collapsible : true,
					layout : {
						type : 'hbox',
						align : 'stretch'
					},
					items : [{
						xtype : 'container',
						layout : 'hbox',
						border : false,
						//margin : 10,
						items : [ {
									xtype: "textarea",
									fieldLabel: "备注",
									name: "remark",
									itemId: 'remarkItemId',
									labelWidth : 60,
									align:'left',
									padding:'10 10 10 0',
									width : '21%',
								  }]
					}]
				} ],
			}],
			buttons : [ {
				xtype : 'tbfill'
			}, {
				xtype : "button",
				text : "取消",
				margin : "0 50 0 0",
				iconCls : 'common-icon-del',
				handler : function() {
					this.up("window").close();
				},
			}, {
				xtype : 'button',
				text : '保存',
				iconCls : 'common-icon-save',
				handler : 'onSnCustomerSalesOrderSave'
			}, {
				xtype : 'tbfill'
			} ],
			dockedItems : [ {

				xtype : 'toolbar',
				flex : 1,
				dock : 'top',
				items : [ {
					xtype : 'button',
					text : '征信附件',
					iconCls : 'nu-clip',
					handler : 'onUploadCreditClick',
					margin : '0 5',
				},{
					xtype : 'button',
					text : '合同附件',
					iconCls : 'nu-clip',
					handler : 'onUploadContractClick',
					margin : '0 5',
				},{
					xtype : 'button',
					text : '六件套附件',
					iconCls : 'nu-files',
					handler : 'onUploadLJTClick',
					margin : '0 5',
				}, {
					xtype : 'tbfill'
				} ]

			} ]
		});