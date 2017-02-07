var Vue = require('vue.js');
var A = require('axios.js');
var Q = require('qs.js');
Vue.component('myLeftMenu', {
    template: __inline('leftMenu.html'),
    created: function() {
        var me = this;
        // A.post(me.$root.http + 'listUserMenu', Q.stringify({ loginName: 1 }))
        //     .then(function(res) {
        //         console.log(res.data);
        //         // me.data = res.data.retDat;
        //     })
        //     .catch(function() {
        //         me.serverWrong(me)
        //     })
    },
    data: function() {
        return {
            data: [{
                sysresname: '后台管理',
                children: [{
                    sysresname: '角色管理',
                    url: 'home/sys/role'
                }, {
                    sysresname: '菜单管理',
                    url: 'home/sys/menu'
                }, {
                    sysresname: '用户管理',
                    url: 'home/sys/user'
                }, {
                    sysresname: '代理管理',
                    url: 'home/sys/agent'
                }]
            }, {
                "sysresname": "我的信息",
                "children": [{
                    "sysresname": "我的信息",
                    "url": "/home/user/myInfo"
                }]
            }, {
                "sysresname": '下级代理商管理',
                "children": [{
                    "sysresname": "代理商管理",
                    "url": "/home/agent/agentManage"
                }]
            }, {
                "sysresname": '业务员管理',
                "children": [{
                    "sysresname": "业务员管理",
                    "url": "/home/clerk/clerkManage"
                }]
            }, {
                "sysresname": '终端管理',
                "children": [{
                    "sysresname": "终端划拨",
                    "url": "/home/device/devTransfer"
                }, {
                    "sysresname": "终端回调",
                    "url": ""
                }, {
                    "sysresname": "终端变动记录",
                    "url": ""
                }, ]
            }, {
                "sysresname": "商户管理",
                "children": [{
                    "sysresname": "商户信息",
                    "url": '/home/vendor/vendorInfo'
                }]
            }, {
                "sysresname": "交易查询",
                "children": [{
                    "sysresname": "收款交易",
                    "url": "/home/deal/dealGathering"
                }, {
                    "sysresname": "D0提款交易",
                    "url": "/home/deal/dealWithdrawls"
                }, {
                    "sysresname": "交易统计",
                    "url": "/home/deal/dealStatistics"
                }]
            }, {
                "sysresname": "我的分润",
                "children": [{
                    "sysresname": "分润信息",
                    //"url" : "/home/deal/dealGathering"
                    "url": '/home/profit/shareProfit'
                }]
            }],
            defaultProps: {
                children: 'children',
                label: 'sysresname'
            }
        };
    },
    methods: {
        // 服务器错误
        serverWrong: function(me) {
            me.$root.loadingBoxIsShow = false;
            me.$message({
                message: "与服务器通信出错，请检查网络或联系管理员！",
                type: 'error',
                showClose: true
            });
        },
        // 数据适配器
        handleNodeClick: function(e) {
            if (e.url) {
                window.location.hash = e.url;
            }
        }
    },
    mounted : function(){
        window.addEventListener('hashchange',function(){
            var tar = window.location.hash;
            console.log(tar);
        });
    }

});
