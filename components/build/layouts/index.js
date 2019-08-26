Component({
    properties: {
        viewData: {
            type: Array,
            value: []
        },
        projectId: {
            type: Number,
            optionalTypes: [String],
            value: 0
        },
        scrollViewHeight: {
            type: Number,
            optionalTypes: [String],
            value: '100%'
        }
    },
    methods: {
        getFilterGoodsView() {
            return this.selectAllComponents('.filter-goods-view');
        },
        getFilterGoodsViewList(clear = false) {
            let plist = [];
            this.getFilterGoodsView().forEach(component => {
                if (component && typeof component.getFilterGoodsViewList === 'function') {
                    plist.push(component.getFilterGoodsViewList(clear));
                }
            });
            return Promise.all(plist);
        }
    }
});
