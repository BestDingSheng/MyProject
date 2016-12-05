Ext.define('Evcorp.view.intention.IntentionOrderAttachmentWin', {
	extend : 'Ext.window.Window',
	alias : 'widget.intentionorderattachmentwin',
	requires : [ 
	        'Evcorp.view.intention.IntentionOrderAttachmentWinViewController',
			'Evcorp.view.intention.IntentionOrderAttachmentWinViewModel',
			'Ext.grid.Panel', 'Ext.tab.Panel', 'Ext.grid.column.Column',
			'Ext.grid.View', 'Ext.toolbar.Toolbar', 'Ext.button.Button',
			'Ext.toolbar.Fill', 'Ext.form.Panel', 'Ext.form.field.ComboBox',
			'Ext.form.DateField' ],
	viewModel : {
		type : 'intentionorderattachmentwin'
	},
	controller : 'intentionorderattachmentwin',
	autoScroll : true,
	modal : true,
	closable : true,
	title : '查找客户',
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
				      			},{
					      			xtype : 'combobox',
					      			fieldLabel : '附件类型',
					      			margin : '20 20',
					      			reference : 'attachmentTypeRef',
					      			width : 270,
					      			mode : 'local',
					      			name : 'attachmentType',
					      			valueField : 'code',
					      			displayField : 'name',
					      			editable : true,
					      			bind : {
					      				store : '{attchmentType}'
					      			}
					      		}, {
					      			xtype : 'container',
					      			layout : 'hbox',
					      			items : [ {
					      				xtype : 'textfield',
					      				fieldLabel : '附件描述',
					      				reference : 'attachmentDecRef',
					      				margin : '0 20',
					      				width : 450,
					      				name : 'attachmentDec'
					      			} ]
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