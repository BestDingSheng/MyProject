/**
 * ClassName  上传照片lee
 * 
 */
Ext.define("Evcorp.view.user.UpDataPhoto",{
	extend:'Ext.window.Window',
	alias:'widget.upDataPhoto',
	id:'changePhotoWindow',
	title:'选择头像',
	items:[{
		xtype:'form',
        width: 300,
        bodyPadding: '10 10 0',
        defaults: {
            anchor: '100%',
            allowBlank: false,
            msgTarget: 'side',
            labelWidth: 50
        },
	   api: {
	        submit: auUserContro.fileAvatarUpload
	    },

        items: [{
            xtype: 'textfield',
            fieldLabel: 'Name',
            name:'name'
        },{
            xtype: 'filefield',
            emptyText: 'Select an File',
            fieldLabel: 'File',
            name: 'fileUpload',
            listeners:{
            	change:function(me, newValue){
            		var form = me.up('form');
            		var fileFormat = ['bmp','jpg','jpeg','gif','png','pdf','tif','tiff'];
            		var nameCmp = form.getForm().findField('name');
            		if(!Ext.isEmpty(newValue, false)){
	            		//校验是否系统支持的文件格式
	            		if(Ext.Array.contains(fileFormat, newValue.substr(newValue.lastIndexOf('.') + 1).toLowerCase())){
		            		nameCmp.setValue(newValue);
	            		}else{
	            			Ext.Msg.alert('警告','不支持的格式文件，系统支持的格式文件：' + fileFormat.join(','));
	            			me.reset();
	            		}
            		}
            	}
            }
        }],

        buttons: [{
            text: '上传',
            handler: function(){
                var form = this.up('form').getForm();
                if(form.isValid()){
                    form.submit({
                        waitMsg: '正在上传...',
                        success: function(form, action) {
                        	var window = Ext.getCmp('changePhotoWindow');
							var math = Math.random(100000);
						/*	var data = [{src:'avatar/image/download'+'?'+math,id:currentUserId}];
							var myphotoStore = Ext.getCmp('myPhotoId').store;
							myphotoStore.loadData(data);*/
							var mainView = Ext.ComponentQuery.query('#mainView')[0];
							mainView.down('image').setSrc(rootPath('avatar/image/download?' + math));
                        	//关闭上传窗口
                        	window.close();
                        }
                    });
                }
            }
        },{
            text: '重置',
            handler: function() {
                this.up('form').getForm().reset();
            }
        }]
	}]
});