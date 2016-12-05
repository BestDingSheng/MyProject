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

Ext.define('Evcorp.view.process.ProcessDefinitionPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.processDefinitionPanel',

    requires: [
        'Evcorp.view.process.ProcessDefinitionPanelViewController',
        'Evcorp.view.process.ProcessDefinitionPanelViewModel',
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
    
    controller:'processDefinitionPanelc',
    viewModel: {
        type: 'processDefinitionPanelvm'
    },
    referenceHolder: true,
    itemId:'ProcessDefinitionPanel',
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
		xtype: "gridpanel",
		//forceFit: true,//让grid的列自动填满grid的整个宽度，不用一列一列的设定宽度。
		autoScroll:true,
		bind: '{processDefinition}',
		reference: 'processDefinitionGrid',
		listeners : {
			cellClick  : 'onProcessDefinitionSelected'
		},
		plugins:'gridfilters',
		columns: [{
			xtype: 'gridcolumn',
			align:"center",
			dataIndex: 'id',
            minWidth: 230,
			text: '流程ID',
			filter:'string'
		}, {
			xtype: 'gridcolumn',
			align:"center",
			dataIndex: 'key',
			minWidth: 156,
			text: '流程Key',
			filter:'string'
		}, {
			xtype: 'gridcolumn',
			align:"center",
			dataIndex: 'name',
			text: '流程定义名称',
			filter:'string'
		}, {
			xtype: 'gridcolumn',
			align:"center",
			dataIndex: 'version',
			text: '版本',
			filter:'string'
		}, {
			xtype: 'gridcolumn',
			align:"center",
			dataIndex: 'deploymentId',
			text: '流程部署ID',
			filter:'string'
		}, {
			xtype: 'gridcolumn',
			align:"center",
			dataIndex: 'dgrmResourceName',
			minWidth: 190,
			text: '流程图名称',
			filter:'string'
		}, {
			xtype: 'gridcolumn',
			align:"center",
			text: '流程图查看',
			renderer:function(value){
				return '<input type="button" class="view" value="查看"/>';
			}
		}],
		bbar: [{
				xtype: 'pagingtoolbar',
				dock: 'bottom',
				bind: {
					store: '{processDefinition}'
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
});