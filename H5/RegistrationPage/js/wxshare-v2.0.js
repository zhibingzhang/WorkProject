﻿// 配置文件
$.ajax({
    url: "http://event.anruichina.com/wechat/token",
    dataType: 'jsonp',
    data: {
        url: window.location.href
    },
    jsonp: 'jsonpcallback',
    success: function(data) {


        alert(1111);

        data.jsApiList = data.jsApiList.concat('stopRecord');
        try {
            var wxConfig = eval(data);
            wx.config(wxConfig);
        } catch (e) {
            alert(e.message);
        }
    }
});
// 添加meta元素及去掉微信分享框
(function() {
    if (/Android (\d+\.\d+)/.test(navigator.userAgent)) {
        var version = parseFloat(RegExp.$1);
        if (version > 2.3) {
            var phoneScale = parseInt(window.screen.width) / 640;
            document.write('<meta name="viewport" content="width=640, minimum-scale = ' + phoneScale + ', maximum-scale = ' + phoneScale + ', target-densitydpi=device-dpi">');
        } else {
            document.write('<meta name="viewport" content="width=640, target-densitydpi=device-dpi">');
        }
    } else {
        document.write('<meta name="viewport" content="width=640, user-scalable=no, target-densitydpi=device-dpi">');
    }
    //微信去掉下方刷新栏
    if (navigator.userAgent.indexOf('MicroMessenger') >= 0) {
        document.addEventListener('WeixinJSBridgeReady', function() {
            //WeixinJSBridge.call('hideToolbar');
        });
    }
}());
// 接口调用
wx.ready(function() {
    function getShareData(shareType) {
        return shareData = {
            title: 'Apple-ios-Club',
            desc: 'Apple-ios-Club',
            link: '',
            imgUrl: '',
            success: function(res) {
                shareConfirm(shareType);
            },
            cancel: function(res) {
                shareCancel(shareType);
            },
            fail: function(res) {
                shareFail(shareType);
            }
        };
    }

    function shareCancel(type) {

    }

    function shareFail(type) {

    }
    // 分享成功
    function shareConfirm(type) {
        // $.ajax({
        //     url: "http://eventhub04.anruichina.com/o365-puzzles/home/ShareFriend",
        //     type: 'post',
        //     datatype: 'json',
        //     data: {
        //         shareType: type, url: window.location.href
        //     },
        //     success: function(data) {
        //         console.log(data);
        //         // config.leftCount = data.Status;
        //         // if (data.Status > 0) {
        //         //     location.reload();
        //         // }
        //     }
        // });
    }
    wx.onMenuShareAppMessage(getShareData(1));
    wx.onMenuShareTimeline(getShareData(2));
    wx.onMenuShareQQ(getShareData(3));
});
// 接口调用失败
wx.error(function(res) {
    console.log(res.errMsg);
});