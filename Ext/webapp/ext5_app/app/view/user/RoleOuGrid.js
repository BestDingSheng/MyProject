Ext.define('Evcorp.view.user.RoleOuGrid', {
    extend: 'Ext.grid.Panel',
    
    store:'UserRoleOu',
    layout: {
        type: 'fit',
        align: 'stretch'
    },
    userId : 123,
	selModel:Ext.create('Ext.selection.CheckboxModel',{mode:'SIMPLE'}),
	columns:[
			 {
				text:'id',
				dataIndex:'id',
				hidden:true
			 },
	         {
	        	text:'角色',
	        	dataIndex:'roleName',
	        	width:150
	         },{
	        	 text:'角色描述',
	        	 dataIndex:'description',
	        	 width:150
	         },{
	        	 text:'组织',
	        	 dataIndex:'ouName',
	        	 width:150
	         }
         ]
});