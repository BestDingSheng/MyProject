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
				'Evcorp.view.intention.IntentionOrderPanel',
				{
					extend : 'Ext.panel.Panel',
					alias : 'widget.intentionorderpanel',
					requires : [
							'Evcorp.view.intention.IntentionOrderPanelViewController',
							'Evcorp.view.intention.IntentionOrderPanelViewModel',
							'Ext.grid.Panel', 'Ext.tab.Panel',
							'Ext.grid.column.Column', 'Ext.grid.View',
							'Ext.toolbar.Toolbar', 'Ext.button.Button',
							'Ext.toolbar.Fill', 'Ext.form.Panel',
							'Ext.form.field.ComboBox', 'Ext.form.DateField' ],

					controller : 'intentionorderpanel',
					viewModel : {
						type : 'intentionorderpanel'
					},
					itemId : 'IntentionOrderPanel',
					closable : true,
					collapsible : true,
					referenceHolder : true,
					layout : {
						type : 'vbox',
						align : 'stretch'
					},
					items : [
							{

								xtype : 'form',
								heigth : 100,
								bodyPadding : 10,
								reference : 'claimRuleFormRef',
								layout : {
									type : 'hbox',
									align : 'stretch'
								},
								items : [ {
									xtype : 'container',
									defaults : {
										width : 210
									},
									items : [ {
										xtype : 'textfield',
										name : 'orderNo',
										width : 240,
										fieldLabel : '协议编号'
									} ]
								}, {
									xtype : 'container',
									defaults : {
										width : 210
									},
									items : [ {
										xtype : 'textfield',
										name : 'customerPhone',
										width : 240,
										fieldLabel : '手机号'
									} ]
								}, {
									xtype : 'container',
									defaults : {
										width : 210
									},
									items : [ {
										xtype : 'combo',
										name : 'isPoint',
										reference : 'isPointRef',
										labelWidth : 80,
										width : 200,
										fieldLabel : '是否分配',
										valueField : 'code',
										displayField : 'name',
										bind : {
											store : '{isPointStore}'
										},
									} ]
								} ],
								dockedItems : [ {
									xtype : 'toolbar',
									flex : 1,
									dock : 'bottom',
									items : [ {
										xtype : 'tbfill'
									}, {
										xtype : 'button',
										text : '查询',
										iconCls : 'common-icon-serach',
										handler : 'onOlOrderQuyClick'
									} ]
								} ]
							},
							{
								flex : 1,
								xtype : 'panel',
								layout : {
									type : 'hbox',
									align : 'stretch'
								},
								autoScroll : true,
								border : false,
								items : [ {
									flex : 1,
									border : false,
									xtype : 'gridpanel',
									reference : 'olOrderGridRef',
									viewConfig: { enableTextSelection: true },
									itemId : 'olOrderGrid',
									bind : '{olOrderStore}',
									autoScroll : true,
									listeners : {
										cellClick : 'gridCellClick'
									},
									columns : [
											{
												xtype : 'gridcolumn',
												text : '协议编号',
												dataIndex : 'orderNo',
												width : 130,
												align : 'center'
											},
											{
												xtype : 'gridcolumn',
												text : '姓名',
												dataIndex : 'customerName',
												align : 'center'

											},
											{
												xtype : 'gridcolumn',
												text : '手机号',
												dataIndex : 'customerPhone',
												align : 'center',

											},
											{
												xtype : 'gridcolumn',
												text : '产品',
												dataIndex : 'productName',
												width : 230,
												align : 'center'

											},
											{
												xtype : 'gridcolumn',
												text : '数量',
												width : 60,
												dataIndex : 'orderCount',
												align : 'center'
											},
											{
												xtype : 'gridcolumn',
												text : '意向金额',
												dataIndex : 'amount',
												align : 'center'

											},
											{
												xtype : 'gridcolumn',
												text : '推荐码',
												width : 70,
												dataIndex : 'recommendationCode',
												align : 'center'

											},
											{
												xtype : 'gridcolumn',
												text : '渠道',
												dataIndex : 'recommendationName',
												align : 'center'

											},
											{
												xtype : 'gridcolumn',
												text : '状态',
												width : 100,
												dataIndex : 'status',
												align : 'center'

											},
											{
												xtype : 'gridcolumn',
												text : '创建时间',
												align : 'center',
												dataIndex : 'createDate',
												minWidth : 160,
												renderer : function(value) {
													if (value == null) {
														return "";
													} else {
														return Ext.Date.format(new Date(value), 'Y-m-d H:i:s');
													}
												}
											},
											{
												xtype : 'gridcolumn',
												text : '操作',
												dataIndex : 'catapushtime',
												align : "center",
												renderer : function(value,
														cellmeta, record) {
													var saleNo = record
															.get("realOrderNo");
													var returnStr = null;
													if (saleNo != null) {
														returnStr = "<INPUT type='button' disabled='disabled' value='已分配'>";
													} else {
														returnStr = "<INPUT type='button' value='分配销售'>";
													}

													return returnStr;
												}

											}, ],
									bbar : [ {
										xtype : 'pagingtoolbar',
										bind : {
											store : '{olOrderStore}'
										},
										displayMsg : '显示 {0} - {1} 条，共计 {2} 条',
										emptyMsg : "没有数据",
										beforePageText : "当前页",
										afterPageText : "共{0}页",
										displayInfo : true,
										width : '100%'
									} ],

								} ]
							}

					]

				});