const buildBehavior = require('../../../utils/build-behavior/index');
Component({
    behaviors: [buildBehavior],
    properties: {
        imagesList: {
            type: Array,
            value: []
        },
        height: {
            type: Number,
            optionalTypes: [String],
            value: 'auto',
            observer() {
                this.handleHeightStyle();
            }
        }
    },
    data: {
        heightStyle: '',
        osProcess: ''
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
        handleHeightStyle() {
            this.setOsProcess();
            let hs = '';
            if (this.data.height) {
                hs = `height: ${typeof this.data.height === 'string' ? this.data.height : this.data.height + 'px'};`;
            }
            if (hs !== this.data.heightStyle) {
                this.setData({
                    heightStyle: hs
                });
            }
        },
        setOsProcess() {
            let num = Math.ceil(750 * (100 / this.data.imagesList.length / 100));
            let osProcess = `?x-oss-process=image/resize,w_${num}`;
            if (osProcess !== this.data.osProcess) {
                this.setData({
                    osProcess
                });
            }
        }
    },
    lifetimes: {
        attached() {
            this.handleHeightStyle();
        }
    },
    // 旧版兼容
    attached() {
        this.handleHeightStyle();
    }
});
