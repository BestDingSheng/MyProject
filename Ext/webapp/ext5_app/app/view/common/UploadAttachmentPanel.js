Ext.define('Evcorp.view.common.UploadAttachmentPanel', {
	extend : 'Ext.panel.Panel',
	alias : 'widget.uploadAttachmentPanel',
	requires : [ 'Evcorp.view.common.UploadAttachmentPanelViewController',
			'Evcorp.view.common.UploadAttachmentPanelViewModel',
			'Ext.grid.Panel', 'Ext.tab.Panel', 'Ext.grid.column.Column',
			'Ext.grid.View', 'Ext.toolbar.Toolbar', 'Ext.button.Button',
			'Ext.toolbar.Fill', 'Ext.form.Panel', 'Ext.form.field.ComboBox',
			'Ext.form.DateField' 
			],
	viewModel : {
		type : 'uploadAttachmentPanelVM'
	},
	controller : 'uploadAttachmentPanelVC',
	referenceHolder: true,
	title : '附件列表',
	initComponent : function () {
		var me = this;
		Ext.apply(me, {
			items: [{
				xtype:'form',
				items:[{
					xtype:'hidden',
					name:'businessKey'
				},{
					xtype:'hidden',
					name:'businessTypeName'
				},{
					xtype:'hidden',
					name:'businessType'
				}]
			},{
		        xtype: 'gridpanel',
		        width:'100%',
		        viewConfig: { enableTextSelection: true },
//		        plugins : [Ext.create('Ext.grid.plugin.CellEditing', {
//					clicksToEdit : 1
//				})],
				listeners:{
					cellClick :'onUploadGridSelect',
				},
				reference:'attachmentGrid',
				itemId:'attachmentGridId',
		        bind:'{attachmentStore}',
		        flex: 1,
		        autoScroll : true,
		        columns: [
		                 	{dataIndex:'id',hidden:true}, 
		                 	{ text: '单据类型',  dataIndex: 'bizEntityTypeName'},
		                 	{ dataIndex:'bizEntityType',hidden:true},
		                    { text: '单据编码',  dataIndex: 'bizEntityCode', width: 180,},
		                    { text: '附件名称',dataIndex:'linkName',
		                    	renderer:function(value,cellmeta,record){
		                    		if(value!=null&&value!=''){
		                    			return "<a href='"+record.data.resourceAccessUrl+"' target='_blank'>"+value+"</a>";
		                    		}
		                    	}},
		                    { text: '附件类型', dataIndex:'attachBizType',
		                    	editor:{
			                        xtype : 'combobox',
			                        name:'attachBizType',
			                        valueField : "code",
									displayField : "nameCn",
									listeners:{
										beforequery:'initAttachmentTypeCombo',
									},
//			                        labelWidth : 80,
//			                        width : 340,
//			                        margin : '0 20',
			                        editable : false,
			                        queryMode:'local',
			                        bind:{
			                        	store:'{attachmentTypeStore}'
			                        }
		                    	},
		                    	renderer:function(value){
		                    		if(value != null){
		    	                		var gridStore = this.up('panel').getViewModel().getStore('attachmentTypeStore');
		    	                		return gridStore.findRecord('code', value).data.nameCn;
		    	                	}
		                    	}
		                    },
		                    {text:'上传时间',dataIndex:'createDate',
		                    	renderer: function(value) {
									if(value == null) {
										return "";
									} else {
										return Ext.Date.format(new Date(value), 'Y-m-d');
									}
								}
		                    },
		                    {text:'备注',dataIndex:'description'},
		                    {text:'操作',align:'center',dataIndex:'resourceCode',
		                    	renderer:function(value,cellmeta,record){
		                    		if(value!=null&&value!=''){
			                    		var returnStr= "<input class='oss-btn btn-danger' type='button' value='删除'>";
			                            return returnStr;
		                    		}else{
		                    			var returnStr= "<input class='oss-btn btn-upload' type='button' value='上传附件'>";
		                                return returnStr;
		                    		}
		                    	}}
                ],
                tbar : [{
                    xtype : "button",
                    itemId : 'addAttachementBtnItemId',
                    text : "新 增",
                    iconCls:'common-icon-add',
                    margin : 0,
                    padding:0,
                    listeners:{
                  	  click:'onCreateClaimRule',
                    }
                },{
	        	 	xtype:'tbfill'
		         }]
			}]
		});
		
		this.callParent(arguments);
	}
});