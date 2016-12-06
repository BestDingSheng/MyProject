/*
 * File: app/view/role/RoleMangerPanelViewModel.js
 *
 * This file was generated by Sencha Architect version 3.1.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 5.0.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 5.0.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Evcorp.view.intention.IntentionOrderPanelViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.intentionorderpanel',
    stores: {
        olOrderStore: {
            model: 'Evcorp.model.OlOrder',
            pageSize: 20,
            autoLoad: true
        },
        isPointStore:{
        	fields : [ 'code', 'name' ],
        	data:[
        	      {code:'all',name:'全部'},
        	      {code:'1',name:'是'},
        	      {code:'0',name:'否'}
        	      ]
        }
    }
});