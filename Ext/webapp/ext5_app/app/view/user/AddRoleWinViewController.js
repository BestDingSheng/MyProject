
Ext.define('Evcorp.view.user.AddRoleWinViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.useraddrolewin',
    control: {
        '#': {
        	afterrender : 'onViewShow'
        }
    },
    //页面打开时候 初始值的设定
    onViewShow : function(panel){
    	this.getView().down('#ouCombo').getStore().reload();
    },
    onSaveRoleFunClick: function (btn){
        var window = btn.up('window');
        var roleId = Ext.ComponentQuery.query("viewport rolemangerpanel form")[0].getForm().getValues().id;
        var records = window.down('treepanel').getView().getChecked();
        var codeList = [];
        Ext.Array.each(records, function(rec){
        	if(rec.get('children').length == 0)
        	codeList.push(rec.get('code'));
        });
        var param = {codeList:codeList, roleId:roleId}; 
        sysFunction.updateRoleFunction(param,function(result){
        	if(result == 'success'){
        		alert('success');
        		window.close();
        	}
        });
    },
    
    onCancelRoleFunClick: function(btn){
        btn.up('windwo').close();
    },
    onRoleComboSelect:function(combo,records){
    	var ouTypeId = records[0].data.ouTypeId;
    	var typeId = {ouTypeId:ouTypeId};
    	sysOperUnitController.findOuByTypeId(typeId,function(result){
    		var ouCombo = Ext.ComponentQuery.query('#ouCombo')[0];
    		ouCombo.getStore().setData(result);
    	});
    },
    onSaveRoleClick:function(btn){
    	var addRoleWin = btn.up('window');
    	var roleCombo = Ext.ComponentQuery.query('#roleCombo')[0];
    	var ouCombo = Ext.ComponentQuery.query('#ouCombo')[0];
    	var userRoleOuGrid =Ext.ComponentQuery.query('#userRoleOuGrid')[0];
    	var userId = userRoleOuGrid.userId;
    	var roleId = roleCombo.getValue();
    	var ouId = ouCombo.getValue();
    	if(roleId == null || ouId == null){
    		Ext.Msg.alert('提示','角色和组织都不能为空');
    		return;
    	}
    	var userId = addRoleWin.userId;
    	var param = {roleId : roleId, ouId : ouId, userId : userId};
    	auUserContro.addUserRole(param,function(result){
    		if(result == 'success'){
    			addRoleWin.close();
    			userRoleOuGrid.getStore().reload({
    				params:{id : userId}
    			});
    		}else{
    			alert('保存失败');
    		}
    	});
    	
    }
});
