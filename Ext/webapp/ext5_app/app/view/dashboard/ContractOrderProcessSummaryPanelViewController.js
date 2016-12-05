/*
 * File: app/view/role/RoleMangerPanelViewController.js
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

Ext.define('Evcorp.view.dashboard.ContractOrderProcessSummaryPanelViewController',
		{
			extend : 'Ext.app.ViewController',
			alias : 'controller.contractOrderProPanel',
			control : {
				'#' : {}
			},
			querySaleOrderProcess : function() {
				var contractOrderProSummaryGrid = this.lookupReference('contractOrderProSummaryGridRef');
				var contractOrderProSummaryForm = this
						.lookupReference('contractOrderProSummaryForm');
				var extraParams = contractOrderProSummaryForm.getForm().getValues();
				var contractOrderProSummaryStore = contractOrderProSummaryGrid.getStore();
				contractOrderProSummaryStore.on("beforeload", function(contractOrderProSummaryStore,
						operation, eOpts) {
					Ext.apply(contractOrderProSummaryStore.proxy.extraParams, extraParams);
				});
				contractOrderProSummaryStore.loadPage(1, {
					"start" : 0,
					"limit" : 20
				});
			}
		});