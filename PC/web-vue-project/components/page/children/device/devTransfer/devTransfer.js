var Vue = require('vue.js');
module.exports = Vue.extend({
    template: __inline('devTransfer.html'),
    data: function() {
        return {
        	// 搜索关键字
            searchObj: {
                devStartID: '',
                devEndtID: '',
                CreatTime: '',
                agent : '',
                devStatus : ''
            },
            transferIsShow : false,
            transferResultIsShow :false,
            transferData : {
        		oldAgent : '',
        		newAgent : ''
            },

            agent: [
            	{
		          value: 'all',
		          label: '全部'
		        }, {
		          value: 'agent_A',
		          label: 'A代理'
		        },
		        {
		          value: 'agent_A',
		          label: 'A代理'
		        },
		        {
		          value: 'agent_B',
		          label: 'B代理'
		        },
		        {
		          value: 'agent_A',
		          label: 'A代理'
		        }
	        ],
	        devStatus : [
	        	{
	        		value : 'all',
	        		label : "全部"
	        	},
	        	{
	        		value : 'ok',
	        		label :'已开通'
	        	},
	        	{
	        		value : 'init',
	        		label : '初始化'
	        	}
	        ],
	        searchResult : {
	        	total:100,
	        	data :[
		        	{
		        		psam :'123456',
		        		agent : 'A代理',
		        		devStatus : '初始化',
		        	},{
		        		psam :'123456',
		        		agent : 'A代理',
		        		devStatus : '初始化',
		        	},{
		        		psam :'123456',
		        		agent : 'A代理',
		        		devStatus : '初始化',
		        	},{
		        		psam :'123456',
		        		agent : 'A代理',
		        		devStatus : '初始化',
		        	}

	        	]
	        },
			//当前页面
			currentPage:1,
			pageSize: 10,
			pageTotal: 0,
	    }
    },
    methods: {
        agentC: function(e) {
        },
        doSearch : function(){
        	console.log('search')
        },
        doTransfer : function(){
        	// 判断是否存在条件
        	if(!this.searchObj.devStartID){
        		this.$message({
        			type: 'warning',
        			message : '请输入终端起始编号'
        		})
        		return;
        	}else if(!this.searchObj.devEndID){
        		this.$message({
        			type: 'warning',
        			message : '请输入终端结束编号'
        		})
        		return;
        	}
        	this.transferIsShow = true;
        	this.transferResultIsShow = false;
        },
        goPrevPage: function(){
        	console.log("上一页")
        },
        goNextPage : function(){
        	console.log("下一页")
        },
        doTransferDone: function(){
        	this.transferIsShow = false;
        	this.transferResultIsShow = false;
        },
        transferDoing : function(){
        	console.log(this.transferData);
        	this.transferResultIsShow = true;

        },
		handleCurrentChange:function(){

		}


	}
})
