Ext.define('Evcorp.view.AssetMGT.ContractInsuranceWin', {
	extend : 'Ext.window.Window',
	alias : 'widget.contractinsurancewin',
	requires : [

	'Evcorp.view.AssetMGT.ContractInsuranceWinViewController',
			'Evcorp.view.AssetMGT.ContractInsuranceWinViewModel',
			'Ext.grid.Panel', , 'Ext.grid.column.Column', 'Ext.grid.View',
			'Ext.toolbar.Toolbar', 'Ext.button.Button', 'Ext.toolbar.Fill',
			'Ext.form.Panel', 'Ext.form.field.ComboBox'

	],
	viewModel : {
		type : 'contractinsurancewin'
	},
	controller : 'contractinsurancewin',

	modal : true,
	referenceHolder : true,
	closable : true,
	title : '合约车资产保险信息',
	id : 'ContractInsuranceWin',
	closeAction : 'destory',
	layout : {
		type : 'vbox',
		align : 'stretch'
	},
	items : [ {
		xtype : 'form',
		reference : 'contranctInsuranceForm',
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
				itemId : 'carInfoItemId'
			}, {
				xtype : 'textfield',
				fieldLabel : '保险单号',
				name : 'insuranceNo',
				bind : '{conIns.insuranceNo}'
			}, {
				xtype : 'textfield',
				fieldLabel : '保险单号',
				name : 'id',
				hidden:true,
				bind : '{conIns.id}'
			}, {
				xtype : 'combobox',
				fieldLabel : '保险公司',
				name : 'insuranceCompany',
				valueField : 'code',
				displayField : 'nameCn',
				allowBlank : false,
				bind : {
					store : '{ContractInsurance}',
					value : '{conIns.insuranceCompany}'
				}
			}, {
				xtype : 'combobox',
				fieldLabel : '保险年份',
				name : 'insuranceYear',
				valueField : 'code',
				displayField : 'name',
				allowBlank : false,
				bind : {
					store : '{ContractInsuranceYear}',
					value : '{conIns.insuranceYear}'
				}
			}, {
				xtype : 'combobox',
				fieldLabel : '类型',
				name : 'type',
				valueField : 'code',
				displayField : 'nameCn',
				allowBlank : false,
				bind : {
					store : '{ContractInsuranceType}',
					value : '{conIns.type}'
				}
			}, {
				xtype : 'datefield',
				fieldLabel : '开始日期',
				format : 'Y-m-d',
				allowBlank : false,
				name : 'startDate',
				bind : '{conIns.startDate}'
			}, {
				xtype : 'datefield',
				fieldLabel : '结束日期',
				format : 'Y-m-d',
				allowBlank : false,
				name : 'endDate',
				bind : '{conIns.endDate}'
			},
			{
				xtype : 'checkbox',
				name : 'isValid',
				fieldLabel : '是否生效',
				bind : '{conIns.isValid}'
			}]
		}, {
			xtype : 'container',
			layout : 'hbox',
			items : [ {
				xtype : 'button',
				margin : '5 100',
				text : '保存',
				handler : 'saveInsuranceAdd'
			}, {
				xtype : 'button',
				margin : '5 10',
				text : '取消',
				handler : 'onCancel'
			} ]
		} ]
	} ]

});