const buildBehavior = require('../../../utils/build-behavior/index');
Component({
    behaviors: [buildBehavior],
    properties: {
        viewData: {
            type: Object,
            value: {
                list: []
            },
            observer() {
                this.handleList();
            }
        }
    },
    data: {
        list: []
    },
    methods: {
        handleList() {
            this.setData({
                list: Array.isArray(this.data.viewData.list) ? this.data.viewData.list.slice(0, 6) : []
            });
        },
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
        }
    },
    lifetimes: {
        attached() {
            this.handleList();
        }
    },
    // 旧版兼容
    attached() {
        this.handleList();
    }
});
