var Vue = require('vue.js');
var A = require('axios.js');
var Q = require('qs.js');
module.exports = Vue.extend({
    template: __inline('role.html'),
    created: function() {
        // 做登陆判断
		if(!this.$root.login){
			return;
		}
        // 处理数据及提交OBJ
        var me = this;
        A.post(me.$root.http + 'findPageAuthrole', Q.stringify({ page: 1 }))
            .then(function(res) {
                // 适配数据
                me.dataAdapter(me, res);
                // console.log(me)
            })
            .catch(function(err) {
                me.$message({
                    type: 'error',
                    message: '服务器错误'

                })
            })

        // 获取完整菜单权限分配数据
        // A.post(me.$root.http + 'listAllMenu')
        //     .then(function(res) {
        //         console.log(res)
        //         this.assignPermissionAllData = res.retData;
        //     })
        //     .catch(function(res) {
        //         me.serverWrong(me);
        //     })
        // 测试数据
        this.assignPermissionAllData = [{
            "id": 1,
            "createdtime": null,
            "editedtime": 1482720051000,
            "parentid": 0,
            "sortid": 0,
            "sysresname": "后台管理",
            "url": "",
            "children": [{
                "id": 2,
                "createdtime": null,
                "editedtime": 1482802991000,
                "parentid": 1,
                "sortid": 0,
                "sysresname": "角色管理",
                "url": null,
                "children": [],
                "aSystemFunctions": [{
                    "id": 102,
                    "createdtime": null,
                    "editedtime": 1482803210000,
                    "functionname": "新增(add)",
                    "operatecode": "add",
                    "sortid": 0,
                    "sysresid": 2
                }, {
                    "id": 103,
                    "createdtime": null,
                    "editedtime": 1482803254000,
                    "functionname": "查看(view)",
                    "operatecode": "view",
                    "sortid": 0,
                    "sysresid": 2
                }, {
                    "id": 104,
                    "createdtime": null,
                    "editedtime": 1482803299000,
                    "functionname": "更新(update)",
                    "operatecode": "update",
                    "sortid": 0,
                    "sysresid": 2
                }, { "id": 105, "createdtime": null, "editedtime": 1482803338000, "functionname": "删除(delete)", "operatecode": "delete", "sortid": 0, "sysresid": 2 }]
            }, {
                "id": 3,
                "createdtime": null,
                "editedtime": 1482803004000,
                "parentid": 1,
                "sortid": 0,
                "sysresname": "菜单管理",
                "url": null,
                "children": [],
                "aSystemFunctions": [{ "id": 106, "createdtime": null, "editedtime": 1482803210000, "functionname": "新增(add)", "operatecode": "add", "sortid": 0, "sysresid": 3 }, { "id": 107, "createdtime": null, "editedtime": 1482803254000, "functionname": "查看(view)", "operatecode": "view", "sortid": 0, "sysresid": 3 }, { "id": 108, "createdtime": null, "editedtime": 1482803299000, "functionname": "更新(update)", "operatecode": "update", "sortid": 0, "sysresid": 3 }, { "id": 109, "createdtime": null, "editedtime": 1482803890000, "functionname": "删除(delete)", "operatecode": "delete", "sortid": 0, "sysresid": 3 }]
            }, { "id": 4, "createdtime": null, "editedtime": 1482803015000, "parentid": 1, "sortid": 0, "sysresname": "用户管理", "url": null, "children": [], "aSystemFunctions": [{ "id": 110, "createdtime": null, "editedtime": 1482803210000, "functionname": "新增(add)", "operatecode": "add", "sortid": 0, "sysresid": 4 }, { "id": 111, "createdtime": null, "editedtime": 1482803254000, "functionname": "查看(view)", "operatecode": "view", "sortid": 0, "sysresid": 4 }, { "id": 112, "createdtime": null, "editedtime": 1482803299000, "functionname": "更新(update)", "operatecode": "update", "sortid": 0, "sysresid": 4 }, { "id": 113, "createdtime": null, "editedtime": 1482803338000, "functionname": "删除(delete)", "operatecode": "delete", "sortid": 0, "sysresid": 4 }] }, { "id": 5, "createdtime": null, "editedtime": 1482803051000, "parentid": 1, "sortid": 0, "sysresname": "代理管理", "url": null, "children": [], "aSystemFunctions": [{ "id": 114, "createdtime": null, "editedtime": 1482803210000, "functionname": "新增(add)", "operatecode": "add", "sortid": 0, "sysresid": 5 }, { "id": 115, "createdtime": null, "editedtime": 1482803254000, "functionname": "查看(view)", "operatecode": "view", "sortid": 0, "sysresid": 5 }, { "id": 116, "createdtime": null, "editedtime": 1482803299000, "functionname": "更新(update)", "operatecode": "update", "sortid": 0, "sysresid": 5 }, { "id": 117, "createdtime": null, "editedtime": 1482803338000, "functionname": "删除(delete)", "operatecode": "delete", "sortid": 0, "sysresid": 5 }] }],
            "aSystemFunctions": [{ "id": 101, "createdtime": null, "editedtime": 1482718544000, "functionname": "查看(view)", "operatecode": "view", "sortid": 0, "sysresid": 1 }]
        }, { "id": 6, "createdtime": null, "editedtime": 1482895878000, "parentid": 0, "sortid": 0, "sysresname": "教学管理", "url": null, "children": [{ "id": 7, "createdtime": null, "editedtime": 1482904645000, "parentid": 6, "sortid": 0, "sysresname": "管理系统", "url": null, "children": [], "aSystemFunctions": [{ "id": 118, "createdtime": null, "editedtime": 1482907778000, "functionname": "查看(view)", "operatecode": "view", "sortid": 0, "sysresid": 7 }] }], "aSystemFunctions": [{ "id": 119, "createdtime": null, "editedtime": 1482908470000, "functionname": "查看(view)", "operatecode": "view", "sortid": 0, "sysresid": 6 }] }];
        var listAll = [{
            title: '父级菜单',
            children: [{
                title: '子级菜单01',
                url: '',
                id: '1'
            }, {
                title: '子级菜单02',
                url: '',
                id: '2'
            }]
        }];
    },
    data: function() {
        return {

            addRoleHandleBoxIsShow: false,
            // 更新数据后是否显示加载
            rowHandleBoxIsLoading: false,
            // row是否查看,dasable = true;
            isView: true,
            addRoleObj: {
                rolename: '',
                remark: ''
            },
            assignPermissionAllData: [],


            // 权限设置后提交数据
            assignPermissionData: {
                id:0,
                roleName : '',
                sysFuncId :[]
            },
            assignedPermission: {},
            rowHandleBoxIsShow: false,
            assignPermissionBoxIsShow: false,
            resourceObj: {},
            createdTimeRange: [],
            searchObj: {
                rolename: '',
                startTime: '',
                endTime: ''
            },
            chooseIDArr: [],
            currentPage: 1,
            pageTotal: 0,
            pageSize: 10,
            // roleData: []
            roleData: [{
                id: 1,
                rolename: 'rolename',
                remark: '邦德被他钟情的女子维斯珀背叛，开始执行了一下个任务。经过对一个叫怀特的男子的审讯，邦德和顶头上司M女士得到了一个曾经勒索过维斯珀的犯罪组织的情报，这个组织非常复杂，危害程度超过任何人的想象。'
            }],

        };
    },
    methods: {
        addRoleSubmit: function() {
            var me = this;
            console.log(this.addRoleObj);
            this.$confirm('确定添加角色！！', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(function() {
                // 确定提交后做的事
                // 显示加载动画
                me.$root.loadingBoxIsShow = true;
                A.post(me.$root.http + 'saveAuthrole', Q.stringify(me.addRoleObj))
                    .then(function(res){
                        // 刷新当前页
                        me.currentPageRefresh(me, res);
                    })
                    .catch(function(err){
                        // 错误后关闭loadingbox,提示错误信息
                        me.serverWrong(me);
                        console.log(err);
                    });
            }).catch(function() {
                // 取消提交后做的事
                me.$message({
                    type: 'info',
                    message: '已取消添加角色！'
                });
            });
        },
        // 删除所选
        delSelected: function() {
            if (this.chooseIDArr.length === 0) {
                return;
            }
            // 处理数据
            var idArr = this.chooseIDArr.map(function(val) {
                return val.id;
            });

            // 沟通服务器
            var me = this;
            this.$confirm('确定删除所选吗？该操作不可逆！！', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(function() {
                // 确定提交后做的事
                // 显示加载动画
                me.$root.loadingBoxIsShow = true;
                A.post(me.$root.http + 'deleteAuthrole', Q.stringify({ idArr: idArr }))
                    .then(function(res) {
                        // 刷新当前页
                        me.currentPageRefresh(me, res);

                    })
                    .catch(function(err) {
                        // 错误后关闭loadingbox,提示错误信息
                        me.serverWrong(me);
                    });
            }).catch(function() {
                // 取消提交后做的事
                me.$message({
                    type: 'info',
                    message: '已取消删除！'
                });
            });
        },
        addRole: function() {
            this.addRoleHandleBoxIsShow = true;
        },
        // 服务器错误
        serverWrong: function(me) {
            me.$root.loadingBoxIsShow = false;
            me.$message({
                message: "与服务器通信出错，请检查网络或联系管理员！",
                type: 'error',
                showClose: true
            });
        },
        // 刷新当前页
        currentPageRefresh: function(target, resource) {
            if (resource.data.retCode === "000000") {
                // 刷新当前也数据数据
                var me = this;
                A.post(me.$root.http + 'findPageAuthrole', Q.stringify({ page: target.currentPage }))
                    .then(function(res) {
                        // 适配数据
                        target.dataAdapter(target, res);
                        // 成功后关闭LOADING消息提醒
                        target.$root.loadingBoxIsShow = false;
                        target.$message({
                            message: '数据操作成功!!',
                            type: 'success',
                            showClose: true
                        });
                    })
                    .catch(function(res) {
                        target.serverWrong(target);
                    });
            } else {
                target.$root.loadingBoxIsShow = false;
                target.$message({
                    message: resource.data.retMsg,
                    type: 'warning',
                    showClose: true
                });
            }
        },
        // dealTime
        dealTime: function(time) {
            var t = new Date(time),
                y = t.getFullYear(),
                M = t.getMonth() + 1 > 9 ? t.getMonth() + 1 : '0' + (t.getMonth() + 1),
                d = t.getDate() > 9 ? t.getDate() : '0' + t.getDate(),
                H = t.getHours() > 9 ? t.getHours() : '0' + t.getHours(),
                m = t.getMinutes() > 9 ? t.getMinutes() : '0' + t.getMinutes(),
                s = t.getSeconds() > 9 ? t.getSeconds() : '0' + t.getSeconds();
            return y + '-' + M + '-' + d + ' ' + H + ':' + m + ':' + s;
        },
        // 数据适配器
        dataAdapter: function(target, resource) {
            target.roleData = resource.data.retData.content;
            target.currentPage = resource.data.retData.number + 1;
            target.pageTotal = resource.data.retData.totalPages;
            target.pageSize = resource.data.retData.size;
        },
        rolePermissionSubmit: function() {
            // console.log(this.assignPermissionData);
            var me = this;
            A.post(me.$root.http + 'saveOrUpdateAuthrole', Q.stringify(me.assignPermissionData))
                .then(function(res) {
                    me.assignPermissionBoxIsShow = false;
                    me.currentPageRefresh(me,res);
                })
                .catch(function(res) {
                    me.serverWrong(me);
                });
        },
        rolePermissionCancel: function() {
            // 拉取一次数据
            this.assignPermission();
            // 关闭
            // this.assignPermissionBoxIsShow = false;
        },
        permissionChecked: function() {
            console.log(arguments);
        },

        doSearch: function() {
            if (this.searchObj == {
                    agentname: '',
                    levelid: '',
                    startTime: '',
                    endTime: ''
                }) {
                this.$message({
                    message: "请至少输入一个条件！",
                    type: 'warning',
                    showClose: true
                });
                return;
            }
            // 处理时间
            if (this.createdTimeRange.length > 0) {
                var sT = this.createdTimeRange[0],
                    eT = this.createdTimeRange[1];
                this.searchObj.startTime = this.dealTime(sT);
                this.searchObj.endTime = this.dealTime(eT);
            }

            // console.log(this.searchObj);
            // 拉取数据
            var me = this;

            me.$root.loadingBoxIsShow = true;
            A.post(me.$root.http + 'findPageAuthrole', Q.stringify(me.searchObj))
                .then(function(res) {
                    // 适配数据
                    me.dataAdapter(me, res);

                    me.$root.loadingBoxIsShow = false;
                })
                .catch(function(err) {
                    me.serverWrong(me);
                });
        },

        cleanSearchInp: function() {
            this.searchObj = {
                roleName: '',
                sartTime: '',
                endTime: '',
            };
            this.createTime = [];
        },
        viewDetail: function(row) {
            console.log('viewDetail');
            this.resourceObj = row;
            this.rowHandleBoxIsShow = true;
            // input不能编辑
            this.isView = true;
        },
        edit: function(row) {
            this.resourceObj = row;
            this.rowHandleBoxIsShow = true;
            // input可编辑
            this.isView = false;
        },
        assignPermission: function(row) {
            var roleid = this.assignPermissionData.id ? this.assignPermissionData.id : row.id;
            var rolename = this.assignPermissionData.roleName ? this.assignPermissionData.roleName : row.rolename;

            // 获取当前角色的菜单权限勾选状态
            var me = this;
            A.post(me.$root.http + 'getlistSystemFunctionIds', Q.stringify({ roleid: roleid }))
                .then(function(res) {
                    // 处理权限
                    // me.assignPermissionData.sysfuncArr = res.data.retData;
                    var dataArr = res.data.retData;
                    // 适配数据
                    var newArr = [];
                    for(var i = 0; i < dataArr.length; i++){
                        newArr.push(dataArr[i].sysfuncid);
                    }
                    
                    me.assignPermissionData.sysFuncId = newArr;

                })
                .catch(function(res) {
                    me.serverWrong(me);
                });

            // 适配
            this.assignPermissionData.id = roleid;
            this.assignPermissionData.roleName = rolename;
            this.assignPermissionBoxIsShow = true;

            console.log(this.assignPermissionData);
        },
        doChange: function(arr) {
            this.chooseIDArr = arr;
        },

        rowSelect: function() {
            return true;
        },
        handleCurrentChange: function(val) {
            this.currentPage = val;
            var me = this;
            A.post(me.$root.http + 'findPageAuthrole', Q.stringify({ page: me.currentPage }))
                .then(function(res) {
                    // 适配数据
                    me.dataAdapter(me, res);
                    // 成功后关闭LOADING消息提醒
                    me.$root.loadingBoxIsShow = false;

                })
                .catch(function(res) {
                    me.serverWrong(me);
                });
        },
        rowUpdateSubmit: function() {
            var me = this;
            this.$confirm('确定更新？', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(function() {
                // 确定提交后做的事
                // 显示加载动画
                me.$root.loadingBoxIsShow = true;
                var name = me.resourceObj.name;
                // 提交数据前过滤时间
                var updateObj = {};
                for (var k in me.resourceObj) {
                    if (k.indexOf('time') === -1 && k.indexOf('Time') === -1) {
                        updateObj[k] = me.resourceObj[k];
                    }
                }
                A.post(me.$root.http + 'updateAuthrole', Q.stringify(updateObj))
                    .then(function(res) {
                        // 刷新当前页
                        me.currentPageRefresh(me, res);
                    })
                    .catch(function(err) {
                        // 错误后关闭loadingbox,提示错误信息
                        me.serverWrong(me);
                    });
            }).catch(function() {
                // 取消提交后做的事
                me.$message({
                    type: 'info',
                    message: '已取消删除！'
                });
            });
        },
        stopPropagation : function(e){
            e.stopPropagation();
        }

    },
    mounted : function(){
        
        var a = document.getElementsByClassName('assignPermissionHandleBox')[0];
        a.onselectstart = function(e){
            e.preventDefault();
        };
    }
});
