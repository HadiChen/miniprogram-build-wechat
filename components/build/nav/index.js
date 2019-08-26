const buildBehavior = require('../../../utils/build-behavior/index');
Component({
    behaviors: [buildBehavior],
    properties: {
        viewData: {
            type: Object,
            value: {
                textColor: '',
                activeColor: '',
                list: []
            },
            observer() {
                if (!Array.isArray(this.data.viewData.list)) {
                    this.setData({
                        'viewData.list': []
                    });
                }
            }
        }
    },
    data: {
        route: ''
    },
    methods: {
        jump(e) {
            let link = this.compleUrl(e.currentTarget.dataset.link);
            if (link) {
                if (this.isTabBar(link)) {
                    wx.switchTab({
                        url: link
                    });
                }
                else {
                    wx.navigateTo({
                        url: link
                    });
                }
            }
        },
        getPages() {
            let pages = getCurrentPages();
            let route = pages[pages.length - 1].route;
            if (this.data.viewData.list.length === 0)
                return;
            if (!route) {
                route = 0;
            }
            if (typeof route === 'string') {
                // 没找到该路劲
                let index = this.data.viewData.list.findIndex(item => this.handleUrl(item.link) === route);
                if (index === -1) {
                    route = 0;
                }
            }
            this.setData({
                route
            });
        }
    },
    lifetimes: {
        attached() {
            this.getPages();
        }
    },
    // 旧版兼容
    attached() {
        this.getPages();
    }
});
