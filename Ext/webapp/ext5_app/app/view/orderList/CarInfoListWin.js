Ext
		.define(
				'Evcorp.view.orderList.CarInfoListWin',
				{
					extend : 'Ext.window.Window',
					alias : 'widget.carInfolistwin',
					requires : [
							'Evcorp.view.orderList.CarInfoListWinViewController',
							'Evcorp.view.orderList.CarInfoListWinViewModel',
							'Ext.grid.Panel', 'Ext.tab.Panel',
							'Ext.grid.column.Column', 'Ext.grid.View',
							'Ext.toolbar.Toolbar', 'Ext.button.Button',
							'Ext.toolbar.Fill', 'Ext.form.Panel',
							'Ext.form.field.ComboBox', 'Ext.form.DateField' ],
					viewModel : {
						type : 'carInfolistwin'
					},
					controller : 'carInfolistwin',
					referenceHolder : true,
					itemId : 'CarInfoListWin',

					layout : {
						type : 'hbox',
						align : 'stretch'
					},
					autoScroll : true,
					modal : true,

					title : '合约车查询',
					height : 450,
					width : 1050,
					closeAction : 'destory',

					items : [
							{
								xtype : 'gridpanel',
								viewConfig : {
									enableTextSelection : true
								},
								reference : 'carInfoWinGrid',
								itemId : 'carInfoWinGridId',
								bind : '{carInfoGridWinStore}',
								flex : 1,
								selModel : {
									selType : 'checkboxmodel',
									mode : 'single'
								}, // 选择框
								columns : [
										{
											xtype : 'gridcolumn',
											dataIndex : 'id',
											hidden : true,
										},
										{
											xtype : 'gridcolumn',
											dataIndex : 'carInfoCode',
											text : '车辆资产编号'
										},
										{
											xtype : 'gridcolumn',
											dataIndex : 'carFrameNo',
											width : 140,
											hidden : false,
											text : '车架号（VIN）'
										},
										{
											xtype : 'gridcolumn',
											dataIndex : 'carLicensePlate',
											hidden : false,
											text : '车牌号'
										},
										{
											xtype : 'gridcolumn',
											dataIndex : 'carDriveLicenseNo',
											hidden : false,
											text : '行驶证号'
										},
										{
											xtype : 'gridcolumn',
											dataIndex : 'carEngineNo',
											hidden : false,
											text : '发动机号'
										},
										{
											xtype : 'gridcolumn',
											dataIndex : 'certificate',
											hidden : false,
											text : '合格证'
										},
										{
											xtype : 'gridcolumn',
											dataIndex : 'initMileage',
											hidden : false,
											text : '初始里程数'
										},
										{
											xtype : 'gridcolumn',
											dataIndex : 'insuranceCompany',
											hidden : false,
											text : '交强险保险公司',
//											editor : {
//												xtype : 'combobox',
//												valueField : 'code',
//												displayField : 'nameCn',
//												// editable : false,
//												allowBlank : false,
//												bind : {
//													store : '{insuranceCompanyStore}'
//												}
//											},
											renderer:'insuranceCompanyEditor'
										},{
											text : '交强险保单ID',
											dataIndex : 'strongInsuranceId',
											align : 'center',
											hidden : true,
										},{
											text : '交强险保单号',
											dataIndex : 'strongInsuranceNo',
											align : 'center'
										},
										{
											xtype : 'gridcolumn',
											dataIndex : 'strongInsuranceStartDate',
											hidden : false,
											width : 140,
											text : '交强险起始日期',
											renderer : function(value) {
												if (value == null) {
													return "";
												} else {
													return Ext.Date.format(
															new Date(value),
															'Y-m-d')
												}
											}
										},
										{
											xtype : 'gridcolumn',
											dataIndex : 'strongInsuranceEndDate',
											hidden : false,
											width : 140,
											text : '交强险终止日期',
											renderer : function(value) {
												if (value == null) {
													return "";
												} else {
													return Ext.Date.format(
															new Date(value),
															'Y-m-d')
												}
											}
										},
										{
											xtype : 'gridcolumn',
											dataIndex : 'comInsuranceCompany',
											hidden : false,
											text : '商业保险公司',
//											editor : {
//												xtype : 'combobox',
//												valueField : 'code',
//												displayField : 'nameCn',
//												// editable : false,
//												allowBlank : false,
//												bind : {
//													store : '{comInsuranceCompanyEditor}'
//												}
//											},
											renderer:'comInsuranceCompanyEditor'
										},
										{
											xtype : 'gridcolumn',
											dataIndex : 'comInsuranceYear',
											hidden : false,
											text : '商业保险年份',
										}, {
											text : '商业险保单ID',
											dataIndex : 'commercialInsuranceId',
											align : 'center',
											hidden : true,
										}, {
											text : '商业险保单号',
											dataIndex : 'commercialInsuranceNo',
											align : 'center'
										},
										{
											xtype : 'gridcolumn',
											dataIndex : 'commercialInsuranceStartDate',
											hidden : false,
											width : 140,
											text : '商业险起始日期',
											renderer : function(value) {
												if (value == null) {
													return "";
												} else {
													return Ext.Date.format(
															new Date(value),
															'Y-m-d')
												}
											}
										},
										{
											xtype : 'gridcolumn',
											dataIndex : 'commercialInsuranceEndDate',
											hidden : false,
											width : 140,
											text : '商业险终止日期',
											renderer : function(value) {
												if (value == null) {
													return "";
												} else {
													return Ext.Date.format(
															new Date(value),
															'Y-m-d')
												}
											}
										}, {
											xtype : 'gridcolumn',
											dataIndex : 'gpsDeviceNo',
											hidden : false,
											text : 'GPS设备编号'
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
										xtype : 'textfield',
										reference : 'contractCarCodeRef',
										itemId : 'contractCarCodeItemId',
										name : 'contractCarCode',
										fieldLabel : '产品:',
										labelWidth : 80,
										width : 280,
										hidden : true,
									},
									{
										xtype : 'textfield',
										reference : 'vinRef',
										itemId : 'vinItemId',
										name : 'vin',
										fieldLabel : 'VIN:',
										labelWidth : 80,
										width : 280,
									},
									{
										xtype : 'button',
										text : '查询',
										handler: 'queryContractCarInfoList',
									},
									{
										xtype : 'tbfill'
									}, {
										xtype : 'button',
										itemId:'selectCarInfoId',
										text : '确定'
									}, ]
								}, {
									xtype : 'pagingtoolbar',
									dock : 'bottom',
									bind : {
										store : '{carInfoGridWinStore}'
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
							}]
				});