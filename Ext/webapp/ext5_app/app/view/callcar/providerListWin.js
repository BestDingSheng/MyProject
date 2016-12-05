Ext.define('Evcorp.view.callcar.providerListWin', {
	extend : 'Ext.window.Window',
	alias : 'widget.providerListWin',
	requires : [ 'Evcorp.view.callcar.providerListWinViewController',
			'Evcorp.view.callcar.providerListWinViewModel',
			'Ext.grid.Panel', 'Ext.tab.Panel', 'Ext.grid.column.Column',
			'Ext.grid.View', 'Ext.toolbar.Toolbar', 'Ext.button.Button',
			'Ext.toolbar.Fill', 'Ext.form.Panel', 'Ext.form.field.ComboBox',
			'Ext.form.DateField' 
			],
	viewModel : {
		type : 'providerListWin'
	},
	controller : 'providerListWin',
	referenceHolder: true,
	itemId:'roleManagerS',
	
	layout: {
	        type: 'hbox',
	        align: 'stretch'
	    },
	//autoScroll : true,
	modal : true,
	
	title : '供应商查询',
	closeAction : 'destory',
	layout : {
		type : 'hbox',
		align : 'stretch'
	},
	items: [
            {
           	 xtype: 'gridpanel',
           	 viewConfig: {
           		 enableTextSelection: true
           	 },
           	 reference: 'venderGrid',
           	 bind:'{venderStore}',
           	 flex: 1,
           	 autoScroll:true,
           	 listeners:{
           		rowdblclick:'onRowDbClick'
           	 },
           	 //title: '客户列表',
           	 selModel: { selType: 'checkboxmodel' ,mode:'single'},   //选择框
           	 columns: [
           	           {
           	        	   xtype: 'gridcolumn',
           	        	   dataIndex: 'code',
           	        	   width: '20%',
           	        	   text: '编号',
           	        	   hidden:false,
           	        	   align:'center',
           	           },
           	           {
           	        	   xtype: 'gridcolumn',
           	        	   dataIndex: 'fullName',
           	        	   width: '35%',
           	        	   text: '供应商名称',
           	        	   hidden:false,
           	        	   align:'center',
           	           },
           	           {
           	        	   xtype: 'gridcolumn',
           	        	   text: '简称',
           	        	   width: '20%',
           	        	   dataIndex: 'shortName',
           	        	   hidden:false,
           	        	   align:'center',

           	           },{

           	        	   xtype: 'gridcolumn',
           	        	   text: '级别',
           	        	   dataIndex: 'levelString',
           	        	   hidden:false,
           	        	   align:'center',
           	           },{

           	        	   xtype: 'gridcolumn',
           	        	   text: '联系人',
           	        	   dataIndex: 'contactPerson',
           	        	   hidden:false,
           	        	   align:'center',
           	           },{

           	        	   xtype: 'gridcolumn',
           	        	   text: '联系方式',
           	        	   dataIndex: 'contactPhone',
           	        	   hidden:false,
           	        	   align:'center',
           	           },{

           	        	   xtype: 'gridcolumn',
           	        	   text: 'Email',
           	        	   dataIndex: 'email',
           	        	   hidden:false,
           	        	   align:'center',
           	           }
           	        ,{

        	        	   xtype: 'gridcolumn',
        	        	   text: '地址',
        	        	   dataIndex: 'address',
        	        	   hidden:false,
        	        	   align:'center',
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
           	                        	        	 xtype: 'tbfill'
           	                        	         },
           	                        	         {
           	                        	        	 xtype: 'textfield',
           	                        	        	 reference:'customerSearch',
           	                        	        	 itemId:'searchId',
           	                        	        	 fieldLabel: '名称或编号:',
           	                        	        	 labelWidth: 80,
           	                        	        	 width: 180,
           	                        	        	 name:'cusName'
           	                        	         },
           	                        	         {
           	                        	        	 xtype: 'button',
           	                        	        	 text: '查询',
           	                        	        	 iconCls: 'common-icon-serach',
           	                        	        	 handler: 'onQueryClick'
           	                        	         }, {
           	                        	        	 xtype: 'button',
           	                        	        	 text: '确定',
           	                        	        	icon:'images/save.png',

           	                        	        	 handler: 'onChoiceClick'
           	                        	         },
           	                        	         ]
           	                         },
           	                         {
           	                        	 xtype: 'pagingtoolbar',
           	                        	 dock: 'bottom',
           	                        	 bind: {
           	                        		 store: '{venderStore}'
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
           	                        	 emptyMsg : '没有记录'
           	                         }
           	                         ]
            }
            ]
});