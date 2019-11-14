Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo : {},
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    isHide: false
  },

   // 点击授权弹出允许
  bindGetUserInfo(e) {
    // console.log(e)
    let that = this
    wx.getUserInfo({
      success: function(res){
        // success
        that.setData({
          userInfo : res.userInfo,
          isHide : true
      })
      },
    })
   },
   // 跳转到新闻阅读列表 
  goNews(){
    console.log(1)
   wx.switchTab({
     url: '/pages/news/news',
     success : function(res){
       
     }
   })

    // wx.switchTab({
    //   url: '/pages/news/news',
    //   success: function(res){
    //     // success
    //   },
    //   fail: function() {
    //     // fail
    //   },
    //   complete: function() {
    //     // complete
    //   }
    // })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this
  //  查看是否授权 
  wx.getSetting({ 
     success(res){
       if(res.authSetting['scope.userInfo']){
         wx.getUserInfo({
           success : function(res){
            // console.log(res.userInfo)
            // that.data.userInfo = res.userInfo
            // that.isHide = true
            // console.log(that.data.userInfo)
            that.setData({
                userInfo : res.userInfo,
                isHide : true
            })

           }
         })
       }
     }
  })
  
},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})