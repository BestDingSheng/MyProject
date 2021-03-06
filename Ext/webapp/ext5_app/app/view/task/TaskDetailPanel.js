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

Ext.define('Evcorp.view.task.TaskDetailPanel', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.taskDetailPanel',

	requires: [
		'Evcorp.view.task.TaskDetailPanelViewController',
		'Evcorp.view.task.TaskDetailPanelViewModel',
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
	controller: 'taskDetailPanelc',
	viewModel: {
		type: 'taskDetailPanelvm'
	},
	referenceHolder: true,
	itemId: 'TaskDetailPanel',
	layout: {
		type: 'vbox',
		align: 'stretch'
	},
	height: "100%",
	items: [{
		   xtype:'panel',
		   items:[
		   {
			xtype: 'form',
			reference : 'taskDetailForm',
			itemId:'taskDetailForm',
			animCollapse : false,
	//		collapseDirection : 'left',
	//		collapsed : false,
	//		collapsible : true,
			titleCollapse : false,
			title : '任务详情',
			items : [ {
				xtype : 'container',
				padding : 10,
				items : [{
					xtype : 'container',
					layout : 'hbox',
					margin : '5 0',
					defaults : {
						margin : ' 15 0'
					},
					items : [{
						xtype : 'displayfield',
						width : 250,
						fieldLabel : '单据编号',
						labelWidth : 80,
						name : 'businessKey',
						bind : '{myActiveTaskGrid.selection.businessKey}'
					}, {
						xtype : 'displayfield',
						width : 250,
						fieldLabel : '单据单据类型',
						labelWidth : 80,
						name : 'businessTypeName',
						bind : '{myActiveTaskGrid.selection.businessTypeName}'
					
					}, {
						xtype : 'hidden',
						name: 'formKey',
						bind : '{myActiveTaskGrid.selection.formKey}'
					}, {
						xtype : 'hidden',
						name: 'businessKey',
						bind : '{myActiveTaskGrid.selection.businessKey}'
					}, {
						xtype : 'hidden',
						name : 'businessType',
						bind : '{myActiveTaskGrid.selection.businessType}'
					}, {
						xtype :'hidden',
						name : 'businessTypeName',
						bind : '{myActiveTaskGrid.selection.businessTypeName}'
					}
					]
				}, {
					xtype : 'container',
					layout : 'hbox',
					margin : '5 0',
					defaults : {
						margin : ' 15 0'
					},
					items : [{
						xtype : 'displayfield',
						width : 250,
						fieldLabel : '任务ID',
						labelWidth : 80,
						name : 'taskId',
						bind : '{myActiveTaskGrid.selection.taskId}'
					}, {
						xtype : 'hidden',
						name: 'taskId',
						bind : '{myActiveTaskGrid.selection.taskId}'
					}, {
						xtype : 'displayfield',
						width : 250,
						fieldLabel : '任务名称',
						labelWidth : 80,
						name : 'taskName',
						bind : '{myActiveTaskGrid.selection.taskName}'
					}, {
						xtype : 'hidden',
						name : 'taskName',
						bind : '{myActiveTaskGrid.selection.taskName}'
					}
					]
				}, {
					xtype : 'container',
					layout : 'hbox',
					margin : '5 0',
					defaults : {
						margin : ' 15 0'
					},
					items : [{
						xtype : 'displayfield',
						width : 250,
						fieldLabel : '流程编号',
						labelWidth : 80,
						name : 'processInstanceId',
						bind : '{myActiveTaskGrid.selection.processInstanceId}'
					}, {
						xtype : 'hidden',
						name: 'processInstanceId',
						bind : '{myActiveTaskGrid.selection.processInstanceId}'
					
					}, {
						xtype : 'displayfield',
						width : 250,
						fieldLabel : '流程名称',
						labelWidth : 80,
						name : 'processInstanceName',
						bind : '{myActiveTaskGrid.selection.processInstanceName}'
					}
					]
				}
				]
			}
			]
		}],
	buttons:[{
		text:'单据详情',
		listeners : {
			click : 'viewDetail'
		}
	},{
		text:'查看流程历史',
		listeners : {
			click : 'viewHistory'
		}
	}]
	},{
		xtype: "gridpanel",
		title: "<div align='center'>任务历史</div>",
		forceFit: true,
		reference:'historicTaskCommentGrid',
		itemId:'historicTaskCommentGridId',
		bind:'{historicTaskCommentStore}',
		height:300,
		columns: [{
			xtype: 'gridcolumn',
			align: 'center',
			dataIndex: 'taskName',
			text: '任务名称'
		}, 
		{
			xtype: 'gridcolumn',
			align:'center',									
			dataIndex: 'assignee',
			text: '处理人'
		},
		{
			xtype: 'gridcolumn',
			align:'center',									
			dataIndex: 'endTime',
			text: '时间',
			renderer: function(value) {
				if(value == null) {
					return "";
				} else {
					return Ext.Date.format(new Date(value), 'Y-m-d H:i:s');
				}
			}
		},
		{
			xtype: 'gridcolumn',
			dataIndex: 'duration',
			align: 'center',
			text: '用时',
			renderer: function(value) {
				if(value < 60)
					return Ext.util.Format.number(value, '0') + '分钟';
				else {
					var hour = value / 60;
					return Ext.util.Format.number(hour, '0') + '小时';
				}
			}
		},
		{
			xtype: 'gridcolumn',
			align:'center',									
			dataIndex: 'commentText',
			text: '备注'
		}
		]
	}]
});