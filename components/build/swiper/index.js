const buildBehavior = require('../../../utils/build-behavior/index');
Component({
    behaviors: [buildBehavior],
    properties: {
        viewData: {
            type: Object,
            value: {
                indicatorDots: true,
                vertical: false,
                height: 'auto',
                template: 3,
                list: []
            },
            observer() {
                if (!Array.isArray(this.data.viewData.list)) {
                    this.setData({
                        'viewData.list': []
                    });
                }
                this.handleHeightStyle();
            }
        }
    },
    data: {
        heightStyle: ''
    },
    methods: {
        handleHeightStyle() {
            let hs = '';
            if (this.data.viewData.height) {
                hs = `height: ${typeof this.data.viewData.height === 'string' ? this.data.viewData.height : this.data.viewData.height + 'px'};`;
            }
            if (hs !== this.data.heightStyle) {
                this.setData({
                    heightStyle: hs
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
