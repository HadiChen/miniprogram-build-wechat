const buildBehavior = require('../../../utils/build-behavior/index');
const { navigateTo } = require('../../../utils/wxapi-promise/index');
var processWidth = 0;
Component({
    behaviors: [buildBehavior],
    properties: {
        viewData: {
            type: Object,
            value: {
                row: 2,
                showLeftTopMarker: true,
                showKeyword: true,
                showGoodsLable: true,
                showUnitPrice: true,
                showBgCover: false,
                showGoodsInfo: false,
                bgCover: '',
                bgCoverLink: '',
                topSpace: 74,
                list: []
            },
            observer() {
                this.handleShowCover();
            }
        }
    },
    data: {
        showCover: false,
        marginTop: '',
        osProcess: ''
    },
    methods: {
        goCoverLink() {
            if (this.data.viewData.bgCoverLink) {
                let link = this.compleUrl(this.data.viewData.bgCoverLink);
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
        jump(e) {
            let { id, isshop } = e.currentTarget.dataset;
            if (id) {
                navigateTo({
                    url: '/order/goods/details/details',
                    query: {
                        goodsId: id,
                        isShop: isshop || 0
                    }
                });
            }
        },
        setOsProcess() {
            let osProcess = '';
            let _processWidth = 0;
            switch (this.data.viewData.row) {
                case 1:
                    _processWidth = 240;
                    osProcess = '?x-oss-process=image/resize,w_240';
                    break;
                case 2:
                    _processWidth = 276;
                    osProcess = '?x-oss-process=image/resize,w_276';
                    break;
                case 3:
                    _processWidth = 162;
                    osProcess = '?x-oss-process=image/resize,w_162';
                    break;
            }
            // 没有设置或者换了更大的
            if (!this.data.osProcess || _processWidth > processWidth) {
                processWidth = _processWidth;
                this.setData({
                    osProcess
                });
            }
        },
        handleShowCover() {
            this.setOsProcess();
            let dataObj = {};
            let flag = false;
            let showCover = !!(this.data.viewData.showBgCover && this.data.viewData.bgCover);
            if (showCover !== this.data.showCover) {
                dataObj.showCover = showCover;
                flag = true;
            }
            let marginTop = showCover && this.data.viewData.topSpace ? `margin-top: -${this.data.viewData.topSpace}px;` : '';
            if (marginTop !== this.data.marginTop) {
                dataObj.marginTop = marginTop;
                flag = true;
            }
            if (flag) {
                this.setData(dataObj, () => this.getHeight());
            }
            else {
                this.getHeight();
            }
        },
        getHeight() {
            const fn = () => {
                wx.createSelectorQuery()
                    .in(this)
                    .select('#goods-wrap')
                    .boundingClientRect(rect => {
                    this.triggerEvent('getRect', {
                        bottom: rect.bottom,
                        height: rect.height,
                        left: rect.left,
                        right: rect.right,
                        top: rect.top,
                        width: rect.width,
                    }, {});
                })
                    .exec();
            };
            if (typeof wx.nextTick === 'function') {
                wx.nextTick((_) => {
                    fn();
                });
            }
            else {
                setTimeout(() => {
                    fn();
                }, 0);
            }
        }
    },
    lifetimes: {
        attached() {
            this.handleShowCover();
        }
    },
    // 旧版兼容
    attached() {
        this.handleShowCover();
    }
});
