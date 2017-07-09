//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    onedata: {}
  },
  onShow: function () {
   console.log('onLoad')
    var that = this
    app.getOneData(function(onedata){
      that.setData({
        onedata:onedata
      })
    })
  },
  onShareAppMessage: function () {
    return {
      title: 'ONE小菌',
      path: '/pages/index/index',
      success: function(res) {
        // 分享成功
      },
      fail: function(res) {
        // 分享失败
      }
    }
  }

})
