const buildBehavior = require('../../../utils/build-behavior/index');
const { navigateTo } = require('../../../utils/wxapi-promise/index');
Component({
    behaviors: [buildBehavior],
    properties: {
        viewData: {
            type: Object,
            value: {
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
    methods: {
        jump(e) {
            let projectId = e.currentTarget.dataset.id;
            if (projectId) {
                navigateTo({
                    url: '/brand-store/index/index',
                    query: {
                        projectId
                    }
                });
            }
        }
    },
});
