Ext.define('Evcorp.store.OuStore', {
    extend: 'Ext.data.Store',
    
    alias: 'store.OuStore',

    requires: [
        'Evcorp.model.OperUnit'
    ],
	autoLoad: false,
	model:'Evcorp.model.OperUnit'
/*	proxy: {
        type: 'direct',
        api: {
            read: sysOperUnitController.readAll
        },
        reader: {
            rootProperty: 'records'
        }
    }*/
});