const buildBehavior = require('../../../utils/build-behavior/index');
Component({
    behaviors: [buildBehavior],
    properties: {
        projectId: {
            type: Number,
            optionalTypes: [String],
            value: 0
        },
        viewData: {
            type: Object,
            value: {
                row: 1,
                showLeftTopMarker: false,
                showKeyword: true,
                showGoodsLable: false,
                showUnitPrice: true,
                showBgCover: false,
                showGoodsInfo: true,
                activeTextColor: '#01A3C1',
                textColor: '#333333',
                fontSize: 28,
                observer() {
                    this.setOptions();
                }
            }
        },
        fullscreen: {
            type: Boolean,
            value: false
        },
        scrollViewHeight: {
            type: Number,
            optionalTypes: [String],
            value: '100%',
            observer() {
                this.setScrollViewHeightStyle();
            }
        },
        options: {
            type: Object,
            value: {},
            observer(newVal, oldVal) {
                let newKeys = Object.keys(newVal);
                let oldKeys = Object.keys(oldVal);
                if (newKeys.length !== oldKeys.length) {
                    this.data.hasLoad = true;
                    this.getFilterGoodsViewList(true);
                }
                else {
                    for (let key of newKeys) {
                        if (newVal[key] !== oldVal[key]) {
                            this.data.hasLoad = true;
                            this.getFilterGoodsViewList(true);
                            return;
                        }
                    }
                }
            }
        },
        url: {
            type: String,
            value: 'v2.0/api/web/shop/goodslists'
        }
    },
    data: {
        // 当前页, 不需要使用setData调用
        pageNow: 1,
        // 解决加载问题, 不需要使用setData调用
        hasLoad: false,
        // 是否是推荐
        compisite: 1,
        // 是否是新品
        isNew: false,
        // 销量筛选
        sales: '',
        // 价格筛选
        price: '',
        isEnd: false,
        loading: false,
        goodsData: {
            row: 1,
            showLeftTopMarker: false,
            showKeyword: true,
            showGoodsLable: false,
            showUnitPrice: true,
            showBgCover: false,
            showGoodsInfo: true,
            list: [],
        },
        scrollViewHeightStyle: '',
        activeTextColor: '',
        textColor: '',
        fontSize: 'font-size: 28rpx;'
    },
    methods: {
        setOptions() {
            let goodsOpts = [
                'row',
                'showLeftTopMarker',
                'showKeyword',
                'showGoodsLable',
                'showUnitPrice',
                'showBgCover',
                'showGoodsInfo'
            ];
            let obj = {};
            goodsOpts.forEach(key => {
                if (this.data.goodsData[key] !== this.data.viewData[key] && typeof this.data.viewData[key] !== 'undefined') {
                    obj[`goodsData.${key}`] = this.data.viewData[key];
                }
            });
            // 样式设置
            let fontSize = '';
            let textColor = '';
            let activeTextColor = '';
            if (this.data.viewData.fontSize) {
                fontSize = `font-size: ${this.data.viewData.fontSize}rpx;`;
            }
            if (this.data.viewData.textColor) {
                textColor = `color: ${this.data.viewData.textColor};`;
            }
            if (this.data.viewData.activeTextColor) {
                activeTextColor = `color: ${this.data.viewData.activeTextColor};`;
            }
            if (fontSize !== this.data.fontSize) {
                obj.fontSize = fontSize;
            }
            if (textColor !== this.data.textColor) {
                obj.textColor = textColor;
            }
            if (activeTextColor !== this.data.activeTextColor) {
                obj.activeTextColor = activeTextColor;
            }
            this.setData(obj);
        },
        setScrollViewHeightStyle() {
            let scrollViewHeightStyle = '';
            if (this.data.scrollViewHeight) {
                scrollViewHeightStyle = `height: ${typeof this.data.scrollViewHeight === 'number' ? this.data.scrollViewHeight + 'px' : this.data.scrollViewHeight};`;
            }
            if (scrollViewHeightStyle !== this.data.scrollViewHeightStyle) {
                this.setData({
                    scrollViewHeightStyle
                });
            }
        },
        getDiff(data = {}) {
            let _data = {};
            Object.keys(data).forEach(key => {
                // 对象类型就直接过
                if (typeof data[key] === 'object') {
                    _data[key] = data[key];
                }
                else {
                    if (data[key] !== this.data[key]) {
                        _data[key] = data[key];
                    }
                }
            });
            return _data;
        },
        initPage(data = {}) {
            this.data.pageNow = 1;
            this.setData(this.getDiff(Object.assign(data, {
                isEnd: false
            })));
        },
        getLists(clear = false) {
            this.setData({
                isEnd: true,
                'goodsData.list': [
                    {
                      'goodsId': 5,
                      'goodsNumber': '2216',
                      'unitPrice': '139.00',
                      'keywords': '硅油包水乳化剂',
                      'brandName': 'SiCare',
                      'labelName': '轻盈肤感、高兼容',
                      'classificationName': '标准品',
                      'img': 'https://2.img.sic.wiki/upload/other/9923dd7F74ea094e7e14156C70.jpg',
                      'unit': 'KG',
                      'goodsLabel': ['轻盈肤感、高兼容'],
                      'label': ['标准品'],
                      'salesCount': 119,
                      'viewGoodCount': 707
                    },
                    {
                      'goodsId': 19,
                      'goodsNumber': '9936',
                      'keywords': '有机硅弹性体凝胶',
                      'brandName': 'SiCare',
                      'unitPrice': 109.00,
                      'img': 'https://2.img.sic.wiki/upload/other/fab94f9628d33778e6FB182255.jpg',
                      'unit': 'kg',
                      'goodsLabel': ['丝质触感，更健康'],
                      'label': ['标准品'],
                      'salesCount': 291,
                      'viewGoodCount': 890
                    },
                    {
                      'goodsId': 622,
                      'goodsNumber': '9918',
                      'keywords': '有机硅弹性体凝胶',
                      'brandName': 'SiCare',
                      'unitPrice': 79.00,
                      'img': 'https://2.img.sic.wiki/upload/other/3fd5f12AA6237b1a1010EAFA46.jpg',
                      'unit': 'kg',
                      'goodsLabel': ['柔滑细腻、遮盖细纹'],
                      'label': ['颠覆品'],
                      'salesCount': 138,
                      'viewGoodCount': 796
                    }
                  ]
            })
        },
        compisiteSelect() {
            if (this.data.compisite)
                return;
            this.initPage({
                compisite: 1,
                isNew: false,
                price: '',
                sales: ''
            });
            this.getLists(true);
        },
        newSelect() {
            if (this.data.isNew)
                return;
            this.initPage({
                compisite: false,
                isNew: 1,
                price: '',
                sales: ''
            });
            this.getLists(true);
        },
        salesSelect() {
            let setData = {};
            if (!this.data.sales) {
                setData = {
                    compisite: false,
                    isNew: false,
                    price: ''
                };
            }
            if (this.data.sales === '' || this.data.sales === 1) {
                Object.assign(setData, {
                    sales: 0
                });
            }
            else if (this.data.sales === 0) {
                Object.assign(setData, {
                    sales: 1
                });
            }
            this.initPage(setData);
            this.getLists(true);
        },
        priceSelect() {
            let setData = {};
            if (!this.data.price) {
                setData = {
                    sales: '',
                    compisite: false,
                    new: false
                };
            }
            if (this.data.price === '' || this.data.price === 1) {
                Object.assign(setData, {
                    price: 0
                });
            }
            else if (this.data.price === 0) {
                Object.assign(setData, {
                    price: 1
                });
            }
            this.initPage(setData);
            this.getLists(true);
        },
        layoutSelect() {
            this.setData({
                'goodsData.row': this.data.goodsData.row === 2 ? 1 : 2
            });
        },
        scrolltolower() {
            if (!this.data.isEnd) {
                this.data.pageNow += 1;
                this.getLists();
            }
        },
        getFilterGoodsViewList(clear = false) {
            if (!this.data.isEnd || clear) {
                if (clear) {
                    this.data.pageNow = 1;
                }
                else {
                    this.data.pageNow += 1;
                }
                return this.getLists(clear);
            }
            return Promise.reject(new Error('已加载在完成'));
        }
    },
    lifetimes: {
        attached() {
            this.setOptions();
            this.setScrollViewHeightStyle();
            if (!this.data.hasLoad) {
                this.getLists();
            }
        }
    },
    attached() {
        this.setOptions();
        this.setScrollViewHeightStyle();
        if (!this.data.hasLoad) {
            this.getLists();
        }
    }
});
