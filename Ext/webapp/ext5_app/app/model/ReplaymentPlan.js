/*
 * File: app/model/Role.js
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

Ext.define('Evcorp.model.ReplaymentPlan', {
    extend: 'Evcorp.model.Base',

    requires: [
        'Ext.data.field.Field'
    ],
    identifier: 'negative',
    fields: [
        {
            name:'id'
        },
        {
            name:'numberOfPeriods'
        },
        {
            name:'startDate'
        },
        {
            name: 'endDate'
        },
        {
        	name:'monthlyAmount'
        },
        {
            name: 'deductionPlanDate'
        }
    ],
    proxy: {
        type: 'direct',
        api: {
            read: contractCarOrderContro.findReplaymentPlanList,
        },
        reader: {
            type: 'json',
            rootProperty: 'records',
            totalProperty: 'total'
        },
        writer: {
	    	writeAllFields: true
	    }
    }
});