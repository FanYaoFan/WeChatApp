// pages/movie/movie.js
let appDatas =getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    moviesList : [],
  },
  // 获取电影数据
  getMovie() {
    wx.request({
      url: 'http://t.yushu.im/v2/movie/top250',
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: (res) => {
        // success
        // console.log(res.data)
        this.setData({
          moviesList: res.data.subjects
        })
        appDatas.data.moviesList = res.data.subjects // 全局
        // console.log(appDatas.globalData.moviesList)
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
       this.getMovie()
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