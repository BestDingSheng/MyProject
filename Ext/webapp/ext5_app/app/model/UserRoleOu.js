Ext.define('Evcorp.model.UserRoleOu', {
    extend: 'Evcorp.model.Base',

    requires: [
        'Ext.data.field.Field'
    ],
    fields: [
        {
            name:'id'
        },
        {
            name:'roleName'
        },
        {
            name:'ouName'
        },
        {
        	name:'description'
        }
    ]
});