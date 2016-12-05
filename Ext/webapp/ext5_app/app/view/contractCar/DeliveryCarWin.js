Ext.define('Evcorp.view.contractCar.DeliveryCarWin', {
	extend : 'Ext.window.Window',
	alias : 'widget.DeliveryCarWin',
	requires : [ 
	        'Evcorp.view.contractCar.DeliveryCarWinViewController',
			'Evcorp.view.contractCar.DeliveryCarWinViewModel',
			'Ext.grid.Panel', 'Ext.tab.Panel',
			'Ext.grid.column.Column', 'Ext.grid.View',
			'Ext.toolbar.Toolbar', 'Ext.button.Button',
			'Ext.toolbar.Fill', 'Ext.form.Panel',
			'Ext.form.field.ComboBox', 'Ext.form.DateField' 
			],
	viewModel : {
		type : 'DeliveryCarWin'
	},
	controller : 'DeliveryCarWin',
	referenceHolder: true,
//	itemId:'roleManager',	
	title : '交车',
	height : 600,
	width : 1000,
	closeAction : 'destory',
	layout: {
		type: 'vbox',
		align: 'stretch',
	},
	listeners:{
		show:'initWindow'
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
					text : '初始公里程数',
					dataIndex : 'initMileage',
					align : 'center',
					regex : /^[0-9]+(\.[0-9]{2})?$/,
					editor:{
						xtype:'numberfield',
						allowBlank: false,
						name:'initMileage'
					}
				}, {
					text : '保险公司',
					dataIndex : 'insuranceCompany',
					align : 'center',
					renderer:'insuranceCompanyEditor'
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
					text : '商业险起始日期',
					dataIndex : 'commercialInsuranceStartDate',
					align : 'center',
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