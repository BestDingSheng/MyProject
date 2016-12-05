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

Ext.define('Evcorp.view.orderList.OrderListGoodsWinViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.orderlistgoodswin',
    onChoiceClick:function(){
    		  var grid = this.lookupReference('carProductGrid');
    		  var win = this.getView();
     		  var seletedGird = grid.getSelectionModel().getSelection();
    		  var propertyText = Ext.ComponentQuery.query('#carProductItemId')[0];
    		  propertyText.setValue(seletedGird[0].get('name'));
    		  var propertyText = Ext.ComponentQuery.query('#carProductCode')[0];
    		  propertyText.setValue(seletedGird[0].get('code'));
    		  
    		  var propertyText = Ext.ComponentQuery.query('#leaseTerm')[0];
    		  propertyText.setValue(""+parseFloat(seletedGird[0].get('leaseTerm')));
    		  var propertyText = Ext.ComponentQuery.query('#deposit')[0];
    		  propertyText.setValue(seletedGird[0].get('deposit'));
    		  var propertyText = Ext.ComponentQuery.query('#monthlyManagementFee')[0];
    		  propertyText.setValue(seletedGird[0].get('monthlyManagementFee'));
    		  var propertyText = Ext.ComponentQuery.query('#monthlyRent')[0];
    		  propertyText.setValue(seletedGird[0].get('monthlyRent'));
    		  var propertyText = Ext.ComponentQuery.query('#expirePrice')[0];
    		  propertyText.setValue(seletedGird[0].get('expirePrice'));
    		  var propertyText = Ext.ComponentQuery.query('#liftTheFare')[0];
    		  propertyText.setValue(seletedGird[0].get('liftTheFare'));
    		  var propertyText = Ext.ComponentQuery.query('#outOfRangFee')[0];
    		  propertyText.setValue(seletedGird[0].get('outOfRangFee'));
    		  var propertyText = Ext.ComponentQuery.query('#chargeFee')[0];
    		  propertyText.setValue(seletedGird[0].get('chargeFee'));
    		  var propertyText = Ext.ComponentQuery.query('#financialPackageCode')[0];
    		  propertyText.setValue(seletedGird[0].get('financialPackageCode'));
    		  financialPackageCode = seletedGird[0].get('financialPackageCode');
    		  var monthlyManagementFeeRef = Ext.ComponentQuery.query('#monthlyManagementFee')[0];
    		  var chargeFeeRef = Ext.ComponentQuery.query('#chargeFee')[0];
    		  if (financialPackageCode=='cxz_std') {
    			  monthlyManagementFeeRef.show();
  				  monthlyManagementFeeRef.setDisabled(false);
  				  chargeFeeRef.hide();
  				  chargeFeeRef.setDisabled(true);
  			  } else {
  				 monthlyManagementFeeRef.hide();
  				 monthlyManagementFeeRef.setDisabled(true);
  				 chargeFeeRef.show();
  				 chargeFeeRef.setDisabled(false);
      		  }
    		  win.close();
    		
    	  }
    ,
    onQueryClick:function(){
    	var carSearch = this.lookupReference('carProductField');
    	var carProductIsContract = this.lookupReference('carProductIsContract');
    	var financialPackageCode = this.lookupReference('financialPackageCodeField');
    	var carProductGrid = this.lookupReference('carProductGrid');
    	var extraParams = {
    			name : carSearch.getValue(),
    			financialPackageCode : financialPackageCode.getValue(),
    			isContract:"true"
    	};
    	var carProductStore = carProductGrid.getStore();
    	carProductStore.on("beforeload", function(carProductStore,
				operation, eOpts) {
			Ext.apply(carProductStore.proxy.extraParams,
					extraParams);
		});
    	carProductStore.loadPage(1, {
			"start" : 0,
			"limit" : 20
		});
    	
    },
    onContractCarInfoSelectCar:function(){
		  var grid = this.lookupReference('carProductGrid');
		  var win = this.getView();
 		  var seletedGird = grid.getSelectionModel().getSelection();
 			if (seletedGird.length == 0) {
 				Ext.Msg.alert("提示", '请选择一条记录');
 				return;
 			} else{
 				var productCode=seletedGird[0].data.code;
 				var productName=seletedGird[0].data.name;
 				var brandCode=seletedGird[0].data.brandCode;
 				var brandName=seletedGird[0].data.brandName;
 				var seriesCode=seletedGird[0].data.seriesCode;
 				var seriesName=seletedGird[0].data.seriesName;
 				var modelCode=seletedGird[0].data.modelCode;
 				var modelName=seletedGird[0].data.modelName;
 				var productCodeText=Ext.getCmp('contracCarWinProductCode');
 				var productNameText=Ext.getCmp('contracCarWinProductName');
 				var brandCodeText=Ext.getCmp('contracCarWinBrandCode');
 				var brandNameText=Ext.getCmp('contracCarWinBrandName');
 				var seriesCodeText=Ext.getCmp('contracCarWinSeriesCode');
 				var seriesNameText=Ext.getCmp('contracCarWinSeriesName');
 				var modelCodeText=Ext.getCmp('contracCarWinModelCode');
 				var modelNameText=Ext.getCmp('contracCarWinModelName');
 				productCodeText.setValue(productCode);
 				productNameText.setValue(productName);
 				brandCodeText.setValue(brandCode);
 				brandNameText.setValue(brandName);
 				seriesCodeText.setValue(seriesCode);
 				seriesNameText.setValue(seriesName);
 				modelCodeText.setValue(modelCode);
 				modelNameText.setValue(modelName);
 			}
 			win.close();
    }
});
