var Vue = require('vue.js');
var VueRouter = require('vue-router.js');
Vue.use(VueRouter);
// 路由组件
var Home = require('components/page/home/home.js');
var Login = require('components/page/login/login.js');

// 子路由组件
// 角色管理
var SysRole = require('sys/role/role.js');
// 菜单管理
var SysMenu = require('sys/menu/menu.js');
// 用户管理
var SysUser = require('sys/user/user.js');
// 代理商管理
var SysAgent = require('sys/agent/agent.js');
// 我的信息
var UserInfo = require('user/myInfo/info.js');
// 代理商管理
var AgentManage = require('agent/agentManage/agentManage.js');
// 业务员管理
var ClerkManage = require('clerk/clerkManage/clerkManage.js');
// 终端管理
var DevTransfer = require('device/devTransfer/devTransfer.js');
// 商户管理
var VendorInfo = require('vendor/vendorInfo/vendorInfo.js');
//收款交易
var DealGathering = require('deal/dealGathering/dealGathering.js');
// D0提款交易
var DealWithdrawals = require('deal/dealWithdrawals/dealWithdrawals.js');
// 交易统计
var DealStatistics = require('deal/dealStatistics/dealStatistics.js');
//我的分润
var Profit = require('profit/shareProfit/shareProfit.js');

// 配置路由
module.exports = new VueRouter({
    routes: [{
        path: '',
        component: Login
    }, {
        path: '/:id',
        component: Home,
        children: [{
            path: '',
            component: Home
        }, {
            path: 'sys/role',
            component: SysRole
        }, {
            path: 'sys/menu',
            component: SysMenu
        }, {
            path: 'sys/user',
            component: SysUser
        }, {
            path: 'sys/agent',
            component: SysAgent
        }, {
            path: 'agent/agentManage',
            component: AgentManage
        }, {
            path: 'user/myInfo',
            component: UserInfo
        }, {
            path: 'clerk/clerkManage',
            component: ClerkManage
        }, {
            path: 'device/devTransfer',
            component: DevTransfer
        }, {
            path: 'vendor/vendorInfo',
            component: VendorInfo
        }, {
            path: 'deal/dealGathering',
            component: DealGathering
        }, {
            path: 'deal/dealWithdrawls',
            component: DealWithdrawals
        }, {
            path: 'deal/dealStatistics',
            component: DealStatistics
        }, {
            path: 'profit/shareProfit',
            component: Profit
        }]
    }]
});
