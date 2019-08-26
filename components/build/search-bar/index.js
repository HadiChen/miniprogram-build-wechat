const buildBehavior = require('../../../utils/build-behavior/index');
const { navigateTo } = require('../../../utils/wxapi-promise/index');
Component({
    behaviors: [buildBehavior],
    properties: {
        viewData: {
            type: Object,
            value: {
                bgCover: '',
                chatImage: '',
                showChatImage: true,
                placeholder: '请输入产品型号，支持模糊搜索'
            },
        }
    },
    methods: {
        jumpMsgList() {
            if (!wx.getStorageSync('login-status')) {
                navigateTo({
                    path: '/entry/choice/choice',
                    query: {
                        path: '/chat/message-list/index'
                    }
                });
            }
            else {
                wx.navigateTo({
                    url: '/chat/message-list/index'
                });
            }
        },
        jumpSearch() {
            let pages = getCurrentPages();
            let route = pages[pages.length - 1].route;
            navigateTo({
                url: '/pages/search/search',
                query: {
                    // 是店铺就 1, 否则就 0
                    isShop: route && route.indexOf('pages/index/index') !== -1 ? 1 : 0
                }
            });
        }
    }
});
