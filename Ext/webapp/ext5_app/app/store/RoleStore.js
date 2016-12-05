Ext.define('Evcorp.store.RoleStore', {
    extend: 'Ext.data.Store',
    
    alias: 'store.RoleStore',

    requires: [
        'Evcorp.model.Role'
    ],
    model: 'Evcorp.model.Role'
    /*constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'RoleStore',
            model: 'Evcorp.model.Role',
            proxy : {
			    type: 'direct',
			    directFn: sysRoleContro.readAllRole
			  } 
        }, cfg)]);
    }*/
});