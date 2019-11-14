// pages/news/news.js
Page({

  
    // 页面的初始数据
  data: {
     dataList : [],
     index : '',
    
  },
   
  //  点击轮播图跳转  
  clickLunbo(e){
    let index = e.target.dataset.index
    console.log(index)
    wx.navigateTo({
      url: '/pages/newsDetail/newsDetail?index='+index,
      success: function(res){
        // success
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  },

  getData(){
    let that = this
    wx.request({
      url: 'http://127.0.0.1:3000/detail',
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
        // success 
        console.log(res)
        that.setData({
          dataList : res.data,
          
        })
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  },

  // 跳转新闻详情页
  goDetail(e){
    //  let that = this
     console.log(e.currentTarget)
    //  console.log(e.currentTarget.dataset.index)

    //  this.setData({
    //    index : e.currentTarget.dataset.index,
    //       // id : 
    //  })
     
     let index = e.currentTarget.dataset.index
     console.log(index)
      
     wx.navigateTo({
       url: '/pages/newsDetail/newsDetail?index='+index,
      //  url: '/pages/newsDetail/newsDetail',
       success: function(res){
         // success
       },
       fail: function() {
         // fail
       },
       complete: function() {
         // complete
       }
     })
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     this.getData()
    
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