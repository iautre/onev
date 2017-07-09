//app.js
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    
  },

  getOneData:function(cb){
    var that = this
    try {
      var value = wx.getStorageSync('one')
      var timevalue= wx.getStorageSync('onetime')
        if (value) {
           this.globalData.onedata=value
        }
        if(timevalue){
          this.globalData.onetime=timevalue
        }
      } catch (e) {
        // Do something when catch error
      }
    var util = require('./utils/util.js')
    var date=util.formatTime(new Date)
    if(this.globalData.onedata && this.globalData.onetime==date)    {
      typeof cb == "function" && cb(this.globalData.onedata)
    }else{
       wx.request({
      url: 'https://one.veryer.net/onexiaochengxu', //仅为示例，并非真实的接口地址
      data: {
        x: '' ,
        y: ''
      },
      header: {
          'content-type': 'text/json'
      },
      success: function(res) {
        that.globalData.onedata = res.data
              typeof cb == "function" && cb(that.globalData.onedata)
        wx.setStorageSync('one', res.data)
        wx.setStorageSync('onetime',date)
      }
    })
    }
  },
  globalData:{
    onedata:null,
    onetime:null
  }
})