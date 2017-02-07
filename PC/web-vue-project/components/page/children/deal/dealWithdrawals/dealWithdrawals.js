var Vue = require("vue.js");
var A = require('axios.js');
var Q = require('qs.js');
module.exports = Vue.extend({
    created: function() {
        // 做登陆判断
		if(!this.$root.login){
			return;
		}
        var me = this;
        // 1.查代理商数据
        A.post(me.$root.http + 'getSubAgentList')
            .then(function(res) {
                me.signOrgData = res.data.retData;
            })
            .catch(function() {
                me.serverWrong(me);
            });
    },
    template: __inline('dealWithdrawals.html'),
    data: function() {
        return {
            createdTimeRange: [],
            //搜查关键字
            searchObj: {
                type : 'T_02',
                pageSize: 10,
                pageNo: 0,
                startDate: '',
                endDate: '',
                merchantName: '',
                merchantCode: '',
                transCode: '',
                signOrg: '',
                termNo: '',
                logNo: ''
            },
            //交易类型数据
            transCodeData: [{
                value: 'P_ALL',
                label: '全部'
            }, {
                value: 'P01',
                label: '刷卡'
            }, {
                value: 'p09',
                label: '扫码'
            }, {
                value: 'P01_WITHDRAW',
                label: '刷卡撤销'
            }, {
                value: 'P09_WITHDRAW',
                label: '扫码撤销'
            }],
            // 测试代理商数据
            signOrgData: [],
            
            dealData: [{
                pageRowId : '0',
                signOrg: 'signOrg-分属代理商',
                merchantCode: 'merchantCode-商户号',
                logNo: 'logNo-流水号',
                tranAmt: 'transAmt-交易金额',
                feeAmt: 'feeAmt-手续费',
                tranTime: 'tranTime-交易时间'
            }],
            currentPage: 1,
            pageSize: 10,
            pageTotal: 0,
            // 交易笔数
            transactionCount: 0,
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
        // getTime
        getTime: function(time) {
            var t = new Date(time),
                y = t.getFullYear(),
                M = t.getMonth() + 1 > 9 ? t.getMonth() + 1 : '0' + (t.getMonth() + 1),
                d = t.getDate() > 9 ? t.getDate() : '0' + t.getDate();
            return y + "" + M + "" + d;
        },

        dealTime: function() {
            var dateArr = this.createdTimeRange;
            if (dateArr[0] === null) {
                return;
            }
            this.searchObj.startDate = this.getTime(dateArr[0]);
            this.searchObj.endDate = this.getTime(dateArr[1]);
        },
        queryData : function(pageNo){
            if(pageNo){
                this.searchObj.pageNo = pageNo;
            }
            var me = this;
            A.post(me.$root.http + 'queryTrade', Q.stringify(me.searchObj))
                .then(function(res) {
                    if (res.data.retCode === 'SUCCESS') {
                        me.pageTotal = res.data.retData.content.totalPage;
                        me.dealData = res.data.retData.content.rows;
                        me.transactionCount = res.data.retData.content.recordCount;

                        console.log(me.pageTotal);
                    } else {
                        me.$message({
                            type: 'warning',
                            message: res.data.retMsg
                        });
                    }
                })
                .catch(function() {
                    me.serverWrong(me);
                });
        },
        doSearch: function(pageNo) {
            if( this.searchObj.signOrg === ''){
                this.$message({
                    type:'warning',
                    message : '【代理商】必选！！'
                });
                return;
            }
            this.queryData(1);
        },
        cleanSearchInp: function() {
            this.searchObj = {
                pageSize: 10,
                pageNo: 0,
                creatTime: '',
                commerceName: '',
                commerceCode: '',
                tradeType: '',
                agent: '',
                devId: '',
                serialNum: '',
            };
            this.createdTimeRange = [];
        },
        doJumpPage : function(page){
            this.queryData(page);
        }

    }
});
