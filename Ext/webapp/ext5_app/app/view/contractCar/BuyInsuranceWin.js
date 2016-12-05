Ext.define('Evcorp.view.contractCar.BuyInsuranceWin', {
	extend : 'Ext.window.Window',
	alias : 'widget.BuyInsuranceWin',
	requires : [ 
	        'Evcorp.view.contractCar.BuyInsuranceWinViewController',
			'Evcorp.view.contractCar.BuyInsuranceWinViewModel',
			'Ext.grid.Panel', 'Ext.tab.Panel',
			'Ext.grid.column.Column', 'Ext.grid.View',
			'Ext.toolbar.Toolbar', 'Ext.button.Button',
			'Ext.toolbar.Fill', 'Ext.form.Panel',
			'Ext.form.field.ComboBox', 'Ext.form.DateField' 
			],
	viewModel : {
		type : 'BuyInsuranceWin'
	},
	controller : 'BuyInsuranceWin',
	referenceHolder: true,
//	itemId:'roleManager',	
	title : '购买商业保险',
	height : 600,
	width : 1000,
	closeAction : 'destory',
	listeners:{
		show:'initWindow'
	},
	layout: {
		type: 'vbox',
		align: 'stretch',
	},
	items: [{
		xtype: 'orderlistdetails',
		layout: 'auto',
		flex: 1,
		width: '100%',
		autoScroll: true,

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
				plugins:[
	                Ext.create('Ext.grid.plugin.CellEditing',{
	                	clicksToEdit:1
	                })
	            ],
				columns : [ {
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
				},{
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
					editor:{
						xtype:'numberfield',
						allowBlank: false,
						name:'initMileage'
					}
				}, {
					text : '交强险保险公司',
					dataIndex : 'insuranceCompany',
					align : 'center',
					renderer:'insuranceCompanyEditor'
				}, {
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
					renderer:function(value){ 
                    	if(value==null){
                    		return "";
                    	}else{
                    		return	Ext.Date.format(new Date(value), 'Y-m-d')
                    	}
                    }
				}, {
					text : '商业险保险公司',
					dataIndex : 'commercialInsuranceCompany',
					align : 'center',
					editor : {
						xtype : 'combobox',
						valueField : 'code',
						displayField : 'nameCn',
						readOnly: true,
						editable : false,
						bind : {
							store : '{insuranceCompanyStore}'
						}
					},
					renderer:'insuranceCompanyEditor'
				}, {
					text : '商业险保单ID',
					dataIndex : 'commercialInsuranceId',
					align : 'center',
					hidden:true
				}, {
					text : '商业险保险年份',
					dataIndex : 'commercialInsuranceYear',
					align : 'center',
					editor : {
						xtype : 'combobox',
						valueField : 'code',
						displayField : 'nameCn',
						readOnly: true,
						editable : false,
						bind : {
							store : '{contractInsuranceYearStore}'
						}
					},
				}, {
					text : '商业险保单号',
					dataIndex : 'commercialInsuranceNo',
					align : 'center',
					editor:{
                		xtype:'textfield',
                		readOnly: true,
						editable : false,
                		name:'commercialInsuranceNo'
                	}
				}, {
					text : '商业险起始日期',
					dataIndex : 'commercialInsuranceStartDate',
					align : 'center',
					editor:{
						xtype: 'datefield',
						format : 'Y-m-d',
						readOnly: true,
						editable : false,
						allowBlank: false,
						name:'commercialInsuranceStartDate'
					},
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
					editor:{
						xtype: 'datefield',
						format : 'Y-m-d',
						readOnly: true,
						editable : false,
						allowBlank: false,
						name:'commercialInsuranceEndDate'
					},
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
					align : 'center'
				},
				],
				tbar : [ {
					xtype : 'button',
					text : '保存',
					iconCls : 'common-icon-save',
					listeners : {
						click : 'onSaveContractCarOrderDetailClick'
					}
				},{
					xtype : 'button',
					text : '购买车辆商业保险',
					iconCls : 'common-icon-car',
					listeners : {
						click : 'onBuycommercialInsuranceClick'
					}
				}],
			},
			]
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
	}]


		

});