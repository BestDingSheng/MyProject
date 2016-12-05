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

Ext.define('Evcorp.view.task.TaskPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.taskpanel',

    requires: [
        'Evcorp.view.task.TaskPanelViewController',
        'Evcorp.view.task.TaskPanelViewModel',
        'Ext.grid.Panel',
        'Ext.tab.Panel',
        'Ext.grid.column.Column',
        'Ext.grid.View',
        'Ext.toolbar.Toolbar',
        'Ext.button.Button',
        'Ext.toolbar.Fill',
        'Ext.form.Panel',
        'Ext.form.field.ComboBox'
    ],
    
    controller:'taskpanelc',
    viewModel: {
        type: 'taskpanelvm'
    },
    referenceHolder: true,
    itemId:'TaskPanel',
    closable: true,
	layout: {
		type: 'border',
		align: 'stretch'
	},
	height: "100%",
	items: [{
		region: "center",
		flex: 1,
		split: true,
		height: "100%",
		xtype: "tabpanel",
		activeTab: 0,
		plain: true, //True表示tab候选栏上没有背景图片（默认为false）
		enableTabScroll: true, //选项卡过多时，允许滚动
		defaults: {
			autoScroll: true
		},
		items: [{
				xtype:"panel",
				title: "待办",
				height: 500,
				layout: {
					type: 'vbox',
					align: 'center'
				},
				width: "100%",
				items: [{
					xtype: 'panel',
					width: "100%",
					flex: 5,
					autoScroll:true,
					items: [{
						xtype: "gridpanel",
						title: '<div align="center">待办事项</div>',
						selModel: {
							selType: 'checkboxmodel',
							mode: 'single'
						}, //
						bind:'{myActiveTask}',
						reference : 'myActiveTaskGrid',
						tbar: [{

								xtype: 'button',
								text: '指派',
								width: "150px",
								margin: "0 100px 0 0",
								border: false,
								listeners : {
									click : 'onAssignClick'
								}
							}, {
								xtype: 'button',
								text: '反签',
								width: "150px",
								border: false,
								margin: "0 200px 0 0",
								listeners : {
									click : 'onUnclaimClick'
								}
							}

						],
						columns: [{
								xtype: 'gridcolumn',
								dataIndex: 'taskId',
								text: '任务ID'
							}, {
								xtype: 'gridcolumn',
								dataIndex: 'taskName',
								text: '任务名称'
							}, {
								xtype: 'gridcolumn',
								dataIndex: 'processInstanceId',
								text: '流程编号'
							}, {
								xtype: 'gridcolumn',
								dataIndex: 'processInstanceName',
								text: '流程名称'
							}, {
								xtype: 'gridcolumn',
								dataIndex: 'createTime',
								text: '任务发起时间',
								renderer:function(value){ 
			                    	if(value==null){
			                    		return "";
			                    	}else{
			                    		return	Ext.Date.format(new Date(value), 'Y-m-d H:i:s');
			                    	}
			                    }
							}, {
								xtype: 'gridcolumn',
								dataIndex: 'createTime',
								text: '任务已等待时间',
								renderer:function(value){
									var curDate = new Date();
									var start = new Date(value);
									var min=(curDate-start)/1000/60;
									if(min<60)
										return Ext.util.Format.number(min,'0')+'分钟';
									else{
										var hour = min/60;
										return Ext.util.Format.number(hour,'0')+'小时';
									}
								}
							}
						],
						bbar: [{
							xtype: 'pagingtoolbar',
							dock: 'bottom',
							bind: {
								store: '{myActiveTask}'
							},
							displayInfo: true,
							displayMsg: '显示 {0} - {1}条记录，总共 {2}条记录',
							emptyMsg: '暂无数据',
							beforePageText: '页数',
							afterPageText: '总共{0}页',
							firstText: '第一页',
							prevText: '上一页',
							nextText: '下一页',
							lastText: '最后一页',
							width: '100%',
							emptyMsg: '没有记录'
						}

					]

					}]
				}, {
					xtype: 'panel',
					title: '<div align="center">待分配事项</div>',
					width: "100%",
					flex: 5,
					autoScroll: true,
					items: [{
						xtype: "gridpanel",
						//title: '<div align="center">代办事项</div>',
						selModel: {
							selType: 'checkboxmodel',
							mode: 'single'
						}, //
						bind:'{myActiveGroupTask}',
						reference : 'myActiveGroupTaskGrid',
						tbar: [{
							xtype: 'button',
							text: "签收",
							listeners : {
								click : 'onClaimClick'
							}
						}],
						columns: [{
							xtype: 'gridcolumn',
							dataIndex: 'taskId',
							text: '任务ID'
						}, {
							xtype: 'gridcolumn',
							dataIndex: 'taskName',
							text: '任务名称'
						}, {
							xtype: 'gridcolumn',
							dataIndex: 'processInstanceId',
							text: '流程编号'
						}, {
							xtype: 'gridcolumn',
							dataIndex: 'processInstanceName',
							text: '流程名称'
						}, {
							xtype: 'gridcolumn',
							dataIndex: 'createTime',
							text: '任务发起时间',
							renderer:function(value){ 
		                    	if(value==null){
		                    		return "";
		                    	}else{
		                    		return	Ext.Date.format(new Date(value), 'Y-m-d H:i:s');
		                    	}
		                    }
						}, {
							xtype: 'gridcolumn',
							dataIndex: 'createTime',
							text: '任务已等待时间',
							renderer:function(value){
								var curDate = new Date();
								var start = new Date(value);
								var min=(curDate-start)/1000/60;
								if(min<60)
									return Ext.util.Format.number(min,'0')+'分钟';
								else{
									var hour = min/60;
									return Ext.util.Format.number(hour,'0')+'小时';
								}
							}
						}

					],
						bbar: [{
								xtype: 'pagingtoolbar',
								dock: 'bottom',
								bind: {
									store: '{myActiveGroupTask}'
								},
								displayInfo: true,
								displayMsg: '显示 {0} - {1}条记录，总共 {2}条记录',
								emptyMsg: '暂无数据',
								beforePageText: '页数',
								afterPageText: '总共{0}页',
								firstText: '第一页',
								prevText: '上一页',
								nextText: '下一页',
								lastText: '最后一页',
								width: '100%',
								emptyMsg: '没有记录'
							}

						]
					}]
				}]

			}, {
				title: "已处理",
				xtype: "panel",
				autoScroll: true,
				items: [{
					xtype: "gridpanel",
					title: '<div align="center">已处理事项</div>',
					selModel: {
						selType: 'checkboxmodel',
						mode: 'single'
					}, //
					bind:'{myFinishedTask}',
					reference : 'myFinishedTaskGrid',
					columns: [{
						xtype: 'gridcolumn',
						dataIndex: 'taskId',
						text: '任务ID'
					}, {
						xtype: 'gridcolumn',
						dataIndex: 'taskName',
						text: '任务名称'
					}, {
						xtype: 'gridcolumn',
						dataIndex: 'processInstanceId',
						text: '流程编号'
					}, {
						xtype: 'gridcolumn',
						dataIndex: 'processInstanceName',
						text: '流程名称'
					}, {
						xtype: 'gridcolumn',
						dataIndex: 'createTime',
						text: '开始时间',
						renderer:function(value){ 
	                    	if(value==null){
	                    		return "";
	                    	}else{
	                    		return	Ext.Date.format(new Date(value), 'Y-m-d H:i:s');
	                    	}
	                    }
					}, {
						xtype: 'gridcolumn',
						dataIndex: 'claimTime',
						text: '签收时间',
						renderer:function(value){ 
	                    	if(value==null){
	                    		return "";
	                    	}else{
	                    		return	Ext.Date.format(new Date(value), 'Y-m-d H:i:s');
	                    	}
	                    }
					},{
						xtype: 'gridcolumn',
						dataIndex: 'endTime',
						text: '完成时间',
						renderer:function(value){ 
	                    	if(value==null){
	                    		return "";
	                    	}else{
	                    		return	Ext.Date.format(new Date(value), 'Y-m-d H:i:s');
	                    	}
	                    }
					},{
						xtype: 'gridcolumn',
						dataIndex: 'formKey',
						hidden:true
					}
					],
					bbar: [{
							xtype: 'pagingtoolbar',
							dock: 'bottom',
							bind: {
								store: '{myFinishedTask}'
							},
							displayInfo: true,
							displayMsg: '显示 {0} - {1}条记录，总共 {2}条记录',
							emptyMsg: '暂无数据',
							beforePageText: '页数',
							afterPageText: '总共{0}页',
							firstText: '第一页',
							prevText: '上一页',
							nextText: '下一页',
							lastText: '最后一页',
							width: '100%',
							emptyMsg: '没有记录'
						}

					]

				}]
			}

		]
	}, {
		region: "east",
		xtype: 'panel',
		viewConfig: {
			enableTextSelection: true
		},
		flex: 1,

	}]
   
});