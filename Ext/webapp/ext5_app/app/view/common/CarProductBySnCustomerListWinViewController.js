/*
 * File: app/view/menu/menuPanelViewController.js
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

Ext.define('Evcorp.view.common.CarProductBySnCustomerListWinViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.CarProductBySnCustomerListWin',
    onQueryClick:function(){
    	var carSearch = this.lookupReference('carProductField');
    	var productType = this.lookupReference('productTypeRef');
    	if (!productType || !productType.getValue()) {
    		Ext.Msg.alert("提示", "请先选择购买方式！");
			return;
    	}
    	
    	var carProductsBySnCustomerGrid = this.lookupReference('carProductsBySnCustomerGrid');
    	var extraParams = {
			name : carSearch.getValue(),
			productType : productType.getValue()
		};
    	var carProductStore = carProductsBySnCustomerGrid.getStore();
    	carProductStore.on("beforeload", function(carProductStore, operation, eOpts) {
			Ext.apply(carProductStore.proxy.extraParams, extraParams);
		});
    	carProductStore.loadPage(1, {
			"start" : 0,
			"limit" : 20
		});
    	
    },
    onSnCustomerSalesOrderSelectCar:function(){
    	var grid = this.lookupReference('carProductsBySnCustomerGrid');
    	var win = this.getView();
    	var seletedGird = grid.getSelectionModel().getSelection();
		if (seletedGird.length == 0) {
			Ext.Msg.alert("提示", '请选择一条记录');
			return;
		} else{
			var productCode=seletedGird[0].data.code;
			var productName=seletedGird[0].data.name;
			var productCodeText = Ext.ComponentQuery.query('KAsubmitaddWin #carProductCodeItemId')[0];
			productCodeText.setValue(productCode);
			var productNameText = Ext.ComponentQuery.query('KAsubmitaddWin #productNameItemId')[0];
			productNameText.setValue(productName);
		}
		win.close();
  },
  
  onSnCreditInfoSelectCar:function(){
  		var grid = this.lookupReference('carProductsBySnCustomerGrid');
		var win = this.getView();
		var seletedGird = grid.getSelectionModel().getSelection();
		if (seletedGird.length == 0) {
			Ext.Msg.alert("提示", '请选择一条记录');
			return;
		} else {
			var productCode = seletedGird[0].data.code;
			var productName = seletedGird[0].data.name;
			var productCodeText = Ext.ComponentQuery.query('KAsubmitaddWin #carProductCodeItemId')[0];
			productCodeText.setValue(productCode);
			var productNameText = Ext.ComponentQuery.query('KAsubmitaddWin #carProductNameItemId')[0];
			productNameText.setValue(productName);
		}
		win.close();
  },
});