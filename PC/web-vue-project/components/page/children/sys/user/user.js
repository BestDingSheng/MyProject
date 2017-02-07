var Vue = require('vue.js');
var A = require('axios.js');
var Q = require('qs.js');
module.exports = Vue.extend({
    template: __inline('user.html'),
    data: function() {
        return {
            // 更新数据后是否显示加载
            loadingBoxIsShow: false,
            // row是否查看,dasable = true;
            isView: true,
            rowHandleBoxIsShow: false,
            // 时间范围选择控件
            createdTimeRange: [],
            addUserHandleBox: false,
            // 处理当前行数据的备份数据，以备编辑提交
            resourceObj: {},
            gender: [{
                value: '1',
                label: '男'
            }, {
                value: '0',
                label: '女'
            }],
            searchObj: {
                name: '',
                mobile: '',
                gender: '',
                roleName: '',
                startTime: '',
                endTime: '',
                employeeid: ''
            },
            addUserObj: {
                "loginName": "",
                "gender": "",
                "birthday": "",
                "name": "",
                "userPwd": "",
                "provinceId": "",
                "cityId": "",
                "districtId": "",
                "addressDetail": "",
                "fixedPhone": "",
                "fullAddress": "",
                "mobile": "",
                "weiXin": "",
                "qq": "",
                "email": "",
                "employeeId": "",
                "userName": "",
            },
            chooseIDArr: [],
            currentPage: 0,
            pageTotal: 0,
            pageSize: 0,
            userData: [],
            provinceData: [],
            cityData: [],
            districtData: []
        };
    },
    created: function() {
        // 做登陆判断
		if(!this.$root.login){
			return;
		}
        // 组件首次创建拉取数据
        var me = this;

        // 分页插件会加载第一页数据
        A.post(me.$root.http + 'findPageUser', Q.stringify({ page: 1 }))
            .then(function(res) {
                // 适配数据
                me.dataAdapter(me, res);
            })
            .catch(function(res) {
                me.serverWrong(me);
            });
            // test data   
            // this.userData = [{
            //     "id": 2,
            //     "loginName": "zhangsan",
            //     "avatar": 1,
            //     "gender": 1,
            //     "birthday": "2016-12-15",
            //     "name": "刘の华",
            //     "userPwd": "Qwer1234!",
            //     "provinceId": 0,
            //     "cityId": 0,
            //     "districtId": 0,
            //     "addressDetail": "XX街XX号",
            //     "fixedPhone": "1",
            //     "fullAddress": "XX省XX市XX街XX号",
            //     "mobile": "1",
            //     "remark": "1",
            //     "weiXin": "1",
            //     "qq": "0",
            //     "email": null,
            //     "lastLoginDate": "2016-12-20",
            //     "token": null,
            //     "employeeId": "11",
            //     "compOrgCode": 1,
            //     "userName": "zhangsan",
            //     "sortId": 0,
            //     "isDeleted": 0,
            //     "operaterId": 0,
            //     "editedTime": 1482198556000,
            //     "createdTime": 1481773558000,
            //     "roleProperty": 1,
            //     "startTime": null,
            //     "endTime": null
            // }]
    },
    methods: {
        rowProvinceChange: function(provinceid) {
            this.loadCityData(provinceid);
        },
        rowCityChange: function(cityid) {
            this.loadDistrictData(cityid);
        },
        getDistrictByCityid: function(cityid) {
            this.loadDistrictData(cityid);
        },
        getCityByProvinceid: function(provinceid) {
            console.log(arguments);
            this.loadCityData(provinceid);
        },
        // 地址下拉框操作
        loadProvinceData: function(target) {
            var me = target;
            if (me.provinceData.length !== 0) {
                return;
            }
            A.post(me.$root.http + 'selectAreaProvince')
                .then(function(res) {
                    me.provinceData = res.data.retData;
                });

        },
        loadCityData: function(provinceid) {
            var pID = provinceid;
            var me = this;
            A.post(me.$root.http + 'selectAreaCityByProvinceid', Q.stringify({ provinceid: pID }))
                .then(function(res) {
                    me.cityData = res.data.retData;
                });
        },
        loadDistrictData: function(cityid) {
            var cID = cityid;
            var me = this;
            A.post(me.$root.http + 'selectAreaCityByCityId', Q.stringify({ cityid: cID }))
                .then(function(res) {
                    me.districtData = res.data.retData;
                });
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
                A.post(me.$root.http + 'findPageUser', Q.stringify({ page: target.currentPage }))
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
                        me.serverWrong(me);
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
        // 数据适配器
        dataAdapter: function(target, resource) {
            target.userData = resource.data.retData.content;
            target.currentPage = resource.data.retData.number + 1;
            target.pageTotal = resource.data.retData.totalPages;
            target.pageSize = resource.data.retData.size;
        },
        genderChange: function() {
            console.log(arguments);
        },
        // 处理性别
        genderFilter: function(data) {
            return data.gender > 0 ? '男' : '女';
        },
        // 处理时间
        msToTime: function(data) {
            return this.dealTime(new Date(data.createdTime));
        },
        // 添加信息
        addUser: function() {
            this.addUserHandleBox = true;
            // 编辑时拉取provinceData
            this.loadProvinceData(this);
        },
        // 提交添加的数据
        addUserSubmit: function() {
            var me = this;
            this.$confirm('信息添加完整了吗, 是否提交?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(function() {
                // 确定提交后做的事
                // 显示加载动画
                me.$root.loadingBoxIsShow = true;
                A.post(me.$root.http + 'saveUser', Q.stringify(me.addUserObj))
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
                    message: '已取消提交'
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
                A.post(me.$root.http + 'deleteUser', Q.stringify({ idArr: idArr }))
                    .then(function(res) {
                        // 刷新当前页
                        me.currentPageRefresh(me, res);
                        me.$root.loadingBoxIsShow = false;
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

        doSearch: function() {
            if (this.searchObj == {
                    name: '',
                    mobile: '',
                    gender: '',
                    roleName: '',
                    startTime: '',
                    endTime: '',
                    employeeid: ''
                }) {
                this.$message({
                    message: "请至少输入一个条件！",
                    type: 'warning',
                    showClose: true
                });
                return;
            }
            // 处理时间
            console.log("搜索时间范围 ：" + this.createdTimeRange);
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
            A.post(me.$root.http + 'findPageUser', Q.stringify(me.searchObj))
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
                name: '',
                mobile: '',
                gender: '',
                roleName: '',
                startTime: '',
                endTime: '',
                employeeid: '',
                loginname: ''
            };
            this.createdTimeRange = [];
        },
        viewDetail: function(row) {
            this.resourceObj = row;
            this.rowHandleBoxIsShow = true;
            // input不能编辑
            this.isView = true;
        },
        edit: function(row) {
            this.resourceObj = row;
            this.rowHandleBoxIsShow = true;
            var cID = row.cityId;
            var pID = row.provinceId;
            // input可编辑
            this.isView = false;
            // 编辑时拉取provinceData
            this.loadProvinceData(this);
            // console.log('cID:' + cID + ';pID:' + pID)
            if (pID) {
                this.loadCityData(pID);
            }
            if (cID) {
                this.loadDistrictData(cID);
            }
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
            A.post(me.$root.http + 'findPageUser', Q.stringify({ page: me.currentPage }))
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
            console.log(this.provinceData);
            this.$confirm('此操作将覆盖当前数据, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(function() {
                me.$root.loadingBoxIsShow = true;
                var name = me.resourceObj.name;
                A.post(me.$root.http + 'updateUser', Q.stringify(me.resourceObj))
                    .then(function(res) {
                        me.$root.loadingBoxIsShow = false;
                        if (res.data.retCode === '001000') {
                            // 做一次查询，更新数据
                            A.post(me.$root.http + 'findPageUser', Q.stringify(me.searchObj))
                                .then(function(res) {
                                    // 适配数据
                                    me.dataAdapter(me, res);
                                    me.$message({
                                        showClose: true,
                                        message: '更新' + name + '的数据成功！'
                                    });
                                })
                                .catch(function(err) {
                                    me.serverWrong(me);
                                });
                        } else {
                            me.$message({
                                type: 'error',
                                message: res.data.retMsg
                            });
                        }
                    })
                    .catch(function(err) {
                        me.serverWrong(me);
                    });

            }).catch(function() {
                me.$message({
                    type: 'info',
                    message: '已取消提交'
                });
            });
        }
    },
    filters: {
        genderFilter: function(val) {
            return val > 0 ? '男' : '女';
        }
    }
});
