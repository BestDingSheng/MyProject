

Ext.define('Evcorp.model.OuType', {
    extend: 'Evcorp.model.Base',
    requires: [
        'Ext.data.field.Field'
    ],
    fields: [
        {
            name:'id'
        },
        {
            name: 'ouTypeName'
        },
        {
            name: 'entityName'
        }
    ],
    proxy:{
    	type: 'rest',
        api: {
            read: 'role/read',
            update: 'role/update',
            create: 'role/create',
            destroy: 'role/destroy'  //destroy not 'destory'
        }
    	//url: 'role'
    }
});