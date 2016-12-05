Ext.define('Evcorp.view.callcar.UpdateDeliveryStatusWin', {
	extend : 'Ext.window.Window',
	alias : 'widget.UpdateDeliveryStatusWin',
	requires : [ 'Evcorp.view.callcar.UpdateDeliveryStatusWinViewController',
			'Evcorp.view.callcar.UpdateDeliveryStatusWinViewModel',
			'Ext.grid.Panel', 'Ext.tab.Panel', 'Ext.grid.column.Column',
			'Ext.grid.View', 'Ext.toolbar.Toolbar', 'Ext.button.Button',
			'Ext.toolbar.Fill', 'Ext.form.Panel', 'Ext.form.field.ComboBox',
			'Ext.form.DateField' 
			],
	viewModel : {
		type : 'UpdateDeliveryStatusWin'
	},
	controller : 'UpdateDeliveryStatusWin',
	referenceHolder: true,
	//autoScroll : true,
	modal : true,
	autoScroll:true,
	title : '更新发货状态',
	closeAction : 'destory',
	layout : {
		type : 'vbox',
		align : 'stretch'
	},
	items: [
	        {
				xtype:'flowChartPanel',
				reference:'flowChartPanel',
				border:false,
	        },{
	        	xtype:'uploadAttachmentPanel'
	        },{

		xtype:'panel',
		autoScroll:false,
		padding:10,
		items:[{
	                 xtype: 'form',
	                 width:'100%',
	                 reference:'commentForm',
	                 api:{
	                	 submit:callCarContro.uploadDeliveryFile
	                 },
	                 height:200,
	                 border:false,
	                 autoScroll:true,
	                 buttonAlign:'center',
	                 items: [{
	    		       	 border:false,
	    		    	 html:'<div class="alert alert-info">注：请务必填写完整信息，并上传发货单附件</div>',
	                 },{
	      	                xtype:'panel',
	      	                layout: 'hbox',
	      	                border:false,
	      	                margin : '20 0 10 0',
	      	                items :[
  	                            {
  	                                xtype : 'textfield',
  	                                fieldLabel : '厂家订单号',
  	                                name : 'venderOrderNo',
  	                                labelWidth : 80,
  	                                width : 280,
  	                                margin : '0 20',
  	                                allowBlank:false
  	                            },
  	                            {
  	                                xtype : 'textfield',
  	                                fieldLabel : '发货单号',
  	                                name : 'deliveryNo',
  	                                labelWidth : 100,
  	                                width : 280,
  	                                margin : '0 10',
  	                                allowBlank:false
  	                            }
  	                        ]
	                 },{
	      	                xtype:'panel',
	      	                layout: 'hbox',
	      	                margin : '10 0 20 0',
	      	                border:false,
	      	                items :[
  	                            {   
  	                                xtype: 'panel',
  	                                border:false,           
  	                                width : 280,
  	                                margin : '0 20',
  	                                layout:'hbox',
  	                                items: [{
                                            xtype:'datefield',
                                            width : 280,
                                            labelWidth : 80,
                                            fieldLabel: '发货日期',
                                            format: 'Y-m-d',
                                            name:'deliveryDate',
                                            allowBlank:false,
                                            editable:false
                                        }]
  	                            },
  	                            {   
  	                                xtype: 'panel',
  	                                border:false,           
  	                                width : 280,
  	                                margin : '0 10',
  	                                layout:'hbox',
  	                                items: [{
	                                            xtype:'datefield',
	                                            width : 280,
	                                            labelWidth : 120,
	                                            fieldLabel: '预计到货日期',
	                                            format: 'Y-m-d',
	                                            name:'expectedArriveDate',
	                                            allowBlank:false,
	                                            editable:false
  	                                        }]
  	                            }]
	                 },{
	                     xtype: "textarea",
	                     margin:'0 auto',
	                     padding:'15',
	                     fieldLabel: "备注",
	                     name: "comment",
	                     labelSepartor: "：",
	                     labelWidth: 80,
	                     width: '90%',
	                 }],
	                 buttons: [{
	                     xtype : "button",
	                     text : "取消",
	                     margin : "0 50 0 0",
	                     iconCls:'common-icon-del',
	                     handler : function() {
	                         this.up("window").close();
	                     },
	                 }, 
	                 {
	                     xtype : "button",
	                     cls:'btn-success',
	                     text : "提交",
	                     icon:'images/user_sure.png',
	                     margin : "0 50 0 0",
	                     listeners:{
	                    	 click:'onSubmitClick'
	                     },
	                 }]
		         }
		       ]
	
	}]
});