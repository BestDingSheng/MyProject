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

Ext.define('Evcorp.view.salesOrder.PaymentRecordWinViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.paymentRecordWin',
    initWindow:function(){
    	var win = this.getView();
    	var salesOrderCode = win.salesOrderCode;
    	var salesOrderPayChannelStore = win.getViewModel().getStore('salesOrderPayChannelStore');
    	salesOrderPayChannelStore.load();
    	var salesOrderPayTypeStore = win.getViewModel().getStore('salesOrderPayTypeStore');
    	salesOrderPayTypeStore.load();
    	var salesOrderPaymentStore = win.getViewModel().getStore('salesOrderPaymentStore');
    	salesOrderPaymentStore.load({params:{code:salesOrderCode}});
    },
    onAddClick:function(){
    	var win = this.getView();
		var salesOrderCode = win.salesOrderCode;
		var salesOrderPaymentGrid = win.lookupReference('salesOrderPaymentGrid');
        var salesOrderPaymentGridStore = salesOrderPaymentGrid.getStore(); 
        var newModel = new Evcorp.model.SalesOrderPayment({ id:null, salesOrderCode:salesOrderCode });
        salesOrderPaymentGridStore.insert(0, newModel);
        
        salesOrderPaymentGrid.getSelectionModel().select(newModel);
    },
    orderPayTypeEditor : function (value) {
    	if(value){
    		var gridStore = this.getView().getViewModel().getStore('salesOrderPayTypeStore');
        	return gridStore.findRecord('code', value).data.nameCn;
    	}
    },
    orderPayChannelEditor : function (value) {
    	if(value){
    		var gridStore = this.getView().getViewModel().getStore('salesOrderPayChannelStore');
        	return gridStore.findRecord('code', value).data.nameCn;
    	}
    },
    onSaveClick:function(grid, rowIndex){
    	var win = this.getView();
//    	var arAmountTotal = win.arAmount;//订单应收总金额
    	var store = grid.getStore();
    	var data = store.getData();
    	var payments = data.items;
//    	var tempArAmountTotal = 0;
//    	Ext.each(payments,function(item){
//    		tempArAmountTotal = tempArAmountTotal+item.data.arAmount;
//		});
    	var rec = store.getAt(rowIndex);
        var id = rec.get('id');
        var salesOrderCode = rec.get('salesOrderCode');
        var paymentNo = Ext.util.Format.trim(rec.get('paymentNo'));
        var paymentType = Ext.util.Format.trim(rec.get('paymentType'));
        var paymentMethod = Ext.util.Format.trim(rec.get('paymentMethod'));
//        var arAmount = rec.get('arAmount');
        var actAmount = rec.get('actAmount');
        var paymentDate = rec.get('paymentDate');
        var remark = Ext.util.Format.trim(rec.get('remark'));
        if (!salesOrderCode) {
        	Ext.Msg.alert("提示",'请先选择或新建一条订单记录后再编辑支付信息。');
        	return;
        }
        if (!paymentNo || !paymentType || !paymentMethod  || !actAmount || !paymentDate) {
        	Ext.Msg.alert("提示",'请输入合法支付信息！');
        	return;
        }
        paymentDate = Ext.util.Format.date(paymentDate, 'Y-m-d');
//        if(tempArAmountTotal>arAmountTotal){
//        	Ext.Msg.confirm('提示','总应收金额超过订单应收总金额,是否继续保存?',function(btn){
//    			if(btn=='yes'){
//    				// 新增、修改操作
//    		        Ext.Ajax.request({
//    		  			url : 'salesOrder/saveOrUpdateSalesOrderPayment',
//    		  			params : {
//    		  				"id":id,
//    		  				"paymentNo":paymentNo,
//    		  				"paymentType":paymentType,
//    		  				"paymentMethod":paymentMethod,
//    		  				"arAmount":arAmount,
//    		  				"actAmount":actAmount,
//    		  				"paymentDate":paymentDate,
//    		  				"remark":remark,
//    		  				"salesOrderCode":salesOrderCode
//    		  			},
//    		  			success : function(response) {
//    		  				if(response.status==200 && response.statusText=='OK'){
//    		  					var result = JSON.parse(response.responseText);
//    		  					var type = result.type;
//    		  					var errorMsg = result.errorMsg;
//    		  					var recvAmoount=result.recvAmoount;
//    		  					if (errorMsg) {
//    		  						Ext.Msg.alert("提示", errorMsg);
//    		  					} else {
//    		  						if (type < 0) {
//    		  							Ext.Msg.alert("提示","新增成功！")
//    		  						} else {
//    		  							Ext.Msg.alert("提示","修改成功！")
//    		  						}
//    		  						store.reload();
//    		  					}
//    		  				}else{
//    		  	          		Ext.Msg.alert("提示","系统错误,操作失败!");
//    		  	          	}
//    		  			}
//    		        });
//    			}
//        	});
//        }else{
        	// 新增、修改操作
            Ext.Ajax.request({
      			url : 'salesOrder/saveOrUpdateSalesOrderPayment',
      			params : {
      				"id":id,
      				"paymentNo":paymentNo,
      				"paymentType":paymentType,
      				"paymentMethod":paymentMethod,
//      				"arAmount":arAmount,
      				"actAmount":actAmount,
      				"paymentDate":paymentDate,
      				"remark":remark,
      				"salesOrderCode":salesOrderCode
      			},
      			success : function(response) {
      				if(response.status==200 && response.statusText=='OK'){
      					var result = JSON.parse(response.responseText);
      					var type = result.type;
      					var errorMsg = result.errorMsg;
      					var recvAmoount=result.recvAmoount;
      					if (errorMsg) {
      						Ext.Msg.alert("提示", errorMsg);
      					} else {
      						if (type < 0) {
      							Ext.Msg.alert("提示","新增成功！")
      						} else {
      							Ext.Msg.alert("提示","修改成功！")
      						}
      						store.reload();
      					}
      				}else{
      	          		Ext.Msg.alert("提示","系统错误,操作失败!");
      	          	}
      			}
            });
//        }
    },
    onRemoveClick:function(grid, rowIndex){
    	var store = grid.getStore();
        var rec = store.getAt(rowIndex);
        var id = rec.get('id');
    	if (id && id>=0) {
    		Ext.MessageBox.confirm('提示', '确定删除该记录?', function(btn) {
				if (btn != 'yes') {
					return;
				}
				// 删除操作
				Ext.Ajax.request({
					url : 'salesOrder/deleteSalesOrderPayment',
					params : {
						paymentId : id,
					},
					success : function(response) {
						if(response.status==200 && response.statusText=='OK'){
							Ext.Msg.alert("提示","删除成功！")
							store.reload();
						}else{
	                		Ext.Msg.alert("提示","系统错误,操作失败!");
	                	}
					}
				});
			});
    	} else {
    		store.removeAt(rowIndex);
    	}
    }
});