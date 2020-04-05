// components/tab/tab.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabContent: {
      type: Array,
      value: []
    }
  },

  // 启用插槽
  options: {
    multipleSlots: true
  },

  /**
   * 组件的初始数据
   */
  data: {
    nextMoveDistance: '0',//点击下一个标题，下划线移动的距离
    idx: 0, //tab栏选中标题的下标
    currentIndex: '0', //轮播图当前索引
    lineWidth: '150', //下划线宽度
    swiperHeight: '0' //轮播图高度
  }, 


  ready: function () {
    var that = this;
    const query = this.createSelectorQuery();
    let tabContainerHeight;
    query.selectAll('.getTextWidth').boundingClientRect()//tab栏文字宽度
    query.select('.tab-container').boundingClientRect()//tab-container高度
    query.selectViewport().scrollOffset()
    query.exec(function (res) {
      console.log(res)
      tabContainerHeight = res[1].height
      that.setData({
        lineWidth: res[0][0].width,
        nextMoveDistance: JSON.stringify(res[0][0].left),
        swiperHeight: wx.getSystemInfoSync().windowHeight - tabContainerHeight
      });
    })
  }, 

  /**
   * 组件的方法列表
   */
  methods: {
    comFunc(param) {
      var that = this;
      for (let i = 0; i < this.data.tabContent.length; i++) {
        if (param == i) {
          const query = this.createSelectorQuery()
          query.selectAll('.getTextWidth').boundingClientRect()//tab栏文字宽度
          query.selectViewport().scrollOffset()
          query.exec(function (res) {
            that.setData({
              lineWidth: res[0][i].width,
              nextMoveDistance: JSON.stringify(res[0][i].left)
            });
          })
          return;
        }
      }
    },
    clickTab(e) {
      let nowId = parseInt(e.target.dataset.id);
      this.setData({
        idx: nowId,
        currentIndex: nowId
      });
      this.comFunc(nowId);
    },
    swiperIndexchange(e) {
      this.comFunc(e.detail.current);
      this.setData({
        idx: e.detail.current
      });
    }
  }
})
