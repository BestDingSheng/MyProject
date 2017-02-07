var Vue = require('vue.js');
var A = require('axios.js');
var Q = require('qs.js');
module.exports = Vue.extend({
	template: __inline('agentManage.html'),
	data: function () {
		return {
			// 分润比例
			businessRate: [{
					business: '刷卡收款',
					rate: '0.08%'
				}, {
					business: 'D+0业务',
					rate: '1'
				}, {
					business: '扫码收款',
					rate: '0.05%'
				}

			],
			addAgentResultIsShow: false,
			addAgentIsShow: false,
			addAgentResultTips: 'success',

			modifyIsShow: false,
			modifyResultIsShow: false,
			modifyResultTips: "success",
			// 搜索关键字
			searchObj: {
				agentName: '',
				crLicenceNo: '',
				crName: '',
				businessArr: [],
				province: "",
				city: '',
				county: "",
				address: ''
			},
			// 添加代理
			addAgentObj: {
				//businessArr : [],
				email: '',
				telephone: '',
				crName: '',
				gender: '',
				crLicenceNo: '',
				idFront: '',
				idBack: '',
				province: '',
				city: '',
				county: '',
				detailaddress: '',
				//address:'',
				//businessArr : [],

			},
			//修改
			modifyobj: {
				compOrgCode: "",
				crLicenceNo: "",
				crName: '',
				email: '',
				idFront: '',
				idBack: "",
				address: '',
				telephone: ''
			},
			//保存地址
			addressobj: {
				province: '',
				city: '',
				county: '',
			},
			addAgentForm: {},
			agentName: [
				//{
				//    value: 'all',
				//    label: '全部'
				//}, {
				//    value: 'agentB',
				//    label: 'B代理商'
				//}, {
				//    value: 'agentC',
				//    label: 'C代理商'
				//}, {
				//    value: 'agentD',
				//    label: 'D代理商'
				//}, {
				//    value: 'agentE',
				//    label: 'E代理商'
				//}, {
				//    value: 'agentF',
				//    label: 'F代理商'
				//},
			],
			provinceData: [{
				value: '全部',
				label: '全部'
			}, {
				value: '上海',
				label: '上海'
			}, {
				value: '北京',
				label: '北京'
			}],
			cityData: [{
				value: 'all',
				label: '全部'
			}, {
				value: 'Shanghai',
				label: '上海'
			}, {
				value: 'Beijing',
				label: '北京'
			}],
			countyData: [{
				value: 'all',
				label: '全部'
			}, {
				value: 'putuo',
				label: '普陀区'
			}, {
				value: 'huangpu',
				label: '黄浦区'
			}],

			//结果数据
			searchResult: {
				addNum: 0,
				count: '',

			},
			datas: [{
					compOrgCode: '215487',
					agentName: 'z',
					compOrgName: 'A代理商',
					address: '北京市海淀区中关村丹棱街6号中关村金融大厦',
					business: '刷卡收款/D+0业务',
					devNum: 333,
					devOnline: 222,
					customerNum: 999,
					creater: '大白',
					creatTime: '2016-11-02 22:22:22',
					idFront: "www.2323.com"
					//idFront='www.2323.com'
				},


			],
			//当前页数
			currentPage: 1,
			pageSize: 10,
			pageTotal: 0,
			compOrgCode: 0,
			provinceid: "",
			cityid: "",
			chooseIDArr: [],

		}
	},
	created: function () {
		// 做登陆判断
		if(!this.$root.login){
			return;
		}
		//处理数据 以及提交
		var me = this;
		A.get(me.$root.http + "getSubAgentListAndDetail?page=1&pageSize=10")
			.then(function (res) {
				var dataArr = res.data.retData.data;
				console.log(dataArr);
				me.searchResult = res.data.retData;

				var ret = [];
				//获取detail
				for (var i = 0; i < dataArr.length; i++) {
					ret.push(dataArr[i].detail);
				}
				var count = res.data.retData.count;
				me.pageTotal = Math.ceil(count / 10);
				me.datas = ret;

			})
			.catch(function (err) {
				me.$message({
					type: err,
					message: "服务端错误"
				})
			})
		A.get(me.$root.http + "getSubAgentList")
			.then(function (res) {
				me.loadingBoxIsShow = true;
				//适配器
				var datas = res.data.retData;
				me.agentName = datas;

			})
			.catch(function (err) {
				me.$message({
					type: err,
					message: "服务端错误"
				})
			})
		//省份的下拉内容
		A.post(me.$root.http + "selectAreaProvince")
			.then(function (res) {
				console.log(res);
				//得到的数据
				console.log(res.data.retData);
				me.provinceData = res.data.retData
			})
			.catch(function (err) {
				console.log(err);
			})

	},
	methods: {
		proC: function (e) {
			this.provinceid = e;
			var me = this;
			console.log(this.provinceid);
			A.post(me.$root.http + "selectAreaCity/3")
				.then(function (res) {
					console.log(res);
					//得到的数据 放到city的数组上
					console.log(res.data.retData);
					me.cityData = res.data.retData
				})
				.catch(function (err) {
					console.log(err);
				})
		},
		cityC: function (e) {
			console.log(e);
			this.cityid = e;
			console.log(this.cityid);
			var me = this;
			//把城市发送过去
			A.post(me.$root.http + "selectAreaCityByCityId", Q.stringify({
					cityid: this.cityid
				}))
				.then(function (res) {
					console.log(res);
					//得到的数据 放到city的数组上
					me.countyData = res.data.retData
				})
				.catch(function (err) {
					console.log(err);
				})
		},
		countyC: function (e) {
			//this
			var city = this.searchObj.city;
			console.log(city);
			var me = this;
			//A.post(me.$root.http + "selectAreaCityByCityId?cityid=3")
			//	.then(function(res){
			//		console.log(res);
			//		//得到的数据 放到county的数组上
			//		//me.countyData=
			//	})
			//	.catch(function(err){
			//		console.log(err);
			//	})
		},
		agentC: function (e) {
			this.compOrgCode = e;
			console.log(this.compOrgCode);
			var me = this
			A.get(me.$root.http + "getAgentDetail?compOrgCode=" + this.compOrgCode)
				.then(function (res) {
					console.log(res);
					console.log(res.data.retData);
					var doSearchResult = res.data.retData;
					//doSearchResult是一个对象，把对象变成数组才可以显示结果
					var arr = [];
					arr.push(doSearchResult);
					console.log(arr);
					me.datas = arr
					//me.searchResult.data= arr
				})
				.catch(function (err) {
					console.log(err);
				})
		},

		saveaddress: function () {
			console.log(this.addressobj);
			//	A.post("http://addAgent2Bmcp",Q.stringify(this.addressobj))
			//		.then(function(res){
			//			console.log(res);
			//			console.log(res);
			//		})
			//		.catch(function(err){
			//			console.log(err);
			//		})
			//}

		},
		doSearch: function () {
			{
				//处理数据 以及提交
				var me = this;
				if (this.searchObj.crLicenceNo) {
					console.log(this.searchObj.crLicenceNo);
					A.post(me.$root.http + "getSubAgentListAndDetail?page=1&pageSize=10", Q.stringify({
							crLicenceNo: me.searchObj.crLicenceNo
						}))
						.then(function (res) {
							console.log(res);
							console.log(res.data.retData.data);
							me.datas = res.data.retData.data
						})
						.catch(function (err) {
							console.log(err);
						})
				}
				console.log(this.searchObj.crName);
				if (this.searchObj.crName) {
					console.log(this.searchObj.crName);
					A.post(me.$root.http + "getSubAgentListAndDetail?page=1&pageSize=10", Q.stringify({
							crName: me.searchObj.crName
						}))
						.then(function (res) {
							console.log(res);
							console.log(res.data.retData.data);
							//var arr =   [];
							//arr.push(res.data.retData);
							//console.log(arr);
							me.datas = res.data.retData.data
							//me.searchResult.data=res.data.retData
						})
						.catch(function (err) {
							console.log(err);
						})
				}


			}

		},
		cleanSearchInp: function () {
			this.searchObj.agentName = "";
			this.searchObj.crLicenceNo = "";
			this.searchObj.crName = "";

		},
		doAdd: function () {
			console.log('add');
			this.addAgentIsShow = true;
		},
		goPrevPage: function () {
			console.log("上一页");
			var me = this;
			var c = this.currentPage;
			console.log(c);
			var me = this;
			A.get(me.$root.http + "getSubAgentListAndDetail?page=" + c + "&size=10")
				.then(function (res) {
					console.log(res);
					me.datas = res.data.retData.data;
					me.currentPage = res.data.retData.page + 1;
					//一共有几页
					var count = res.data.retData.count;
					var totalpage = Math.ceil(count / 10);
					me.pageTotal = totalpage;
					me.pageSize = 10;
				})
				.catch(function (err) {
					console.log(err);

				})
		},
		goNextPage: function () {
			console.log("下一页");
			var me = this;
			var c = this.currentPage;
			console.log(c);
			A.get(me.$root.http + "getSubAgentListAndDetail?page=" + c + "&size=10")
				.then(function (res) {
					var page = res.data.retData.page;
					page++;
					me.currentPage = page;
					//me.searchResult =res.data.retData
					////获取detail
					var dataArr = res.data.retData.data;
					console.log(dataArr);
					var ret = [];
					for (var i = 0; i < dataArr.length; i++) {
						ret.push(dataArr[i].detail);
					}
					//console.log(ret);
					//
					me.searchResult.data = ret
					var count = res.data.retData.count;
					var totalpage = Math.ceil(count / 10);
					if (page > totalpage) {
						page = 1
					}
				})
				.catch(function (err) {
					me.$message({
						type: err,
						message: "服务端错误"
					})
				})
		},
		delSelected: function () {
			if (this.chooseIDArr.length === 0) {
				return;
			}
			// 处理数据
			var idArr = this.chooseIDArr.map(function (val) {
				return val.id;
				console.log(val.id);
			});

			// 沟通服务器
			var me = this;
			this.$confirm('确定删除所选吗？该操作不可逆！！', '提示', {
				confirmButtonText: '确定',
				cancelButtonText: '取消',
				type: 'warning'
			}).then(function () {
				// 确定提交后做的事
				// 显示加载动画
				me.$root.loadingBoxIsShow = true;
				A.post(me.$root.http + 'updateAgent2Bmcp', Q.stringify({
						idArr: idArr
					}))
					.then(function (res) {
						// 刷新当前页
						me.currentPageRefresh(me, res);
						console.log(res);

					})
					.catch(function (err) {
						// 错误后关闭loadingbox,提示错误信息
						me.serverWrong(me);
					})
			}).catch(function () {
				// 取消提交后做的事
				me.$message({
					type: 'info',
					message: '已取消删除！'
				});
			});
		},
		del: function () {
			var me = this;
			this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
				confirmButtonText: '确定',
				cancelButtonText: '取消',
				type: 'warning'
			}).then(function () {
				me.$message({
					type: 'success',
					message: '删除成功!'
				});
			}).catch(function () {
				me.$message({
					type: 'info',
					message: '已取消删除'
				});
			});
		},
		doChange: function (arr) {
			this.chooseIDArr = arr;
		},
		// 添加代理函数
		doAddAgent: function () {
			// 关闭对话框
			// 打开结果界面
			this.addAgentResultIsShow = true;
			// this.addAgentIsShow = false;
			var addAgentObj = this.addAgentObj;
			var me = this;
			console.log(addAgentObj);
			this.$confirm('确定添加代理商！！', '提示', {
				confirmButtonText: '确定',
				cancelButtonText: '取消',
				type: 'warning'
			}).then(function () {
				// 确定提交后做的事
				// 显示加载动画
				me.$root.loadingBoxIsShow = true;
				A.post(me.$root.http + 'addAgent2Bmcp', Q.stringify(addAgentObj))
					.then(function (res) {
						// 刷新当前页
						me.currentPageRefresh(me, res);
					})
					.catch(function (err) {
						// 错误后关闭loadingbox,提示错误信息
						me.serverWrong(me);
						console.log(err)
					})
			}).catch(function () {
				// 取消提交后做的事
				me.$message({
					type: 'info',
					message: '已取消添加代理商！'
				});
			});
		},
		////修改
		modify: function (row) {
			console.log(row);
			var me = this;
			//modifyobj:{
			//	compOrgCode:"",
			//		crLicenceNo:"",
			//		crName:'',
			//		email:'',
			//		idFront:'',
			//		idBack:"",
			//		address:'',
			//		telephone:''
			//},
			this.modifyobj.compOrgCode = row.compOrgCode;
			this.modifyobj.crLicenceNo = row.crLicenceNo;
			this.modifyobj.crName = row.crName;
			this.modifyobj.email = row.email;
			this.modifyobj.idFront = row.idFront;
			this.modifyobj.idBack = row.idBack;
			this.modifyobj.address = row.address;
			this.modifyobj.telephone = row.telephone;
			this.modifyIsShow = true;

		},
		// 立即修改
		doModify: function () {
			// 关闭对话框
			// 打开结果界面
			this.modifyResultIsShow = true;
			// this.addAgentIsShow = false;
			console.log(this.modifyobj);
			var me = this;
			A.post(me.$root.http + "updateAgent2Bmcp", Q.stringify(this.modifyobj))
				.then(function (res) {
					//适配器
					console.log(res);
				})
				.catch(function (err) {
					console.log(err);
				})

		},
		//完成修改
		modifyDone: function () {
			this.modifyIsShow = false;
			this.modifyResultIsShow = false
		},
		//继续修改
		modifyDoing: function () {
			this.modifyResultIsShow = false
		},
		handleCurrentChange: function (val) {
			this.currentPage = val;
			var me = this;
			var c = this.currentPage;
			A.get(me.$root.http + "getSubAgentListAndDetail?page=" + c + "&size=10")
				.then(function (res) {
					console.log(res);
					var dataArr = res.data.retData.data;
					console.log(dataArr);
					me.agentName = dataArr;
					me.searchResult = res.data.retData;
					var dataArr = res.data.retData.data;
					var ret = [];
					//获取detail
					for (var i = 0; i < dataArr.length; i++) {
						ret.push(dataArr[i].detail);
					}

					me.datas = ret
					// 适配数据
					console.log(res);
					//一共有几页
					var count = res.data.retData.count;
					var totalpage = Math.ceil(count / 10);
					me.pageTotal = totalpage;
					me.pageSize = 10;
					// 成功后关闭LOADING消息提醒
					me.$root.loadingBoxIsShow = false;

				})
				.catch(function (res) {
					me.serverWrong(me);
				})
		},
	}
})