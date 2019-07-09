// 配置属性
let config = {
    POST: 'post',
    GET: 'get',

    //后台连接接口
    SERVICE_PATH: '/api',

    // 记录sessionId的key
    SESSIONID: 'sessionId',

    // 记录session的key
    SESSION: 'session',

    // 记录登录用户的key
    USER_KEY: 'login_user',

    // 登录超时的错误代码
    UNAUTH_CODE: 2015,

    SYS_INFO: 'sys_info',

    // 是否是服务器运行环境
    ENV: true,

    // 记录之前填写的账号和密码
    getCookiesConfig: function () {
        return {
            domain: 'www.zhwlt.cn',             // 域名
            expires: 7,                         // 有效期（天）
            path: '/app/dispatch_login.html'    // 有效页面
        }
    },

    /**
     * js判断对象是否为空
     * @param obj         验证的变量或者对象
     * @returns {boolean} true:为空
     */
    isEmpty: function (obj) {
        let flag = false;
        if (obj == null || obj === undefined || typeof (obj) === 'undefined' || obj === '') {
            flag = true;
        } else if (typeof (obj) === 'string') {
            obj = obj.trim();
            if (obj === '') {//为空
                flag = true;
            } else {//不为空
                obj = obj.toUpperCase();
                if (obj === 'NULL' || obj === 'UNDEFINED' || obj === '{}') {
                    flag = true;
                }
            }
        } else {
            flag = false;
        }
        return flag;
    },
    /**
     * 获取指定URL的参数值
     * @param url  指定的URL地址
     * @param name 参数名称
     * @return 参数值
     */
    getUrlParam: function (url, name) {
        let pattern = new RegExp("[?&]" + name + "\=([^&]+)", "g");
        let matcher = pattern.exec(url);
        let items = null;
        if (null != matcher) {
            try {
                items = decodeURIComponent(decodeURIComponent(matcher[1]));
            } catch (e) {
                try {
                    items = decodeURIComponent(matcher[1]);
                } catch (e) {
                    items = matcher[1];
                }
            }
        }
        return items;
    },

    $ajax: function (option) {
        option.url = option.url || "";
        option.type = option.type || "GET";
        option.dataType = option.dataType || "json";
        option.xhrFields = option.xhrFields || {withCredentials: true};
        option.headers = option.headers || {sessionId: this.getSessionId()};
        option.timeout = option.timeout || 30000;
        option.beforeSend = option.beforeSend || function (xhr) {
            $.showLoading("正在加载...");
        };
        option.complete = option.complete || function (xhr, status) {
            // 关闭数据加载提示（防止速度过快出现闪退）
            setTimeout(function () {
                $.hideLoading();
            }, 200);
            // 请求状态提示
            if (status === "timeout") {
                $.alert("服务器请求超时");
            }
            if (xhr.status === 404) {
                $.alert("登录超时 404 ", function () {
                    window.location.href = "/api/wechat/wxGetCode"
                });
                return false;
            }
            let responseJSON = JSON.parse(xhr.responseText);
            if ((status === 'success' && responseJSON.code === config.UNAUTH_CODE)) {
                $.alert("登录超时 " + config.UNAUTH_CODE, function () {
                    window.location.href = "/api/wechat/wxGetCode"
                });
                return false;
            }
        };
        $.ajax(option);
        return false;
    },

    userCookie: function () {
        this.$ajax({
            type: config.POST,
            url: config.SERVICE_PATH + '/userInfo/selectUserInfoForm',
            data: {
                id: store.get(config.USER_KEY).id
            },
            success: function (res) {
                if (res.success) {
                    store.set(config.USER_KEY, res.data[0]);
                }
            }
        });
    },

    /**
     * 获取SESSIONID
     */
    getSessionId: function () {
        return store.get(config.SESSIONID);
    },

    /**
     * 判断是否在微信浏览器中打开
     * @returns {boolean}
     */
    isWeixn: function () {
        let ua = navigator.userAgent.toLowerCase();
        return ua.indexOf('micromessenger') !== -1;
    },

    // 格式化数字为空的设为0
    prettifyNumber: function (number) {
        return config.isEmpty(number) ? '0' : number;
    },
    // 字符去空格
    prettifyStr: function (s) {
        return s && s.replace(/\s/g, " ");
    },
    // 方法传入两个数组，第一个数组为key，
    // 第二个数组对应位置为value，此方法在Python中为zip()函数。
    arraytoObj: (keys = [], values = []) => {
        if (keys.length === 0 || values.length === 0) return {};
        const len = keys.length > values.length ? values.length : keys.length;
        const obj = {};
        for (let i = 0; i < len; ++i) {
            obj[keys[i]] = values[i]
        }
        return obj;
    },

    // 转驼峰表示：func.camel('USER_ROLE',true) => UserRole
    // 转驼峰表示：func.camel('USER_ROLE',false) => userRole
    camel: (str, firstUpper = false) => {
        let ret = str.toLowerCase();
        ret = ret.replace(/_([\w+])/g, function (all, letter) {
            return letter.toUpperCase();
        });
        if (firstUpper) {
            ret = ret.replace(/\b(\w)(\w*)/g, function ($0, $1, $2) {
                return $1.toUpperCase() + $2;
            });
        }
        return ret;
    },

    // 把数组里面的所有转化为驼峰命名
    camelArr: (arrs = []) => {
        let _arrs = [];
        arrs.map(function (item) {
            _arrs.push(camel(item));
        });
        return _arrs;
    },
};

//Handlebars 自定义数据格式化、数据运算
if (!config.isEmpty(typeof (Handlebars))) {
    Handlebars.registerHelper({
        'prettifyNumber': config.prettifyNumber,
        'prettifyStr': config.prettifyStr,
        'subtract': function (number1, number2) {
            return number1 - number2;
        },//加
        'computeAdd': function () {
            var big = 0;
            try {
                var len = arguments.length - 1;
                for (var i = 0; i < len; i++) {
                    if (arguments[i]) {
                        big = eval(big + "+" + arguments[i]);
                    }
                }
            } catch (e) {
                throw new Error('Handlerbars Helper "computeAdd" can not deal with wrong expression:' + arguments);
            }
            return big;
        },//比较两个字符串，相同返回true
        'compare': function (str1, str2) {
            console.info(str1);
            console.info(str2);
            if (str1 == str2) {
                return true;
            } else {
                return false;
            }
        }
    });
}

//art-template
if (!config.isEmpty(typeof (template))) {

    // 禁止缓存
    template.defaults.cache = false;

    template.defaults.imports.prettifyNumber = function (value) {
        return config.isEmpty(value) ? " -- " : value;
    };
    /*身份证转地址*/
    template.defaults.imports.cardFormArr = function (value) {
        if (!config.isEmpty(value)) {
            value = value.substr(0, 6);
        }
        return cardArr[value];
    };
    /*手机归属地*/
    template.defaults.imports.mobileCallerloc = function (value) {
        let dataJson = null;
        config.$ajax({
            async: false,
            url: config.SERVICE_PATH + "/mobileCallerloc",
            data: {tel: value},
            success: function (res) {
                if (res.success) {
                    dataJson = res.data;
                } else {
                    dataJson = res.msg;
                }
            },
            error: function () {
                dataJson = "未知";
            }
        });
        return dataJson;
    };
    template.defaults.imports.config = config;
}

//提示页面必须在微信页面中打开
if (!config.isWeixn() && config.ENV) {
    $.modal({
        title: "<p style='text-align: center'><i class='weui-icon-info weui-icon_msg'></i></p>",
        text: "<p style='text-align: center;font-size: 1rem'>请在微信浏览器中打开！</p>",
        buttons: [{
            text: "知道了",
            className: "primary"
        }],
    });
}
