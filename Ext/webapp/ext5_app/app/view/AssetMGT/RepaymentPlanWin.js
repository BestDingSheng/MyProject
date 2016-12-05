Ext.define('Evcorp.view.AssetMGT.RepaymentPlanWin', {
	extend : 'Ext.window.Window',
	alias : 'widget.repaymentplanWin',
	requires : [

	'Evcorp.view.AssetMGT.RepaymentPlanWinViewController',
			'Evcorp.view.AssetMGT.RepaymentPlanWinViewModel',
			'Ext.grid.Panel', , 'Ext.grid.column.Column', 'Ext.grid.View',
			'Ext.toolbar.Toolbar', 'Ext.button.Button', 'Ext.toolbar.Fill',
			'Ext.form.Panel', 'Ext.form.field.ComboBox'

	],
	viewModel : {
		type : 'repaymentplanWin'
	},
	controller : 'repaymentplanWin',

	modal : true,
	referenceHolder : true,
	closable : true,
	title : '还款计划',
	height : 480,
	width : 800,
	id : 'win',
	closeAction : 'destory',
	layout : {
		type : 'fit',
		align : 'stretch'
	},
	items : [ {
		xtype : 'gridpanel',
		autoScroll : 'true',
		buttonAlign : 'left',
		reference : 'replaymentPlanGrid',
		bind:'{replaymentPlanListStore}',
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
			renderer:function(value){ 
            	if(value==null){
            		return "";
            	}else{
            		return	Ext.Date.format(new Date(value), 'Y-m-d')
            	}
            }
		}, {
			dataIndex: 'endDate', flex:2,
			text : '租金结束日期',
			align : 'center', flex:2,
			renderer:function(value){ 
            	if(value==null){
            		return "";
            	}else{
            		return	Ext.Date.format(new Date(value), 'Y-m-d')
            	}
            }
		}, {
			dataIndex: 'monthlyAmount', flex:2,
			text : '月供金额',
			align : 'center', flex:2,
		}, {
			dataIndex: 'deductionPlanDate',
			text : '扣款计划', flex:2,
			align : 'center',
			renderer:function(value){ 
            	if(value==null){
            		return "";
            	}else{
            		return	Ext.Date.format(new Date(value), 'Y-m-d')
            	}
            }
		} ]
	} ]

});