Ext.define('Evcorp.view.INV.checkingResultWin', {
	extend : 'Ext.window.Window',
	alias : 'widget.checkingResultWin',
	requires : [ 'Evcorp.view.INV.checkingResultWinViewController',
			'Evcorp.view.INV.checkingResultWinViewModel',
			'Ext.grid.Panel', 'Ext.tab.Panel', 'Ext.grid.column.Column',
			'Ext.grid.View', 'Ext.toolbar.Toolbar', 'Ext.button.Button',
			'Ext.toolbar.Fill', 'Ext.form.Panel', 'Ext.form.field.ComboBox',
			'Ext.form.DateField' 
			],
	viewModel : {
		type : 'checkingResultWin'
	},
	controller : 'checkingResultWin',
	referenceHolder: true,
	itemId:'roleManager',
	
	layout: {
	        type: 'vbox',
	        align: 'stretch'
	    },
	//autoScroll : true,
	modal : true,
	
	title : '验收结果',
	height : 600,
	padding:20,
	border:false,
	closeAction : 'destory',
	dockedItems : [ {
		xtype : 'toolbar',
		flex : 1,
		dock : 'bottom',
		padding:'10 0 0 0',
		items : [{
            xtype: 'tbfill'
        },{
            xtype: "button",
            iconCls:'common-icon-cancel',
            text: "取消",
            listeners:{
            	click:'onMGTdel'
            },
        }, {
        	xtype: 'button',
            text: '确定',
            scale:'small',
            iconCls: 'common-icon-save',
            handler:'onQueryCarInfo',
        },{
            xtype: 'tbfill'
        }]
	} ],
	items: [{
		
		/*add list 编辑单 on*/
		xtype:'form',
		flex:1,
		reference : 'receiptInTransitForm',
		itemId:'receiptInTransitFormId',
        api : {
				submit : 'receiptInTransitContro.createOrUpdatereceiptInTransitDemand'
		},
		region:'center',
		//border:false,
		autoScroll : true,
		 border:false,
		 buttonAlign:'center',
		 width:'100%',
		items: [
		        {
		             xtype:'container',
		             border:false,
		             width:'100%',
		             items: [
		                     {
								autoScroll : true,
		                        xtype:'container',
		                        layout: 'hbox',
		                        border:false,
		                        columns: 3,
		                        margin : '20 0 10 0',
		                        items :[
		                                  {
		                                      xtype : 'textfield',
		                                      fieldLabel : 'VIN',
		                                      name : 'code',
		                                      labelWidth : 80,
		                                      width:200,
		                                      margin : '0 5 0 20',
		                                      editable:false
		                                  },
		                                  {
												 xtype : 'textfield',
		                                         fieldLabel : '发动机号',
		                                         name : 'venderName',
		                                         reference:'venderNameR',
	                                             labelWidth : 80,
	                                              width:200,
	                                              margin : '0 5 0 20',
	                                              allowBlank:false
                                          },
                                          /*{ xtype: "displayfield",cls:'red',value: "*" },*/
                                          {
												 xtype : 'textfield',
		                                         fieldLabel : '合格证号',
		                                         name : 'venderName',
		                                         reference:'venderNameR',
	                                             labelWidth : 80,
	                                              width:200,
	                                              margin : '0 0 0 20',
	                                              allowBlank:false
                                          }
		                              ]
		                         },
		                 ],
		                 
		             }
		        ],
		/*add list 编辑单 end*/
		
	},{  
    	xtype: "displayfield", border:false,html:'<h2 class="panel-title">车辆入库详细信息</h2>'
    },{	
							    flex:4,
								border : false,
								xtype : 'gridpanel',
								reference : 'conCarMgtGridRef',
								itemId : 'conCarMgtGrid',
								autoScroll : true,
								selModel: {
						    	        selType: 'checkboxmodel',
						    	        mode: 'SIMPLE'
						    	    },
						        columns: [
												
						  	              	{ xtype: 'gridcolumn',hidden:true,dataIndex:'id'},
						  	              	{ xtype: 'gridcolumn',hidden:true,dataIndex:'createBy'},
						  	                { xtype: 'gridcolumn', text: '序号', dataIndex: '' },
						  	                { xtype: 'gridcolumn',  text: 'VIN', align:'center', dataIndex: 'VIN', width:150},
						  	                { xtype: 'gridcolumn',  text: '质损部位', align:'center', dataIndex: 'color', width:150},
						  	                { xtype: 'gridcolumn',  text: '质损程度', dataIndex: 'proName', width:150},
						  	                { xtype: 'gridcolumn',  text: '质损性质', dataIndex: 'stock', width:150},
						  	                { xtype: 'gridcolumn',  text: '质损说明', dataIndex: 'storageLocation', width:150},
						  	                ],
										bbar : [ {
											xtype : 'pagingtoolbar',
											bind : {
												store : '{carInfoGridStore}'
											},
											displayMsg : '显示 {0} - {1} 条，共计 {2} 条',
											emptyMsg : "没有数据",
											beforePageText : "当前页",
											afterPageText : "共{0}页",
											displayInfo : true,
											width : '100%'
										} ],
						         },{
						         	xtype:'uploadAttachmentPanel'

						         }]
});