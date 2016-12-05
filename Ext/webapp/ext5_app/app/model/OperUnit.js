
Ext.define('Evcorp.model.OperUnit', {
    extend: 'Evcorp.model.Base',

    requires: [
        'Ext.data.field.Field'
    ],
    fields: [
        {
            name:'id'
        },
        {
            name: 'name'
        },
        {
        	name: 'fullName'
        }
    ]
});