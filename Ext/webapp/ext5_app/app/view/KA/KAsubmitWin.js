Ext
		.define(
				'Evcorp.view.KA.KAsubmitWin',
				{
					extend : 'Ext.window.Window',
					alias : 'widget.KAsubmitWin',
					requires : [
							'Evcorp.view.KA.KAsubmitWinViewController',
							'Evcorp.view.KA.KAsubmitWinViewModel',
							'Ext.grid.Panel', 'Ext.tab.Panel',
							'Ext.grid.column.Column', 'Ext.grid.View',
							'Ext.toolbar.Toolbar', 'Ext.button.Button',
							'Ext.toolbar.Fill', 'Ext.form.Panel',
							'Ext.form.field.ComboBox', 'Ext.form.DateField'],
					viewModel : {
						type : 'KAsubmitWin'
					},
					controller : 'KAsubmitWin',
					modal : true,
					closable : true,
					title : '大客户－二网订单列表修改',
					layout : {
						type : 'vbox',
						align : 'stretch'
					},
					autoScroll : true,
					heigth : '80%',
					items : [ {
						xtype : 'tabpanel',
						flex : 1,
						autoScroll : true,
						title : '',
						items : [
								{
									xtype : 'form',
									api : {
										submit : 'contractCarInfoContro.saveContractCarInfo'
									},
									autoScroll : true,
									bodyPadding : '10',
									border : false,
									reference : 'contractCarInfoForm',
									flex : 1,
									title : '车辆信息',
									items : [
											{
												xtype : 'fieldset',
												title : '车辆信息',
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
																						itemId:'carInfoItemId',
																						bind : '{conCar.id}'
																					},
																					{
																						xtype : 'textfield',
																						fieldLabel : 'carInfoCode',
																						hidden : true,
																						name : 'carInfoCode',
																						bind : '{conCar.carInfoCode}'
																					},
																					{
																						xtype : 'textfield',
																						fieldLabel : '产品',
																						readOnly : true,
																						id : 'contracCarWinProductName',
																						allowBlank : false,
																						labelWidth : 60,
																						width : 180,
																						name : 'contractCarName',
																						bind : '{conCar.contractCarName}'
																					},
																					{
																						xtype : 'button',
																						width : 50,
																						text : '查找',
																						handler : 'queryCarList'
																					} ]
																		},
																		{
																			xtype : 'textfield',
																			fieldLabel : '品牌',
																			id : 'contracCarWinBrandName',
																			allowBlank : false,
																			margin : '5 0',
																			labelWidth : 60,
																			width : 180,
																			readOnly : true,
																			name : 'carBrandName',
																			bind : '{conCar.carBrandName}'
																		},
																		{
																			xtype : 'textfield',
																			fieldLabel : '车系',
																			id : 'contracCarWinSeriesName',
																			allowBlank : false,
																			labelWidth : 60,
																			width : 180,
																			readOnly : true,
																			name : 'carSeriesName',
																			bind : '{conCar.carSeriesName}'
																		},
																		{
																			xtype : 'textfield',
																			fieldLabel : '产品代码',
																			id : 'contracCarWinProductCode',
																			hidden : true,
																			readOnly : true,
																			name : 'contractCarCode',
																			bind : '{conCar.contractCarCode}'
																		},
																		{
																			xtype : 'textfield',
																			fieldLabel : '品牌代码',
																			id : 'contracCarWinBrandCode',
																			name : 'carBrandCode',
																			hidden : true,
																			allowBlank : false,
																			bind : '{conCar.carBrandCode}'
																		},
																		{
																			xtype : 'textfield',
																			fieldLabel : '车系代码',
																			id : 'contracCarWinSeriesCode',
																			name : 'carSeriesCode',
																			hidden : true,
																			allowBlank : false,
																			bind : '{conCar.carSeriesCode}'
																		},
																		{
																			xtype : 'textfield',
																			fieldLabel : '车型代码',
																			name : 'carModelCode',
																			id : 'contracCarWinModelCode',
																			hidden : true,
																			allowBlank : false,
																			bind : '{conCar.carModelCode}'
																		},
																		{
																			xtype : 'textfield',
																			fieldLabel : '保险公司',
																			name : 'insuranceCompany',
																			id : 'insuranceCompany',
																			hidden : true,
																			bind : '{conCar.insuranceCompany}'
																		},
//																		{
//																			xtype : 'textfield',
//																			fieldLabel : '状态',
//																			name : 'status',
//																			id : 'status',
//																			hidden : true,
//																			bind : '{conCar.status}'
//																		},
																		{
																			xtype : 'datefield',
																			fieldLabel : '交强险开始时间',
																			name : 'strongInsuranceStartDate',
																			format : 'Y-m-d',
																			hidden : true,
																			bind : '{conCar.strongInsuranceStartDate}'
																		},
																		{
																			xtype : 'datefield',
																			fieldLabel : '交强险结束时间',
																			name : 'strongInsuranceEndDate',
																			format : 'Y-m-d',
																			hidden : true,
																			bind : '{conCar.strongInsuranceEndDate}'
																		},
																		{
																			xtype : 'combobox',
																			fieldLabel : '合作商',
																			valueField : 'code',
																			displayField : 'nameCn',
																			name:'businessPartner',
																			labelWidth : 60,
																			width : 180,
																			bind : {
																				store : '{businessPartnerType}',
																				value:'{conCar.businessPartner}'
																			}
																		},
																		
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
																			fieldLabel : '车架号',
																			allowBlank : false,
																			labelWidth : 80,
																			width : 200,
																			name : 'carFrameNo',
																			itemId:'carFrameNoItemId',
																			bind : '{conCar.carFrameNo}',
																			validator:function(value){
																				var carInfoText=this.up('panel').down('#carInfoItemId');
																				var flag=true;
																				var type='create';
																				if(carInfoText.getValue()>0){
																					type='update';
																				};
																				
																				  Ext.Ajax.request({
																					  url:'carInfo/validCarFrameNo',
																					  params:{
																						  'carInfoId':carInfoText.getValue(),
																						  'carFrameNo':value,
																						  'type':type
																					  },
																			          method: 'GET',
																			          async:false,
																			          success: function (response, options) {
																			        	  if(response.responseText=='fail'){
																			          		flag= '车架号已存在!';
																			          	}else{
																			          		flag= true;
																			          	}
																			          }
																				  })
																					  return flag;
																			}
																		},
																		{
																			xtype : 'textfield',
																			fieldLabel : '发动机号',
																			labelWidth : 80,
																			width : 200,
																			name : 'carEngineNo',
																			bind : '{conCar.carEngineNo}'
																		},
																		{
																			xtype : 'textfield',
																			fieldLabel : '车型',
																			id : 'contracCarWinModelName',
																			allowBlank : false,
																			labelWidth : 80,
																			width : 200,
																			readOnly : true,
																			name : 'carModelName',
																			bind : '{conCar.carModelName}'
																		} ]
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
																			fieldLabel : '车牌号',
																			labelWidth : 80,
																			width : 200,
																			name : 'carLicensePlate',
																			bind : '{conCar.carLicensePlate}'
																		},
																		{
																			xtype : 'textfield',
																			fieldLabel : '行驶证号',
																			labelWidth : 80,
																			width : 200,
																			name : 'carDriveLicenseNo',
																			bind : '{conCar.carDriveLicenseNo}'
																		},
																		{
																			xtype : 'textfield',
																			fieldLabel : '排量',
																			labelWidth : 80,
																			width : 200,
																			name : 'displacement',
																			bind : '{conCar.displacement}'
																		} ]
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
																			fieldLabel : '合格证号',
																			labelWidth : 90,
																			width : 200,
																			name : 'certificate',
																			bind : '{conCar.certificate}'
																		},
																		{
																			xtype : 'combobox',
																			fieldLabel : '是否二手车',
																			valueField : 'code',
																			displayField : 'nameCn',
																			name:'isUsedCar',
																			labelWidth : 90,
																			width : 200,
																			bind : {
																				store : '{isUsedCarStore}',
																				value:'{conCar.isUsedCar}'
																			}
																		},
																		{
																			xtype : 'combobox',
																			fieldLabel : '状态',
																			name:'status',
																			valueField : 'code',
																			displayField : 'nameCn',
																			labelWidth : 90,
																			width : 200,
																			readOnly : true,
																			bind : {
																				store : '{carInfoStatus}',
																				value: '{conCar.status}'
																			}
																		} ]
															} ]
												} ]
											},
											{

												xtype : 'fieldset',
												title : '车辆使用情况',
												collapsible : true,
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
																		fieldLabel : '有线编号',
																		labelWidth : 80,
																		width : 200,
																		name : 'wiredNo',
																		bind : '{conCar.wiredNo}'
																	},
																	{
																		xtype : 'textfield',
																		fieldLabel : '无线编号',
																		labelWidth : 80,
																		width : 200,
																		name : 'wirelessNo',
																		bind : '{conCar.wirelessNo}'
																	} ]
														},
														{
															xtype : 'container',
															flex : 1,
															defaults : {
																width : 210
															},
															items : [
																	{
																		xtype: 'datefield',
																		fieldLabel : '安装日期',
																		name : 'installDate',
																		labelWidth : 80,
																		width : 200,
																		bind : '{conCar.installDate}',
																		format : 'Y-m-d'
																	},
																	{
																		xtype : 'textfield',
																		fieldLabel : '维护周期(年)',
																		labelWidth : 80,
																		width : 200,
																		name : 'mainTenancePeriod',
																		bind : '{conCar.mainTenancePeriod}'
																	} ]
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
																		fieldLabel : '初始行驶里程数',
																		labelWidth : 95,
																		width : 200,
																		name : 'initMileage',
																		bind : '{conCar.initMileage}'
																	},
																	{
																		xtype : 'textfield',
																		fieldLabel : '当前行驶里程数',
																		labelWidth : 95,
																		width : 200,
																		name : 'currentMileage',
																		bind : '{conCar.currentMileage}'
																	} ]
														} ]

											},
											{
												xtype : 'fieldset',
												title : '保险信息',
												disabled : true,
												collapsible : true,
												itemId : 'insuranceFieldset',
												layout : {
													type : 'vbox',
													align : 'stretch'
												},
												items : [
														{
															xtype : 'toolbar',
															dock : 'bottom',
															items : [
																	{
																		xtype : 'tbfill'
																	},
																	{
																		xtype : 'button',
																		text : '新建',
																		iconCls : 'common-icon-add',
																		handler : 'onInsuranceAdd'
																	},
																	{
																		xtype : 'button',
																		text : '修改',
																		iconCls : 'common-icon-update',
																		handler : 'updateInsurance'
																	},
																	{
																		xtype : 'button',
																		text : '删除',
																		iconCls : 'common-icon-del',
																		handler : 'delInsurance'
																	}  ]
														},
														{
															xtype : 'gridpanel',
															flex : 1,
															reference : 'insuranceGridRef',
															itemId : 'conCarInsuranceGrid',
															autoScroll : true,
															height : 120,
															bind : '{ContractInsuranceGridStore}',
															viewConfig : {
																enableTextSelection : true
															},
															columns : [
																	{
																		xtype : 'gridcolumn',
																		dataIndex : 'insuranceNo',
																		name:'insuranceNo',
																		hidden : false,
																		text : '保单号',
																		align : 'center'
																	}
																	,
																	{
																		xtype : 'gridcolumn',
																		dataIndex : 'insuranceCompany',
																		name:'insuranceCompany',
																		hidden : false,
																		text : '保险公司',
																		align : 'center',
																		renderer : 'insuranceCompanyEditor'
																	},
																	{
																		xtype : 'gridcolumn',
																		dataIndex : 'insuranceYear',
																		name:'insuranceYear',
																		hidden : false,
																		text : '保险年份',
																		align : 'center'
																	},
																	{
																		xtype : 'gridcolumn',
																		dataIndex : 'type',
																		name:'type',
																		hidden : false,
																		align : 'center',
																		text : '类型',
																		renderer : 'ContractInsuranceTypeEditor'
																	},
																	{
																		text : '开始日期',
																		dataIndex:'startDate',
																		name:'startDate',
																		align : 'center',
																		renderer:function(value){ 
													                    	if(value==null){
													                    		return "";
													                    	}else{
													                    		return	Ext.Date.format(new Date(value), 'Y-m-d')
													                    	}
													                    }
																	}, {
																		text : '结束日期',
																		dataIndex:'endDate',
																		name:'endDate',
																		align : 'center',
																		renderer:function(value){ 
													                    	if(value==null){
													                    		return "";
													                    	}else{
													                    		return	Ext.Date.format(new Date(value), 'Y-m-d')
													                    	}
													                    }
																	}, {
																		xtype : 'booleancolumn',
																		dataIndex : 'isValid',
																		text : '是否生效',
																		trueText : '是',
																		falseText : '否'
																	}
																	]
														} ]
											},
											{
												xtype : 'fieldset',
												title : '附件信息',
												itemId : 'attachmentFieldset',
												height : 170,
												disabled : true,
												collapsible : true,
												layout : {
													type : 'vbox',
													align : 'stretch'
												},
												items : [ {
													xtype : 'uploadAttachmentPanel',
													itemId : 'insuranceAttachmentPanelId',
													flex : 1,
													layout : {
														type : 'vbox',
														align : 'stretch'
													},
													height : 180
												} ]

											} ],
									dockedItems : [ {
										xtype : 'toolbar',
										flex : 1,
										dock : 'top',
										items : [ {
											xtype : 'tbfill'
										}, {
											xtype : 'button',
											text : '保存',
											handler : 'onContraCarInfoSave'
										} ]
									} ]
								},
								{
									xtype : 'form',
									autoScroll : true,
									title : '合同信息',
									itemId:'contractPanelItemId',
									items : [
											{
												xtype : 'fieldset',
												title : '基本信息',
												collapsible : true,
												layout : {
													type : 'vbox',
													align : 'stretch'
												},
												items : [
														{
															xtype : 'container',
															layout : 'hbox',
															items : [
																	{
																		xtype : 'container',
																		flex : 1,
																		defaults : {
																			width : 210
																		},
																		items : [ {
																			xtype : 'textfield',
																			fieldLabel : '合同编号',
																			labelWidth : 80,
																			width : 200,
																			readOnly : true,
																			name : 'olPreSaleOrderNo'
																		},
																		 {
																			xtype : 'textfield',
																			fieldLabel : '协议编号',
																			labelWidth : 80,
																			width : 200,
																			hidden : true,
																			reference : 'suppleAgreementIdRef',
																			itemId : 'suppleAgreementItemId'
																		}]
																	},
																	{
																		xtype : 'container',
																		flex : 1,
																		defaults : {
																			width : 210
																		},
																		items : [ {
																			xtype : 'datefield',
																			fieldLabel : '签订日期',
																			labelWidth : 80,
																			width : 200,
																			format : 'Y-m-d',
																			readOnly : true,
																			name:'signDate'
																		} ]
																	},
																	{
																		xtype : 'container',
																		flex : 1,
																		defaults : {
																			width : 210
																		},
																		items : [ {
																			xtype : 'datefield',
																			fieldLabel : '开始日期',
																			labelWidth : 95,
																			width : 200,
																			format : 'Y-m-d',
																			readOnly : true,
																			name:'startDate'
																		} ]
																	},
																	{
																		xtype : 'container',
																		flex : 1,
																		defaults : {
																			width : 210
																		},
																		items : [ {
																			xtype : 'datefield',
																			fieldLabel : '结束日期',
																			labelWidth : 95,
																			width : 200,
																			format : 'Y-m-d',
																			readOnly : true,
																			name:'endDate'
																		} ]
																	} ]
														},
														{
															xtype : 'container',
															layout : 'hbox',
															items : [ {
																xtype : 'container',
																flex : 1,
																defaults : {
																	width : 210
																},
																items : [ {
																	xtype : 'textfield',
																	fieldLabel : '产品名称',
																	labelWidth : 80,
																	width : 440,
																	readOnly : true,
																	name:'carProductName'
																} ]
															} ]
														},
														{
															xtype : 'container',
															layout : 'hbox',
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
																					fieldLabel : '期限(月)',
																					labelWidth : 80,
																					width : 200,
																					readOnly : true,
																					name:'leaseTerm'
																				},
																				{
																					xtype : 'textfield',
																					fieldLabel : '保险费用及充电桩使用服务费(元)',
																					labelWidth : 80,
																					width : 200,
																					readOnly : true,
																					name:'monthlyManagementFee'
																				} ]
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
																					fieldLabel : '保证金(元)',
																					labelWidth : 80,
																					width : 200,
																					readOnly : true,
																					name:'deposit'
																				},
																				{
																					xtype : 'textfield',
																					fieldLabel : '期满购买价格(元)',
																					labelWidth : 80,
																					width : 200,
																					readOnly : true,
																					name:'expirePrice'
																				} ]
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
																					fieldLabel : '月租费(元)',
																					labelWidth : 80,
																					width : 200,
																					readOnly : true,
																					name:'monthlyRent'
																				},
																				{
																					xtype : 'textfield',
																					fieldLabel : '超出里程费用(元／公里)',
																					labelWidth : 80,
																					width : 200,
																					readOnly : true,
																					name:'outOfRangFee'
																				} ]
																	},
																	{
																		xtype : 'container',
																		flex : 1,
																		defaults : {
																			width : 210
																		},
																		items : [ {
																			xtype : 'textfield',
																			fieldLabel : '提车服务费(元)',
																			labelWidth : 95,
																			width : 200,
																			readOnly : true,
																			name:'liftTheFare'
																		} ]
																	} ]
														} ]
											},
											{
												xtype : 'fieldset',
												title : '客户信息',
												collapsible : true,
												layout : {
													type : 'vbox',
													align : 'stretch'
												},
												items : [
														{
															xtype : 'container',
															layout : 'hbox',
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
																					fieldLabel : '姓名',
																					labelWidth : 80,
																					width : 200,
																					readOnly : true,
																					name : 'customerName'
																				},
																				{
																					xtype : 'textfield',
																					fieldLabel : '性别',
																					labelWidth : 80,
																					width : 200,
																					readOnly : true,
																					name : 'customerSex'
																				},
																				{
																					xtype : 'textfield',
																					fieldLabel : '客户类型',
																					labelWidth : 80,
																					readOnly : true,
																					width : 200
																				} ]
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
																					fieldLabel : '手机号码',
																					labelWidth : 80,
																					width : 200,
																					readOnly : true,
																					name:'customerPhone'
																				},
																				{
																					xtype : 'textfield',
																					fieldLabel : '身份证号',
																					labelWidth : 80,
																					width : 200,
																					readOnly : true,
																					name:'customerCid'
																				},
																				{
																					xtype : 'textfield',
																					fieldLabel : '邮箱',
																					labelWidth : 80,
																					width : 200,
																					readOnly : true,
																					name:'email'
																				} ]
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
																					fieldLabel : '婚姻状况',
																					labelWidth : 95,
																					width : 200,
																					readOnly : true,
																					name:'maritalStatus'
																				},
																				{
																					xtype : 'textfield',
																					fieldLabel : '学历',
																					labelWidth : 95,
																					width : 200,
																					readOnly : true,
																					name:'education'
																				},
																				{
																					xtype : 'textfield',
																					fieldLabel : '联系人',
																					labelWidth : 95,
																					width : 200,
																					readOnly : true,
																					name:'otherContacts'
																				} ]
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
																					fieldLabel : '住宅电话',
																					labelWidth : 95,
																					width : 200,
																					readOnly : true,
																					name:'residentialPhone'
																				},
																				{
																					xtype : 'textfield',
																					fieldLabel : '家庭人数',
																					labelWidth : 95,
																					width : 200,
																					readOnly : true,
																					name:'familyNumber'
																				},
																				{
																					xtype : 'textfield',
																					fieldLabel : '住宅邮编',
																					labelWidth : 95,
																					width : 200,
																					readOnly : true,
																					name:'residentialZipCode'
																				} ]
																	} ]
														},
														{
															xtype : 'container',
															layout : 'hbox',
															items : [ {
																xtype : 'textfield',
																fieldLabel : '地址',
																labelWidth : 80,
																width : 440,
																readOnly : true,
																name:'residentialAddress'
															} ]
														} ]

											},
											{
												xtype : 'fieldset',
												title : '订单信息',
												collapsible : true,
												layout : {
													type : 'hbox',
													align : 'stretch'
												},
												items : [ {
													xtype : 'container',
													flex : 1,
													defaults : {
														width : 210
													},
													items : [ {
														xtype : 'textfield',
														fieldLabel : '订单编号',
														labelWidth : 80,
														width : 200,
														readOnly : true,
														name : 'orderNo'
													} ]
												}, {
													xtype : 'container',
													flex : 1,
													defaults : {
														width : 210
													},
													items : [ {
														xtype : 'datefield',
														fieldLabel : '日期',
														labelWidth : 80,
														width : 200,
														format : 'Y-m-d',
														readOnly : true,
														name : 'orderCreateDate'
													} ]
												} ]
											},
											{
												xtype : 'fieldset',
												title : '还款信息',
												collapsible : true,
												layout : {
													type : 'vbox',
													align : 'stretch'
												},
												items : [ {
													xtype : 'container',
													layout : 'hbox',
													items : [
															{
																xtype : 'container',
																flex : 1,
																defaults : {
																	width : 210
																},
																items : [ {
																	xtype : 'textfield',
																	fieldLabel : '户名',
																	labelWidth : 80,
																	width : 200,
																	readOnly : true,
																	name : 'bankAccountName'
																} ]
															},
															{
																xtype : 'container',
																flex : 1,
																defaults : {
																	width : 210
																},
																items : [ {
																	xtype : 'textfield',
																	fieldLabel : '帐号',
																	labelWidth : 80,
																	width : 200,
																	readOnly : true,
																	name:'bankAccountNo'
																} ]
															},
															{
																xtype : 'container',
																flex : 1,
																defaults : {
																	width : 210
																},
																items : [ {
																	xtype : 'textfield',
																	fieldLabel : '开户行',
																	labelWidth : 80,
																	width : 200,
																	readOnly : true,
																	name:'bankOpenPlace'
																} ]
															},
															{
																xtype : 'container',
																flex : 1,
																defaults : {
																	width : 210
																},
																items : [ {
																	xtype : 'button',
																	text : '查看还款计划',
																	width : 100,
																	handler:'queryRepaymentPlan'
																} ]
															} ]
												},
												{

													xtype : 'gridpanel',
													flex : 1,
													autoScroll : true,
													height : 120,
													itemId:'repaymentInfoGridItemId',
													bind:'{repaymentInfoStroe}',
													columns : [
															{
																xtype : 'gridcolumn',
																dataIndex : 'repaymentMonth',
																hidden : false,
																text : '还款月'
															},
															{
																xtype : 'gridcolumn',
																dataIndex : 'repaymentDay',
																hidden : false,
																text : '账单还款日'
															},
															{
																xtype : 'gridcolumn',
																dataIndex : 'repaymentAmount',
																hidden : false,
																text : '还款金额'
															},
															{
																xtype : 'gridcolumn',
																dataIndex : 'actualRepaymentDate',
																hidden : false,
																text : '实际还款日',
																width : 140,
									                        	 renderer:function(value){ 
									                              	if(value==null){
									                              		return "";
									                              	}else{
									                              		return	Ext.Date.format(new Date(value), 'Y-m-d')
									                              	}
									                              }
																
															},
															{
																xtype : 'gridcolumn',
																dataIndex : 'actualRepaymentAmount',
																hidden : false,
																text : '实际还款金额',
																width : 140,
																
															} ]
												
												}]
											},
											{
												xtype : 'fieldset',
												title : '附件信息',
												itemId : 'contractAttachmentFieldset',
												height : 170,
												disabled : true,
												collapsible : true,
												layout : {
													type : 'vbox',
													align : 'stretch'
												},
												items : [ {
													xtype : 'uploadAttachmentPanel',
													itemId : 'contractAttachmentPanelId',
													disabled : true,
													flex : 1,
													autoScroll : true,
													height : 180
												} ]

											}]
								} ]
					} ]
				});