/*
 * File: app/view/role/RoleMangerPanel.js
 *
 * This file was generated by Sencha Architect version 3.1.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 5.0.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 5.0.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext
		.define(
				'Evcorp.view.dashboard.SalseOrderProcessSummaryPanel',
				{
					extend : 'Ext.panel.Panel',
					alias : 'widget.salesOrderProPanel',
					requires : [
							'Evcorp.view.dashboard.SalseOrderProcessSummaryPanelViewController',
							'Evcorp.view.dashboard.SalseOrderProcessSummaryPanelViewModel',
							'Ext.grid.Panel', 'Ext.tab.Panel',
							'Ext.grid.column.Column', 'Ext.grid.View',
							'Ext.toolbar.Toolbar', 'Ext.button.Button',
							'Ext.toolbar.Fill', 'Ext.form.Panel',
							'Ext.form.field.ComboBox', 'Ext.form.DateField' ],
					controller : 'salesOrderProPanel',
					viewModel : {
						type : 'salesOrderProPanel'
					},
					itemId : 'SalseOrderProcessSummaryPanel',
					closable : true,
					collapsible : true,
					referenceHolder : true,
					layout : {
						type : 'vbox',
						align : 'stretch'
					},
					title : '零售订单管理报表',
					items : [
							{
								xtype : 'form',
								autoScroll : false,
								reference : 'saleOrderProSummaryForm',
								bodyPadding : '10',
								layout : {
									type : 'hbox',
									align : 'stretch'
								},
								items : [ {
									xtype : 'container',
									items : [ {
										xtype : 'textfield',
										fieldLabel : '销售代表',
										labelWidth : 70,
										width : 200,
										name : 'saleBy'
									} ,
									]
								}, {
									xtype : 'container',
									items : [
									{
										xtype : 'textfield',
										fieldLabel : '订单号',
										name : 'salesOrderCode',
										labelWidth : 70,
										width : 200,
										margin:'0 0 0 20'
									} ]
								}, {
									xtype : 'container',
									items : [ {
										xtype : 'textfield',
										fieldLabel : '客户姓名',
										name : 'cusName',
										labelWidth : 70,
										width : 200,
										margin:'0 0 0 20'
									} ]
								}, {
									xtype : 'container',
									items : [ {
										xtype : 'textfield',
										fieldLabel : '车型名称',
										name : 'modelName',
										labelWidth : 70,
										width : 200,
										margin:'0 0 0 20'
									} ]
								} ,
								
								{
									xtype : 'container',
									items : [ {
										xtype : 'textfield',
										fieldLabel : '当前流程节点',
										labelWidth : 90,
										width : 200,
										name : 'currentProcess',
										margin:'0 0 0 20',
									} ]
								} ],
								dockedItems : [ {
									xtype : 'toolbar',
									flex : 1,
									dock : 'bottom',
									items : [{
										xtype : 'tbfill'
									}, {
										xtype : 'button',
										text : '查 询',
										scale : 'small',
										iconCls : 'common-icon-serach',
										handler : 'querySaleOrderProcess',
									} ]
								} ]
							},
							{
								flex : 1,
								border : false,
								xtype : 'gridpanel',
								reference : 'saleOrderProSummaryGridRef',
								viewConfig : {
									enableTextSelection : true
								},
								autoScroll : true,
								bind : '{salesOrderProcessSummaryStore}',
								columns : [
										{
											xtype : 'gridcolumn',
											dataIndex : 'name',
											locked   : true,
											width : 80,
											text : '销售代表'
										},
										{
											xtype : 'gridcolumn',
											dataIndex : 'cusName',
											locked   : true,
											width : 80,
											text : '客户名称'
										},
										{
											xtype : 'gridcolumn',
											dataIndex : 'modelName',
											locked   : true,
											minWidth : 120,
											text : '车型名称'
										},
										{
											xtype : 'gridcolumn',
											dataIndex : 'code',
											locked   : true,
											width : 120,
											text : '订单编号'
										},
										{
											xtype : 'gridcolumn',
											dataIndex : 'processStartTime',
											locked   : true,
											width : 80,
											text : '开始时间',
											renderer:function(value){
												var date1=new Date();
												var date2=new Date(value);
												return calcDateMargin(date1,date2);
											}
										},
										{
											xtype : 'gridcolumn',
											dataIndex : 'currentProcess',
											locked   : true,
											width : 180,
											hidden : false,
											text : '当前流程节点'
										},
										{
											xtype : 'gridcolumn',
											dataIndex : 'node1',
											width : 180,
											text : '合同签订'
										},
										{
											xtype : 'gridcolumn',
											dataIndex : 'node2',
											width : 180,
											text : '支付定金'
										},
										{
											xtype : 'gridcolumn',
											dataIndex : 'node3',
											width : 180,
											text : '审批'
										},
										{
											xtype : 'gridcolumn',
											dataIndex : 'node4',
											width : 180,
											text : '收集征信材料'
										},
										{
											xtype : 'gridcolumn',
											dataIndex : 'node5',
											width : 180,
											text : '征信审核'
										},
										{
											xtype : 'gridcolumn',
											dataIndex : 'node6',
											width : 180,
											text : '配车'
										},
										{
											xtype : 'gridcolumn',
											dataIndex : 'node7',
											width : 180,
											text : '合同收取尾款'
										},
										{
											xtype : 'gridcolumn',
											dataIndex : 'node8',
											width : 180,
											text : '购买车辆保险'
										},
										{
											xtype : 'gridcolumn',
											dataIndex : 'node9',
											width : 180,
											text : '电桩安装后信息反馈'
										},
										{
											xtype : 'gridcolumn',
											dataIndex : 'node10',
											width : 180,
											text : '出库'
										},
										{
											xtype : 'gridcolumn',
											dataIndex : 'node11',
											width : 180,
											text : '财务核算'
										},
										{
											xtype : 'gridcolumn',
											dataIndex : 'node12',
											width : 180,
											text : '交车'
										},
										{
											xtype : 'gridcolumn',
											dataIndex : 'node13',
											width : 180,
											text : '申请上牌额度单'
										},
										{
											xtype : 'gridcolumn',
											dataIndex : 'node14',
											width : 180,
											text : '上铁牌'
										},
										{
											xtype : 'gridcolumn',
											dataIndex : 'node15',
											width : 180,
											text : '车厂材料上传'
										}],
								bbar : [ {
									xtype : 'pagingtoolbar',
									bind : {
										store : '{salesOrderProcessSummaryStore}'
									},
									displayMsg : '显示 {0} - {1} 条，共计 {2} 条',
									emptyMsg : "没有数据",
									beforePageText : "当前页",
									afterPageText : "共{0}页",
									displayInfo : true,
									width : '100%'
								} ],
							}

					]
				});
//function calcDateMargin(date1,date2){
//	var s1 = date1.getTime(),s2 = date2.getTime();
//	var total = (s1 - s2)/1000;
//	var returnValue='';
//	var day = parseInt(total / (24*60*60));//计算整数天
//	var hour = parseInt(total/(60*60));//计算整数小时数
//	var min = parseInt(total/60);//计算整数分
//	if(day>0){
//		returnValue=day+"天前"
//	}else if(hour>0){
//		returnValue=hour+"小时前"
//	}else if(min>0){
//		returnValue=min+"分钟前"
//	}else{
//		returnValue=total+'秒前'
//	}
//	return returnValue;
//}
