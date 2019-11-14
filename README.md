# 微信小程序
## 1 [项目](#1-项目)
## 2 [微信小程序使用笔记](#2-微信小程序使用笔记)

# 1项目 
 ### 1 [仿bilibili](https://github.com/FanYaoFan/WeChatApp/tree/master/bilitest)[预览图](https://github.com/FanYaoFan/WeChatApp/blob/master/bilitest/gif/bili.gif)  
 ### 2  [电影文字](https://github.com/FanYaoFan/WeChatApp/blob/master/PastTime)([预览图](https://github.com/FanYaoFan/WeChatApp/blob/master/PastTime/gif/time.gif)
***  
# 微信小程序使用手册  
## 1 tabbar区域
可以把tabbar自定义成一个组件(参考微信开发文档),也可以设置在全局下(app.json)
```JavaScript
"tabBar": {
    "list": [
      {
        "pagePath": "pages/list/list",
        "text": "文章",
        "iconPath": "/images/tab/yuedu.png",
        "selectedIconPath": "/images/tab/yuedu_hl.png"
      },
      {
        "pagePath": "pages/movies/movies",
        "text": "电影",
        "iconPath": "/images/tab/dianying.png",
        "selectedIconPath": "/images/tab/dianying_hl.png"
      }
    ]
```
## 2 新建页面page 
在page下利用微信开发工具新建页面,微信开发工具会自动注册页面,修改要到app.json下
```JavaScript
 "pages": [
    "pages/index/index",
    "pages/list/list", 
    "pages/logs/logs",
    "pages/detail/detail",
    "pages/movies/movies",
    "pages/movieDetail/movieDetail"
  ]
``` 
## 3 组件 
新建组件目录,在微信开发工具下新建components(利于管理),注册组件,哪个页面需要这个组件,就在该页面的json下注册该组件
```JavaScript
{
  "usingComponents": {
    "MyTitle" : "/components/Title/MyTitle"
  }
}
``` 
## 4 全局样式与局部样式 
### 4.1 全局样式
app.json下,window下为全局样式,可自定义修改
```JavaScript
"window": {
    "backgroundTextStyle": "dark",
    "navigationBarBackgroundColor": "#666",
    "navigationBarTitleText": "凭你所好",
    "navigationBarTextStyle": "black",
    "enablePullDownRefresh": true
  },
```
### 4.1 局部样式
在每个页面的json下,自定义修改,每个页面的样式,局部样式权限>全局样式  
```JavaScript
{
  "navigationBarBackgroundColor": "#8ed145",
  "usingComponents": {
   
  }
}
``` 
## 5 初始化 
1. 对app.js进行全删,在微信开发工具输入app()
2. pages >index.js 输入page({})
```JavaScript
App({

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    
  }
})
``` 
## 6 父子传值 (还很模糊) 
### 6.1 父=>子
类似Vue的父子传值,properties:{}  
1. 在父组件的data中,title=""
2. 子组件通过properties来接收这个属性 
```JavaScript
properties:{
    tiile:String
}
``` 
### 6.2 父组件调用子组件方法 

```JavaScript
1 子组件页面中,有一个方法
hello:{
    console.log('hello')
}
2 父组件页面中,绑定一个id 
<header id ="#header"></header> 
在父组件的js中,自定义一个方法,getChild()
getChild(){
    let header = this.selectComponent('#header')
    header.hello() // 父组件执行子组件方法
}
```  
### 6.3 子组件调用父组件方法 
```JavaScript
子组件中
<button bindtap='getParent'>触发父组件方法</button>
js中, methods:{ getParent(){
    this.triggerEvent('parent', '子组件里的数据')
}}
父组件中 
<footer bindmyevent='>
```
父组件的js中 写一个方法  
**父组件给子组件传值
   1.父组件调用子组件的时候给自组件绑定属性


   2、在子组件的properties 里面接收父组件传过来的数据
   properties: {
       myProperty: { // 属性名
         type: String, // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
         value: '', // 属性初始值（可选），如果未指定则会根据类型选择一个
         observer: function(newVal, oldVal){} // 属性被改变时执行的函数（可选），也可以写成在methods段中定义的方法名字符串, 如：'_propertyChange'
       },
      myProperty2: String // 简化的定义方式
    }
**父组件调用子组件的方法
	1、调用子组件的时候定义一个id       <header id="header"></header>
	2、父组件获取子组件的实例          var header = this.selectComponent("#header"
	3、header.方法名                 调用子组件里面的方法                 header.data.msg父组件里面直接获取子组件的数
**子组件执行父组件里面的方
	1、
		this.triggerEvent('myevent', 数据, 参数
	2	<footer bindmyevent="run" />
## 7 跳转页面
### 7.1 wx.navigaTor
wx.navigaTor(){ },跳转保留当前页面
```JavaScript
goList(){
    wx.navigator({
        url :  '/pages/list/list', //跳转路径
        success : function(res){},
        fail : function(){}
    })
}
```
### 7.2 redict 重定向页面
不保留当期页面  
####  wx.navigaTo&redict 方法跳转的必须不是tabbar页面,如果要跳转tabbar页面,就要用到switchTab()  
## 8 target和currentTaget的区别  
冒泡是从内到外,先触发子元素,在冒泡到父元素
捕获是从外到内,先触发父元素在到子元素
target指的是事件的真正触发者  
currentTarget 指的是事件的监听者,当不存在冒泡或者捕获的情况下,两个指向同一个,如果有冒泡或者捕获就会指向各自的事物  
eg 点击轮播图跳转到指定详情页,因为图片是一个swiper-item;因为currentTarget是事件监听者,所以不行,所以用e.target来指定index值
1.	target指向的是触发事件的元素
2.	currentTarget 指的是捕获事件的元素
```JavaScript
<style>
  #out{
      width: 100px;
      height: 100px;
      background-color: sandybrown;
  }
  #in{
      width: 50px;
      height: 50px;
      background-color:seagreen;
  }
</style>
<body>
    <div id="out">
        <div id="in"></div>
    </div>
</body>
<script>
    let out = document.getElementById('out'),
        In = document.getElementById('in')

    function handle(e) {
        console.log(e.target)
        console.log(e.currentTarget)
    }
    out.addEventListener('click', handle, false)  // 点击out  e.target = e.currentTarget = out 
                                                   // 点击in  e.target =in; e.currentTarget =out 
    In.addEventListener('click', handle, false) // 点击in =>  e.target= e.currentTarget = in
</script>
```
## 9 业务逻辑 
常用到的业务逻辑 
### 9.1 轮播图跳转
通过 index来实现 data-index = “index”  可自定义(HTML5自定义属性)
1. data-index={{index}},父盒子循环体,在子元素中按照顺序data-index='0',data-index='1'
2 在该页面中,写上
```JavaScript
clickSwiper(){ let index = e.target.dataset.index}
跳转页面,拼接字符串
wx.navigateTo({
    url: '/pages/detail/detail?index'+index
})
```
## 9.2 点击列表页进入详情页的逻辑
1. 点击整个图片(整个盒子容器),所以用到的是e.currentTarget()方式 
```JavaScript 
<view catchtap='goDetail' data-index='{{index}}'> 
godetail(e){
let index = e.currentTarget.dataset.index
wx.navigateTo({
    url: '/pages/detail/detail?index' +index
})
}
``` 
2. 详情页如何接受这个index参数  
传过来的是一个整体对象
```Javascript
getIndex(options){
    let index = options.index
    this.setData({
        detailObj : datas.list_data[index]
        index
    })
}
```
## 10 模板
### 10.1 创建模板
在pages目录下新建(建议)一个跟要使用的模板名字一致的目录,在里面自定义要重复使用的模板文件 
只需要创建wxml,和wxss文件即可
```JavaScript
<template name="B">// name里最好与外部模板(目录)文字一致
  <text> B template </text>
</template>
```
### 10.2 导入模板
在所需要的页面导入模板文件,import来导入 
1 样式和xml文件分别引入
wxml: 如图 在需要的wxml页面以标签形式  <import src=”/pages/template/listTamplate”/>
wxss: 以在需要的页面的css以@import ‘pages/template/listTamplate.wxss’, (加逗号)

```JavaScript
// 为什么要绝对路径
<import  src = "/pages/template/listTamplate.wxml"/> 
```
### 10.3 使用模板  
```JavaScript
<template is="B" data="{{...item}}"> //与name名字一致
实际使用
 <block wx:for="{{listArr}}" wx:key="{{index}}" >
               <view catchtap="goDetail" data-index="{{index}}">
                <template is="listTemplate" data="{{...item}}"/>
               </view>
            </block>
```  
## 11 数据缓存 
1. wx.setStorage（异步本地存储数据）、
2. wx.setStorageSync(同步本地存储数据)、
3. wx.getStorage（异步使用本地数据）、
4. wx.getStorageSync（同步使用本地数据）、
5. wx.clearStorage（异步清理本地数据缓存）
6. wx.clearStorageSync（同步清理本地数据缓存）  
  
通过wx.getStorage/wx.getStorageSync读取本地缓存。  
通过wx.setStorage/wx.setStorageSync写数据到缓存  
