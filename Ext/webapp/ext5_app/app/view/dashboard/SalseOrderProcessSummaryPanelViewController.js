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

Ext.define('Evcorp.view.dashboard.SalseOrderProcessSummaryPanelViewController',
		{
			extend : 'Ext.app.ViewController',
			alias : 'controller.salesOrderProPanel',
			control : {
				'#' : {}
			},
			querySaleOrderProcess : function() {
				var saleOrderProSummaryGrid = this.lookupReference('saleOrderProSummaryGridRef');
				var saleOrderProSummaryForm = this
						.lookupReference('saleOrderProSummaryForm');
				var extraParams = saleOrderProSummaryForm.getForm().getValues();
				var saleOrderProSummaryStore = saleOrderProSummaryGrid.getStore();
				saleOrderProSummaryStore.on("beforeload", function(saleOrderProSummaryStore,
						operation, eOpts) {
					Ext.apply(saleOrderProSummaryStore.proxy.extraParams, extraParams);
				});
				saleOrderProSummaryStore.loadPage(1, {
					"start" : 0,
					"limit" : 20
				});
			}
		});