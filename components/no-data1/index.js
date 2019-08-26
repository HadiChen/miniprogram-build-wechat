Component({
    properties: {
        listLength: {
            type: Number,
            value: 0
        },
        isEnd: {
            type: Boolean,
            value: false
        },
        loading: {
            type: Boolean,
            value: false
        },
        noMore: {
            type: Boolean,
            value: false
        },
        top: {
            type: Number,
            value: 0
        },
        imgType: {
            type: String,
            value: ''
        },
        fullscreen: {
            type: Boolean,
            value: true
        }
    },
    data: {
        imgPath: '',
        imgDesc: ''
    },
    lifetimes: {
        attached() {
            this.setImg();
        }
    },
    methods: {
        setImg() {
            let imgPath = '';
            let imgDesc = '';
            switch (this.data.imgType) {
                case 'content':
                    imgPath = '/assets/images/nodata/content.png';
                    imgDesc = '暂无发布内容';
                    break;
                case 'error':
                    imgPath = '/assets/images/nodata/error.png';
                    imgDesc = '页面错误';
                    break;
                case 'msg':
                    imgPath = '/assets/images/nodata/msg.png';
                    imgDesc = '暂无消息';
                    break;
                case 'resource':
                    imgPath = '/assets/images/nodata/resource.png';
                    imgDesc = '暂无资源';
                    break;
                case 'search':
                    imgPath = '/assets/images/nodata/search.png';
                    imgDesc = '暂无搜索结果';
                    break;
                default:
                    imgPath = '/assets/images/nodata/data.png';
                    imgDesc = '暂无数据';
                    break;
            }
            this.setData({ imgPath, imgDesc });
        }
    }
});
