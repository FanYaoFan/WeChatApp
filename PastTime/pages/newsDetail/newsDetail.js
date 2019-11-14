// pages/newsDetail/newsDetail.js
let appDatas = getApp()
console.log(appDatas)
Page({

  /**
   * 页面的初始数据
   */
  data: {
    index: null,
    detailData: [],
    dataList: [],
    isCollected: false,
  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this
    //  console.log(options) // 是个对象
    let index = options.index  // 这里得到了index 
    wx.setStorageSync('index', index)
    // 如何根据index来得到数据内容呢?
    console.log(index)
    wx.request({
      url: 'http://127.0.0.1:3000/detail',
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function (res) {
        // success
        // console.log(res.data)
        let dataList = res.data,
          detailData = dataList[index]
        // console.log(dataList)
        // console.log(detailData)
        that.setData({
          detailData
        })
        // appDatas.data.detailNew = dataList
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })

    //  先看当前文章之前有没有收藏过,没有就建立该数据缓存,有就直接用

    let CasheStorage = wx.getStorageSync({
      key: 'isCollected',
    })
    console.log(CasheStorage)
    // 判断用户是否收藏  
    // if (CasheStorage[index]) {
    //   this.setData({
    //     isCollected: true
    //   })
    // }  

  },



  // 分享 
  handleShare() {
    console.log(1)
    wx.showActionSheet({
      itemList: [
        '分享到朋友圈',
        '分享到QQ空间',
        '分享到微博'
      ]
    })
  },


  getCollection() {
    let isCollected = !this.data.isCollected
    this.setData({
      isCollected: isCollected
    })
    let title = isCollected ? '收藏成功' : '取消收藏'
    wx.showToast({
      title,
      icon: 'success'
    })

    // 存储数据
    let index = wx.getStorageSync('index')
    console.log(index)
    wx.getStorage({
      key: 'isCollected',
      success: function (res) {
        // success
        console.log(res.data)
        console.log('weishenmfs')
        let obj = res.data
        if (!obj) {
          obj = {}
        }
        obj[index] = isCollected
        wx.setStorage({
          key: 'isCollected',
          data: obj,
          success: function (res) {
            // success
            console.log('数据存成功')
          },
          fail: function () {
            // fail
          },
          complete: function () {
            // complete
          }
        })
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })
    // wx.getStorage({
    //   key: 'isCollected',
    //   success: res => {
    //     let obj = res.data
    //     if(!obj){
    //        obj = {}
    //     }
    //     obj[index] = isCollected
    //     console.log(obj)
    //     wx.setStorage({
    //       key: 'isCollected',
    //       data: obj,
    //       success: () => {
    //         console.log('数据缓存成功')
    //       }
    //     })
    //   }
    // })

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