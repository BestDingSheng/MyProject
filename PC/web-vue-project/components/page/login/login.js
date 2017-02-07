var Vue = require('vue.js');
var A = require('axios.js');
var Q = require('qs.js');
module.exports = Vue.extend({
    template: __inline('login.html'),
    data: function () {
        var me = this;
        var checkUsername = function (rule, value, callback) {
            if (value === '') {
                return callback(new Error('用户名不能为空'));
            }
            // 检测用户名
            callback();
        };
        var checkPassword = function (rule, value, callback) {
            if (value === '') {
                callback(new Error('请输入密码'));
            } else if (value.length < 12 && value !== '123456' || value.length > 32) {
                callback(new Error('12-32位!'));
            } else {
                callback();
            }
        };
        var doublecheckPassword = function (rule, value, callback) {
            if (value === '') {
                callback(new Error('请再次输入密码'));
            } else if (value !== me.passwordChange_form.userPwd_new) {
                callback(new Error('两次输入密码不一致!'));
            } else {
                callback();
            }
        };
        var numberOnly = function (rule, value, callback) {
            if (value === '') {
                callback(new Error('请输入手机号'));
            } else if (!/^1[0-9]{10}$/.test(value)) {
                callback(new Error('纯数字,11位!!'));
            } else {
                callback();
            }
        };
        var checkCode = function (rule, value, callback) {
            if (value === '') {
                callback(new Error('验证码必填项!'));
            } else if (value.length < 6) {
                callback(new Error('验证码位数不对!!'));
            } else if (value !== me.msgCode){
                callback(new Error('请输入正确的验证码!!'));
            }
            else {
                callback();
            }
        };
        return {
            login_form: {
                loginName: '',
                userPwd: ''
            },
            rules: {
                loginName: [
                    { validator: checkUsername, trigger: 'blur' }
                ],
                userPwd: [
                    { validator: checkPassword, trigger: 'blur' }
                ]
            },
            rules2: {
                loginName: [
                    { validator: checkUsername, trigger: 'blur' }
                ],
                userPwd_old: [
                    { validator: checkPassword, trigger: 'blur' }
                ],
                userPwd_new: [
                    { validator: checkPassword, trigger: 'blur' }
                ],
                userPwd_new_check: [
                    { validator: doublecheckPassword, trigger: 'blur' }
                ],
                mobile: [
                    { validator: numberOnly, trigger: 'blur' }
                ],
                code: [
                    { validator: checkCode, trigger: 'blur' }
                ]
            },
            passwordChange_form: {
                loginName: '',
                userPwd_old: '',
                userPwd_new: '',
                userPwd_new_check: '',
                code: '',
                mobile: ''
            },
            // 正在发送短信
            gettingCode: false,
            //msgCode
            msgCode: ""
        };
    },
    methods: {
        // 服务器错误
        serverWrong: function (me) {
            me.$root.loadingBoxIsShow = false;
            me.$message({
                message: "与服务器通信出错，请检查网络或联系管理员！",
                type: 'error',
                showClose: true
            });
        },
        // 获取数据并保存到父级data
        doLogin: function (val) {
            var me = this;
            this.$refs[val].validate(function (valid) {
                if (valid) {
                    if (!me.$root.login) {
                        me.$root.loadingBoxIsShow = true;
                        A.post(me.$root.http + 'login', Q.stringify(me.login_form))
                            .then(function (res) {
                                // 非第一次登陆
                                if (res.data.retCode === '000000') {
                                    me.$root.loadingBoxIsShow = false;
                                    me.$root.username = me.passwordChange_form.loginName = me.login_form.loginName;
                                    me.$root.login = true;
                                    me.$root.isFirstLogin = false;
                                    me.$root.passwordChangeHandleBoxIsShow = false;
                                    // 成功后到默认页
                                    window.location.hash = 'home/user/myInfo';
                                } else if (res.data.retCode === '200001') {
                                    // 第一次登陆
                                    me.$root.loadingBoxIsShow = false;
                                    me.$root.username = me.passwordChange_form.loginName = me.login_form.loginName;
                                    me.$root.passwordChangeHandleBoxIsShow = true;
                                    me.$root.isFirstLogin = true;
                                    me.$root.login = true;
                                    // 消息提示
                                    me.$message({
                                        message: "初次登陆，请验证手机并重置密码!",
                                        type: 'warning',
                                        showClose: true
                                    });
                                } else {
                                    // 消息提示
                                    me.$root.loadingBoxIsShow = false;
                                    me.$message({
                                        message: res.data.retMsg,
                                        type: 'error',
                                        showClose: true
                                    });
                                    // 清空密码
                                    me.login_form.userPwd = '';
                                }
                                console.log(me.$root.username);
                            })
                            .catch(function (err) {
                                me.serverWrong(me);
                            });
                    }
                } else {
                    console.log('invalid');
                    // me.$refs.longin_form.resetFields();
                    // 清空密码
                    me.login_form.userPwd = '';
                    return false;
                }
            });
        },
        doFisrtLoginAction: function () {
            // 第一次登陆绑定手机及修改初始密码
            var me = this;
            me.$root.loadingBoxIsShow = true;
            // bindMoble--data
            var data = {};
            data.username = me.$root.username;
            data.password = me.passwordChange_form.userPwd_new;
            data.mobile = me.passwordChange_form.mobile;
            // 绑定手机修改密码
            this.bindMoble(data)
        },
        bindMoble: function (data) {
            var me = this;
            A.post(me.$root.http + 'bmcpBoundPhoneNum', Q.stringify(data))
                .then(function (res) {
                    if (res.data.retCode === '000000') {
                        me.$root.loadingBoxIsShow = false;
                        // 成功后到login页，重新登陆
                        window.location.hash = '';
                        me.$root.login = false;
                        me.$root.passwordChangeHandleBoxIsShow = false;
                        // 消息提示
                        me.$message({
                            message: '密码更改成功，请重新登陆',
                            type: 'success',
                            showClose: true
                        });
                    }
                })
                .catch(function (err) {
                    console.log(err);
                    me.serverWrong(me);
                })
        },
        doChangePassword: function () {
            var data = {};
            data.username = this.$root.username;
            data.newPwd = this.passwordChange_form.userPwd_new;
            this.changePasswordFn(data);
        },
        changePasswordFn: function (data) {
            this.$root.loadingBoxIsShow = true;
            var me = this,
                reqData = data;
            A.post(me.$root.http + 'bmcpUpatePwd', Q.stringify(reqData))
                .then(function (res) {
                    me.$root.loadingBoxIsShow = false;
                    if (res.data.retCode === '000000') {
                        me.$root.loadingBoxIsShow = false;
                        // 成功后到login页，重新登陆
                        window.location.hash = '';
                        me.$root.login = false;
                        me.$root.passwordChangeHandleBoxIsShow = false;
                        // 消息提示
                        me.$message({
                            message: '密码更改成功，请重新登陆',
                            type: 'success',
                            showClose: true
                        });
                    } else {
                        me.$root.loadingBoxIsShow = false;
                        // 消息提示
                        me.$message({
                            message: res.data.retMsg,
                            type: 'error',
                            showClose: true
                        });
                        // 清空密码
                        me.login_form.userPwd = '';
                    }
                })
                .catch(function (error) {
                    me.serverWrong(me);
                });
        },
        doAction: function (val) {
            var me = this;
            this.$refs[val].validate(function (valid) {
                if (valid) {
                    if (me.$root.login && !me.$root.isFirstLogin) {
                        me.doChangePassword();
                    } else if (me.$root.login && me.$root.isFirstLogin) {
                        me.doFisrtLoginAction();
                    }
                } else {
                    console.log('invalid');
                    // me.$refs.longin_form.resetFields();
                    // 清空密码
                    me.login_form.userPwd = '';
                    return false;
                }
            });
        },
        timeCount: function (node, time) {
            clearInterval(timer);
            this.gettingCode = true;
            var me = this,
                max = time,
                step = 0,
                timer = null,
                tar = node;
            tar.innerHTML = max + 's';
            timer = setInterval(function () {
                step++;
                now = max - step;
                if (now <= -1) {
                    // 清空定时器
                    clearInterval(timer);
                    // 重置getCode
                    me.gettingCode = false;
                    tar.innerHTML = '获取验证码';
                    return;
                }
                tar.innerHTML = now + 's';
            }, 1000);
        },
        getCode: function (e) {
            if (this.passwordChange_form.mobile === '') {
                this.$message({
                    type: 'warning',
                    message: '请输入手机号'
                });
                return;
            } else if (!/^1[0-9]{10}$/.test(this.passwordChange_form.mobile)) {
                this.$message({
                    type: 'warning',
                    message: '请输入正确的手机号'
                });
                return;
            } else if (this.$root.lock) {
                return;
            }
            // 函数节流
            this.$root.lock = true;
            var me = this,
                tar = e.target,
                data = {};

            data.username = me.passwordChange_form.loginName;
            data.mobile = me.passwordChange_form.mobile;
            A.post(me.$root.http + 'bmcpGetPhoneCode', Q.stringify(data))
                .then(function (res) {
                    // 函数节流
                    me.$root.lock = false;
                    if (res.data.retCode === '000000') {
                        //验证码发送成功后 getCode按钮倒计时
                        me.timeCount(tar, 60);
                        me.msgCode = res.data.retData.token;
                        me.$message({
                            message: '验证码已发送',
                            type: 'success',
                            showClose: true
                        });
                    } else {
                        // 消息提示
                        me.$message({
                            message: res.data.retMsg,
                            type: 'error',
                            showClose: true
                        });
                    }
                })
                .catch(function (err) {
                    // 函数节流
                    me.$root.lock = false;
                    me.serverWrong(me);
                });
        }

    }
});
