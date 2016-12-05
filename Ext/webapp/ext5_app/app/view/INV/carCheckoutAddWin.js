Ext.define('Evcorp.view.INV.carCheckoutAddWin', {
	extend : 'Ext.window.Window',
	alias : 'widget.carCheckoutAddWin',
	requires : [ 'Evcorp.view.INV.carCheckoutAddWinViewController',
			'Evcorp.view.INV.carCheckoutAddWinViewModel',
			'Ext.grid.Panel', 'Ext.tab.Panel', 'Ext.grid.column.Column',
			'Ext.grid.View', 'Ext.toolbar.Toolbar', 'Ext.button.Button',
			'Ext.toolbar.Fill', 'Ext.form.Panel', 'Ext.form.field.ComboBox',
			'Ext.form.DateField' 
			],
	viewModel : {
		type : 'carCheckoutAddWin'
	},
	controller : 'carCheckoutAddWin',
	referenceHolder: true,
	itemId:'roleManager',
	
	layout: {
	        type: 'vbox',
	        align: 'stretch'
	    },
	//autoScroll : true,
	modal : true,
	
	title : '车辆出库新增',
	height : 600,
	padding:20,
	border:false,
	closeAction : 'destory',
	buttons : [
{
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
}
	               ],
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
								flex:1, border:false,html:'<h2 class="panel-title">车辆出库新增</h2>'
							},
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
		                                  { xtype: "displayfield",cls:'red',value: "*" },
		                                  {
			                                	xtype:'textfield',
			                                	hidden:true,
			                                	name:'id'
		                                  },
		                                  {
												 xtype : 'textfield',
		                                         fieldLabel : '仓库',
		                                         name : 'venderName',
		                                         reference:'venderNameR',
	                                             labelWidth : 80,
	                                              width:200,
	                                              margin : '0 5 0 20',
	                                              allowBlank:false
                                          },
                                          { xtype: "displayfield",cls:'red',value: "*" },
                                          {
												 xtype : 'textfield',
		                                         fieldLabel : '产品代码',
		                                         name : 'venderName',
		                                         reference:'venderNameR',
	                                             labelWidth : 80,
	                                              width:200,
	                                              margin : '0 0 0 20',
	                                              allowBlank:false
                                          },{ xtype: 'button',
                                        	  width:80,margin:'0 10',
                                        	  text:'查 找',
                                        	  cls:'nu-btn-nobg',
                                        	  iconCls: 'common-icon-serach',
                                          },
		                              ]
		                         },
		                         /*{
		                        	 border:false,html:'<h2 class="panel-title">车辆信息</h2>'
		         		         },*/
		                 ],
		                 
		             }
		        ],
		/*add list 编辑单 end*/
		
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
						  	                { xtype: 'gridcolumn',  text: '产品', dataIndex: 'proName', width:150},
						  	                { xtype: 'gridcolumn',  text: '仓库', dataIndex: 'stock', width:150},
						  	                { xtype: 'gridcolumn',  text: '库位', dataIndex: 'storageLocation', width:150},
						  	                { xtype: 'gridcolumn',  text: '附加成本', dataIndex: 'storageLocation', width:150},
						  	                { xtype: 'gridcolumn',  text: '车辆价格', dataIndex: 'carModelCode', width:150},
						  	                { xtype: 'gridcolumn',  text: '库存状态', dataIndex: 'keyNo', width:150},
						  	                { xtype: 'gridcolumn',  text: '配车状态', dataIndex: 'keyNo', width:150},
						  	                { xtype: 'gridcolumn', text: '销售订单编号', dataIndex: 'dealeName' },
						  	                { xtype: 'gridcolumn',  text: '质损状态', align:'center', dataIndex: 'color', width:150},
						  	                { xtype: 'gridcolumn',  text: '是否试乘试驾', align:'center', dataIndex: 'testCar', width:150 },
						  	                { xtype: 'gridcolumn',  text: '有合格证', align:'center', dataIndex: 'certification'},
						  	                { xtype: 'gridcolumn',  text: '是否二手车', align:'center', dataIndex: 'usedCar', width:150},
						  	                { xtype: 'gridcolumn',  text: '是否促销车', align:'center', dataIndex: 'promotionCar', width:150},
						  	                { xtype: 'gridcolumn',  text: '是否采购退回', dataIndex: 'massLoss', width:150},
						  	                { xtype: 'gridcolumn',  text: '调价原因', dataIndex: 'engineNo', width:150},
						  	                { xtype: 'gridcolumn',  text: '原销售指导价', dataIndex: 'certificationNo', width:150},
						  	                { xtype: 'gridcolumn',  text: '销售指导价', dataIndex: 'keyNo', width:150},
						  	                { xtype: 'gridcolumn',  text: '备注', align:'center',dataIndex: 'purchasePrice', width:150},
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
						         }]
});