Ext
		.define(
				'Evcorp.view.salesOrder.SixPieceSuitWin',
				{
					extend : 'Ext.window.Window',
					alias : 'widget.sixPieceSuitWin',
					requires : [
							'Evcorp.view.salesOrder.SixPieceSuitWinViewController',
							'Evcorp.view.salesOrder.SixPieceSuitWinViewModel',
							'Ext.grid.Panel', 'Ext.tab.Panel',
							'Ext.grid.column.Column', 'Ext.grid.View',
							'Ext.toolbar.Toolbar', 'Ext.button.Button',
							'Ext.toolbar.Fill', 'Ext.form.Panel',
							'Ext.form.field.ComboBox', 'Ext.form.DateField' ],
					viewModel : {
						type : 'sixPieceSuitWin'
					},
					controller : 'sixPieceSuitWin',
					referenceHolder : true,
					title : '六件套',
					height : 600,
					width : 1000,
					closeAction : 'destory',
					layout : {
						type : 'fit',
						align : 'stretch',
					},
					buttonAlign : 'center',
					autoScroll : true,
					items : [ {
						xtype : 'panel',
						layout : 'auto',
						//flex : 1,
						//								title:'上传征信资料',
						autoScroll : false,
						border : true,
						items : [
								{
									xtype : 'container',
									layout : 'auto',
									border : true,
									cls : 'p20',
									html : '<div class="red">※ 请提供一下材料SVN地址</div>'
											+ "<div class='halfBox tip-box'>"
											+ "<p>1.行驶证<span class='steelblue'></span></p>"
											+ "<p>2.车辆产证 <span class='steelblue'></span></p>"
											+ "<p>3.身份证正反 <span class='steelblue'></span></p>"
											+ "<p>4.居住证正反 <span class='steelblue'></span></p>"
											+ "<p>5.车辆购置税完税证明<span class='steelblue'></span></p>"
											+ "<p>6.机动车购买发票 <span class='steelblue'></span></p>"
											+ "<p>7.车辆保单<span class='steelblue'></span></p>"
											+ "</div>",
								}, {
									xtype : 'container',
									layout : 'hbox',
									items : [ {
										xtype : 'textfield',
										fieldLabel : '订单编号',
										reference : 'saleOrderNoRef',
										name : 'saleOrderNo',
										itemId : 'saleOrderNoItem',
										labelWidth : 70,
										width : 200,
										hidden : true
									}, {
										xtype : 'textfield',
										fieldLabel : 'SVN地址',
										reference : 'oemInfoSvnPathRef',
										name : 'oemInfoSvnPath',
										itemId:'oemInfoSvnPathItem',
										labelWidth : 70,
										width : 400
									}, {
										xtype : 'button',
										itemId:'sixPieceSuitSaveButton',
										margin : '0 30',
										text : '保存',
										icon:'images/save.png', 
										cls:'nu-btn-nobg',
										handler:'saveSvnAddress'
									} ]
								} ]

					} ],
					buttons : [ {
						xtype : "button",
						text : "关闭",
						margin : "0 20 0 0",
						icon:'images/save.png', 
						handler : function() {
							this.up("window").close();
						},
					} ]
				});