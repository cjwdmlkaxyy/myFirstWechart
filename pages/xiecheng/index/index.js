// pages/xiecheng/index/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    itemBeans: [
      {
        'type': 0,
        'imgUrl': '../../../assets/img/icons/favorite.png',
        'title': '酒店',
        'tagUrl': '',
        'items': [
          { 'imgUrl': '', 'title': '海外酒店', 'tagUrl': '' },
          { 'imgUrl': '', 'title': '团购', 'tagUrl': '' },
          { 'imgUrl': '', 'title': '特价酒店', 'tagUrl': '' },
          { 'imgUrl': '', 'title': '民宿酒店', 'tagUrl': '' },
        ],
        'bgColor': '#FB5265'
      },
      {
        'type': 0,
        'imgUrl': '../../../assets/img/icons/favorite.png',
        'title': '机票',
        'tagUrl': '',
        'items': [
          { 'imgUrl': '', 'title': '火车盘票', 'tagUrl': '' },
          { 'imgUrl': '', 'title': '汽车票.船票', 'tagUrl': '' },
          { 'imgUrl': '', 'title': '特价机票', 'tagUrl': '' },
          { 'imgUrl': '', 'title': '专车.租车', 'tagUrl': '' },
        ],
        'bgColor': '#3695ff'
      },
      {
        'type': 0,
        'imgUrl': '../../../assets/img/icons/favorite.png',
        'title': '旅游',
        'tagUrl': '',
        'items': [
          { 'imgUrl': '', 'title': '目的地攻略', 'tagUrl': '' },
          { 'imgUrl': '', 'title': '游轮旅游', 'tagUrl': '' },
          { 'imgUrl': '', 'title': '周边游', 'tagUrl': '' },
          { 'imgUrl': '', 'title': '定制旅行', 'tagUrl': '' },
        ],
        'bgColor': '#4bb12b'
      }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
