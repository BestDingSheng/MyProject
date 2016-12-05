Ext.define('Evcorp.view.intention.IntentionOrderPhone', {
	extend : 'Ext.window.Window',
	alias : 'widget.intentionorderphone',
	requires : [ 'Evcorp.view.intention.IntentionOrderPhoneViewController',
			'Evcorp.view.intention.IntentionOrderPhoneViewModel',
			'Ext.grid.Panel', 'Ext.grid.column.Column',
			'Ext.grid.View', 'Ext.toolbar.Toolbar', 'Ext.button.Button',
			'Ext.toolbar.Fill', 'Ext.form.Panel', 'Ext.form.field.ComboBox'
			 ],
	viewModel : {
		type : 'intentionorderphone'
	},
	controller : 'intentionorderphone',
	referenceHolder: true,
	autoScroll : true,
	modal : true,
	closable : true,
	title : '查找客户',
	height : 500,
	width : 800,
	closeAction : 'destory',
	layout : {
		type : 'fit',
		align : 'stretch'
	},
	 items:[
	        {
	            xtype: 'gridpanel',
	            viewConfig: {
	                enableTextSelection: true
	             },
	            bind:'{customer}',
	            reference: 'customerGrid',
	            
	           
	            selModel: { selType: 'checkboxmodel' ,mode:'single'},   //选择框
	            columns: [
	                {
	                    xtype: 'gridcolumn',
	                    dataIndex: 'cusName',
	                    width: '30%',
	                    text: '姓名'
	                },
	                {
	                    xtype: 'gridcolumn',
	                    dataIndex: 'phone',
	                    width: '35%',
	                    text: '手机号码'
	                },
	                {
	                    xtype: 'gridcolumn',
	                    text: '电话',
	                    width: '30%',
	                    dataIndex: 'telphone'
	                    
	                },{

	                    xtype: 'gridcolumn',
	                    text: '客户code',
	                    dataIndex: 'cusCode',
	                    hidden:true
	                }
	            ],
	            viewConfig: {
	                enableTextSelection: true
	             },
	    
	            dockedItems: [
	                {
	                    xtype: 'toolbar',
	                    dock: 'top',
	                    items: [
	                       
	                      
	                        {
	                            xtype: 'textfield',
	                            fieldLabel: '姓名或电话号码:',
	                            labelWidth: 150,
	                            width: 330,
	                            name:'cusName'
	                        },
	                        {
	                            xtype: 'button',
	                            text: '查询',
	                            iconCls: 'common-icon-serach',
	                            handler: 'onQueryClick'
	                        }
	                    ]
	                },
	                {
	    		        xtype: 'pagingtoolbar',
	    		        dock: 'bottom',
	    		        bind: {
	    			        store: '{customer}'
	    			    },
	    		        displayInfo : true,
	    				displayMsg:'显示 {0} - {1}条记录，总共 {2}条记录',
	    				emptyMsg:'暂无数据',
	    				beforePageText:'页数',
	    				afterPageText:'总共{0}页',
	    				firstText:'第一页',
	    				prevText:'上一页',
	    				nextText:'下一页',
	    				lastText:'最后一页',
	    				width:'100%',
	    				emptyMsg : '无记录'
	    		    }
	            ]
	        }]


});