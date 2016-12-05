Ext.define('Evcorp.view.contractCar.TransfersWin',
		{
			extend : 'Ext.window.Window',
			alias : 'widget.TransfersWin',
			requires : [ 'Evcorp.view.contractCar.TransfersWinViewController',
					'Evcorp.view.contractCar.TransfersWinViewModel',
					'Ext.grid.Panel', 'Ext.tab.Panel',
					'Ext.grid.column.Column', 'Ext.grid.View',
					'Ext.toolbar.Toolbar', 'Ext.button.Button',
					'Ext.toolbar.Fill', 'Ext.form.Panel',
					'Ext.form.field.ComboBox', 'Ext.form.DateField' ],
			viewModel : {
				type : 'TransfersWin'
			},
			controller : 'TransfersWin',
			referenceHolder : true,
			// itemId:'roleManager',
			title : '调拨阶段',
			height : 600,
			width : 1000,
			closeAction : 'destory',
			layout : {
				type : 'vbox',
				align : 'stretch',
			},
			listeners:{
				show:'initWindow'
			},
			items : [ {
				xtype : 'orderlistdetails',
				layout : 'auto',
				flex : 1,
				width : '100%',
				autoScroll : true,
			}, {
				flex : 1,
				autoScroll : true,
				xtype : 'panel',
				layout : 'auto',
				buttonAlign : 'center',
				items : [{
					xtype : 'panel',
					title : '车辆及保险信息',
					layout : {
						type : 'vbox',
						align : 'stretch'
					},
					items : [ {
						xtype : 'gridpanel',
						reference : 'contractCarOrderDetailGrid',
						itemId:'contractCarOrderDetailItem',
						bind : '{contractCarOrderDetailListStore}',
						border : false,
						viewConfig : {
							emptyText : '暂无车辆及保险信息！',
							enableTextSelection : true
						},
//						selModel: {
//							selType:'checkboxmodel',
//							mode : 'SIMPLE'
//						},
						plugins:[
			                Ext.create('Ext.grid.plugin.CellEditing',{
			                	clicksToEdit:1
			                })
			            ],
						// height : 300,
						columns : [ /*{
							xtype: 'actioncolumn',
			                width: 50,
			                sortable: false,
			                menuDisabled: true,
			                text : '操作',
			                align : "center",
			                items: [{
			                    icon: 'images/upload.png',
			                    tooltip: '上传车辆及保险信息附件',
			                    handler: 'onUploadCarBXClick'
			                }]
						},*/{
							dataIndex : 'id',
							hidden : true,
						},{
							dataIndex : 'contractCarOrderId',
							hidden : true,
						},{
							dataIndex : 'olPreSaleOrderNo',
							hidden : true,
						},{
							dataIndex : 'carProductDisplayName',
							hidden : true,
						},{
							text : '名称',
							dataIndex : 'carProductName',
						},{
							text : '补充协议编号',
							width: 150,
							dataIndex : 'suppleAgreementNo',
							align : 'center'
						},{
							text : '车辆资产ID',
							width: 180,
							dataIndex : 'carInfoId',
							align : 'center',
							hidden : true,
						},{
							text : '车辆资产编号',
							width: 180,
							dataIndex : 'carInfoCode',
							align : 'center'
						}, {
							text : '车架号',
							dataIndex : 'carFrameNo',
							align : 'center',
						}, {
							text : '发动机号',
							dataIndex : 'carEngineNo',
							align : 'center'
						}, {
							text : '车牌号码',
							dataIndex : 'carLicensePlate',
							align : 'center'
						}, {
							text : '行驶证号',
							dataIndex : 'carDriveLicenseNo',
							align : 'center'
						}, {
							text : '初始公里程数（KM）',
							dataIndex : 'initMileage',
							align : 'center',
							regex : /^[0-9]+(\.[0-9]{2})?$/,
							hidden:true
						}, {
							text : '交强险保险公司',
							dataIndex : 'insuranceCompany',
							align : 'center',
							editor : {
								xtype : 'combobox',
								valueField : 'code',
								displayField : 'nameCn',
								readOnly: true,
								editable : false,
								allowBlank : false,
								bind : {
									store : '{insuranceCompanyStore}'
								}
							},
							renderer:'insuranceCompanyEditor'
						},{
							text : '交强险保单ID',
							dataIndex : 'strongInsuranceId',
							align : 'center',
							hidden:true
						}, {
							text : '交强险保单号',
							dataIndex : 'strongInsuranceNo',
							align : 'center'
						}, {
							text : '交强险起始日期',
							dataIndex : 'strongInsuranceStartDate',
							align : 'center',
							editor:{
								xtype: 'datefield',
								format : 'Y-m-d',
								allowBlank: false,
								readOnly: true,
								editable : false,
								name:'strongInsuranceStartDate'
							},
							renderer:function(value){ 
		                    	if(value==null){
		                    		return "";
		                    	}else{
		                    		return	Ext.Date.format(new Date(value), 'Y-m-d')
		                    	}
		                    }
						}, {
							text : '交强险终止日期',
							dataIndex : 'strongInsuranceEndDate',
							align : 'center',
							editor:{
								xtype: 'datefield',
								format : 'Y-m-d',
								allowBlank: false,
								readOnly: true,
								editable : false,
								name:'strongInsuranceEndDate'
							},
							renderer:function(value){ 
		                    	if(value==null){
		                    		return "";
		                    	}else{
		                    		return	Ext.Date.format(new Date(value), 'Y-m-d')
		                    	}
		                    }
						}, {
							text : '商业险保单ID',
							dataIndex : 'commercialInsuranceId',
							align : 'center',
							hidden:true
						}, {
							text : '商业险保单号',
							dataIndex : 'commercialInsuranceNo',
							align : 'center',
							hidden:true
						}, {
							text : '商业险起始日期',
							dataIndex : 'commercialInsuranceStartDate',
							align : 'center',
							hidden:true,
							renderer:function(value){ 
		                    	if(value==null){
		                    		return "";
		                    	}else{
		                    		return	Ext.Date.format(new Date(value), 'Y-m-d')
		                    	}
		                    }
						}, {
							text : '商业险终止日期',
							dataIndex : 'commercialInsuranceEndDate',
							align : 'center',
							hidden:true,
							renderer:function(value){ 
		                    	if(value==null){
		                    		return "";
		                    	}else{
		                    		return	Ext.Date.format(new Date(value), 'Y-m-d')
		                    	}
		                    }
						}, {
							text : 'GPS设备编号',
							dataIndex : 'gpsDeviceNo',
							align : 'center',
							hidden:true
						},

						],
						tbar : [ {
							xtype : 'button',
							text : '新建',
							iconCls : 'common-icon-serach',
							listeners : {
								click : 'onAddContractCarOrderDetailClick'
							}
						}, {
							xtype : 'button',
							text : '保存',
							iconCls : 'common-icon-save',
							listeners : {
								click : 'onSaveContractCarOrderDetailClick'
							}
						
						}, {
							xtype : 'button',
							text : '配车',
							iconCls : 'common-icon-save',
							listeners : {
								click : 'onAllocationCarClick'
							}
						}, {
							xtype : 'button',
							text : '取消配车',
							iconCls : 'common-icon-save',
							listeners : {
								click : 'onCancelAllocationCarClick'
							}
						} ],
					}/*, {
			        	xtype:'uploadAttachmentPanel',
			        	reference:'uploadCarBXAttachmentPanel',
			        	itemId:'uploadCarBXAttachmentPanelItemId',
					}*/ ]
				},{
		            xtype: 'form',
		            width:'100%',
		            reference:'commentForm',
		            autoScroll:true,
		            buttonAlign:'center',
		            items: [{
		                xtype: "textarea",
		                margin:'15 auto',
		                padding:'15',
		                fieldLabel: "备注",
		                name: "comment",
		                labelSepartor: "：",
		                labelWidth: 80,
		                width: '90%',
		            }],
				}],
				buttons: [{
	                xtype : "button",
	                text : "取消",
	                margin : "0 50 0 0",
	                handler : function() {
	                    this.up("window").close();
	                },
	            }, 
	            {
	                xtype : "button",
	                cls:'btn-success',
	                text : "提交",
	                margin : "0 50 0 0",
	                listeners:{
	              	  click:'onSubmitClick',
	                },
	            }]
			} ]

		});