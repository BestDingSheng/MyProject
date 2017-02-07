/**
 * Created by admin on 2017/1/11.
 */

var Vue = require("vue.js");
module.exports = Vue.extend({
    template: __inline('dealDrawings.html'),
    data: function() {
        return {

            createdTimeRange :[],

            //搜查关键字
            searchObj: {
                CreatTime: '',
                serialNum : '',
                commerceNum : '',
                deviceNum : '',
                commerceName : '',
                agent:''
            },
            //
            agent: [{
                value: 'all',
                label: '全部'
            }, {
                value: 'agentB',
                label: 'A代理商'
            }, {
                value: 'agentC',
                label: 'B代理商'
            }, {
                value: 'agentD',
                label: 'C代理商'
            }],
            dealData :[{
                agent : 'agent',
                commerceName : 'commerceName',
                commerceCode : 'commerceCode',
                serialNum : 'serialNum',
                transactionAmount : 'transactionAmount',
                poundage : 'poundage',
                transactionTime: 'transactionTime',
            }],
            currentPage : 0,
            pageSize : 10,
            pageTotal : 0

        }
    },
    methods: {

        doSearch: function() {
            console.log(this.searchObj);
        },
        cleanSearchInp : function(){
            this.searchObj = {
                CreatTime: '',
                commerceName: '',
                commerceCode : '',
                tradeType: '',
                agent: '',
                devId : '',
                serialNum : ''
            };
        },
        goPrevPage: function() {
            console.log("上一页")
        },
        goNextPage: function() {
            console.log("下一页")
        },
        viewDetail : function(row){

        }

    }
})
