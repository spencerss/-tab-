# -tab-
这是一个小程序tab切换组件

预览效果：
![image](https://github.com/spencerss/-tab-/blob/master/f61f82e6e193e313b2a35bf5db6e26ea.gif.gif)

使用方法：
### 1. 在你要引入的页面index.json引入组件：
 ~~~
    {
      "usingComponents": {
        "tab": "/components/tab/tab"
      }
    }
 ~~~
### 2.在index.js定义tab栏标题数据
~~~
    tabContent: [
      {
        title: '由我创建',
      },
      {
        title: '来自分享',
      },
      {
        title: '微信文件',
      },
    ]
 ~~~
 ### 3.index.wxml
 ~~~
    <tab tabContent="{{tabContent}}">
      <text slot="0">由我创建</text>
      <text slot="1">来自分享</text>
      <text slot="2">微信文件</text>
    </tab>
 ~~~
    说明：slot的值是 tabContent的索引值
