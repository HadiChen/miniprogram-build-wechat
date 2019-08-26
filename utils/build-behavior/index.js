const app = getApp()
// 需要登录的link
const loginLinks = [
  'join/lists/lists'
]

module.exports = Behavior({
  properties: {
    marginBottom: {
      type: Number,
      value: 0,
      observer () {
        this.handleStyle()
      }
    },
    bgColor: {
      type: String,
      value: '',
      observer () {
        this.handleStyle()
      }
    }
  },
  data: {
    style: ''
  },
  methods: {
    handleStyle () {
      let style = []

      if (this.data.marginBottom) {
        style.push(
          `margin-bottom: ${this.data.marginBottom}px`
        )
      }

      if (this.data.bgColor) {
        style.push(
          `background: ${this.data.bgColor}`
        )
      }
      let styleStr = style.join(';')

      if (this.data.style !== styleStr) {
        this.setData({
          style: styleStr
        })
      }
    },
    compleUrl (url) {
      if (!url || typeof url !== 'string') return url
      let _url = url.startsWith('/') ? url : '/' + url

      if (!wx.getStorageSync('login-status') && loginLinks.indexOf(this.handleUrl(_url)) !== -1) {
        let pathNQuery = _url.split('?')
        let queryStr = ''

        if (pathNQuery[1]) {
          queryStr = '&' + pathNQuery[1]
        }
        _url = '/entry/choice/choice?path=' + pathNQuery[0] + queryStr
      }
      return _url
    },
    handleUrl (url) {
      if (typeof url === 'string') {
        var _url = url.split('?')[0]
        return _url.indexOf('/') === 0 ? _url.slice(1) : _url
      }
      return url
    },
    isTabBar (url) {
      let paths = [
        'pages/index/index',
        'pages/classify/index',
        'pages/mine/mine',
        'pages/cart/cart'
      ]
      let flag = paths.indexOf(this.handleUrl(url)) !== -1

      if (flag) {
        // 如果是 TabBar 就保存一下参数
        // switchTab 不能带参数
        this.saveQueryInApp(url)
      }
      return flag
    },
    saveQueryInApp (url) {
      if (!url || typeof url !== 'string') return

      let queryStr = url.split('?')[1]

      if (queryStr) {
        app.globalData.opts = app.globalData.opts || {}

        queryStr.split('&').forEach(query => {
          let opts = query.split('=')
          app.globalData.opts[opts[0]] = opts[1]
        })
      }
    }
  },
  lifetimes: {
    attached () {
      this.handleStyle()
    }
  },
  // 旧版兼容
  attached () {
    this.handleStyle()
  }
})
