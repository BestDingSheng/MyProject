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

Ext.define('Evcorp.model.SnCustomerSalesOrder', {
    extend: 'Evcorp.model.Base',

    requires: [
        'Ext.data.field.Field'
    ],
    identifier: 'negative',

    fields: [
        {
        	name:'id',
        },     
        {
            name: 'code'
        },
        {
            name: 'cusCode'
        },
        {
            name: 'cusName'
        },
        {
            name: 'cusContact'
        },
        {
            name: 'cusAddr'
        },
        {
            name: 'cusIdNum'
        },
        {
            name: 'productName'
        },
        {
            name: 'vin'
        },
        {
        	name: 'carProductCode'
        },
        {
        	name: 'storageCode'
        },
        {
        	name:'slocCode'
        },
        {
        	name:'dispatchedDate'
        },
        {
        	name:'saleCreate'
        },
        {
        	name:'saleExecutive'
        },
        {
        	name:'saleCreateName'
        },
        {
        	name:'saleExecutiveName'
        },
        {
        	name:'source'
        },
        {
        	name:'status'
        },
        {
        	name:'contractNo'
        },
        {
        	name:'contractSignedDate'
        },
        {
        	name:'orderAmount'
        },
        {
        	name:'directivePrice'
        },
        {
        	name:'discountPrice'
        },
        {
        	name:'actualPrice'
        },
        {
        	name:'upholsterContent'
        },
        {
        	name:'servicePresentContent'
        },
        {
        	name:'upholsterAmount'
        },
        {
        	name:'carInsAmount'
        },
        {
        	name:'actualInsAmount'
        },
        {
        	name:'servicePresentAmount'
        },
        {
        	name:'loanAmount'
        },
        {
        	name:'chargerFee'
        },
        {
        	name:'arAmount'
        },
        {
        	name:'recvAmoount'
        },
        {
        	name:'prepayAmount'
        },
        {
        	name:'invoiceMode'
        },
        {
        	name:'balanceMode'
        },
        {
        	name:'ownerDriver'
        },
        {
        	name:'isBigCustomer'
        },
        {
        	name:'bigCusName'
        },
        {
        	name:'remark'
        },
        {
        	name:'isCreditAudited'
        },
        {
        	name:'creditInvestigationSubmitDate'
        },
        {
        	name:'creditInvestigationAuditDate'
        },
        {
        	name:'chargerMethod'
        },
        {
        	name:'isFixedPark'
        },
        {
        	name:'isChargeInstall'
        },
        {
        	name:'drivingLicence'
        },
        {
        	name:'licenseNo'
        },
        {
        	name:'oemInfoSvnPath'
        },
        {
        	name:'processInstanceId'
        },
        {
        	name:'orderType'
        },
        {
        	name:'cusNature'
        },
        {
        	name:'cusIdType'
        },
        {
        	name:'birthday'
        },
        {
        	name:'nationality'
        },
        {
        	name:'receiveMoneyConfirmDate'
        },
        {
        	name:'isReceiveMoney'
        },
        {
        	name:'creditAuditor'
        },
        {
        	name:'stockOutDate'
        },
        {
        	name:'deliveryDate'
        },
        {
        	name:'deliveryMan'
        },
        {
        	name:'chargeBoxFinishDate'
        },
        {
        	name:'sixPieceSuitSubmitDate'
        },
        {
        	name:'createDate'
        },
        {
        	name:'createDateStart'
        },
        {
        	name:'createDateEnd'
        },
        {
        	name:'createBy'
        },
        {
        	name:'carStockCount'
        },
        {
        	name:'snCustomerCode'
        },
        {
        	name:'snCustomerName'
        },
        {
        	name:'carEngineNo'
        },
    ],
    proxy: {
        type: 'direct',
        api: {
            read: snCusSalesOrderContro.findSnCustomerSalesOrderList,
//            create: contractCarOrderContro.createContractCarOrder,
//            update: contractCarOrderContro.updateContractCarOrder
        },
        reader: {
            type: 'json',
            rootProperty: 'records',
            totalProperty: 'total'
        }
    }
});