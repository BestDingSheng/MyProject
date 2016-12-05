/*
 * File: app/view/CustomerWindow.js
 *
 * This file was generated by Sencha Architect version 3.1.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 5.0.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 5.0.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Evcorp.view.salesOrder.MortgageWin', {
	extend : 'Ext.window.Window',
	alias : 'widget.mortgageWin',

	requires : [ 'Evcorp.view.salesOrder.MortgageWinViewController',
			'Evcorp.view.salesOrder.MortgageWinViewModel', 'Ext.tab.Panel',
			'Ext.form.field.ComboBox', 'Ext.form.field.Number',
			'Ext.form.field.Date', 'Ext.tab.Panel', 'Ext.toolbar.Toolbar',
			'Ext.tab.Tab', 'Ext.form.field.TextArea', 'Ext.form.RadioGroup',
			'Ext.form.TextArea' ],

	viewModel : {
		type : 'mortgageWin'
	},
	controller : 'mortgageWin',
	// closeAction:'hide',
	title : '贷款信息',
	modal : true,
	closable : true,
	autoScroll : true,
	itemId : 'MortgageWin',
	items : [ {
		xtype : 'form',
		itemId:'mortgageWinItem',
		border : 0,
		layout : {
			type : 'fit',
			align : 'stretch'
		},
		reference : 'mortgageWinForm',
		api : {
			submit : 'salesOrderContro.saveOrUpdateMortgage'
		},
		items : [ {
			xtype : 'container',
			layout : 'vbox',
			height : '100%',
			items : [ {
				xtype : 'container',
				layout : 'hbox',
				items : [ {
					xtype : 'textfield',
					fieldLabel : 'ID',
					labelWidth : 70,
					width : 200,
					name : 'id',
					hidden:true	
				}, {
					xtype : 'textfield',
					fieldLabel : '订单编号',
					labelWidth : 70,
					width : 200,
					itemId:'saleOrderNoItem',
					name : 'saleOrderNo',
					hidden:true	
				},{
					xtype : 'textfield',
					margin : '5 30',
					fieldLabel : '贷款年限',
					allowBlank : false,
					labelWidth : 70,
					width : 200,
					name : 'mortgagePeriod'
				}, {
					xtype : 'textfield',
					margin : '5 30',
					fieldLabel : '贷款金额',
					name : 'mortgageAmount',
					allowBlank : false,
					labelWidth : 70,
					width : 200
				} ]
			}, {
				xtype : 'container',
				layout : 'hbox',
				items : [ {
					xtype : 'combobox',
					valueField : "code",
					displayField : "nameCn",
					margin : '5 30',
					labelWidth : 70,
					width : 200,
					fieldLabel : '贷款银行',
					allowBlank : false,
					name : 'mortgageBank',
					bind : {
						store : '{mortgageBankStore}'
					}
				}, {
					xtype : 'checkbox',
					margin : '5 30',
					fieldLabel : '是否贷款审核通过',
					labelWidth : 70,
					width : 200,
					name : 'isMortgageAudited'
				} ]
			}, {
				xtype : 'container',
				layout : 'hbox',
				items : [ {
					xtype : 'textareafield',
					margin : '5 30',
					fieldLabel : '备注',
					labelWidth : 70,
					width : 460,
					name : 'mortgageRemark'
				} ]
			}, {
				xtype : 'container',
				layout : 'hbox',
				items : [ {
					xtype : 'button',
					itemId:'mortgageSaveButton',
					margin : '5 130',
					width : 80,
					text : '保存',
					listeners : {
						click : 'onMortgageSaveClick'
					}
				}, {
					xtype : 'button',
					itemId:'mortgageCancelButton',
						margin : '5',
					width : 80,
					text : '取消',
					listeners : {
						click : function(){
							this.up("window").close();
						}
					}
				} ]
			}

			]
		} ]
	} ]
});