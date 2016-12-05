Ext.define('Evcorp.view.contractCar.CreditReportingWin', {
	extend : 'Ext.window.Window',
	alias : 'widget.CreditReportingWin',
	requires : [ 'Evcorp.view.contractCar.CreditReportingWinViewController',
			'Evcorp.view.contractCar.CreditReportingWinViewModel',
			'Ext.grid.Panel', 'Ext.tab.Panel', 'Ext.grid.column.Column',
			'Ext.grid.View', 'Ext.toolbar.Toolbar', 'Ext.button.Button',
			'Ext.toolbar.Fill', 'Ext.form.Panel', 'Ext.form.field.ComboBox',
			'Ext.form.DateField' ],
	viewModel : {
		type : 'CreditReportingWin'
	},
	controller : 'CreditReportingWin',
	referenceHolder : true,
	title : '征信审核阶段',
	height : 600,
	width : 1000,
	listeners:{
		show:'initWindow'
	},
	closeAction : 'destory',
	layout : {
		type : 'vbox',
		align : 'stretch',
	},
	items : [ {
		xtype : 'orderlistdetails',
		layout : 'auto',
		flex : 1,
		width : '100%',
		autoScroll : true,

	}, {
		flex : 1,
		autoScroll : true,
		xtype:'panel',
		buttonAlign : 'center',
		title:'征信审核',
		items:[{
			xtype : 'form',
			layout : 'auto',
			items : [
			{
				xtype : 'panel',
				html : '<p align="center">检查征信材料是否完整，不完整请驳回重新提交</p>',
				border : false,
			},{
	            xtype: 'form',
	            width:'100%',
	            reference:'commentForm',
	            autoScroll:true,
	            buttonAlign:'center',
	            items: [{
	                xtype: "textarea",
	                margin:'15 auto',
	                padding:'15',
	                fieldLabel: "审核意见",
	                name: "comment",
	                labelSepartor: "：",
	                labelWidth: 80,
	                width: '90%',
	            }],
			}
			],
		} ],
		buttons: [{
            xtype : "button",
            text : "取消",
            margin : "0 50 0 0",
            handler : function() {
                this.up("window").close();
            },
        }, 
        {
            xtype : "button",
            cls:'btn-success',
            text : "审核通过",
            margin : "0 50 0 0",
            listeners:{
          	  click:'onAgreeClick',
            },
        },
            {
                xtype : "button",
                cls:'btn-danger',
                text : "审核不通过",
                margin : "0 50 0 0",
                listeners:{
              	  click:'onRejectClick',
                }
        }]
		}]
});