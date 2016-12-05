Ext.define('Evcorp.view.callcar.callCarDolistWin', {
	extend : 'Ext.window.Window',
	alias : 'widget.callCarDolistWin',
	requires : [ 'Evcorp.view.callcar.callCarDolistWinViewController',
			'Evcorp.view.callcar.callCarDolistWinViewModel',
			'Ext.grid.Panel', 'Ext.tab.Panel', 'Ext.grid.column.Column',
			'Ext.grid.View', 'Ext.toolbar.Toolbar', 'Ext.button.Button',
			'Ext.toolbar.Fill', 'Ext.form.Panel', 'Ext.form.field.ComboBox',
			'Ext.form.DateField' 
			],
	viewModel : {
		type : 'callCarDolistWin'
	},
	controller : 'callCarDolistWin',
	referenceHolder: true,
	itemId:'roleManager',
	
	layout: {
	        type: 'hbox',
	        align: 'stretch'
	    },
	//autoScroll : true,
	modal : true,
	
	title : 'Call 车计划',
	height : 600,
	width : 800,
	closeAction : 'destory',
	layout : {
		type : 'border',
		align : 'stretch'
	},
	items: [{

		/*call car 编辑单 on*/
		xtype:'form',
		reference : 'callCarForm',
		itemId:'callCarFormId',
        api : {
				submit : 'callCarContro.createOrUpdateCallCarDemand'
		},
		region:'center',
		//border:false,
		autoScroll : true,
		width:'100%',
		items: [{
		             xtype:'panel',
		             border:false,
		             width:'100%',
		             items: [{
		                        xtype:'panel',
		                        layout: 'hbox',
		                        border:false,
		                        columns: 3,
		                        margin : '20 0 10 0',
		                        items :[
		                                  {
		                                      xtype : 'textfield',
		                                      fieldLabel : '编号',
		                                      name : 'code',
		                                      labelWidth : 80,
		                                      width:260,
		                                      margin : '0 20',
		                                      editable:false
		                                  },
		                                  {
			                                	xtype:'textfield',
			                                	hidden:true,
			                                	name:'id'
		                                  },
		                                  {
												 xtype : 'textfield',
		                                         fieldLabel : '供应商',
		                                         name : 'venderName',
		                                         reference:'venderNameR',
	                                             labelWidth : 80,
	                                              width:200,
	                                              margin : '0 0 0 20',
	                                              allowBlank:false
                                          },{
                                        	xtype:'hidden',
                                        	name:'venderCode',
                                        	itemId:'venderCodeId'
                                          },
                                          {
                                             xtype : 'button',
                                             text : '查找',
                                             margin : '0 10',
                                             cls:'nu-btn-nobg',
                                             iconCls: 'common-icon-serach',
                                             width:60,
                                             listeners:{
                                             	click:'onProviderSearch',
                                             },
                                            // handler : function() {},
                                        
                                          },
		                                  {
		                                      xtype : 'textfield',
		                                      editable:true,
		                                      fieldLabel : '购车量',
		                                      width:260,
		                                      name : 'orderQuantity',
		                                      labelWidth : 100,
		                                      margin : '0 20'
		                                  }
		                              ]
		                         },
		                         {
		                            xtype:'panel',
		                            layout: 'hbox',
		                            border:false,
		                            columns: 3,
		                            margin : '20 0 10 0',
		                            items :[ {
		                                         xtype:'panel',
		                                         border:false,
		                                         layout:{
		                                             type:'hbox',
		                                             align:'left'
		                                         },
		                                         items:[
														{
														    xtype : 'textfield',
														    fieldLabel : '订单金额',
														    name : 'orderAmount',
														    labelWidth : 80,
														    width:260,
														    margin : '0 20'
														},
														 {
						                                      xtype : 'textfield',
						                                      fieldLabel : '发货单号',
						                                      name : 'deliverNo',
						                                      labelWidth : 80,
						                                      width:260,
						                                      margin : '0 20'
						                                  }
		                                         ]
		                                      }
		                                      ,
		                                      {
		                                    	  xtype : 'textfield',
			                                      fieldLabel : '厂家订单号',
			                                      name : 'venderOrderNo',
		                                          labelWidth : 100,
		                                          width:260,
		                                          margin : '0 20'
		                                      }
		                                  ] 
		                         },
		                         {
		                              xtype: 'gridpanel',
		                              width:'100%',
		                              layout:'fit',
		                              plugins : [Ext.create('Ext.grid.plugin.CellEditing', {
		      							clicksToEdit : 1
		      						  })],
		      						  listeners : {
		      							  cellClick  : 'onCallCarDemandDetailSelected'
		          	    	  		  },
		                              buttonAlign:'center',
		                              reference:'callCarDemandDetailGrid',
		                              itemId:'callCarDemandDetailGridId',
		                             // border:false,
		                             // store: 'callCarStorelist',
		                              bind:'{callCarDemandDetailStore}',
		                              columns: [
		                                       	  {text: '搜索', align:'center',  dataIndex: 'searchNumber',
												  renderer:function(){
													  var returnStr= "<input class='oss-btn btn-default' type='button'  value='搜索'>";
													  return returnStr;
												  }
		                                       	  }, 
		                                          { dataIndex:'demandId',hidden:true},
		                                          { dataIndex:'id',hidden:true},
		                                          { text: '产品代码', align:'center' , dataIndex: 'carProductCode'},
		                                          { text: '品牌',  dataIndex: 'carBrandCode', flex:2},
		                                          { text: '车系', dataIndex: 'carSeriesCode', flex:2},
		                                          { text: '车型',align:'center' , dataIndex: 'carModelCode', flex:2,hidden:true},
		                                          { text: '产品名称', align:'center' , dataIndex: 'name', flex:4},
		                                          { text: '颜色', align:'center' , dataIndex: 'carColorCode', flex:1,hidden:true},
		                                          { text: '采购数量',  dataIndex: 'quantity', flex:2,
				                                        	  editor : {
				  												xtype : "numberfield",
				  												allowblank : false,
				  												selectOnFocus : true
				  											}          	  
		                                          },
		                                          { text: '采购单价',  dataIndex: 'unitPrice', flex:3,
		                                        	  editor : {
			  												xtype : "numberfield",
			  												decimalPrecision : 2,
			  												allowblank : false,
			  												selectOnFocus : true
			  											}          	  
		                                          },
		                                          { text:'车辆用途',dataIndex:'carUsage',flex:2,
		                                        	  editor:{
		                  								xtype: 'combobox',
		                  		                		valueField: 'code',
		                  		                		displayField: 'nameCn',
		                  		                		editable : false,
		                  		                		allowBlank: false,
		                  		                        bind : {
		                  		                        	store : '{carUsageStore}',
		                  		                        },
		                  		                	},
		                  		                	renderer: 'carUsageEditor'
		                                          },
		                                          { text: '操作', align:'center',  dataIndex: 'operate',
		                                              renderer:function(value,cellmeta,record){
		                                                  var returnStr= "<input class='oss-btn btn-danger' type='button' value='删除'>";
		                                                  return returnStr;
		                                              } , 
		                                             flex:3
		                                          }
		                                          ],
		                                          bbar : [ {
		                      						xtype : 'toolbar',
		                      						flex : 1,
		                      						dock : 'bottom',
		                      						border:false,
		                      						buttonAlign:'center',
		                      						items : [
		                      						         {
		                      						        	 xtype:'tbfill'
		                      						         },
		                      						 {
	                                                      xtype : "button",
	                                                      text : "取消",
	                                                      margin : "0 50 0 0",
	                                                      iconCls:'common-icon-del',
	                                                      handler : function() {
	                                                          this.up("window").close();
	                                                      },
	                                                  }, 
	                                                  {
	                                                      xtype : "button",
	                                                      text : "新 增",
	                                                      iconCls:'common-icon-add',
	                                                      margin : "0 50 0 0",
	                                                      listeners:{
	                                                    	  click:'onCreateClaimRule',
	                                                    	  
	                                                      },
	                                                      handler : function() {
	                                                    	  //alert('kjk');
	                                                          //Ext.getCmp("operatetab").collapse();
	                                                    	   //Ext.getCmp("operatetab").show();
	                                                    	   //alert(22);
	                                                      },
	                                                  },{
	                                                      xtype : "button",
	                                                      text : "保 存",
	                                                      icon:'images/save.png',
	                                                      margin : "0 50 0 0",
	                                                      listeners:{
	                                                    	  click:'saveCallCar',
	                                                      }
	                                                      
	                                                  }
	                                                  
		                      						
		                      						
		                      						]
		                      					} ]
		                                          //buttons : []
		                         }
		                 ],
		             },
		             {

		             }
		        ],
		/*call car 编辑单 end*/
		
	}]
});