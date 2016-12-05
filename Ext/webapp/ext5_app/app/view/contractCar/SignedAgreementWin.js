Ext.define('Evcorp.view.contractCar.SignedAgreementWin', {
	extend : 'Ext.window.Window',
	alias : 'widget.SignedAgreementWin',
	requires : [ 
	        'Evcorp.view.contractCar.SignedAgreementWinViewController',
			'Evcorp.view.contractCar.SignedAgreementWinViewModel',
			'Ext.grid.Panel', 'Ext.tab.Panel',
			'Ext.grid.column.Column', 'Ext.grid.View',
			'Ext.toolbar.Toolbar', 'Ext.button.Button',
			'Ext.toolbar.Fill', 'Ext.form.Panel',
			'Ext.form.field.ComboBox', 'Ext.form.DateField' 
			],
	viewModel : {
		type : 'SignedAgreementWin'
	},
	controller : 'SignedAgreementWin',
	referenceHolder: true,
//	itemId:'roleManager',	
	title : '签订补充协议',
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
		xtype : 'panel',
		flex:1,
		title : '合同信息',
		autoScroll : true,
		buttonAlign:'center',
		border : false,
		tbar : [ 
		{
			xtype : 'button',
			text : '保存',
			iconCls : 'common-icon-save',
			listeners : {
				click : 'onSaveContractCarBCYXtClick'
			}
		
		},
		{
			xtype : 'button',
			text : '租赁合同附件',
			listeners : {
				click : 'onUploadContractAttachemetClick'
			}
		
		},
		{
			xtype : 'button',
			text : '租赁合同下载',
			iconCls : 'pdf',
			listeners : {
				click : 'onDownContractClick'
			}
		},
		{
			xtype : 'button',
			text : '维护银行卡信息',
			iconCls : 'nu-bank-card-maintenance',
			listeners : {
				click : 'onEditBankCardClick'
			}
		}],
		items : [ {
			xtype : 'panel',
			layout : {
				type : 'vbox',
				align : 'stretch'
			},
			border : false,
			margin : "10px 0 0 0",
			items : [{
				xtype : 'gridpanel',
				reference : 'contractCarSuppleAgreementGrid',
				bind : '{contractCarSuppleAgreementListStore}',
				margin : "0 0 10px 10px",
				autoScroll : 'true',
				viewConfig : {
					emptyText : '暂无补充协议信息！',
					enableTextSelection : true
				},
	            plugins:[
	                Ext.create('Ext.grid.plugin.CellEditing',{
	                	clicksToEdit:1
	                })
	            ],
				columns : [ {
					xtype: 'actioncolumn',
	                width: 80,
	                sortable: false,
	                menuDisabled: true,
	                text : '操作',
	                align : "center",
	                items: [{
	                    icon: 'images/upload.png',
	                    tooltip: '上传补充协议',
	                    handler: 'onUploadBCXYClick'
	                }, 
	                {
	                    icon: 'images/printer.png',
	                    tooltip: '打印补充协议',
	                    handler: 'onPrintBCXYClick'
	                }
	                ]
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
					text : '补充协议编号',
					dataIndex:'suppleAgreementNo',
					align : 'center',
				}, {
					text : '签订日期',
					dataIndex:'signDate',
					align : 'center',
					editor:{
						xtype:'datefield',
						format : 'Y-m-d',
						allowBlank: false,
						name:'signDate'
					},
					renderer:function(value){ 
                    	if(value==null){
                    		return "";
                    	}else{
                    		return	Ext.Date.format(new Date(value), 'Y-m-d')
                    	}
                    }
				}, {
					text : '开始日期',
					dataIndex:'startDate',
					align : 'center',
					editor:{
						xtype:'datefield',
						format : 'Y-m-d',
						allowBlank: false,
						name:'startDate'
					},
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
					align : 'center',
					editor:{
						xtype:'datefield',
						format : 'Y-m-d',
						allowBlank: false,
						name:'endDate'
					},
					renderer:function(value){ 
                    	if(value==null){
                    		return "";
                    	}else{
                    		return	Ext.Date.format(new Date(value), 'Y-m-d')
                    	}
                    }
				}, {
					xtype : 'gridcolumn',
					text : '银行卡信息',
					dataIndex : 'bankCardInfoId',
					align : 'center',
					hidden: false,
					editor:{
						xtype: 'combobox',
                		valueField: 'id',
                		displayField: 'bankAccountInfo',
                		editable : false,
                		allowBlank: false,
                		listeners:{
							beforequery:'initBankCardInfoCombo',
						},
                        bind : {
                        	store : '{bankCardInfoStore}',
                        },
                	},
                	renderer: 'bankCardInfoEditor',
				}, {
					text : '车架号',
					dataIndex : 'carFrameNo',
					align : 'center',
				}, {
					text : '车牌号码',
					dataIndex : 'carLicensePlate',
					align : 'center',
				},{
					text : '发动机号',
					dataIndex : 'carEngineNo',
					align : 'center'
				},{
					text : '行驶证号',
					dataIndex : 'carDriveLicenseNo',
					align : 'center'
				},{
					text : '初始公里程数',
					dataIndex : 'initMileage',
					align : 'center',
					regex : /^[0-9]+(\.[0-9]{2})?$/,
				}]
			}, 
			]
		},{
            xtype: 'form',
            width:'100%',
            reference:'commentForm',
            autoScroll:true,
            items: [{
            	xtype : 'numberfield',
				decimalPrecision:2,
				isMoney:true,
				fieldLabel : '装潢费用(元)',
				name : 'decorationFee',
				labelWidth : 84,
				width : 200,
				margin : '10 15 0 15',
				allowBlank:false
            },{
                xtype: "textarea",
                margin:'15 auto',
                padding:'15',
                fieldLabel: "备注",
                name: "comment",
                labelSepartor: "：",
                labelWidth: 80,
                width: '90%',
            }],
		} ],
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
            //cls:'btn-success',
            text : "提交",
            margin : "0 50 0 0",
            listeners:{
          	  click:'onSubmitClick',
            },
        }]
	}]


	})


	