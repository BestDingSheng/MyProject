/*
 * File: app/model/Person.js
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

Ext.define('Evcorp.model.Person', {
    extend: 'Evcorp.model.Base',

    requires: [
        'Ext.data.field.Field',
        'Evcorp.model.Base'
    ],

    fields: [
        {
        	name:'personUid',
        },     
        {
            name: 'realName'
        },
        {
            name: 'wechatOpenId'
        },
        {
            name: 'nickName'
        },
        {
            name: 'sex'
        },
        {
            name: 'city'
        },
        {
            name: 'country'
        },
        {
            name: 'province'
        },
        {
            name: 'headimgurl'
        },
        {
            name: 'subscribeTime'
        },
        {
        	name:'subscribed'
        },
        {
            name: 'mobileNumber'
        },
        {
            name: 'carModel'
        },
        {
            name: 'carModelName'
        },
        {
            name: 'carBrand'
        },
        {
            name: 'carBrandName'
        },
        {
            name: 'licensePlateNumber'
        },
        {
            name: 'carYear'
        },
        {
            name: 'driveYear'
        },
        {
            name: 'createTime'
        },
        {
        	name:'birthDay'
        },
        {
            name: 'createBy'
        },
        {
            name: 'lastestUpdateTime'
        },
        {
            name: 'lastestUpdateBy'
        },
        {
        	name:'emailAddr'
        },
        {
        	name:'gzhOpenId'
        },
        {
        	name:'psnCity'
        },
        {
        	name:'psnDistrict'
        },
        {
        	name:'psnAddress'
        }
    ],
    proxy: {
        type: 'direct',
        api: {
            read: personContro.findPersonList
        },
        reader: {
            type: 'json',
            rootProperty: 'records',
            totalProperty: 'total'
        }
    }
});