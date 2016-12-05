Ext.define('Evcorp.view.orderList.OrderListAttachmentWin', {
	extend : 'Ext.window.Window',
	alias : 'widget.orderlistattachmentwin',
	requires : [ 
	        'Evcorp.view.orderList.OrderListAttachmentWinViewController',
			'Evcorp.view.orderList.OrderListAttachmentWinViewModel',
			'Ext.grid.Panel', 'Ext.tab.Panel', 'Ext.grid.column.Column',
			'Ext.grid.View', 'Ext.toolbar.Toolbar', 'Ext.button.Button',
			'Ext.toolbar.Fill', 'Ext.form.Panel', 'Ext.form.field.ComboBox',
			'Ext.form.DateField' ],
	viewModel : {
		type : 'orderlistattachmentwin'
	},
	controller : 'orderlistattachmentwin',
	autoScroll : true,
	modal : true,
	closable : true,
	title : '添加附件',
	height : 260,
	width : 630,
	closeAction : 'destory',
	layout : {
		type : 'fit',
		align : 'stretch'
	},
	items : [ 
	          {
	        	xtype:'form',
	            api: {
	            	submit: 'attachmentContro.attachmentUpload'
				},
				reference : 'attachmentForm',
				height:400,
				layout:'vbox',
				id : 'attachmentForm',
				items:[
				          {
				      		xtype : 'container',
				      		layout : 'vbox',
				      		items : [  {
			      				xtype : 'textfield',
			      				hidden : true,
			      				reference : 'addOrUpdate',
			      				name : 'addOrUpdate',
			      				itemId:'addOrUpdate',
			      				value:1
			      			}, {
				      			xtype : 'textfield',
				      			reference : 'bizEntityCode',
				      			name : 'bizEntityCode',
				      			bind : '{contractCarOrderAttachementGrid.selection.bizEntityCode}',
				      			hidden : true,
				      		}, {
				      			xtype : 'combobox',
				      			fieldLabel : '附件业务实体类型',
				      			margin : '20 20',
				      			name : 'bizEntityType',
				      			reference : 'bizEntityTypeCobo',
				      			width : 270,
				      			mode : 'local',
				      			valueField : 'code',
				      			displayField : 'nameCn',
				      			editable : true,
				      			bind : '{contractCarOrderAttachementGrid.selection.bizEntityType}',
				      			store: Ext.create('Ext.data.Store',{
	                            	autoLoad : true,
	                    			fields : [ 'code', 'nameCn' ],
	                    			proxy : {
	                    				type : 'direct',
	                    				directFn : chooseOptionContro.getChooseOptionWithSelect,
	                    				extraParams : {
											type : 'attachBizEntityType'
										}
	                    			}
	                            }),
                                listeners:{
                                	change: 'onAttachmentBizEntityTypeSelWithAll'
                                } 
//				      			bind : {
//				      				store : '{attchmentType}'
//				      			}
				      		}, {
				      			xtype : 'combobox',
				      			fieldLabel : '附件类型',
				      			margin : '20 20',
				      			name : 'attachBizType',
				      			reference : 'attachBizTypeCobo',
				      			width : 270,
				      			mode : 'local',
				      			valueField : 'code',
				      			displayField : 'nameCn',
				      			editable : true,
				      			bind : '{contractCarOrderAttachementGrid.selection.attachBizType}',
				      			store: Ext.create('Ext.data.Store',{
	                            	autoLoad : true,
	                    			fields : [ 'code', 'nameCn' ],
	                    			proxy : {
	                    				type : 'direct',
	                    				directFn : chooseOptionContro.getChooseOptionWithSelect,
	                    				extraParams : {
											type : 'attachBizType'
										}
	                    			}
	                            }),
				      		}, {
				      			xtype : 'container',
				      			layout : 'hbox',
				      			items : [ {
				      				xtype : 'filefield',
				      				name : 'fileUpload',
				      				margin : '20 20',
				      				reference : 'fileRefer',
				      				fieldLabel : '选择附件',
				      				width : 400,
				      				allowBlank : false,
				      				buttonText : '选择'
				      			}, {
				      				xtype : 'button',
				      				margin : '20 20',
				      				text : '上传',
				      				listeners : {
				      					click : 'upload'
				      				}
				      			} ]
				      		} ]
				      	}
			       ]
	          }
          ]
});