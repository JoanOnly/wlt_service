
//验证用户是否登陆，没有登录就进行登录
function isLogin(){
    config.$ajax({
        url: config.SERVICE_PATH + "/weChatDriver/isLogin",  //URL
        type:'POST',
        dataType: 'json',
        success: function (res) {
            if (!res.success) {
                userLogin();
            }
        }
    });
}

//用户登陆
function userLogin(){
    //获取openid
    var openid = store.get('openid');
    // var openid = 'opYI8w_mVeKrQW4hfeVIOQmC_5t8';
    config.$ajax({
        url: config.SERVICE_PATH + "/weChatDriver/weChatLogin",  //URL
        type:'POST',
        data:{'openid':openid},
        dataType: 'json',
        success: function (result) {
            if (result.success) {
                if (!config.isEmpty(result.data)) {
                    store.remove(config.SESSIONID);
                    // 登录成功，缓存凭证
                    store.set(config.SESSION, result.data.sessionInfo);
                    store.set(config.SESSIONID, result.data.sessionInfo.id);
                    store.set(config.USER_KEY, result.data.userInfo);
                    store.set(config.SYS_INFO, result.data.sysInfo);
                    $.toptip("登录成功！", "success");
                }
            } else {
                $.toptip("登录失败！", "error");
            }
        },
        error: function (result) {
            $.toptip("加载失败，请退出重试！", "error");
        }
    });
}