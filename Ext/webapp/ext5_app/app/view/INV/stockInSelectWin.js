Ext.define('Evcorp.view.INV.stockInSelectWin', {
	extend : 'Ext.window.Window',
	alias : 'widget.stockInSelectWin',
	requires : [ 'Evcorp.view.INV.stockInSelectWinViewController',
			'Evcorp.view.INV.stockInSelectWinViewModel',
			'Ext.grid.Panel', 'Ext.tab.Panel', 'Ext.grid.column.Column',
			'Ext.grid.View', 'Ext.toolbar.Toolbar', 'Ext.button.Button',
			'Ext.toolbar.Fill', 'Ext.form.Panel', 'Ext.form.field.ComboBox',
			'Ext.form.DateField' 
			],
	viewModel : {
		type : 'stockInSelectWin'
	},
	controller : 'stockInSelectWin',
	referenceHolder: true,
	itemId:'roleManagerS',
	//autoScroll : true,
	modal : true,
	
	title : '入库单选择',
	closeAction : 'destory',
	layout : {
		type : 'vbox',
		align : 'stretch'
	},
	buttons: [
{
    xtype: 'tbfill'
},{
    xtype: "button",
    iconCls:'common-icon-cancel',
    text: "取消",
    listeners:{
    	click:'onMGTdel'
    },
}, {
	xtype: 'button',
    text: '确定',
    scale:'small',
    iconCls: 'common-icon-save',
    handler:'onQueryCarInfo',
},{
    xtype: 'tbfill'
}
	              ],
	items: [
            {
                         autoScroll : true,
                          xtype:'container',
                          layout: 'hbox',
                          border:false,
                          columns: 3,
                          margin : '10 0',
			              items :[
			                        {
			                            xtype : 'textfield',
			                            fieldLabel : '入库单号',
			                            name : 'code',
			                            labelWidth : 80,
			                            width:190,
			                            margin : '0 20',
			                            editable:false
			                        },
			                        {
			                            xtype : 'textfield',
			                             fieldLabel : 'VIN',
			                             name : 'venderName',
			                             reference:'venderNameR',
			                             labelWidth : 30,
			                             width:200,
			                             margin : '0 20',
			                             allowBlank:false
			                            },
			                            /*{ xtype: "displayfield",cls:'red',value: "*" },*/
			                            {
			                              xtype : 'combobox',
			                              fieldLabel : '入库业务类型',
			                              name : 'venderName',
			                              reference:'venderNameR',
			                              labelWidth : 110,
			                              width:200,
			                              margin : '0 0 0 20',
			                              allowBlank:false
			                            }
			                    ]
           },{
              autoScroll : true,
                          xtype:'container',
                          layout: 'hbox',
                          border:false,
                          columns: 3,
                          margin : '10 0',
              items :[
                        {
                            xtype:'datefield',
                            width : 190,
                            labelWidth : 80,
                            endDateField:'etime',
                            fieldLabel: '开单日期',
                            format: 'Y-m-d',
                            margin : '0 20',
                            name:'createDateFrom'
                        },
                        {
                            xtype:'datefield',
                            width : 140,
                            labelWidth : 40,
                            margin:'0',
                            align:'center',
                            startDateField:'stime',
                            fieldLabel: '至',
                            format: 'Y-m-d',
                            name:'createDateTo',
                            margin : '0 0 0 10'
                        },                      
                        {
                            xtype : 'combobox',
                             fieldLabel : '是否入账',
                             name : 'venderName',
                             reference:'venderNameR',
                             labelWidth : 80,
                             width:200,
                             margin : '0 5 0 20',
                             allowBlank:false
                            },{
                              xtype:'button',
                              text:'查询',
                              cls:'nu-btn-nobg',
                              iconCls: 'common-icon-serach',
                              margin:'0 10',
                              listeners:{
                                click:'checkstockInSelect'
                              }
                            }
                    ]
           },{
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
           	        	   text: '序号',
           	        	   hidden:false
           	           },
           	           {
           	        	   xtype: 'gridcolumn',
           	        	   dataIndex: 'fullName',
           	        	   width: '35%',
           	        	   text: '入库单编号',
           	        	   hidden:false
           	           },
           	           {
           	        	   xtype: 'gridcolumn',
           	        	   text: '入库业务类型',
           	        	   width: '30%',
           	        	   dataIndex: 'shortName',
           	        	   hidden:false

           	           },{ 
                        xtype: 'gridcolumn',  text: '开单日期',align:'center' , dataIndex: 'createDate', width: '30%',renderer: function(value) {
                          if(value == null) {
                            return "";
                          } else {
                            return Ext.Date.format(new Date(value), 'Y-m-d H:i:s');
                          }
                        }},{

           	        	   xtype: 'gridcolumn',
           	        	   text: '开单人',
           	        	   dataIndex: 'levelString',
           	        	   hidden:false
           	           },{

           	        	   xtype: 'gridcolumn',
           	        	   text: '是否全部入账',
           	        	   dataIndex: 'contactPerson',
           	        	   hidden:false
           	           }
           	           ],
           	           viewConfig: {
           	        	   enableTextSelection: true
           	           },
            }
            ]
});