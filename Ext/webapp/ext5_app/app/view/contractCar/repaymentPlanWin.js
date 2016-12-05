Ext.define('Evcorp.view.contractCar.repaymentPlanWin', {
	extend : 'Ext.window.Window',
	alias : 'widget.repaymentPlanWin',
	requires : [ 'Evcorp.view.contractCar.repaymentPlanWinViewController',
			'Evcorp.view.contractCar.repaymentPlanWinViewModel',
			'Ext.grid.Panel', 'Ext.tab.Panel', 'Ext.grid.column.Column',
			'Ext.grid.View', 'Ext.toolbar.Toolbar', 'Ext.button.Button',
			'Ext.toolbar.Fill', 'Ext.form.Panel', 'Ext.form.field.ComboBox',
			'Ext.form.DateField' ],
	viewModel : {
		type : 'repaymentPlanWin'
	},
	controller : 'repaymentPlanWin',
	referenceHolder : true,
	title : '制定还款计划',
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
		title : '还款计划',
		xtype : "panel",
		flex:1,
		//layout : 'auto',
		border:false,
		autoScroll : true,
		padding:10,
		 buttonAlign:'center',
		items : [ {
        	xtype: 'form',
        	reference: 'replaymentPlanForm',
            api:{
            	submit:contractCarOrderContro.importReplaymentPlan
            },
            paramsAsHash: true,
        	dockedItems: [ {
                    xtype: 'toolbar',
                    dock: 'top',
                    border: 0,
                    layout: {
                        type: 'hbox'
                    },
                    items: [ {
                            xtype: 'fileuploadfield',
                            buttonConfig: {
                                iconCls: 'common_icon_export_excel'
                            },
                            name: 'fileUpload',
                            reference: 'fileUploadRef',
   							width: 350,
                            buttonText: '选择',
                        }, {
                            xtype: 'button',
                            iconCls: 'common_icon_export_excel',
                            text: '导入还款计划',
                            handler:'onImportReplaymentPlanClick'
                        }, {
                            xtype: 'button',
                            iconCls: 'common_icon_export_excel',
                            text: '下载还款计划导入模板',
                            handler:'onDownReplaymentPlanClick'
                        },
                    ]
                }
            ]
		},{
			xtype : 'gridpanel',
			reference : 'ccsaReplaymentPlanGrid',
			bind : '{contractCarSuppleAgreementListStore}',
			margin : "0 0 10px 10px",
			autoScroll : 'true',
			listeners:{
				select:'onCcsaReplaymentPlanGridSelect'
			},
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
				dataIndex : 'id',
				hidden : true,
			}, {
				dataIndex : 'contractCarOrderId',
				hidden : true,
			}, {
				text : '补充协议编号',
				dataIndex:'suppleAgreementNo',
				align : 'center',
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
            		readOnly: true,
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
			} ]
		},{
			xtype : 'gridpanel',
			autoScroll : 'true',
			buttonAlign : 'left',
			reference : 'replaymentPlanGrid',
			bind : '{replaymentPlanListStore}',
			viewConfig : {
				emptyText : '暂无信息！',
				enableTextSelection : true
			},
			columns : [ {
				dataIndex: 'numberOfPeriods',
				text : '期数',
				align : 'center', flex:3,
			}, {
				dataIndex: 'startDate',
				text : '租金开始日期',
				align : 'center', flex:2,
			}, {
				dataIndex: 'endDate', flex:2,
				text : '租金结束日期',
				align : 'center', flex:2,
			}, {
				xtype: "numbercolumn",
				format: '0,0.00',
				dataIndex: 'monthlyAmount', flex:2,
				text : '月供金额',
				align : 'center', flex:2,
			}, {
				dataIndex: 'deductionPlanDate',
				text : '扣款计划', flex:2,
				align : 'center',
			} ],
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
            cls:'btn-success',
            text : "提交",
            margin : "0 50 0 0",
            listeners:{
           	 click:'onSubmitClick'
            },
        }]
	} ]

});