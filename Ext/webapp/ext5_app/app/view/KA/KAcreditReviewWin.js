Ext
		.define(
				'Evcorp.view.KA.KAcreditReviewWin',
				{
					extend : 'Ext.window.Window',
					alias : 'widget.KAcreditReviewWin',
					requires : [
							'Evcorp.view.KA.KAcreditReviewWinViewController',
							'Evcorp.view.KA.KAcreditReviewWinViewModel',
							'Ext.grid.Panel', 'Ext.tab.Panel',
							'Ext.grid.column.Column', 'Ext.grid.View',
							'Ext.toolbar.Toolbar', 'Ext.button.Button',
							'Ext.toolbar.Fill', 'Ext.form.Panel',
							'Ext.form.field.ComboBox', 'Ext.form.DateField'],
					viewModel : {
						type : 'KAcreditReviewWin'
					},
					controller : 'KAcreditReviewWin',
					modal : true,
					closable : true,
					title : '提交征信审核材料',
					layout : {
						type : 'vbox',
						align : 'stretch'
					},
					autoScroll : true,
					heigth : '80%',
					items : [ {
						xtype : 'form',
						api : {
							submit : 'contractCarInfoContro.saveContractCarInfo'
						},
						autoScroll : true,
						bodyPadding : '10',
						border : false,
						reference : 'contractCarInfoForm',
						flex : 1,
						items : [
						         {
										xtype : 'container',
										layout : {
											type : 'hbox',
											align : 'stretch'
										},
										items : [
												{
													xtype : 'container',
													flex : 1,
													defaults : {
														width : 340
													},
													items : [
																{
																	xtype : 'textfield',
																	fieldLabel : '编号',
																	readOnly : true,
																	labelWidth : 60,
																	width : 180,
																	margin:10
																},{
																	xtype:'container',
																	layout:'hbox',
																	items:[
																			{
																				xtype : 'textfield',
																				fieldLabel : '产品名称',
																				readOnly : true,
																				labelWidth : 60,
																				width : 180,
																				margin:'0 10'
																			},{
																				xtype : 'button',
																				cls:'nu-btn-nobg',
																				iconCls : 'nu-search',
																				//text : '查找',
																				//margin:'0 5',
																				handler : 'queryCarList'
																			}, 
																	       ]
																},{
																	xtype : 'textfield',
																	fieldLabel : '车型',
																	readOnly : true,
																	labelWidth : 60,
																	width : 180,
																	margin:10
																}
																 ]
												},
												{
													xtype : 'container',
													flex : 1,
													defaults : {
														width : 260
													},
													items : [
																{
																	xtype : 'textfield',
																	fieldLabel : '二网',
																	readOnly : true,
																	labelWidth : 60,
																	width : 180,
																	margin:10
																},{
																	xtype : 'textfield',
																	fieldLabel : '颜色',
																	readOnly : true,
																	labelWidth : 60,
																	width : 180,
																	margin:10
																},{
																	xtype : 'textfield',
																	fieldLabel : '证件号码',
																	readOnly : true,
																	labelWidth : 60,
																	width : 180,
																	margin:10
																}
																 ]
												},
												{
													xtype : 'container',
													flex : 1,
													defaults : {
														width : 260
													},
													items : [
																{
																	xtype : 'textfield',
																	fieldLabel : '车系',
																	readOnly : true,
																	labelWidth : 60,
																	width : 180,
																	margin:10
																},{
																	xtype : 'textfield',
																	fieldLabel : '姓名',
																	readOnly : true,
																	labelWidth : 60,
																	width : 180,
																	margin:10
																},{
																	xtype: 'datefield',
																	fieldLabel : '出生日期',
																	margin:10,
																	name : 'xxx',
																	labelWidth : 60,
																	width : 180,
																	format : 'Y-m-d'
																}
																 ]
												},
												{
													xtype : 'container',
													flex : 1,
													defaults : {
														width : 260
													},
													items : [{
														xtype : 'textfield',
														fieldLabel : '国籍',
														readOnly : true,
														labelWidth : 80,
														width : 180,
														margin:10
													},{
														xtype : 'combobox',
														fieldLabel : '申请人性质',
														valueField : 'xxx',
														name:'xxxxx',
														labelWidth : 80,
														width : 180,
														margin:10
													},{
														xtype : 'textfield',
														fieldLabel : '证件类型',
														readOnly : true,
														labelWidth : 80,
														width : 180,
														margin:10
													}]
												} ]	
									},{
						        	    xtype : 'container',
										layout : 'hbox',
										items : [
						        	 {
					                     xtype: "textarea",
					                     padding:'15 0 15 10',
					                     fieldLabel: "备注",
					                     name: "comment",
					                     labelSepartor: "：",
					                     labelWidth: 60,
					                     width: '100%',
					                 }]
						         },
								{
									xtype : 'fieldset',
									title : '附件信息',
									itemId : 'attachmentFieldset',
									//height : 170,
									collapsible : true,
									layout : {
										type : 'vbox',
										align : 'stretch'
									},
									items : [ {
										xtype : 'uploadAttachmentPanel',
										itemId : 'insuranceAttachmentPanelId',
										flex : 1,
										autoScroll : true,
										disabled : true,
										margin:'10 0',
										height : 180
									},{
					                     xtype: "textarea",
					                     padding:'15 0 15 10',
					                     fieldLabel: "备注",
					                     name: "xxxxx",
					                     labelSepartor: "：",
					                     labelWidth: 60,
					                     width: '100%',
					                 }  ]

								} ],
						dockedItems : [ {
							xtype : 'toolbar',
							flex : 1,
							dock : 'bottom',
							items : [ {
								xtype : 'tbfill'
							},{
                                xtype : "button",
                                text : "放弃购车",
                                margin : "0 50 0 0",
                                iconCls:'common-icon-del',
                                handler : function() {
                                    this.up("window").close();
                                },
                            },{
								xtype : 'button',
								text : '确认购车',
								iconCls:'shopping-cart-checkmark',
								handler : 'onContraCarInfoSave'
							},{
								xtype : 'tbfill'
							} ]
						} ]
					} ]
				});