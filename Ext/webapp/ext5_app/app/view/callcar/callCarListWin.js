Ext.define('Evcorp.view.callcar.callCarListWin', {
	extend : 'Ext.window.Window',
	alias : 'widget.callCarListWin',
	requires : [ 

	            'Evcorp.view.callcar.callCarListWinViewController',
	            'Evcorp.view.callcar.callCarListWinViewModel',
	            'Ext.grid.Panel',, 'Ext.grid.column.Column',
	            'Ext.grid.View', 'Ext.toolbar.Toolbar', 'Ext.button.Button',
	            'Ext.toolbar.Fill', 'Ext.form.Panel', 'Ext.form.field.ComboBox'

	            ],
	            viewModel : {
	            	type : 'callCarListWin'
	            },
	            controller : 'callCarListWin',
	           
	            modal : true,
	            referenceHolder: true,
	            closable : true,
	            title : '产品信息',
	            height : 400,
	            width : 580,
	            id:'win',
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
	                	   bind:'{carProducts}',
	                	   reference: 'carProductGrid',
	                	   itemId:'carProductGridId',
	                	   listeners:{
	                		   rowdblclick:'onRowDbClick'
	                	   },
	                	   selModel: { selType: 'checkboxmodel' ,mode:'single'},   //选择框
	                	   columns: [
	                	             {

	                	            	 xtype: 'gridcolumn',
	                	            	 text: 'code',
	                	            	 dataIndex: 'code',
	                	            	 text: '产品代码'
	                	            	 
	                	            	 
	                	             },{
	                	            	 xtype: 'gridcolumn',
	                	            	 dataIndex: 'carBrandCode',
	                	            	 text: '品牌'
	                	             },
	                	             {

	                	            	 xtype: 'gridcolumn',
	                	            	 dataIndex: 'carSeriesCode',
	                	            	 text: '车系'
	                	            	 
	                	            	 
	                	             },
	                	             {

	                	            	 xtype: 'gridcolumn',
	                	            	 dataIndex: 'carModelCode',
	                	            	 hidden:true,
	                	            	 text: '车型'
	                	            	 
	                	            	 
	                	             },
	                	             {

	                	            	 xtype: 'gridcolumn',
	                	            	 text: 'displayName',
	                	            	 dataIndex: 'displayName',
	                	            	 width: '40%',
	                	            	 text: '产品名称'
	                	            	 
	                	            	 
	                	             },
	                	             {

	                	            	 xtype: 'gridcolumn',
	                	            	 text: 'carColor',
	                	            	 dataIndex: 'carColorCode',
	                	            	 hidden:true,
	                	            	 text: '颜色'
	                	            	 
	                	            	 
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
	                	                        	        	   fieldLabel: '产品名称:',
	                	                        	        	   reference: 'carProductField',
	                	                        	        	   labelWidth: 80,
	                	                        	        	   width: 230,
	                	                        	        	   name:'name'
	                	                        	           },
	                	                        	          
	                	                        	           {
	                	                        	        	   xtype: 'button',
	                	                        	        	   text: '查询',

	                	                        	        	   iconCls: 'common-icon-serach',
	                	                        	        	   listeners:{
	                	                        	        		   click:'onQueryClick'
	                	                        	        	   }
	                	                        	           },
	                	                        	           {
	                	                        	        	   xtype: 'button',
	                	                        	        	   text: '确定',
	                	                        	        	   iconCls : 'common-icon-save',
	                	                        	        	   listeners:{
	                	                        	        		   click:'onConfirmClick'
	                	                        	        	   }
	                	                        	           }
	                	                        	          
	                	                        	           ]
	                	                           },
	                	                           {
	                	                        	   xtype: 'pagingtoolbar',
	                	                        	   dock: 'bottom',
	                	                        	   bind: {
	                	                        		   store: '{carProducts}'
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
	                   }
	                  ]

});