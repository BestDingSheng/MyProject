var Vue = require('vue.js');
var A = require('axios.js');
var Q = require("qs.js");
module.exports = Vue.extend({
    template: __inline('clerkManage.html'),
    data: function() {
        return {
            //当前页数
            currentPage3: "",
            currentPage: 1,
            pageTotal: 0,
            pageSize: 10,
            //修改对象
            modifyClerkObj: {
                compOrgCode: '',
                name: '',
                gender: "",
                mobile: "",
                email: "",
                role: '',
                employeeId: "",
                username: ''
            },
            date: {
                shortcuts: [{
                    text: '最近一周',
                    onClick: function(picker) {
                        var end = new Date();
                        var start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                        picker.$emit('pick', [start, end]);
                    }
                }, {
                    text: '最近一个月',
                    onClick : function(picker) {
                        var end = new Date();
                        var start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                        picker.$emit('pick', [start, end]);
                    }
                }, {
                    text: '最近三个月',
                    onClick : function(picker) {
                        var end = new Date();
                        var start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                        picker.$emit('pick', [start, end]);
                    }
                }]
            },
            modifyClerkIsShow: false,
            modifyClerkResultIsShow: false,
            addClerkResultIsShow: false,
            addClerkIsShow: false,
            addClerkResultTips: 'success',
            // 搜索关键字
            searchObj: {
                clerkName: '',
                loginName: '',
                //tel: '',
                //CreatTime: '',
            },
            // 添加代理
            addClerkObj: {
                name: '',
                role: '',
                mobile: '',
                gender: "",
                email: "",
                compOrgCode: ""

            },
            //下拉列表
            agentName: [],
            searchResult: {
                count: '',
                data: [{
                        roleId: '123456',
                        name: 'WhoAmI',
                        mobile: '01234567890',
                        id: '555555555555555555',
                        username: '大白',
                        agentNum: 333,
                        creater: '小新',
                        creatTime: '2016-11-02 22:22:22'
                    },

                ]
            }
        };
    },
    created: function() {
        // 做登陆判断
		if(!this.$root.login){
			return;
		}
        //处理数据 以及提交
        var me = this;
        A.post(me.$root.http + "queryEmployee?page=1&pageSize=10")
            .then(function(res) {
                var dataArr = res.data.retData.data;
                me.searchResult = res.data.retData;
                //一共有几页
                var count = res.data.retData.count;
                me.pageTotal = Math.ceil(count / 10);
                me.pageSize = 10;
            })
            .catch(function(err) {
                me.$message({
                    type: err,
                    message: "服务端错误"
                });
            });
        A.get(me.$root.http + "getSubAgentList")
            .then(function(res) {
                me.loadingBoxIsShow = true;
                //适配器
                var datas = res.data.retData;
                me.agentName = datas;

            })
            .catch(function(err) {
                me.$message({
                    type: err,
                    message: "服务端错误"
                });
            });
            //省份的下拉内容
        A.post(me.$root.http + "selectAreaProvince")
            .then(function(res) {
                //console.log(res);
                //得到的数据
                //console.log(res.data.retData);
                me.provinceData = res.data.retData;
            })
            .catch(function(err) {
                console.log(err);
            });

    },
    methods: {
        agentC: function(e) {},
        modifyClerk: function() {
            console.log(this.modifyClerkObj);
            var me = this;
            this.modifyClerkResultIsShow = true;
            A.post(me.$root.http + 'saveOrUpdateEmployee', Q.stringify(this.modifyClerkObj))
                .then(function(res) {
                    console.log(res);
                    //得到数据以后改变 searchResult的data
                    //var count = res.data.retData.count;
                    //console.log(count);
                    //var dataArr =res.data.retData.data;
                    //console.log(dataArr);
                    //me.searchResult.data=dataArr;
                    //me.searchResult.count=count
                })
                .catch(function(err) {
                    console.log(err);
                });
        },
        //完成修改业务员
        //完成修改业务员
        //mofiyClerkDone:function(){
        //	//this.modifyClerkResultIsShow =false;
        //	//this.modifyClerkIsShow =false;
        //};
        doSearch: function() {
            var clerkName = this.searchObj.clerkName;
            var loginName = this.searchObj.loginName;
            var me = this;
            //console.log(clerkName);
            if (clerkName === '' && loginName === '') {
                //this.$message({
                //	showClose: true,
                //	message: '警告哦，这是一条警告消息',
                //	type: 'warning'
                //});
                A.post(me.$root.http + "queryEmployee?page=1&pageSize=10")
                    .then(function(res) {
                        var dataArr = res.data.retData.data;
                        me.searchResult = res.data.retData;
                    })
            }
            if(clerkName){
                console.log(clerkName);
                A.post(me.$root.http + 'queryEmployee?&page=1&pageSize=20',Q.stringify({name:clerkName}))
                    .then(function(res){
                        //console.log(res);
                        //得到数据以后改变 searchResult的data
                        var count = res.data.retData.count;
                        console.log(count);
                        var dataArr =res.data.retData.data;
                        console.log(dataArr);
                        me.searchResult.data=dataArr;
                        me.searchResult.count=count
                    })
                    .catch(function(err){
                        console.log(err);
                    })
            }
            if(loginName){
                A.post(me.$root.http + 'queryEmployee?&page=1&pageSize=20',Q.stringify({username:loginName}))
                    .then(function(res){
                        //console.log(res);
                        var dataArr =res.data.retData.data;
                        //console.log(dataArr);
                        me.searchResult.data=dataArr
                    })
                    .catch(function(err){
                        console.log(err);
                    })
            }




        },
        doAdd: function() {
            console.log('add');
            this.addClerkIsShow = true;
            var me = this;
            A.get(me.$root.http + "getSubAgentListAndDetail?page=1&size=10")
                .then(function(res) {
                    console.log(res);
                    var dataArr = res.data.retData.data;
                    console.log(res.data.retData.data);
                    me.agentName = dataArr;
                })
                .catch(function(err) {
                    me.$message({
                        type: err,
                        message: "服务端错误"
                    });
                });

        },
        goPrevPage: function() {

            console.log("上一页");
            var me = this;
            var c = this.currentPage;
            console.log(c);
            //A.get("http://10.7.34.195:8080/getSubAgentListAndDetail?page="+c+"&size=10")
            //	.then(function(res){
            //		console.log(res);
            //		var page =res.data.retData.page;
            //		page--;
            //		me.currentPage=page;
            //		//me.searchResult =res.data.retData
            //
            //		////获取detail
            //		var dataArr = res.data.retData.data;
            //		//console.log(dataArr);
            //		var ret = [];
            //		for(var i =0; i<dataArr.length; i++){
            //			ret.push(dataArr[i].detail);
            //		}
            //		console.log(ret);
            //		//
            //		me.searchResult.data=ret
            //
            //		var count =res.data.retData.count;
            //		var totalpage = Math.ceil(count / 10);
            //		console.log(totalpage);
            //		if(page<0){
            //			console.log("这里禁区");
            //			page=totalpage
            //		}
            //		console.log(page);
            //	})
            //	.catch(function(err){
            //		console.log(err);
            //
            //	})
        },
        goNextPage: function() {
            console.log("下一页");
        },
        modify : function(row){
            console.log('modify');
            console.log(row);
            this.modifyClerkIsShow=true;

            //console.log(row.compOrgCode);
            //roleId :'123456',
            //	name : 'WhoAmI',
            //	mobile : '01234567890',
            //	id : '555555555555555555',
            //	username : '大白',
            //	agentNum : 333,
            //	creater : '小新',
            //	creatTime : '2016-11-02 22:22:22',
            //	compOrgCode:"66666"
            console.log(this.modifyClerkObj.compOrgCode);
            console.log(this.modifyClerkObj.name);
            this.modifyClerkObj.compOrgCode=row.compOrgCode;
            this.modifyClerkObj.name=row.name;
            this.modifyClerkObj.gender=row.gender;
            this.modifyClerkObj.mobile=row.mobile;
            this.modifyClerkObj.email=row.email;
            this.modifyClerkObj.role=row.role;
            this.modifyClerkObj.username=row.username;
            this.modifyClerkObj.employeeId=row.employeeId;

        },
        del: function() {
            var me = this;
            this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(function() {
                me.$message({
                    type: 'success',
                    message: '删除成功!'
                });
            }).catch(function() {
                me.$message({
                    type: 'info',
                    message: '已取消删除'
                });
            });
        },
        // 添加函数
        doAddClerk: function() {
            // 关闭对话框
            // 打开结果界面
            var me = this;
            this.addClerkResultIsShow = true;
            // this.addAgentIsShow = false;
            console.log(this.addClerkObj);

            var addClerkObj = this.addClerkObj;
            A.post(me.$root.http + 'saveOrUpdateEmployee', Q.stringify(this.addClerkObj))
                .then(function(res) {
                    console.log(res);
                    //var dataArr =res.data.retData.data;
                    //console.log(dataArr);
                    //me.searchResult.data=dataArr
                })
                .catch(function(err) {
                    console.log(err);
                });


        },
        // 添加商户 完成
        addClerkDone: function() {
            // 关闭提示框
            this.addClerkResultIsShow = false;
            this.addClerkIsShow = false;
        },
        // 继续添加商户
        addClerkDoing: function() {
            // 关闭结果提示框
            this.addClerkResultIsShow = false;
        },
        //修改商户 完成
        modifyClerkDone: function() {
            //this.modifyClerkResultIsShow=false;
            this.modifyClerkIsShow = false;
            this.modifyClerkResultIsShow = false;
        },
        //继续修改商户
        modifyClerkDoing: function() {
            this.modifyClerkResultIsShow = false;
        },
        cleanSearchInp: function() {
            this.searchObj = {
                clerkName: '',
                loginName: '',
            };
        },
        addClerk: function() {
            console.log('add');
            this.addClerkIsShow = true;
            var me = this;
            A.get(me.$root.http + "getSubAgentListAndDetail?page=1&size=10")
                .then(function(res) {
                    //console.log(res);
                    var dataArr = res.data.retData.data;
                    //console.log(res.data.retData.data);
                    me.agentName = dataArr;
                })
                .catch(function(err) {
                    me.$message({
                        type: err,
                        message: "服务端错误"
                    });
                });
        },
        handleCurrentChange: function(val) {
            console.log(val);
            this.currentPage = val;
            var me = this;
            A.post(me.$root.http + 'queryEmployee?pageSize=10', Q.stringify({ page: me.currentPage }))
                .then(function(res) {
                    //console.log(res);
                    var dataArr = res.data.retData.data;
                    //console.log(dataArr);
                    //me.agentName=dataArr;
                    me.searchResult = res.data.retData;
                    var count = res.data.retData.count;
                    me.pageTotal = Math.ceil(count / 10);
                })
                .catch(function(res) {
                    me.serverWrong(me);
                });
        }
    }
});
