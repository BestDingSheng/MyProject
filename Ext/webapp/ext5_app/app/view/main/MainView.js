/*
 * File: app/view/main/MainView.js
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

Ext.define('Evcorp.view.main.MainView', {
    extend: 'Ext.container.Viewport',
    alias: 'widget.mainview',

    requires: [
        'Evcorp.view.main.MainViewViewModel',
        'Evcorp.view.main.MainViewViewController',
        'Evcorp.view.role.RoleMangerPanel',
        'Evcorp.view.user.UserMangerPanel',
        'Evcorp.view.menu.MenuPanel',
        'Ext.tab.Panel',
        'Ext.tab.Tab'
    ],

    viewModel: {
        type: 'mainview'
    },
    itemId: 'mainView',
    layout: 'border',
    controller:'mainview',
    items: [
        {
            xtype: 'panel',
            region: 'north',
            height: 100,
           // itemId: 'headerPanel',
           // layout: 'hbox',
            html:
            	'<div class="navbar-container" id="navbar-container">'
            	+'	<div class="navbar-header pull-left">'
            	+'		<img src="images/E2Slogo.png">'
            	+'	</div>'
            	+'	<div class="headerright" onmouseover="displaySubMenu(this);" onmouseout="hideSubMenu(this);">'
            	+'		<div class="headercoursor">'
            	+'			<img src="images/user.png">'
            	+'			<span>'+currentUserName+'</span>'
            	+'		</div>'
            	+'		<ul class="subMenu"> '
            	+'			<li class="modifypwd"><a href="#" onclick="onUpdateClick()">修改密码</a></li> '
            	+'			<li class="logout"><a href="resources/j_spring_security_logout">退出登录</a></li>'
            	+'		</ul>'
            	+'	</div>'
            	+'</div>'
  /*          items:[
           {
        	   xtype: 'container',
        	   flex: 4,
        	   items:[
        	          {
        	            	xtype:'image',
        	            	src: 'images/Evcorp.png',
        	            	width:100,
        	            	height:80,
        	            	margin:'10 20'
        	          }   
        	   ]
           }
           ,{
            	 xtype: 'container',
         	     flex: 1,
         	     layout: 'hbox',
         	     margin:'65 10 0 0', 
         	     items:[
         	            {
         	            	xtype: 'displayfield',
         	            	flex: 2,
         	            	fieldLabel: '当前用户',
         	            	labelWidth: 60,
         	            	width: 100,
         	                value: currentUserName
         	        },
         	        {
         	        	xtype: 'container',
         	        	flex: 1,
         	        	margin:'3 5',
         	        	html:'<a style="color:#666666; font-size:13px" href="#" onclick="onUpdateClick()">修改密码</a>'
         	        },
         	        {
	         	       	xtype: 'container',
	     	        	flex: 1,
	     	        	margin:'3 5',
	     	        	html:'<a style="color:#666666; font-size:13px" href="resources/j_spring_security_logout" onclick="">退出系统</a>'
         	        }
         	      ]
             }
          ]*/
        },
        {
        	xtype: 'menupanel',
            region: 'west',
            split: true
        },
        {
            xtype: 'tabpanel',
            flex: 1,
            region: 'center',
            itemId: 'contentPanel'
        }
    ]/*,
    listeners: {
        afterrender: 'onMainViewAfterRender'
    }*/

});

function onUpdateClick(){
	var passWordPanel = Ext.create('Evcorp.view.main.PassWordWin');
	//passWordPanel.down('form').getForm().load();
	passWordPanel.show();
}