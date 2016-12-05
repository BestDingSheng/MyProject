Ext
		.define(
				'Evcorp.view.salesOrder.SalesOrderWin',
				{
					extend : 'Ext.window.Window',
					alias : 'widget.salesOrderWin',
					requires : [
							'Evcorp.view.salesOrder.SalesOrderWinViewController',
							'Evcorp.view.salesOrder.SalesOrderWinViewModel',
							'Ext.grid.Panel', 'Ext.tab.Panel',
							'Ext.grid.column.Column', 'Ext.grid.View',
							'Ext.toolbar.Toolbar', 'Ext.button.Button',
							'Ext.toolbar.Fill', 'Ext.form.Panel',
							'Ext.form.field.ComboBox', 'Ext.form.DateField'],
					viewModel : {
						type : 'salesOrderWin'
					},
					controller : 'salesOrderWin',
					modal : true,
					closable : true,
					maximizable: true,
					title : '销售订单管理',
					layout : {
						type : 'vbox',
						align : 'stretch'
					},
					autoScroll : true,
					heigth : '80%',
					items : [ 
								{
									xtype : 'form',
									api : {
										submit : 'salesOrderContro.saveOrUpdSalesOrder'
									},
									autoScroll : true,
									bodyPadding : '10',
									border : false,
									reference : 'salesOrderForm',
									flex : 1,
									items : [
											{
												xtype : 'fieldset',
												title : '客户信息',
												collapsible : true,
												layout : {
													type : 'vbox',
													align : 'stretch'
												},
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
																	width : 210
																},
																items : [
																		{
																			xtype : 'textfield',
																			fieldLabel : '订单编号',
																			readOnly:true,
																			labelWidth : 70,
																			width : 200,
																			name : 'code',
																			reference : 'salesOrderNoRef',
																			itemId:'salesOrderCode',
																			bind : '{salesOrder.code}'
																		},
																		{
																			xtype : 'textfield',
																			fieldLabel : '手机号',
																			labelWidth : 70,
																			width : 200,
																			name : 'cusContact',
																			id:'saleOrderCusContact',
																			bind : '{salesOrder.cusContact}'
																		} ]
															},
															{
																xtype : 'container',
																flex : 1,
																items : [
																			{
																				xtype : 'container',
																				layout : 'hbox',
																				items : [
																						{
																							xtype : 'textfield',
																							fieldLabel : 'ID',
																							reference : 'carInfoIdRef',
																							hidden : true,
																							name : 'id',
																							id:'carInfoItemId',
																							bind : '{salesOrder.id}'
																						},
																						{
																							xtype : 'textfield',
																							fieldLabel : 'orderType',
																							reference : 'carInfoIdRef',
																							hidden : true,
																							name : 'orderType',
																							bind : '{salesOrder.orderType}'
																						},
																						{
																							xtype : 'textfield',
																							fieldLabel : '客户编号',
																							readOnly:true,
																							name:'cusCode',
																							id:'salesOrderCusCode',
																							readOnly : true,
																							allowBlank : false,
																							labelWidth : 70,
																							width : 180,
																							bind : '{salesOrder.cusCode}'
																						},
																						{
																							xtype : 'button',
																							cls:'nu-btn-nobg',
																							//iconCls:'nu-search',
																							text : '查找',
																							width : 50,
																							reference:'queryCustomerButton',
																							handler : 'queryCustomerList',
																							margin:'0 0 0 5'
																						} ]
																			},
																			{
																				xtype : 'textfield',
																				fieldLabel : '联系地址',
																				readOnly:true,
																				margin:'5 0',
																				labelWidth : 70,
																				width : 432,
																				name : 'cusAddr',
																				id:'salesOrderCusAddr',
																				bind : '{salesOrder.cusAddr}'
																			}
																		]
															},
															
															{
																xtype : 'container',
																flex : 1,
																defaults : {
																	width : 210
																},
																items : [
																		{
																			xtype : 'textfield',
																			fieldLabel : '客户姓名',
																			readOnly:true,
																			labelWidth : 70,
																			width : 200,
																			name : 'cusName',
																			id:'salesOrderCusName',
																			bind : '{salesOrder.cusName}'
																		}]
															},
															{
																xtype : 'container',
																flex : 1,
																defaults : {
																	width : 210
																},
																items : [
																		{
																			xtype : 'textfield',
																			fieldLabel : '身份证',
																			readOnly:true,
																			labelWidth : 70,
																			width : 220,
																			name : 'cusIdNum',
																			id:'salesOrderCusId',
																			bind : '{salesOrder.cusIdNum}'
																		}]
															} ]
												} ]
											},
											{

												xtype : 'fieldset',
												title : '产品及配车',
												collapsible : true,
												layout : {
													type : 'vbox',
													align : 'stretch'
												},
												items : [
														{
															xtype : 'container',
															flex : 1,
															defaults : {
																width : 260
															},
															layout:'hbox',
															items : [
																	{
																			xtype : 'container',
																			layout : 'hbox',
																			items : [
																					{
																						xtype : 'textfield',
																						fieldLabel : '产品编号',
																						id:'salesOrderProductCode',
																						name:'carProductCode',
																						reference : 'salesOrderProductCodeRef',
																						readOnly : true,
																						allowBlank : false,
																						labelWidth : 70,
																						width : 200,
																						bind : '{salesOrder.carProductCode}'
																					},
																					{
																						xtype : 'button',
																						cls:'nu-btn-nobg',
																						//iconCls:'nu-search',
																						text : '查找',
																						width : 50,
																						reference:'queryCarButton',
																						handler : 'queryCarList',
																						margin:'0 0 0 5'
																					} ]
																		},
																		{
																			xtype : 'textfield',
																			fieldLabel : '产品名称',
																			readOnly : true,
																			id:'salesOrderProductName',
																			name:'productName',
																			reference : 'salesOrderProductNameRef',
																			margin:'0 30',
																			labelWidth : 70,
																			width : 377,
																			bind : '{salesOrder.productName}'
																		},{
																			xtype : 'button',
																			cls:'nu-btn-nobg',
																			iconCls:'nu-car',
																			text : '配车',
																			itemId:'saleOrderPcItem',
																			reference:'assignCarButton',
																			margin:'0 5',
																			width : 80,
																			handler:'onPcClick'
																			
																		}]
														},
														{
															xtype : 'container',
															flex : 1,
															defaults : {
																width : 210
															},
															margin:'5 0 5 0',
															layout:'hbox',
															items : [

																		{
																			xtype : 'textfield',
																			fieldLabel : 'VIN',
																			name:'vin',
																			itemId:'salesOrderVinItem',
																			readOnly : true,
																			labelWidth : 70,
																			width : 200,
																			bind : '{salesOrder.vin}'
																		},
																		{
																			xtype : 'datefield',
																			fieldLabel : '配车日期',
																			readOnly : true,
																			name:'dispatchedDate',
																			itemId:'sdDispatchedDateItem',
																			format : 'Y-m-d',
																			margin:'0 33',
																			labelWidth : 70,
																			width : 200,
																			bind : '{salesOrder.dispatchedDate}'
																		},
																		{
																			xtype : 'textfield',
																			fieldLabel : '仓库',
																			margin:'0 0',
																			name:'storageCode',
																			itemId:'sdStorageCodeItem',
																			readOnly : true,
																			labelWidth : 70,
																			width : 200,
																			bind : '{salesOrder.storageCode}'
																		},
																		{
																			xtype : 'textfield',
																			fieldLabel : '库位',
																			readOnly : true,
																			margin:'0 28',
																			labelWidth : 70,
																			width : 200,
																			name : 'slocCode',
																			itemId:'sdSlocCodeItem',
																			bind : '{salesOrder.slocCode}'
																		}]
														} ]

											},
											{
												xtype : 'fieldset',
												title : '订单信息',
												collapsible : true,
												itemId : 'insuranceFieldset',
												layout : {
													type : 'hbox',
													align : 'stretch'
												},
												items : [
															{
																xtype : 'container',
																flex : 1,
																defaults : {
																	width : 210
																},
																items : [
																		{
																	xtype : 'combobox',
																	fieldLabel : '开单销售',
																	name : 'saleCreate',
																	allowBlank : false,
																	labelWidth : 70,
																	width : 200,
																	valueField : "id",
																	displayField : "username",
																	queryModel : 'local',
																	forceSelection : true,
																	editable : false,
//																	store : Ext.create('Ext.data.Store', {
//																						autoLoad : true,
//																						fields : [ 'id', 'username' ],
//																						proxy : {
//																							type: 'direct',
//																							directFn : auUserContro.findUsersByRole,
//																			        		extraParams: {
//																			        			roleCode : 'sales'
//																			        		}
//																						}
//																					}),
																	bind :{
																		store:'{saleCreateStore}',
																		value:'{salesOrder.saleCreate}'
																	} 
																},
																{
																	xtype : 'combobox',
																	fieldLabel : '执行销售',
																	name : 'saleExecutive',
																	allowBlank : false,
																	labelWidth : 70,
																	width : 200,
																	valueField : "id",
																	displayField : "username",
																	queryModel : 'local',
																	forceSelection : true,
																	editable : false,
																	bind :{
																		store:'{saleExecutiveStore}',
																		value:'{salesOrder.saleExecutive}'
																	} 
																},
																		{
																			xtype : 'numberfield',
																			fieldLabel : '销售指导价',
																			name:'directivePrice',
//																			id:'salesOrderDirectivePrice',
																			itemId:'salesOrderDirectivePriceItem',
																			isMoney:true,
																			decimalPrecision:2,
																			readOnly : true,
																			allowBlank : false,
																			decimalPrecision:0,
																			labelWidth : 70,
																			width : 200,
																			bind : '{directivePrice}'
																		},
																		{
																			xtype : 'numberfield',
																			fieldLabel : '订单总金额',
																			allowBlank : false,
																			readOnly : true,
																			isMoney:true,
																			name:'orderAmount',
																			itemId:'saleOrderAmountItem',
																			decimalPrecision:2,
																			labelWidth : 70,
																			width : 200,
																			bind : '{orderAmountValue}'
																		},
																		{
																			xtype : 'checkbox',
																			fieldLabel : '是否大客户',
																			name:'isBigCustomer',
																			labelWidth : 70,
																			width : 200,
																			bind : '{salesOrder.isBigCustomer}'
																		}
																		]
															},
															{
																xtype : 'container',
																flex : 1,
																defaults : {
																	width : 210
																},
																items : [
																		{
																			xtype : 'textfield',
																			fieldLabel : '合同编号',
																			name:'contractNo',
																			itemId:'contractNoItem',
																			readOnly:true,
																			labelWidth : 70,
																			width : 200,
																			bind : '{salesOrder.contractNo}'
																		},
																		{
																			xtype : 'datefield',
																			fieldLabel : '合同日期',
																			format : 'Y-m-d',
																			name:'contractSignedDate',
																			itemId:'contractSignedDateItem',
																			readOnly:true,
																			labelWidth : 70,
																			width : 200,
																			bind : '{salesOrder.contractSignedDate}'
																		},
																		{
																			xtype : 'numberfield',
																			fieldLabel : '折让金额',
																			name:'discountPrice',
																			itemId:'saleOrderDiscountPriceItem',
																			decimalPrecision:2,
																			isMoney:true,
																			labelWidth : 70,
																			width : 200,
																			bind : '{discountPrice}',
//																			listeners:{
//																				change:'onPriceChange'
//																			}
																		},
																		{
																			xtype : 'numberfield',
																			fieldLabel : '应收总金额',
																			allowBlank : false,
																			readOnly : true,
																			isMoney:true,
																			name:'arAmount',
																			itemId : 'arAmountItem',
																			decimalPrecision:2,
																			labelWidth : 70,
																			width : 200,
																			bind:'{arAmountValue}'
//																			bind : '{salesOrder.arAmount}'
																		},
																		{
																			xtype : 'textfield',
																			fieldLabel : '大客户姓名',
																			name:'bigCusName',
																			labelWidth : 70,
																			width : 200,
																			bind : '{salesOrder.bigCusName}'
																		}]
															},
															{
																xtype : 'container',
																flex : 1,
																defaults : {
																	width : 210
																},
																items : [
																		{
																			xtype : 'combobox',
																			fieldLabel : '开票方式',
																			name:'invoiceMode',
																			allowBlank : false,
																			labelWidth : 70,
																			width : 200,
																			valueField : 'code',
																			displayField : 'nameCn',
																			bind : {
																				store : '{invoiceModeStore}',
																				value:'{salesOrder.invoiceMode}'
																			}
																		},
																		{
																			xtype : 'combobox',
																			fieldLabel : '结算方式',
																			name:'balanceMode',
																			labelWidth : 70,
																			width : 200,
																			valueField : 'code',
																			displayField : 'nameCn',
																			bind : {
																				store : '{balanceModeStore}',
																				value:'{salesOrder.balanceMode}'
																			}
																		},
																		{
																			xtype : 'numberfield',
																			fieldLabel : '实际销售价',
																			allowBlank : false,
																			readOnly : true,
																			isMoney:true,
																			name:'actualPrice',
//																			id:'salesOrderActualPrice',
																			itemId:'salesOrderActualPriceItem',
																			decimalPrecision:2,
																			labelWidth : 70,
																			width : 200,
																			bind:'{actualPriceValue}'
//																			bind : '{salesOrder.actualPrice}'
																		},
																		{
																			xtype : 'numberfield',
																			fieldLabel : '实收总金额',
																			readOnly : true,
																			isMoney:true,
																			name:'recvAmoount',
																			itemId:'recvAmoountItem',
																			decimalPrecision:2,
																			labelWidth : 70,
																			width : 200,
																			bind : '{recvAmoount}'
																		},
																		{
																			xtype : 'textfield',
																			fieldLabel : '备注信息',
																			name:'remark',
																			labelWidth : 70,
																			width : 435,
																			bind : '{salesOrder.remark}'
																		}]
															},
															{
																xtype : 'container',
																flex : 1,
																defaults : {
																	width : 210
																},
																layout:'vbox',
																items : [
																		{
																			xtype : 'combobox',
																			fieldLabel : '订单状态',
																			name:'status',
																			readOnly : true,
																			labelWidth : 70,
																			width : 200,
																			valueField : 'code',
																			displayField : 'nameCn',
																			bind : {
																				store : '{orderStatusStore}',
																				value:'{salesOrder.status}'
																			}
																		},
																		{
																			xtype : 'textfield',
																			fieldLabel : '提车人',
																			name:'ownerDriver',
																			labelWidth : 70,
																			width : 200,
																			bind : '{salesOrder.ownerDriver}'
																		},
																		{
																			xtype : 'numberfield',
																			fieldLabel : '订金',
																			name:'prepayAmount',
																			itemId:'saleOrderPrepayAmountItem',
																			allowBlank : false,
																			decimalPrecision:2,
																			labelWidth : 70,
																			isMoney:true,
																			width : 200,
																			bind : '{salesOrder.prepayAmount}'
//																			listeners:{
//																				change:'onPriceChange'
//																			}
																		},
																		{
																			xtype : 'numberfield',
																			fieldLabel : '订单欠款',
																			name:'orderArrears',
																			itemId:'orderArrearsItem',
																			allowBlank : false,
																			decimalPrecision:2,
																			labelWidth : 70,
																			isMoney:true,
																			readOnly:true,
																			width : 200,
																			bind : '{orderArrearsValue}'
																		} ]
															} ]
											},
											{

												xtype : 'fieldset',
												title : '其他信息',
												collapsible : true,
												layout : {
													type : 'vbox',
													align : 'stretch'
												},
												items : [
															{
																xtype : 'container',
																flex : 1,
																defaults : {
																	width : 210
																},
																layout:'hbox',
																items : [
																		{
																			xtype : 'textareafield',
																			fieldLabel : '装潢内容',
																			name:'upholsterContent',
																			labelWidth : 90,
																			width : 435,
																			bind : '{salesOrder.upholsterContent}'
																		},
																		{
																			xtype : 'numberfield',
																			fieldLabel : '装饰装潢费',
																			name:'upholsterAmount',
																			itemId:'saleOrderUpholsterAmountItem',
																			isMoney:true,
																			decimalPrecision:2,
																			margin:'0 30',
																			labelWidth : 70,
																			width : 200,
																			bind : '{upholsterAmount}',
//																			listeners:{
//																				change:'onPriceChange'
//																			}
																		},
																		{
																			xtype:'container',
																			layout:'vbox',
																			items:[
																						{
																							xtype : 'combobox',
																							fieldLabel : '电桩服务方式',
																							name:'chargerMethod',
																							labelWidth : 90,
																							width : 200,
																							valueField : 'code',
																							displayField : 'nameCn',
																							bind : {
																								store : '{chargerMethodStore}',
																								value:'{salesOrder.chargerMethod}'
																							},
																							listeners:{
																								change:'chargerMethodChange'
																							}
																						},
																						{
																							xtype : 'numberfield',
																							fieldLabel : '电桩服务费',
																							reference : 'chargerFeeRef',
																							itemId:'saleOrderChargerFeeItem',
																							name:'chargerFee',
																							isMoney:true,
																							decimalPrecision:2,
//																							readOnly:true,
																							margin:'5 0',
																							labelWidth : 90,
																							width : 200,
																							bind : '{chargerFee}',
//																							listeners:{
//																								change:'onPriceChange'
//																							}
																						}
																			       ]
																		}
																		]
															},
															{
																xtype : 'container',
																margin:'5 0',
																flex : 1,
																defaults : {
																	width : 210
																},
																layout:'hbox',
																items : [
																		{
																			xtype : 'textareafield',
																			fieldLabel : '保险内容',
																			name:'insuranceTerms',
																			itemId:'insuranceTermsItem',
																			labelWidth : 90,
																			width : 435,
																			bind : '{salesOrder.insuranceTerms}'
																		},
																		{
																			xtype:'container',
																			layout:'vbox',
																			width:260,
																			items:[
																					{
																						xtype : 'numberfield',
																						fieldLabel : '预估保险费',
																						name:'carInsAmount',
																						itemId:'saleOrderCarInsAmountItem',
																						decimalPrecision:2,
																						isMoney:true,
																						margin:'0 30',
																						labelWidth : 70,
																						width : 200,
																						bind : '{carInsAmount}',
//																						listeners:{
//																							change:'onPriceChange'
//																						}
																					},
																					{
																						xtype : 'numberfield',
																						fieldLabel : '实际保险费',
																						name:'actualInsAmount',
																						itemId:'saleOrderActualInsAmountItem',
																						decimalPrecision:2,
																						isMoney:true,
																						margin:'10 30',
																						labelWidth : 70,
																						width : 200,
																						bind : '{actualInsAmount}',
//																						listeners:{
//																							change:'onPriceChange'
//																						}
																					}
																			       ]
																		},
																		{
																			xtype : 'checkbox',
																			fieldLabel : '是否固定车位',
																			name:'isFixedPark',
																			labelWidth : 90,
																			width : 200,
																			bind : '{salesOrder.isFixedPark}'
																		}
																		]
															},
															{
																xtype : 'container',
																flex : 1,
																defaults : {
																	width : 210
																},
																layout:'hbox',
																items : [
																		{
																			xtype : 'combobox',
																			fieldLabel : '服务代办内容',
																			margin:'0',
																			name:'servicePresentContent',
																			reference : 'servicePresentContentRef',
																			valueField : 'code',
																			displayField : 'nameCn',
																			multiSelect : true, 
																			labelWidth : 90,
																			width : 435,
																			bind :{
																				store:'{servicePresentStore}',
																				value:'{salesOrder.servicePresentContent}'
																			},    
																		    listConfig : {    
																		        itemTpl : Ext.create('Ext.XTemplate','<input id="servicePresentContentCB_{[values.code]}" type=checkbox check=>{[values.nameCn]}'),    
																		        onItemSelect : function(record) {    
																		            var node = this.getNode(record);    
																		            if (node) {    
																		                Ext.fly(node).addCls(this.selectedItemCls);    
																		                var checkboxs = node.getElementsByTagName("input");    
																		                if (checkboxs != null)    
																		                    var checkbox = checkboxs[0];    
																		                checkbox.checked = true;    
																		            }    
																		        },    
																		        listeners : {    
																		            itemclick : function(view, record, item, index, e, eOpts) {    
																		                var isSelected = view.isSelected(item);    
																		                var checkboxs = item.getElementsByTagName("input");    
																		                if (checkboxs != null) {    
																		                    var checkbox = checkboxs[0];    
																		                    if (!isSelected) {    
																		                        checkbox.checked = true;    
																		                    } else {    
																		                        checkbox.checked = false;    
																		                    }    
																		                }    
																		            }    
																		        }
																		    }
																		},
																		{
																			xtype : 'numberfield',
																			fieldLabel : '服务代办费',
																			name:'servicePresentAmount',
																			itemId:'saleOrderServicePresentAmountItem',
																			decimalPrecision:2,
																			isMoney:true,
																			margin:'0 30',
																			labelWidth : 70,
																			width : 200,
																			bind : '{servicePresentAmount}',
//																			listeners:{
//																				change:'onPriceChange'
//																			}
																		}]
															},
															{
																xtype : 'container',
																flex : 1,
																defaults : {
																	width : 210
																},
																layout:'hbox',
																margin:'0 0 5 0',
																items : [
																		{
																			xtype : 'textfield',
																			fieldLabel : '行驶证号',
																			name : 'drivingLicence',
																			itemId:'drivingLicenceItem',
																			labelWidth : 70,
																			width : 200,
																			bind : '{salesOrder.drivingLicence}',
																			hidden:true
																		}, {
																			xtype : 'textfield',
																			fieldLabel : '牌照号',
																			name : 'plateNumber',
																			itemId:'plateNumberItem',
																			margin:'0 50',
																			labelWidth : 70,
																			width : 200,
																			bind : '{salesOrder.licenseNo}',
																			hidden:true
																		}, {
																			xtype : 'textfield',
																			fieldLabel : 'SVN',
																			name : 'oemInfoSvnPath',
																			itemId:'svnAddressItem',
																			margin:'0 50',
																			labelWidth : 70,
																			width : 200,
																			bind : '{salesOrder.oemInfoSvnPath}',
																			hidden:true
																		}, {
																			xtype : 'textfield',
																			fieldLabel : 'CreateOrUpdate',
																			name : 'createOrUpdate',
																			itemId:'createOrUpdateItem',
																			margin:'0 50',
																			labelWidth : 70,
																			width : 200,
																			hidden:true
																		}]
															} 
															]
											
											},{
									            xtype: 'form',
									            width:'100%',
									            reference:'commentForm',
									            autoScroll:true,
									            hidden:true,
									            buttonAlign:'center',
									            items: [{
									                xtype: "textarea",
									                margin:'15 auto',
									                padding:'15',
									                fieldLabel: "备注",
									                reference:'comment',
									                name: "comment",
									                labelSepartor: "：",
									                labelWidth: 80,
									                width: '90%',
									            }],
									            buttons: [{
									                xtype : "button",
									                text : "关闭",
									                margin : "0 50 0 0",
									                handler : function() {
									                    this.up("window").close();
									                },
									            },{
									                xtype : "button",
									                cls:'btn-success',
									                text : "审核通过",
									                reference:'agreeButton',
									                margin : "0 50 0 0",
									                listeners:{
									              	  click:'onAgreeClick',
									                },
									            },{
								                    xtype : "button",
								                    cls:'btn-danger',
								                    text : "审核不通过",
								                    reference:'rejectButton',
								                    margin : "0 50 0 0",
								                    listeners:{
								                  	  click:'onRejectClick',
								                    }
									            },{
									            	xtype : "button",
								                    cls:'btn-success',
								                    text : "提交",
								                    reference:'submitButton',
								                    margin : "0 50 0 0",
								                    listeners:{
								                  	  click:'onSubmitClick',
								                    }
									            },{
									            	xtype : "button",
								                    cls:'btn-danger',
								                    text : "退单",
								                    reference:'deleteButton',
								                    margin : "0 50 0 0",
								                    listeners:{
								                  	  click:'onDeleteClick',
								                    }
									            }]
											}],
									dockedItems : [ {
										xtype : 'toolbar',
										flex : 1,
										dock : 'top',
										itemId:'toolbarItem',
										items : [ {
											xtype : 'button',
											iconCls:'nu-clip',
											text : '合同附件',
											reference:'contactButton',
											handler : 'onConttactSign',
											itemId:'contactButtonItem',
											hidden:true
										}, {
											xtype : 'button',
											iconCls:'nu-info',
											text : '贷款信息',
											reference:'mortgageButton',
											handler : 'onMortgageClick',
											itemId:'mortgageButtonItem',
											hidden:true
										}, {
											xtype : 'button',
											iconCls:'nu-info',
											text : '保险信息',
											reference:'insuranceButton',
											handler : 'onInsuranceClick',
											itemId:'insuranceButtonItem',
											hidden:true
										}, {
											xtype : 'button',
											iconCls:'nu-info',
											text : '电桩信息',
											reference:'chargeButton',
											handler : 'onChargeClick',
											itemId:'chargeButtonItem',
											hidden:true
										}, {
											xtype : 'button',
											iconCls:'nu-info',
											text : '征信信息',
											reference:'collectButton',
											handler : 'onCollectCreditClick',
											itemId:'collectButtonItem',
											hidden:true
										}, {
											xtype : 'button',
											iconCls:'nu-history',
											text : '付款记录',
											reference:'paymentButton',
											handler : 'onPaymentRecordClick',
											itemId:'paymentButtonItem',
											hidden:true
										}, {
											xtype : 'button',
											iconCls:'nu-files',
											text : '上牌资料',
											reference:'licenseButton',
											handler : 'onLicensePlateClick',
											itemId:'licenseButtonItem',
											hidden:true
										}, {
											xtype : 'button',
											iconCls:'nu-files',
											text : '六件套',
											reference:'sixPieceButton',
											handler : 'onSixPieceSuitClick',
											itemId:'sixPieceButtonItem',
											hidden:true
										}, {
											xtype : 'button',
											iconCls:'nu-chargeback',
											text : '退单',
											reference:'backButton',
											handler : 'onBackOrderClick',
											itemId:'backButtonItem',
											hidden:true
										}, {
											xtype : 'tbfill'
										}/*, {
											xtype : 'button',
											text : '保存',
											reference:'saveOrderButton',
											handler : 'onSalesOrderSave'
										}, {
											xtype : 'button',
											reference:'startWorkflowButton',
											text : '启动流程',
											handler : 'onStartWorkflowClick',
											hidden:true
										}*/ ]
									}],
									
								} ],
								buttons:[{
											xtype : 'tbfill'
										}, 
										{
											xtype : 'button',
											iconCls:'nu-save',
											text : '保存',
											reference:'saveOrderButton',
											handler : 'onSalesOrderSave'
										}, {
											xtype : 'button',
											iconCls:'nu-go',
											text : '启动流程',
											reference:'startWorkflowButton',
											handler : 'onStartWorkflowClick',
											hidden:true
										},
										{
											xtype : 'tbfill'
										},
							        ]
				});