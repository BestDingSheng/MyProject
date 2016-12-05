Ext.define('Evcorp.view.contractCar.managerWin', {
	extend : 'Ext.window.Window',
	alias : 'widget.managerWin',
	requires : [ 'Evcorp.view.contractCar.managerWinViewController',
			'Evcorp.view.contractCar.managerWinViewModel',
			'Ext.grid.Panel', 'Ext.tab.Panel', 'Ext.grid.column.Column',
			'Ext.grid.View', 'Ext.toolbar.Toolbar', 'Ext.button.Button',
			'Ext.toolbar.Fill', 'Ext.form.Panel', 'Ext.form.field.ComboBox',
			'Ext.form.DateField' ],
	viewModel : {
		type : 'managerWin'
	},
	controller : 'managerWin',
	referenceHolder : true,
	title : '店长审核阶段',
	height : 600,
	width : 1000,
	closeAction : 'destory',
	listeners:{
		show:'initWindow'
	},
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
		title:'店长审核',
		buttonAlign:'center',
		items:[{
			xtype : 'form',
			layout : 'auto',
			buttonAlign : 'center',
			items : [{
	            xtype: 'form',
	            width:'100%',
	            reference:'commentForm',
	            autoScroll:true,
	            items: [{
	                xtype: "textarea",
	                margin:'15 auto',
	                padding:'15',
	                fieldLabel: "审批意见",
	                name: "comment",
	                labelSepartor: "：",
	                labelWidth: 80,
	                width: '90%',
	            }],
			}
			],
		}],
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
            text : "审批通过",
            margin : "0 50 0 0",
            listeners:{
          	  click:'onAgreeClick',
            },
        },
            {
                xtype : "button",
                cls:'btn-danger',
                text : "审批驳回",
                margin : "0 50 0 0",
                listeners:{
              	  click:'onRejectClick',
                }
        }]
	} ]

});