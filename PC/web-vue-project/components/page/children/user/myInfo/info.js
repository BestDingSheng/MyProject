var Vue = require('vue.js');
var A = require('axios.js');
module.exports = Vue.extend({
    template: __inline('info.html'),
    data: function() {
        return {
            dealData: [{
                date: '2016-05-01',
                agent: '10',
                juniorAgent: '90',
                total: '100'
            }, {
                date: '2016-12-02',
                agent: '10',
                juniorAgent: '90',
                total: '100'
            }, {
                date: '2006-05-02',
                agent: '10',
                juniorAgent: '90',
                total: '100'
            }, {
                date: '2016-05-01',
                agent: '10',
                juniorAgent: '90',
                total: '100'
            }, {
                date: '2016-12-02',
                agent: '10',
                juniorAgent: '90',
                total: '100'
            }, {
                date: '2006-05-02',
                agent: '10',
                juniorAgent: '90',
                total: '100'
            }, {
                date: '2016-05-01',
                agent: '10',
                juniorAgent: '90',
                total: '100'
            }, {
                date: '2016-12-02',
                agent: '10',
                juniorAgent: '90',
                total: '100'
            }, {
                date: '2006-05-02',
                agent: '10',
                juniorAgent: '90',
                total: '100'
            }],
            customerData : [
            	{
            		oganization : 'XXX代理商',
            		customerToday : '333',
            		customerMonth : '333',
            		total : '666'
            	}
            ],
            devData : [
            	{
            		oganization : 'XXX代理商',
            		devToday : '222',
            		devMonth : '222',
            		total: "444"
            	}
            ]
        }
    },
    //created:function(){
    //    //处理数据 以及提交
    //   var me = this;
    //    A.post("")
    //        .then(function(res){
    //        //适配器
    //        me.dataAdapter(me,res);
    //            console.log(me);
    //            console.log(res);
    //        })
    //        .catch(function(err){
    //            me.$message({
    //                type:err,
    //                message:"服务端错误"
    //            })
    //        })
    //
    //}
})
