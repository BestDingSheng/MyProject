Ext.define('Evcorp.view.salesOrder.LicensePlateWin',
		{
			extend : 'Ext.window.Window',
			alias : 'widget.licensePlateWin',
			requires : [ 'Evcorp.view.salesOrder.LicensePlateWinViewController',
					'Evcorp.view.salesOrder.LicensePlateWinViewModel',
					'Ext.grid.Panel', 'Ext.tab.Panel',
					'Ext.grid.column.Column', 'Ext.grid.View',
					'Ext.toolbar.Toolbar', 'Ext.button.Button',
					'Ext.toolbar.Fill', 'Ext.form.Panel',
					'Ext.form.field.ComboBox', 'Ext.form.DateField' ],
			viewModel : {
				type : 'licensePlateWin'
			},
			controller : 'licensePlateWin',
			referenceHolder : true,
			// itemId:'roleManager',
			title : '上牌资料',
			height : 500,
			width : 800,
			closeAction : 'destory',
			layout : {
				type : 'vbox',
				align : 'stretch',
			},
			listeners:{
				show:'initWindow'
			},
			items : [ {
				flex : 1,
				autoScroll : true,
				xtype : 'form',
				itemId:'licensePlateItem',
				reference : 'licensePlateForm',
				items : [ {
					xtype : 'container',
					margin:'20 30',
					layout : 'hbox',
					items : [ {
						xtype : 'textfield',
						fieldLabel : '订单编号',
						name : 'saleOrderNo',
						itemId:'saleOrderNoItem',
						labelWidth : 70,
						width : 200,
						hidden:true
					},{
						xtype : 'textfield',
						fieldLabel : '行驶证号',
						name : 'drivingLicence',
						itemId:'drivingLicenceItem',
						allowBlank : false,
						labelWidth : 70,
						width : 200
					}, {
						xtype : 'textfield',
						fieldLabel : '牌照号',
						name : 'plateNumber',
						itemId:'plateNumberItem',
						allowBlank : false,
						margin:'0 50',
						labelWidth : 70,
						width : 200
					}, {
						xtype : 'button',
						text : '保存',
						cls:'nu-btn-nobg',
						icon:'images/save.png',
						itemId:'licensePlateSaveButton',
						width : 80,
						handler:'saveLicensePlate'
					} ]
				}, {
					xtype : 'uploadAttachmentPanel',
					margin:'10 0',
					itemId : 'licenseAttachmentPanelId',
					autoScroll : false
				} ]
			} ],
			buttons: [{
                xtype : "button",
                text : "关闭",
                icon:'images/notline.png',
                margin : "0 340 0 0",
                handler : function() {
                    this.up("window").close();
                },
            }]
		});