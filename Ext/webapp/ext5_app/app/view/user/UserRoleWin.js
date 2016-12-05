/*
 * File: app/view/role/RoleFuncWin.js
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

Ext.define('Evcorp.view.user.UserRoleWin', {
    extend: 'Ext.window.Window',
    alias: 'widget.userrolewin',

    requires: [
        'Evcorp.view.user.UserRoleWinViewController',
        'Ext.tree.Panel',
        'Ext.tree.View'
    ],

    controller:'useruserrolewin',
    height: 250,
    width: 350,
    title: '当前用户角色列表',
    modal: true,
    closable: true,
    layout:'fit',

    buttons: [
        {text:'删除',handler:'onDeleteRoleClick' },
        {text:'添加',handler:'onAddRoleClick' },
        {text:'关闭',handler:'onCloseClick'}
    ]

});