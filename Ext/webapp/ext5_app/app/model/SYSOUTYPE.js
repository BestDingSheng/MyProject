
Ext.define('Evcorp.model.SYSOUTYPE', {
    extend: 'Evcorp.model.Base',
    
    requires: [
        'Ext.data.field.Field'
    ],
    
    fields: [
        {
            name: 'id'
        },
        {
            name: 'ouTypeName'
        }
    ]
});