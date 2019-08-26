const buildBehavior = require('../../../utils/build-behavior/index');
var timer = null;
Component({
    behaviors: [buildBehavior],
    properties: {
        viewData: {
            type: Object,
            value: {
                bgCover: '',
                info: {
                    shopHomeLogo: '',
                    shopName: '',
                    projectId: 0
                }
            }
        },
        projectId: {
            type: Number,
            optionalTypes: [String],
            value: 0
        }
    },
    data: {
        // 关注数量
        followAmount: 0,
        /**
         * 店铺关注状态： 1：是；0：否
         * */
        isFollowing: 0,
        // 关注弹窗
        show: false
    },
    methods: {
        getProjectId() {
            let projectId = 0;
            try {
                projectId = this.data.projectId || this.data.viewData.info.projectId || app.globalData.storeProjectId;
            }
            catch (e) { }
            return projectId;
        },
        // 获取店的关注数
        getFollowAmount() {
            return Promise.resolve()
                .then(() => {
                    this.setData({
                        followAmount: 10
                    });
                })
        },
        // 获取店铺的关注状态 
        getFollowStatus() {
            return Promise.resolve()
                .then(() => {
                    this.setData({
                        isFollowing: 0
                    });
                })
        }
    },
    lifetimes: {
        attached() {
            if (wx.getStorageSync('login-status')) {
                this.getFollowStatus();
            }
            this.getFollowAmount();
        }
    },
    // 旧版兼容
    attached() {
        if (wx.getStorageSync('login-status')) {
            this.getFollowStatus();
        }
        this.getFollowAmount();
    }
});
