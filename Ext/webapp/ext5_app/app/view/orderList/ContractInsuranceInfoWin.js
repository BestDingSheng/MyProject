Ext.define('Evcorp.view.orderList.ContractInsuranceInfoWin', {
	extend : 'Ext.window.Window',
	alias : 'widget.contractinsuranceinfowin',
	requires : [

	'Evcorp.view.orderList.ContractInsuranceInfoWinViewController',
			'Evcorp.view.orderList.ContractInsuranceInfoWinViewModel',
			'Ext.grid.Panel', , 'Ext.grid.column.Column', 'Ext.grid.View',
			'Ext.toolbar.Toolbar', 'Ext.button.Button', 'Ext.toolbar.Fill',
			'Ext.form.Panel', 'Ext.form.field.ComboBox'

	],
	viewModel : {
		type : 'contractinsuranceinfowin'
	},
	controller : 'contractinsuranceinfowin',

	modal : true,
	referenceHolder : true,
	closable : true,
	title : '合约车资产保险信息',
	id : 'ContractInsuranceInfoWin',
	closeAction : 'destory',
	layout : {
		type : 'vbox',
		align : 'stretch'
	},
	items : [ {
		xtype : 'form',
		reference : 'contranctInsuranceForm',
		itemId : 'contranctInsuranceFormItemId',
		api : {
			submit : 'contractCarInfoContro.saveInsurance'
		},
		items : [ {
			xtype : 'container',
			margin : '10 50',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '合约车资产ID',
				name : 'carInfoId',
				hidden:true,
				itemId : 'carInfoItemId',
			}, {
				xtype : 'textfield',
				fieldLabel : '保险单号',
				name : 'insuranceNo',
				itemId : 'insuranceNoItemId',
//				bind : '{conIns.insuranceNo}'
			}, {
				xtype : 'textfield',
				fieldLabel : '保险ID',
				name : 'id',
				itemId : 'idItemId',
				hidden:true,
//				bind : '{conIns.id}'
			}, {
				xtype : 'combobox',
				fieldLabel : '保险公司',
				name : 'insuranceCompany',
				itemId : 'insuranceCompanyItemId',
				valueField : 'code',
				displayField : 'nameCn',
				allowBlank : false,
				bind : {
					store : '{ContractInsurance}',
//					value : '{conIns.insuranceCompany}'
				}
			}, {
				xtype : 'combobox',
				fieldLabel : '保险年份',
				name : 'insuranceYear',
				itemId : 'insuranceYearItemId',
				valueField : 'code',
				displayField : 'name',
				allowBlank : false,
				bind : {
					store : '{ContractInsuranceYear}',
//					value : '{conIns.insuranceYear}'
				}
			}, {
				xtype : 'combobox',
				fieldLabel : '类型',
				name : 'type',
				itemId : 'typeItemId',
				valueField : 'code',
				displayField : 'nameCn',
				allowBlank : false,
				readOnly : true,
				bind : {
					store : '{ContractInsuranceType}',
//					value : '{conIns.type}'
				}
			}, {
				xtype : 'datefield',
				fieldLabel : '开始日期',
				format : 'Y-m-d',
				allowBlank : false,
				name : 'startDate',
				itemId : 'startDateItemId',
//				bind : '{conIns.startDate}'
			}, {
				xtype : 'datefield',
				fieldLabel : '结束日期',
				format : 'Y-m-d',
				allowBlank : false,
				name : 'endDate',
				itemId : 'endDateItemId',
//				bind : '{conIns.endDate}'
			},
			{
				xtype : 'checkbox',
				name : 'isValid',
				itemId : 'isValidItemId',
				fieldLabel : '是否生效',
				readOnly : true,
//				bind : '{conIns.isValid}'
			}]
		}, {
			xtype : 'container',
			layout : 'hbox',
			items : [ {
				xtype : 'button',
				margin : '5 100',
				text : '确定',
				itemId : 'saveInsuranceAddItemId',
//				handler : 'saveInsuranceAdd'
			}, {
				xtype : 'button',
				margin : '5 10',
				text : '取消',
				handler : 'onCancel'
			} ]
		} ]
	} ]

});