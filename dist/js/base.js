// 动态cdn地址
const base_url = "https://web-js-css-1255861081.cos.ap-chengdu.myqcloud.com";
// 固定cdn地址
const cdn_url = "https://cdn.bootcss.com";
// 资源版本号
let v = "1.2";

/**
 * 动态加载CSS
 * @param {string} url 样式地址
 */
function dynamicLoadCss(url) {
    var head = document.getElementsByTagName('head')[0];
    var link = document.createElement('link');
    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.href = url;
    head.appendChild(link);
}

/**
 * 动态加载JS
 * @param {string} url 脚本地址
 * @param {function} callback  回调函数
 */
function dynamicLoadJs(url, callback) {
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    if (typeof(callback) == 'function') {
        script.onload = script.onreadystatechange = function () {
            if (!this.readyState || this.readyState === "loaded" || this.readyState === "complete") {
                callback();
                script.onload = script.onreadystatechange = null;
            }
        };
    }
    head.appendChild(script);
}

//动态加载CSS（固定cdn）
dynamicLoadCss(cdn_url + "/weui/1.1.3/style/weui.min.css");
dynamicLoadCss(cdn_url + "/jquery-weui/1.2.1/css/jquery-weui.min.css");
//动态加载CSS（动态cdn）
dynamicLoadCss(base_url + "/css/slider.css" + "?_v=" + v);
dynamicLoadCss(base_url + "/css/ch233.min.css" + "?_v=" + v);
dynamicLoadCss(base_url + "/css/public.css" + "?_v=" + v);

//在加载jquery完成后加载其他js
dynamicLoadJs(cdn_url + "/jquery/3.3.1/jquery.min.js", function () {
    //动态加载js（固定cdn）
    dynamicLoadJs(cdn_url + "/jquery-weui/1.2.1/js/jquery-weui.min.js", null);
    dynamicLoadJs(cdn_url + "/store.js/1.3.20/store.min.js", null);
    dynamicLoadJs(cdn_url + "/handlebars.js/4.0.12/handlebars.min.js", null);
    dynamicLoadJs(cdn_url + "/jquery-validate/1.19.0/jquery.validate.min.js", function () {
        dynamicLoadJs(base_url + "/js/regular.js" + "?_v=" + v, null);
    });
    //动态加载js（动态cdn）
    dynamicLoadJs(base_url + "/js/template-web.js", null);
    dynamicLoadJs(base_url + "/js/h5-slider.js", null);
    dynamicLoadJs(base_url + "/js/jweixin-1.4.0.js", null);
    dynamicLoadJs(base_url + "/js/common.js" + "?_v=" + v, null);
    dynamicLoadJs(base_url + "/js/config.js" + "?_v=" + v, null);
    dynamicLoadJs(base_url + "/js/all-param.js" + "?_v=" + v, null);
    dynamicLoadJs(base_url + "/js/wechat-driver-login.js" + "?_v=" + v, null);
});


