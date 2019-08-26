const buildBehavior = require('../../../utils/build-behavior/index');
Component({
    behaviors: [buildBehavior],
    properties: {
        viewData: {
            type: Object,
            value: {
                row: 2,
                // 默认蓝色
                activeBgcolor: "#01A3C1",
                // 是否显示角标
                showLeftTopMarker: true,
                showKeyword: true,
                showGoodsLable: true,
                showUnitPrice: true,
                list: []
            },
            observer() {
                this.handleData();
            }
        }
    },
    data: {
        classifyList: [],
        goodsList: [],
        activeCategoryId: 0,
        heightData: {},
        current: 0
    },
    methods: {
        handleData() {
            if (Array.isArray(this.data.viewData.list)) {
                let classifyList = [];
                let goodsList = [];
                this.data.viewData.list.forEach((item) => {
                    classifyList.push({
                        categoryId: item.categoryId,
                        menuName: item.menuName
                    });
                    goodsList.push({
                        categoryId: item.categoryId,
                        list: item.goodsList,
                        row: 2,
                        showLeftTopMarker: true,
                        showKeyword: true,
                        showGoodsLable: true,
                        showUnitPrice: true,
                        showBgCover: false,
                    });
                });
                let activeCategoryId = this.data.activeCategoryId;
                if (!activeCategoryId || classifyList.findIndex((item) => item.categoryId === activeCategoryId) === -1) {
                    activeCategoryId = (classifyList[0] && classifyList[0].categoryId) || 0;
                }
                this.setData({
                    classifyList,
                    goodsList,
                    activeCategoryId,
                    current: 0
                });
            }
            else {
                this.setData({
                    classifyList: [],
                    goodsList: [],
                    activeCategoryId: 0,
                    current: 0
                });
            }
        },
        activeClassify(e) {
            let activeCategoryId = e.currentTarget.dataset.id;
            if (activeCategoryId !== this.data.activeCategoryId) {
                let current = this.data.classifyList.findIndex((item) => item.categoryId === activeCategoryId);
                this.setData({
                    activeCategoryId,
                    current
                });
            }
        },
        swiperChange(e) {
            let current = e.detail.current;
            if (current !== this.data.current) {
                this.setData({
                    current,
                    activeCategoryId: this.data.goodsList[current].categoryId
                });
            }
        },
        getRect(e) {
            let id = e.target.id;
            let height = e.detail.height;
            if (this.data.heightData[id] !== height) {
                this.setData({
                    heightData: Object.assign({}, this.data.heightData, { [id]: height })
                });
            }
        }
    },
    lifetimes: {
        attached() {
            this.handleData();
        }
    },
    // 旧版兼容
    attached() {
        this.handleData();
    }
});
