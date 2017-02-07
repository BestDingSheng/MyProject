var Vue = require("vue.js");
var A = require('axios.js');
var Q = require('qs.js');
module.exports = Vue.extend({
    created: function () {
        // 做登陆判断
        if (!this.$root.login) {
            return;
        }
        var me = this;
        // 1.查代理商数据
        A.post(me.$root.http + 'getSubAgentList')
            .then(function (res) {
                me.signOrgData = res.data.retData;
            })
            .catch(function () {
                me.serverWrong(me);
            });
        // 2.查询省数据
        A.post(me.$root.http + 'queryMerchantProvince')
            .then(function (res) {
                me.provinceData = res.data.retData;
            })
            .catch(function () {
                me.serverWrong(me);
            });
    },
    template: __inline('vendorInfo.html'),
    data: function () {
        return {
            createdTimeRange: [],
            //搜查关键字
            searchObj: {
                province: '', //省
                city: '', //市
                start: 0,
                limit: 10,
                merchantName: '', //商户姓名
                merchantNo: '', //商户号
                userName: '', // 负责人
                transCode: '',
                signOrg: ''
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
            provinceData: [],
            cityData: [],
            merchantData: [{
                Id_: 'Id_-商户号',
                bankName: 'bankName-收款银行',
                contactName: 'contactName-负责人姓名',
                contactMobile: 'contactMobile-联系电话',
                userCertNo: 'userCertNo-身份证号码',
                bankName: 'bankName-收款银行',
                accountNo: 'accountNo-收款账号',
                accountName: 'accountName-收款人姓名',
                merchantName: 'merchantName-名称',
                merchantExternalName: 'merchantExternalName-名称',
                address: 'address-地址',
                groupName: 'groupName-归属机构'
            }],
            currentPage: 1,
            pageSize: 10,
            pageTotal: 0,
            // 交易笔数
            transactionCount: 0,
        };
    },
    methods: {
        // getCityData
        getCityData: function () {
            var id = this.searchObj.province,
                me = this;
            if (id) {
                this.searchObj.city = '';
                A.post(me.$root.http + 'queryMerchantCityOrDistrict', Q.stringify({
                        areaCode: id
                    }))
                    .then(function (res) {
                        me.cityData = res.data.retData;
                    })
                    .catch(function (err) {
                        me.serverWrong(me);
                    });
            }
        },
        // 服务器错误
        serverWrong: function (me) {
            me.$root.loadingBoxIsShow = false;
            me.$message({
                message: "与服务器通信出错，请检查网络或联系管理员！",
                type: 'error',
                showClose: true
            });
        },
        //根据页码查数据
        queryData: function (pageNo) {
            this.searchObj.start = pageNo;
            var me = this;
            A.post(me.$root.http + 'queryMerchant', Q.stringify(me.searchObj))
                .then(function (res) {
                    if (res.data.retCode === '000000') {
                        me.pageTotal = res.data.retData.totalPage;
                        me.merchantData = res.data.retData.data;
                        me.transactionCount = res.data.retData.totalNum;
                    } else {
                        me.$message({
                            type: 'warning',
                            message: res.data.retMsg
                        });
                    }
                })
                .catch(function (err) {
                    console.log(err)
                    me.serverWrong(me);
                });
        },
        doSearch: function (pageNo) {
            // if (this.searchObj.signOrg === '') {
            //     this.$message({
            //         type: 'warning',
            //         message: '【代理商】必选！！'
            //     });
            //     return;
            // }
            this.queryData(0);
        },
        cleanSearchInp: function () {
            this.searchObj = {
                province: '', //省
                city: '', //市
                start: 0,
                limit: 10,
                merchantName: '', //商户姓名
                merchantNo: '', //商户号
                userName: '', // 负责人
                transCode: '',
                signOrg: ''
            };
        },
        doJumpPage: function (page) {
            this.queryData(page);
        }

    }
});