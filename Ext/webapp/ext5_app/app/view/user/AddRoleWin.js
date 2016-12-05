Ext.define('Evcorp.view.user.AddRoleWin', {
    extend: 'Ext.window.Window',
    alias: 'widget.addrolewin',

    requires: [
        'Evcorp.view.user.AddRoleWinViewController',
        'Evcorp.store.RoleStore',
        'Ext.tree.Panel',
        'Ext.tree.View'
    ],
    controller:'useraddrolewin',
    height: 200,
    width: 300,
    title: '添加角色窗口',
    modal: true,
    closable: true,
    layout:'vbox',
    items:[
       {
    	  xtype:'combobox' ,
    	  fieldLabel: '角色',
    	  labelAlign:'left',
    	  labelWidth:50,
    	  margin:'20 10',
    	  itemId:'roleCombo',
    	  displayField:'description',
    	  valueField:'id',
    	  editable:false,
    	  store:'RoleStore',
    	  listeners: {
    	        select: 'onRoleComboSelect'
    	    }
       },{
    	  xtype:'combobox',
    	  fieldLabel: '组织',
    	  itemId:'ouCombo',
    	  labelWidth:50,
    	  displayField:'name',
    	  valueField:'id',
    	  store:'OuStore',
    	  editable:false,
    	  margin:'10 10'
       }    
    ],
    buttons: [
        {text:'确定',handler:'onSaveRoleClick' }
    ]

});