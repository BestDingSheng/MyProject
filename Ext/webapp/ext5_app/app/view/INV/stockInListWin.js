Ext.define('Evcorp.view.INV.stockInListWin',
		{
			extend : 'Ext.window.Window',
			alias : 'widget.stockInListWin',
			requires : [ 'Evcorp.view.INV.stockInListWinViewController',
					'Evcorp.view.INV.stockInListWinViewModel',
					'Ext.grid.Panel', 'Ext.tab.Panel',
					'Ext.grid.column.Column', 'Ext.grid.View',
					'Ext.toolbar.Toolbar', 'Ext.button.Button',
					'Ext.toolbar.Fill', 'Ext.form.Panel',
					'Ext.form.field.ComboBox', 'Ext.form.DateField' ],
			viewModel : {
				type : 'stockInListWin'
			},
			controller : 'stockInListWin',
			referenceHolder : true,
			itemId : 'stockInListWin',
			layout : {
				type : 'hbox',
				align : 'stretch'
			},
			// autoScroll : true,
			modal : true,

			title : '新增入库',
			height : 600,
			// padding : 20,
			border : false,
			closeAction : 'destory',
			layout : {
				type : 'border',
				align : 'stretch'
			},
			buttonAlign : 'center',
			items : [ {

				/* add list 编辑单 on */
				xtype : 'form',
				reference : 'carStockInForm',
				itemId : 'carStockInFormItemId',
				api : {
					submit : 'carStockContro.saveOrUpdateCarStock'
				},
				region : 'center',
				// border:false,
				autoScroll : true,
				bodyPadding : 10,
				border : false,
				buttonAlign : 'center',
				width : '100%',
				/*
				 * dockedItems : [ { xtype : 'toolbar', flex : 1, dock :
				 * 'bottom', padding : '10 0 0 0', items : [ { xtype : 'tbfill' }, {
				 * xtype : 'tbfill' } ] } ],
				 */
				items : [ {
					xtype : 'fieldset',
					title : '车辆信息',
					collapsible : true,
					layout : {
						type : 'vbox',
						align : 'stretch'
					},
					items : [ {
						xtype : 'container',
						layout : 'hbox',
						margin : '10 0 0 0',
						items : [ {
							xtype : 'container',
							layout : 'hbox',
							flex : 2,
							defaults : {
								width : 260
							},
							items : [ {
								xtype : 'textfield',
								fieldLabel : '产品名称',
								name : 'carProductName',
								itemId : 'carProductNameItemId',
								editable : false,
								allowBlank : false,
								labelWidth : 60,
								width : 380,
							}, {
								xtype : "displayfield",
								cls : 'red',
								value : "*",
								width : 10,
								margin : '0 5',
							}, {
								xtype : 'button',
								listeners : {
									click : 'onCarProductSearch'
								},
								iconCls : 'nu-search',
								cls : 'nu-btn-nobg',
								width : 30,
							}]
						},{
							xtype : 'container',
							layout : 'hbox',
							flex : 1,
							defaults : {
								width : 260
							},
							items : [ {
								xtype : 'textfield',
								fieldLabel : '产品代码',
								name : 'carProductCode',
								itemId : 'carProductCodeItemId',
								editable : false,
								allowBlank : false,
								labelWidth : 60,
								width : 200,
							}, {
								xtype : "displayfield",
								cls : 'red',
								value : "*",
								width : 10,
								margin : '0 5',
							}]
						}, {
							xtype : 'container',
							layout : 'hbox',
							flex : 1,
							defaults : {
								width : 260
							},
							items : [ {
								xtype : 'textfield',
								name : 'carStockId',
								itemId : 'carStockIdItemId',
								labelWidth : 80,
								width : 200,
								margin : '0 5 0 40',
								hidden : true,
							},{
								xtype : 'textfield',
								fieldLabel : 'VIN',
								name : 'vin',
								itemId : 'vinItemId',
								allowBlank : false,
								labelWidth : 60,
								width : 200,
							}, {
								xtype : "displayfield",
								cls : 'red',
								value : "*",
								width : 15,
								margin : '0 5',
							} ]
						} ]
					}, {
						xtype : 'container',
						layout : 'hbox',
						margin : '10 0 0 0',
						items : [ {
							xtype : 'container',
							layout : 'hbox',
							flex : 1,
							defaults : {
								width : 260
							},
							items : [ {
								xtype : 'combobox',
								fieldLabel : '仓库',
								name : 'stock',
								itemId : 'stockItemId',
								valueField : 'code',
								displayField : 'nameCn',
								bind : {
									store : '{carStockStore}',
								},
								editable : false,
								allowBlank : false,
								labelWidth : 60,
								width : 200,
							}, {
								xtype : "displayfield",
								cls : 'red',
								value : "*",
								width : 15,
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
								fieldLabel : '库位代码',
								name : 'stockPositionNo',
								itemId : 'stockPositionNoItemId',
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
								fieldLabel : '车辆类型',
								name : 'carType',
								reference : 'carTypeRef',
								itemId : 'carTypeItemId',
								valueField : 'code',
								displayField : 'nameCn',
								bind : {
									store : '{carTypeStore}',
								},
								editable : false,
								allowBlank : false,
								labelWidth : 60,
								width : 200,
							}, {
								xtype : "displayfield",
								cls : 'red',
								value : "*",
								width : 15,
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
								xtype : 'combobox',
								fieldLabel : '经销商',
								name : 'agency',
								reference : 'agencyRef',
								itemId : 'agencyItemId',
								valueField : 'code',
								displayField : 'nameCn',
								bind : {
									store : '{carAgencyStore}',
								},
								editable : false,
								allowBlank : false,
								labelWidth : 60,
								width : 200,
							}, {
								xtype : "displayfield",
								cls : 'red',
								value : "*",
								width : 15,
								margin : '0 5',
							} ]
						} ]
					}, {
						xtype : 'container',
						layout : 'hbox',
						margin : '10 0 0 0',
						items : [ {
							xtype : 'container',
							layout : 'hbox',
							flex : 1,
							defaults : {
								width : 260
							},
							items : [ {
								xtype : 'combobox',
								fieldLabel : '入库类型',
								name : 'stockInType',
								itemId : 'stockInTypeItemId',
								valueField : 'code',
								displayField : 'nameCn',
								bind : {
									store : '{stockInTypeStore}',
								},
								editable : false,
								allowBlank : false,
								labelWidth : 60,
								width : 200,
							}, {
								xtype : "displayfield",
								cls : 'red',
								value : "*",
								width : 15,
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
								xtype : 'datefield',
								format : 'Y-m-d',
								fieldLabel : '入库日期',
								name : 'lastStockInDate',
								reference : 'stockInDateRef',
								itemId : 'lastStockInDateItemId',
								editable : false,
								allowBlank : false,
								labelWidth : 60,
								width : 200,
							} ]
						}, {
							xtype : 'container',
							layout : 'hbox',
							flex : 2,
							defaults : {
								width : 260
							},
							items : [ {
								// xtype : 'textarea',
								xtype : 'textfield',
								fieldLabel : '入库备注',
								name : 'lastStockInRemark',
								itemId : 'lastStockInRemarkItemId',
								labelWidth : 60,
								width : 430,
							} ]
						} ]
					}, {
						xtype : 'container',
						layout : 'hbox',
						margin : '10 0 0 0',
						items : [ {
							xtype : 'container',
							layout : 'hbox',
							flex : 1,
							defaults : {
								width : 260
							},
							items : [ {
								xtype : 'textfield',
								fieldLabel : '合格证号',
								name : 'carDriveLicenseNo',
								reference : 'carDriveLicenseNoRef',
								itemId : 'carDriveLicenseNoItemId',
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
								xtype : 'textfield',
								fieldLabel : '钥匙编号',
								name : 'carKeyNo',
								itemId : 'carKeyNoItemId',
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
								fieldLabel : '资金来源',
								name : 'sourceOfFund',
								reference : 'sourceOfFundRef',
								itemId : 'sourceOfFundItemId',
								valueField : 'code',
								displayField : 'nameCn',
								editable : false,
								allowBlank : false,
								bind : {
									store : '{sourceOfFundStore}',
								},
								labelWidth : 60,
								width : 200,
							}, {
								xtype : "displayfield",
								cls : 'red',
								value : "*",
								width : 15,
								margin : '0 5',
							} ]
						} ]
					}, {
						xtype : 'container',
						layout : 'hbox',
						margin : '10 0 0 0',
						items : [ {
							xtype : 'container',
							layout : 'hbox',
							flex : 1,
							defaults : {
								width : 260
							},
							items : [ {
								xtype : 'numberfield',
								decimalPrecision:0,
								fieldLabel : '车辆免息期',
								name : 'carFreePeriod',
								reference : 'carFreePeriodRef',
								itemId : 'carFreePeriodItemId',
								labelWidth : 60,
								width : 200,
							}, {
								xtype : "displayfield",
								// cls : 'red',
								value : "天",
								width : 15,
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
								fieldLabel : '附加成本',
								name : 'additionalCost',
								reference : 'additionalCostRef',
								itemId : 'additionalCostItemId',
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
								fieldLabel : '产地',
								name : 'productingAddress',
								reference : 'productingAddressRef',
								itemId : 'productingAddressItemId',
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
								fieldLabel : '合格证所在地',
								name : 'certificateLocated',
								reference : 'certificateLocatedRef',
								itemId : 'certificateLocatedItemId',
								labelWidth : 60,
								width : 200,
							} ]
						} ]
					}, {
						xtype : 'container',
						layout : 'hbox',
						margin : '10 0 0 0',
						items : [ {
							xtype : 'container',
							layout : 'hbox',
							flex : 1,
							defaults : {
								width : 260
							},
							items : [ {
								xtype : 'combobox',
								fieldLabel : '是否入账',
								name : 'isEnterInAccount',
								reference : 'isEnterInAccountRef',
								itemId : 'isEnterInAccountItemId',
								valueField : 'code',
								displayField : 'nameCn',
								bind : {
									store : '{isEnterInAccountStore}',
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
								fieldLabel : 'CALL车单号',
								name : 'carCallNo',
								reference : 'carCallNoRef',
								itemId : 'carCallNoItemId',
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
								fieldLabel : '厂家订单编号',
								name : 'supplierOrderNo',
								reference : 'supplierOrderNoRef',
								itemId : 'supplierOrderNoItemId',
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
								fieldLabel : '销售订单编号',
								name : 'saleOrderNo',
								reference : 'saleOrderNoRef',
								itemId : 'saleOrderNoItemId',
								labelWidth : 60,
								width : 200,
							} ]
						} ]
					}, {
						xtype : 'container',
						layout : 'hbox',
						margin : '10 0 0 0',
						items : [ {
							xtype : 'container',
							layout : 'hbox',
							flex : 1,
							defaults : {
								width : 260
							},
							items : [ {
								xtype : 'combobox',
								fieldLabel : '是否大客户',
								name : 'isBigCustomer',
								reference : 'isBigCustomerRef',
								itemId : 'isBigCustomerItemId',
								valueField : 'code',
								displayField : 'nameCn',
								bind : {
									store : '{isBigCustomerStore}',
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
								xtype : 'combobox',
								fieldLabel : '是否代验收',
								name : 'isAgentAcceptance',
								reference : 'isAgentAcceptanceRef',
								itemId : 'isAgentAcceptanceItemId',
								valueField : 'code',
								displayField : 'nameCn',
								bind : {
									store : '{isAgentAcceptanceStore}',
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
								xtype : 'combobox',
								fieldLabel : '是否直销',
								name : 'isDirectSelling',
								reference : 'isDirectSellingRef',
								itemId : 'isDirectSellingItemId',
								valueField : 'code',
								displayField : 'nameCn',
								bind : {
									store : '{isDirectSellingStore}',
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
							items : []
						} ]
					}, {
						xtype : 'container',
						layout : 'hbox',
						border : false,
						margin : '10 30 10 0',
						items : [ {
							xtype : "textarea",
							fieldLabel : "备注",
							//labelSepartor : "：",
							name : "remark",
							reference : 'remarkRef',
							itemId : 'remarkItemId',
							labelWidth : 60,
							width : '100%',
						} ]
					} ]
				}, {
					xtype : 'fieldset',
					title : '配送信息',
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
								xtype : 'datefield',
								format : 'Y-m-d',
								fieldLabel : '实际送到日期',
								name : 'realDeliveryDate',
								reference : 'realDeliveryDateRef',
								itemId : 'realDeliveryDateItemId',
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
								endDateField : 'etime',
								fieldLabel : '采购日期',
								name : 'purchaseDate',
								reference : 'purchaseDateRef',
								itemId : 'purchaseDateItemId',
								labelWidth : 60,
								width : 200,
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
								fieldLabel : '供应商',
								name : 'venderCode',
								itemId : 'venderCodeItemId',
								editable : false,
								hidden : true,
								allowBlank : false,
							}, {
								xtype : 'textfield',
								fieldLabel : '供应商',
								name : 'venderName',
								itemId : 'venderNameItemId',
								editable : false,
								allowBlank : false,
								labelWidth : 60,
								width : 340,
							}, {
								xtype : "displayfield",
								cls : 'red',
								value : "*",
								width : 15,
								margin : '0 5',
							}, {
								xtype : 'button',
								text : '查找',
								listeners : {
									click : 'onProviderSearch'
								},
								iconCls : 'nu-search',
								cls : 'nu-btn-nobg',
								width : 65,
							// margin : '0 5',
							} ]
						} ]
					} ]
				}, {
					xtype : 'fieldset',
					title : '验收信息',
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
								fieldLabel : '验收结果',
								name : 'acceptanceResult',
								reference : 'acceptanceResultRef',
								itemId : 'acceptanceResultItemId',
								valueField : 'code',
								displayField : 'nameCn',
								bind : {
									store : '{acceptanceResultStore}',
								},
								editable : false,
								allowBlank : false,
								labelWidth : 60,
								width : 200,
							}, {
								xtype : "displayfield",
								cls : 'red',
								value : "*",
								width : 15,
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
								xtype : 'combobox',
								fieldLabel : '质损状态',
								name : 'damageStatus',
								reference : 'damageStatusRef',
								itemId : 'damageStatusItemId',
								valueField : 'code',
								displayField : 'nameCn',
								bind : {
									store : '{damageStatusStore}',
								},
								editable : false,
								allowBlank : false,
								labelWidth : 60,
								width : 200,
							}, {
								xtype : "displayfield",
								cls : 'red',
								value : "*",
								width : 15,
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
								xtype : 'combobox',
								fieldLabel : '验收人',
								name : 'inspector',
								reference : 'inspectorRef',
								itemId : 'inspectorItemId',
								valueField : "id",
								displayField : "username",
								queryModel : 'local',
								bind : {
									store : '{inspectorStore}',
								},
								editable : false,
								allowBlank : false,
								labelWidth : 60,
								width : 200,
							}, {
								xtype : "displayfield",
								cls : 'red',
								value : "*",
								width : 15,
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
								xtype : 'datefield',
								format : 'Y-m-d',
								fieldLabel : '验收日期',
								endDateField : 'etime',
								name : 'inspectionDate',
								reference : 'inspectionDateRef',
								itemId : 'inspectionDateItemId',
								allowBlank : false,
								labelWidth : 60,
								width : 200,
							}, {
								xtype : "displayfield",
								cls : 'red',
								value : "*",
								width : 15,
								margin : '0 5',
							} ]
						} ]
					}, {
						xtype : 'container',
						layout : 'hbox',
						border : false,
						margin : '0 30 10 0',
						items : [ {
							xtype : 'textarea',
							fieldLabel : '验收备注',
							name : 'acceptanceRemark',
							reference : 'acceptanceRemarkRef',
							itemId : 'acceptanceRemarkItemId',
							labelWidth : 60,
							width : '100%',
						} ]
					} ]
				} ],
			/* add list 编辑单 end */
			} ],
			buttons : [ {
				xtype : "button",
				iconCls : 'common-icon-cancel',
				text : "取消",
				listeners : {
					click : 'onStockInListWinCancel'
				},
			}, {
				xtype : 'button',
				text : '保存',
				scale : 'small',
				iconCls : 'common-icon-save',
				handler : 'onSaveStock',
			}, ]
		});