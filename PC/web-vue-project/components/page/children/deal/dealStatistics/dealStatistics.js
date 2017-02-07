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
    template: __inline('dealStatistics.html'),
    data: function() {
        return {
            createdTimeRange: [],
            //搜查关键字
            searchObj: {
                startDate: '',
                endDate: '',
                transCode: '',
                signOrg: '',
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
                pageRowId: '0',
                signOrg: 'signOrg-分属代理商',
                merchantName: 'merchantName-商户名称',
                merchantCode: 'merchantCode-商户号',
                termNo: 'termNo-终端号',
                logNo: 'logNo-流水号',
                transAmt: 'transAmt-交易金额',
                feeAmt: 'feeAmt-手续费',
                cardNo: 'cardNo-交易卡号',
                transCode: 'transCode-交易类型',
                cardType: 'cardType-渠道',
                tranTime: 'tranTime-交易时间'
            }],
            currentPage: 1,
            pageSize: 10,
            pageTotal: 0,
            // 交易笔数
            transactionCount: 0,
            datePickerBy: {
                disabledDate: function(date) {
                    // 大于今天 是没有交易的，禁用
                    var now = new Date();
                    if (date > now) {
                        return true;
                    }
                },
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
                    onClick: function(picker) {
                        var end = new Date();
                        var start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                        picker.$emit('pick', [start, end]);
                    }
                }]
            },
            // 时间跨度
            dateMaxRange: 7
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
            // 时间为空
            if (dateArr[0] === null) {
                return;
            }
            // console.log(dateArr[0]);
            // 时间跨度-1天到ms[包含第一天]
            var max = (this.dateMaxRange - 1) * 24 * 60 * 60 * 1000;
            // console.log(new Date(dateArr[1]) - new Date(dateArr[0]) , max);
            if (new Date(dateArr[1]) - new Date(dateArr[0]) > max) {
                this.$message({
                    type: 'warning',
                    message: '所选时间跨度大于' + this.dateMaxRange + '天，已按' + this.dateMaxRange + '天处理!'
                });
                var tar = new Date(dateArr[0]);
                dateArr[1] = tar.getTime() + max;
            }
            this.searchObj.startDate = this.getTime(dateArr[0]);
            this.searchObj.endDate = this.getTime(dateArr[1]);
            console.log(this.searchObj);
        },
        queryData: function(pageNo) {
            if (pageNo) {
                this.searchObj.pageNo = pageNo;
            }
            var me = this;
            A.post(me.$root.http + 'queryTradeCount', Q.stringify(me.searchObj))
                .then(function(res) {
                    if (res.data.retCode === 'SUCCESS') {
                        me.pageTotal = res.data.retData.content.totalPage;
                        me.dealData = res.data.retData.content.rows;
                        me.transactionCount = res.data.retData.content.recordCount;
                        // console.log(me.dealData);
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
            if (this.searchObj.signOrg === '' || this.searchObj.transCode === '' || this.searchObj.startDate === '') {
                this.$message({
                    type: 'warning',
                    message: '【所有条件】必选！！'
                });
                return;
            }
            this.queryData();
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
        doJumpPage: function(page) {
            this.queryData(page);
        },

    }
});
