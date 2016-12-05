Ext.define('Evcorp.view.callcar.rejectEditWin', {
	extend : 'Ext.window.Window',
	alias : 'widget.rejectEditWin',
	requires : [ 'Evcorp.view.callcar.rejectEditWinViewController',
			'Evcorp.view.callcar.rejectEditWinViewModel',
			'Ext.grid.Panel', 'Ext.tab.Panel', 'Ext.grid.column.Column',
			'Ext.grid.View', 'Ext.toolbar.Toolbar', 'Ext.button.Button',
			'Ext.toolbar.Fill', 'Ext.form.Panel', 'Ext.form.field.ComboBox',
			'Ext.form.DateField' 
			],
	viewModel : {
		type : 'rejectEditWin'
	},
	controller : 'rejectEditWin',
	referenceHolder: true,
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
		xtype:'panel',
		region:'center',
		//border:false,
		autoScroll : true,
		width:'100%',
		items: [{
		             xtype:'form',
		             reference : 'detailForm',
		             api : {
		     				submit : 'callCarContro.resubmitCallCarDemand'
		     		},
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
		                                	  xtype:'hidden',
		                                	  name:'taskId'
		                                  },
		                                  {
		                                	  xtype:'hidden',
		                                	  name:'processInstanceId'
		                                  },
		                                  {
			                                	xtype:'textfield',
			                                	hidden:true,
			                                	name:'id'
		                                  },
		                                  {
		                                      xtype : 'textfield',
		                                      fieldLabel : '厂家订单号',
		                                      name : 'venderOrderNo',
		                                      labelWidth : 100,
		                                      width:260,
		                                      margin : '0 20'
		                                  },
		                                  {
		                                      xtype : 'textfield',
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
														    labelWidth : 100,
														    width:260,
														    margin : '0 20'
														},
		                                                 {
		                                                     xtype : 'textfield',
		                                                     fieldLabel : '供应商编号',
		                                                     name : 'venderCode',
		                                                     labelWidth : 80,
		                                                     width:200,
		                                                     margin : '0 0 0 20',
		                                                     itemId:'venderCodeId',
		                                                     allowBlank:false
		                                                 },
		                                                 {
		                                                    xtype : 'button',
		                                                    text : '查找',
		                                                    margin : '0 10',
		                                                    width:60,
		                                                    listeners:{
		                                                    	click:'onProviderSearch',
		                                                    },
		                                                 }
		                                         ]
		                                      }
		                                      ,
		                                      {
		                                          xtype : 'textfield',
		                                          fieldLabel : '供应商',
		                                          name : 'venderName',
		                                          itemId:'venderNameId',
		                                          labelWidth : 100,
		                                          width:260,
		                                          margin : '0 20',
		                                          editable:false
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
		                              bind:'{detailGrid}',
		                              columns: [
		                                       	  {text: '搜索', align:'center',  dataIndex: 'searchNumber',
												  renderer:function(){
													  var returnStr= "<input class='oss-btn btn-default' type='button'  value='搜索'>";
													  return returnStr;
												  }
		                                       	  }, 
		                                          { dataIndex:'demandId',hidden:true},
		                                          { dataIndex:'id',hidden:true},
		                                          { text: '产品代码', align:'center' , dataIndex: 'carProductCode' ,
		                                        	  editor : {
		  												xtype : "textfield",
		  												allowblank : false,
		  												selectOnFocus : true
		  											} 
		                                          },
		                                          { text: '品牌',  dataIndex: 'carBrandCode', flex:2},
		                                          { text: '车系', dataIndex: 'carSeriesCode', flex:2},
		                                          { text: '车型',align:'center' , dataIndex: 'carModelCode', flex:2,hidden:true},
		                                          { text: '产品名称', align:'center' , dataIndex: 'name', flex:4},
		                                          { text: '颜色', align:'center' , dataIndex: 'carColorCode', flex:1,hidden:true},
		                                          { text: '采购数量',  dataIndex: 'quantity', flex:2,
				                                        	  editor : {
				  												xtype : "numberfield",
				  												decimalPrecision : 4,
				  												allowblank : false,
				  												selectOnFocus : true
				  											}          	  
		                                          },
		                                          { text: '采购单价',  dataIndex: 'unitPrice', flex:3,
		                                        	  editor : {
			  												xtype : "numberfield",
			  												decimalPrecision : 4,
			  												allowblank : false,
			  												selectOnFocus : true
			  											}          	  
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
	                                                      text : "提交",
	                                                      icon:'images/save.png',
	                                                      margin : "0 50 0 0",
	                                                      listeners:{
	                                                    	  click:'saveCallCar',
	                                                      }
	                                                      
	                                                  },{
	                                                      xtype : "button",
	                                                      text : "终止",
	                                                      icon:'images/common_del.gif',
	                                                      margin : "0 50 0 0",
	                                                      listeners:{
	                                                    	  click:'terminate',
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