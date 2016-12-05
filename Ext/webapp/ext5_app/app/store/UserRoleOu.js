Ext.define('Evcorp.store.UserRoleOu', {
    extend: 'Ext.data.Store',
    alias: 'store.UserRoleOu',
    requires: [
        'Evcorp.model.UserRoleOu'
    ],
	//autoLoad:true,
	model:'Evcorp.model.UserRoleOu',
    proxy: {
        type: 'direct',
        api: {
            read: auUserContro.findRolesByUser
        },
        reader: {
            rootProperty: 'records'
        }
    }
});