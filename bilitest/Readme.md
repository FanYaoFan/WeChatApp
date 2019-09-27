# 微信小程序
## 概述

### 整体分为两个页面 模仿bilibili的小demo
 * 首页 `头部组件`复用 `scroll切换` `轮播图`  `视频列表`
 * 视频详情页 `video` `推荐视频` `评论`

 所有数据通过接口从后台获取,(easymock)编写的接口 
   * 一开始就在页面上的,当用户一进入程序就看得到的数据or效果 一般在onload(监听页面加载)声生命周期中通过wx:request从后台写好的接口来获取, `this.setData` 得到数据
   * 通过wx:for 渲染到页面上
   * 使用的是flex弹性布局

*** 
### 效果图 
 ![首页](./images/bili.png)
 ***
 ***
### 视频详情页
 ![](./images/video.png)
 ***
 ***
### 评论页
 ![](./images/comment.png)

