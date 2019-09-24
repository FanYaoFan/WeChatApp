Page({

  /**
   * 页面的初始数据
   */
  data: {
    navList: [],
    swiperList: [],
    curentIndex : 0,
    videoList: [],
   
  },
//  获取首页导航数据
  getNavList(){
    // console.log(123)
    wx.request({
      url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/navList',
      // url: "https://www.easy-mock.com/mock/5cab1e59c0af8d1b182a4120/smart/navList",
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: (res) => {
        // success
        console.log(res)
        if (res.data.code === 0) {
          this.setData({
            navList: res.data.data.navList
    
          })
        }
      },
      fail: function() {
        // fail
       
      },
      complete: function() {
        // complete
      }
    })
  },
  curentIndex(e){
    this.setData({
      curentIndex : e.target.dataset.index
    })
  } ,
  // 获取轮播图
   getSwiperList () {
    wx.request({
      url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/swiperList',
      data: {},
      method: 'GET',
      success: (res) => {
        console.log(res)
        if (res.data.code === 0) {
          this.setData({
            swiperList: res.data.data.swiperList
          })
        }
      }
    })
  },
  // 获取video缩略图
  getVideo(){
    let that = this
    wx.request({
      url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/videosList',
      method: 'GET',
      data : {
        
      },
      success : res => {
        if(res.data.code === 0){
          console.log(res)
          this.setData({
            videoList : res.data.data.videosList
          })
        }
      }
       

    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //1 获取首页导航数据
    this.getNavList()
    this.getSwiperList()
    this.getVideo()
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