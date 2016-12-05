    Ext.apply(Ext.form.VTypes, {
                password : function(val, field) {
                    if (field.initialPassField) {
                        var pwd = field.up('form').down('#'+field.initialPassField);
                        return (val == pwd.getValue());
                    }
                    return true;
                },
                passwordText : '两次输入的密码不一致!'
            });

//Ext.apply(Ext.form.VTypes,{  
//    password:function(val,field){              
//        if(field.confirmTo){                     
//            var pwd=Ext.get(field.confirmTo);   
//            return (val==pwd.getValue());  
//        }  
//        return true;  
//    }  
//});
Ext.define('Evcorp.view.main.PassWordWin', {
    extend: 'Ext.window.Window',
    alias: 'widget.PassWordWin',

    requires: [
        'Ext.form.Panel',
        'Ext.toolbar.Toolbar',
        'Ext.button.Button',
        'Ext.form.field.ComboBox',
        'Ext.form.field.Date',
        'Ext.form.RadioGroup',
        'Ext.form.field.Radio'
    ],
    autoScroll: true,
    height: 180,
    width: 300,
    modal: true,
    closable: true,
    title: '修改密码',
    closeAction:'destory',
    layout: {
        type: 'fit',
        align: 'stretch'
    },
    items: [
        {
            xtype: 'form',
            paramsAsHash: true,
            layout: 'column',
            bodyPadding: 10,
            itemId:'PassWordWinId',
            reference: 'PassWordWinform',            
            api: {
//                load: auUserContro.getUserInfo,
                submit: auUserContro.updateUserPassWord
            },                     
            defaults: {
                layout: 'form',
                xtype: 'container',
                style: 'width: 100%'
            },
            
            items: [{
            	defaults: {
            		width:　210,
            		labelAlign:'right'
                },
                items: [
                        { 
                            xtype: 'textfield',
                            fieldLabel: '原始密码',
                            name:'password',
                            inputType : 'password',
                            allowBlank : false,
                            blankText : '原始密码不能为空'                            
                            //readOnly:true
                        },
                        { 
                            xtype: 'textfield',
                            fieldLabel: '新密码',
                            itemId:'newpassword',
                            name:'newpassword',
                            inputType : 'password',
                            allowBlank : false,
                            blankText : '新密码不能为空',                            
                        },{
                            xtype: 'textfield',
                            fieldLabel: '确认密码',
                            name: 'confirmpassword',
                            inputType: 'password' ,
                            allowBlank : false,
                            blankText : '确认密码不能为空',
                            vtype : 'password',
                            initialPassField : 'newpassword'
//                            vtypeText : "两次密码不一致！",
//                            confirmTo : "newpassword",
                        }
                        
                    ]
                }],    
                buttons: [
                             { 
                            	 text: '确定',
                            	 handler:'onSaveParamClick'
                            	 },
                             { 
                            	text: '取消',
                            	handler:'onCancelClick'
                             }
                        ]
        }
    ]

});