var Vue = require('vue.js');
var A = require('axios.js');
var Q = require('qs.js');
module.exports = Vue.extend({
	mounted : function(){
		// 阻止菜单编辑时，双击选中文本问题
		var a = document.querySelectorAll('.menuInner')[0];
		a.onselectstart = function(e){
			e.preventDefault();
		}
	},
    template: __inline('menu.html'),
    created: function() {
        // 做登陆判断
		if(!this.$root.login){
			return;
		}
        var me = this;
        // 1.读取菜单列表数据
        A.post(me.$root.http + 'listAllMenu')
            .then(function(res) {
                // 适配数据
                me.menuListData = res.data.retData;
                me.$root.loadingBoxIsShow = false;

            })
            .catch(function(res) {
                me.serverWrong(me);
            })
        // 2.读取所有操作点数据
        A.post(me.$root.http + 'listSytemsoperateBySourceId')
            .then(function(res) {
                // 适配数据
                me.menuFuncAllData = res.data.retData;
            })
            .catch(function(res) {
                me.serverWrong(me);
            })

    },
    data: function() {
        return {
            addMenuNodeData: {
                parentid: -1,
                sysresname: 'sysresname',
                url: 'url'
            },
            addMenuNodeHandleBoxIsShow: false,
            menuListHandleIsShow: false,
            focusMenuFuncData: [{
                id: 1,
                operatecode: 'test',
                operatename: '测试数据'
            }],
            focusMenuBaseInfoData: {
                id: -1,
                sysresname: '测试数据',
                url: 'javascript:;'
            },
            // 测试数据
            menuFuncAllData: [{
                "id": -1,
                "createdtime": null,
                "editedtime": 1482128100000,
                "operatecode": "test",
                "operatename": "测试数据",
                "sortid": 0,
                "systemFunctionId": null
            }],
            // menuListData: [],
            // 测试菜单 5级循环
            menuListData: [{
                "id": 1,
                "editedtime": 1482720051000,
                "parentid": 0,
                "sortid": 0,
                "sysresname": "后台管理",
                "url": "",
                "children": [{
                    "id": 5,
                    "editedtime": 1482803051000,
                    "parentid": 1,
                    "sortid": 0,
                    "sysresname": "代理管理",
                    "children": [{
                        "id": 1,
                        "sysresname": "代理商二级",
                        "children": [{
                            "id": 1,
                            "sysresname": "代理商三级",
                            "children": [{
                                "id": 1,
                                "sysresname": "代理商四级",
                                "children": [{
                                    "id": 1,
                                    "sysresname": "代理商五级",
                                    "children": [],
                                }],
                            }],
                        }],
                    }],
                }]
            },{
                "id": 1,
                "editedtime": 1482720051000,
                "parentid": 0,
                "sortid": 0,
                "sysresname": "后台管理",
                "url": "",
                "children": [{
                    "id": 5,
                    "editedtime": 1482803051000,
                    "parentid": 1,
                    "sortid": 0,
                    "sysresname": "代理管理",
                    "children": [{
                        "id": 1,
                        "sysresname": "代理商二级",
                        "children": [{
                            "id": 1,
                            "sysresname": "代理商三级",
                            "children": [{
                                "id": 1,
                                "sysresname": "代理商四级",
                                "children": [{
                                    "id": 1,
                                    "sysresname": "代理商五级",
                                    "children": [],
                                }],
                            }],
                        }],
                    }],
                }]
            }],
        }
    },
    methods: {
        // 刷新当前页
        currentPageRefresh: function(requstUrl, target, pData, requstData, fn) {
            if (pData.data.retCode === "000000") {
                // 刷新当前也数据数据
                A.post(target.$root.http + requstUrl, requstData)
                    .then(function(res) {
                        // 回掉函数
                        fn && fn(res.data.retData);
                        // 成功后关闭LOADING消息提醒
                        target.$root.loadingBoxIsShow = false;
                        target.$message({
                            message: '数据操作成功!!',
                            type: 'success',
                            showClose: true
                        });
                    })
                    .catch(function(res) {
                        console.log(11)
                        target.serverWrong(target);
                    })
            } else {
                target.$root.loadingBoxIsShow = false;
                target.$message({
                    message: pData.data.retMsg,
                    type: 'warning',
                    showClose: true
                })
            }
        },
        actionSubimt: function(requstUrl, requstObj, refreshUrl, refreshQuery, fn) {
            var me = this;
            this.$confirm('是否提交?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(function() {
                // 确定提交后做的事
                // 显示加载动画
                me.$root.loadingBoxIsShow = true;
                var data = requstObj ? Q.stringify(requstObj) : null;
                A.post(me.$root.http + requstUrl, data)
                    .then(function(res) {
                        // 刷新当前页
                        if (refreshUrl) {
                            me.currentPageRefresh(refreshUrl, me, res, refreshQuery, fn);
                        }

                    })
                    .catch(function(err) {
                        // 错误后关闭loadingbox,提示错误信息
                        me.serverWrong(me);
                    })

            }).catch(function() {
                // 取消提交后做的事
                me.$message({
                    type: 'info',
                    message: '已取消提交'
                });
            });
        },
        // 服务器错误
        serverWrong: function(me) {
            me.$root.loadingBoxIsShow = false;
            me.$message({
                message: "与服务器通信出错，请检查网络或联系管理员！",
                type: 'error',
                showClose: true
            })
        },
        loadingData: function(url, requstObj, fn) {
            var me = this;
            var data = requstObj ? Q.stringify(requstObj) : null;
            A.post(url, data)
                .then(function(res) {
                    if (res.data.retCode === "000000") {
                        fn && fn(res.data);
                    } else {
                        me.$message({
                            message: res.data.retMsg,
                            type: 'warning',
                            showClose: true
                        })
                    }
                })
                .catch(function() {
                    me.serverWrong(me)
                })
        },
        delMenuNode: function(e) {
            // 阻止事件冒泡
            e.stopPropagation();
            var me = this;
            console.log('del');
            var id = e.currentTarget.getAttribute('data-id');
            this.actionSubimt('delAuthSystemResourceRoot', { id: id }, 'listAllMenu', null, function(data) {
                me.menuListData = data;
            });
        },
        editMenuNode: function(e) {
            // 阻止事件冒泡
            e.stopPropagation();
            var me = this;
            console.log("edit");
            var menuId = e.currentTarget.getAttribute('data-id');
            // 加载数据
            this.loadingData(me.$root.http + 'selectAuthSystemResourceById', { id: menuId }, function(data) {
                me.focusMenuBaseInfoData = data.retData;
            });
            this.loadingData(me.$root.http + 'listSytemsoperateBySourceId', { id: menuId }, function(data) {
                me.focusMenuFuncData = data.retData;
            });
            // 打开操作框
            this.menuListHandleIsShow = true;
        },
        addMenuNode: function(e) {
            var me = this;
            // 阻止事件冒泡
            e.stopPropagation();
            this.addMenuNodeData.parentid = e.currentTarget.getAttribute('data-id');
            this.addMenuNodeHandleBoxIsShow = true;
        },
        addMenuNodeSubmit: function() {
            var me = this;
            if (this.addMenuNodeData.parentid === -1) {
                me.serverWrong(me);
                return;
            } else if (this.addMenuNodeData.sysresname == 'sysresname') {
                me.$message({
                    type: 'warning',
                    message: '你未做任何更改！！'
                })
                return;
            }

            this.actionSubimt('addAuthSystemResourceRoot', me.addMenuNodeData, 'listAllMenu', null, function(data) {
                me.menuListData = data;
            });
        },
        addMenuNodeCancel: function() {
            this.addMenuNodeHandleBoxIsShow = false;
            this.addMenuNodeData = {
                parentid: -1,
                sysresname: 'sysresname',
                url: 'url'
            }
        },
        menuInfoSave: function() {
            var me = this,
                menuId = this.focusMenuBaseInfoData.id,
                data = this.focusMenuBaseInfoData;
            this.loadingData(me.$root.http + 'updateAuthSystemResource', data, function(res) {
                if (res.retCode === "000000") {
                    // 加载数据
                    me.menuInfoRefresh();
                } else {
                    me.$message({
                        message: res.retMsg,
                        type: 'warning',
                        showClose: true
                    })
                };
            });

        },
        menuInfoRefresh: function() {
            var me = this;
            var menuId = this.focusMenuBaseInfoData.id;
            if (menuId == -1) {
                console.log('菜单ID读取失败')
                return;
            }
            // 加载数据
            this.loadingData(me.$root.http + 'selectAuthSystemResourceById', { id: menuId }, function(data) {
                me.focusMenuBaseInfoData = data.retData;
                // 刷新菜单
                // currentPageRefresh: function(requstUrl,target, pData,requstData,fn);
               
                A.post(me.$root.http + 'listAllMenu')
		            .then(function(res) {
		                // 适配数据

		                me.menuListData = res.data.retData;
		                me.$root.loadingBoxIsShow = false;

		            })
		            .catch(function(res) {
		                me.serverWrong(me);
		            })
            })
        },
        focusMenuFuncDel: function(row) {
            var me = this,
                funcId = row.systemFunctionId,
                menuId = this.focusMenuBaseInfoData.id;
            console.log('删除当前节点', row.systemFunctionId, this.focusMenuBaseInfoData.id);

            this.loadingData(me.$root.http + 'delAuthSystemFunctionByID', { id: funcId }, function(res) {
                if (res.retMsg === "成功") {
                    me.loadingData(me.$root.http + 'listSytemsoperateBySourceId', { id: menuId }, function(res) {
                        me.focusMenuFuncData = res.retData;
                    })
                } else {
                    me.$message({
                        message: res.retMsg,
                        type: 'warning',
                        showClose: true
                    })
                };
            });
        },
        focusMenuFuncAdd: function(row, e) {
        	// 节流
        	if(this.$root.lock){
        		return
        	}
            var sysresid = this.focusMenuBaseInfoData.id,
                operatecode = row.operatecode,
                menuId = this.focusMenuBaseInfoData.id,
                me = this;
            // 判断当前操作节点是否存在
            for (var i = 0; i < this.focusMenuFuncData.length; i++) {
                if (this.focusMenuFuncData[i].operatecode === operatecode) {
                    me.$message({
                        message: "当前操作点已存在!",
                        type: 'warning',
                        showClose: true
                    });
                    return;
                }
            }
            var obj = {
                sysresid: sysresid,
                operatecode: operatecode
            };
            this.$root.lock = true;
            A.post(me.$root.http + 'addSysFunction', Q.stringify(obj))
                .then(function(res) {
                    if (res.data.retCode === "000000") {
                    	// 关闭节流
                    	me.$root.lock = false;
                        // 1.刷新当前
                        me.loadingData(me.$root.http + 'listSytemsoperateBySourceId', { id: menuId }, function(res) {
                        	me.focusMenuFuncData = res.retData;
                    	})
                    } else {
                        me.$message({
                            message: res.data.retMsg,
                            type: 'warning',
                            showClose: true
                        })
                    }
                })
                .catch(function() {
                    me.serverWrong(me)
                })
        },
        handleNodeClick: function() {

            console.log(arguments)
        }
    }

})
