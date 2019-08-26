Page({
  data: {
    lists: [
      {
        contentName: '顶部菜单',
        viewName: '切换导航',
        viewType: 1,
        marginBottom: 0,
        contentBgColor: '#01A3C1',
        sort: 0,
        data: {
          textColor: '#E3FBFF',
          activeColor: '#ffffff',
          list: [
            {
              content: '首页',
              link: '',
              sort: 4
            },
            {
              content: '个人护肤品',
              link: 'pages/classify/index?categoryId=164',
              sort: 3
            },
            {
              content: '涂料与油墨',
              link: 'pages/classify/index?categoryId=197',
              sort: 2
            },
            {
              content: '橡胶与塑料',
              link: 'pages/classify/index?categoryId=650',
              sort: 1
            }
          ]
        }
      },
      {
        contentName: '产品搜索框',
        viewName: '产品搜索',
        viewType: 9,
        contentBgColor: '#01A3C1',
        marginBottom: 0,
        sort: 94,
        data: {
          bgCover: '',
          showChatImage: true,
          chatImage:
            'https://2.img.sic.wiki//upload/other/a84e44B8C46dff25aaC32BD910.png'
        }
      },
      {
        contentName: '轮播图',
        viewName: '图片广告',
        viewType: 2,
        marginBottom: 0,
        contentBgColor: '#f5f5f5',
        sort: 0,
        data: {
          indicatorDots: true,
          vertical: false,
          template: 3,
          height: 188,
          list: [
            {
              cover:
                'https://2.img.sic.wiki//upload/other/408cf5BB82dfcebbb6F9887CE5.png',
              link: 'join/apply/apply?roleId=127',
              sort: 0
            },
            {
              cover:
                'http://2.img.sic.wiki//upload/other/5827819FF52899d16c02AD9B0E.jpg',
              link: 'order/goods/details/details?goodsId=639',
              sort: 0
            },
            {
              cover:
                'http://2.img.sic.wiki//upload/other/784170877D4c82af0bB7097270.jpg',
              link: 'order/goods/details/details?goodsId=638',
              sort: 0
            },
            {
              cover:
                'http://2.img.sic.wiki//upload/other/eea47fE1A2cea990a269908432.jpg',
              link: 'order/goods/details/details?goodsId=75',
              sort: 0
            },
            {
              cover:
                'http://2.img.sic.wiki//upload/other/7e9f4083C4399b1295F89D5525.jpg',
              link: 'order/goods/details/details?goodsId=77',
              sort: 0
            },
            {
              cover:
                'http://2.img.sic.wiki//upload/other/e1b8beC374f103fffeEC2F8BD8.jpg',
              link: 'order/goods/details/details?goodsId=19',
              sort: 0
            },
            {
              cover:
                'http://2.img.sic.wiki//upload/other/8ed242F1DB419a897c241D33B3.jpg',
              link: 'order/goods/details/details?goodsId=74',
              sort: 0
            },
            {
              cover:
                'http://2.img.sic.wiki//upload/other/8aa7d0068E0aadb76268D66FFD.jpg',
              link: 'order/goods/details/details?goodsId=1',
              sort: 0
            },
            {
              cover:
                'http://2.img.sic.wiki//upload/other/512fb94E34e2d5ba6d8FA113CE.jpg',
              link: 'order/goods/details/details?goodsId=5',
              sort: 0
            }
          ]
        }
      },
      {
        contentName: '图文按钮导航',
        viewName: '图文导航',
        viewType: 3,
        marginBottom: 0,
        contentBgColor: '#fff',
        sort: 0,
        data: {
          list: [
            {
              cover: 'https://2.img.sic.wiki//upload/other/4293c6CE68a1383f12E51C3E20.png',
              title: '合伙人',
              link: 'join/lists/lists?type=2',
              sort: 5
            },
            {
              cover: 'https://2.img.sic.wiki//upload/other/48e7ac19BA169088ecFA322457.png',
              title: '鼠博士',
              link: 'consult/index/index',
              sort: 4
            },
            {
              cover: 'https://2.img.sic.wiki//upload/other/4b0295B3AC9af5cbb125F9C57F.png',
              title: '旗舰店',
              link: 'sustain/pavilion/index',
              sort: 3
            },
            {
              cover: 'https://2.img.sic.wiki//upload/other/1824d59CB9771f8c0f0FFE7B2D.png',
              title: '潮配方',
              link: 'consult/formula/index',
              sort: 2
            },
            {
              cover: 'https://2.img.sic.wiki//upload/other/99acf51724e221872448C8A204.png',
              title: '在线课堂',
              link: 'consult/course/course',
              sort: 1
            }
          ]
        }
      },
      {
        contentName: '问答导航',
        viewName: '图片广告',
        viewType: 2,
        marginBottom: 10,
        contentBgColor: '#ffffff',
        sort: 0,
        data: {
          indicatorDots: false,
          vertical: false,
          template: 2,
          height: 0,
          list: [
            {
              cover:
                'https://2.img.sic.wiki//upload/other/95d3e5F86660260273BA307049.png',
              link: 'consult/release/release',
              sort: 2
            },
            {
              cover:
                'https://2.img.sic.wiki//upload/other/28e8183FC771ac1fc29E307455.png',
              link: 'consult/classify/classify?categoryId=41',
              sort: 1
            }
          ]
        }
      },
      {
        contentName: '店铺列表介绍页',
        viewName: '图片广告',
        viewType: 2,
        marginBottom: 0,
        contentBgColor: '#ffffff',
        sort: 0,
        data: {
          indicatorDots: false,
          vertical: false,
          template: 1,
          height: 0,
          list: [
            {
              cover:
                'https://2.img.sic.wiki//upload/other/732a33A295bdf5367c6B038A47.png',
              link: '/sustain/pavilion/index',
              sort: 0
            }
          ]
        }
      },
      {
        contentName: '店铺列表卡片',
        viewName: '店铺列表卡片',
        viewType: 4,
        marginBottom: 10,
        contentBgColor: '#ffffff',
        sort: 0,
        data: {
          list: [
            {
              title: 'SiCare',
              subTitle: '行业：个人护肤品',
              content: '主营：硅油、硅乳液、硅弹性体、硅乳化剂',
              logo: 'https://2.img.sic.wiki//upload/other/24038790C6ff29476c2AD64A3C.png',
              sort: 3,
              shopId: 12
            },
            {
              title: 'Silok',
              subTitle: '行业：涂料与油墨',
              content: '主营：助剂、硅树脂、有机硅预聚体',
              logo:
                'https://2.img.sic.wiki//upload/other/73c7640E4153d14e9aE3594370.png',
              sort: 2,
              shopId: 11
            },
            {
              title: 'SiC',
              subTitle: '行业：橡胶与塑料',
              content: '主营：硅油、硅蜡、硅树脂、硅烷齐聚物',
              logo:
                'https://2.img.sic.wiki//upload/other/8c5cfa392F56e4cb3cBF53ABE0.png',
              sort: 1,
              shopId: 13
            }
          ]
        }
      },
      {
        contentName: '推荐产品列表图片',
        viewName: '图片广告',
        viewType: 2,
        marginBottom: 10,
        contentBgColor: '#ffffff',
        sort: 0,
        data: {
          indicatorDots: false,
          vertical: false,
          template: 1,
          height: 0,
          list: [
            {
              cover:
                'https://2.img.sic.wiki//upload/other/86ebcf3188d9ab06911C7DC5A4.png',
              link: '',
              sort: 0
            }
          ]
        }
      },
      {
        contentName: '推荐产品列表',
        viewName: '产品列表',
        viewType: 5,
        sort: 0,
        marginBottom: 10,
        contentBgColor: '#f5f5f5',
        data: {
          row: 2,
          showLeftTopMarker: true,
          showGoodsInfo: false,
          showKeyword: true,
          showGoodsLable: true,
          showUnitPrice: true,
          showBgCover: false,
          bgCover: '',
          bgCoverLink: '',
          topSpace: 0,
          list: [
            {
              goodsId: 5,
              goodsNumber: '2216',
              unitPrice: '139.00',
              keywords: '硅油包水乳化剂',
              brandName: 'SiCare',
              labelName: '硅油包水，轻盈肤感+',
              classificationName: '标准品',
              img: 'http://2.img.sic.wiki//upload/other/0c76483EDD15e3d2c812363DC1.jpg',
              unit: '',
              goodsLabel: ['硅油包水，轻盈肤感+'],
              label: ['标准品'],
              salesCount: 0,
              viewGoodCount: 0
            },
            {
              goodsId: 796,
              goodsNumber: '9910F',
              unitPrice: '79.00',
              keywords: '',
              brandName: '',
              labelName: '',
              classificationName: '',
              img: '',
              unit: '',
              goodsLabel: [],
              label: [],
              salesCount: 0,
              viewGoodCount: 0
            },
            {
              goodsId: 622,
              goodsNumber: '9918',
              unitPrice: '79.00',
              keywords: '有机硅弹性体凝胶',
              brandName: 'SiCare',
              labelName: '柔滑细腻、遮盖细纹',
              classificationName: '颠覆品',
              img:
                'http://2.img.sic.wiki//upload/other/2e4ada80D4c3ebc17f5427DF21.jpg',
              unit: '支',
              goodsLabel: ['柔滑细腻、遮盖细纹'],
              label: ['颠覆品'],
              salesCount: 0,
              viewGoodCount: 0
            },
            {
              goodsId: 19,
              goodsNumber: '9936',
              unitPrice: '109.00',
              keywords: '有机硅弹性体凝胶',
              brandName: 'SiCare',
              labelName: '丝质触感，更健康',
              classificationName: '标准品',
              img:
                'http://2.img.sic.wiki//upload/other/cb973d219F5612caff9A0EADD9.jpg',
              unit: '',
              goodsLabel: ['丝质触感，更健康'],
              label: ['标准品'],
              salesCount: 0,
              viewGoodCount: 0
            }
          ]
        }
      },
      {
        contentName: '个人护理品图片',
        viewName: '图片广告',
        viewType: 2,
        marginBottom: 0,
        contentBgColor: '#ffffff',
        sort: 0,
        data: {
          indicatorDots: false,
          vertical: false,
          template: 1,
          height: 0,
          list: [
            {
              cover:
                'https://2.img.sic.wiki//upload/other/8d2e6b1A123acbc713F985ECFD.png',
              link: '',
              sort: 0
            }
          ]
        }
      },
      {
        contentName: '个人护理品产品分组',
        viewName: '产品分组',
        viewType: 6,
        sort: 0,
        marginBottom: 20,
        contentBgColor: '#f5f5f5',
        data: {
          row: 2,
          showGoodsInfo: false,
          activeBgcolor: '#6BBD71',
          showLeftTopMarker: true,
          showKeyword: true,
          showGoodsLable: true,
          showUnitPrice: true,
          list: [
            {
              categoryId: 267,
              menuName: '润肤剂',
              sort: 1,
              goodsList: [
                {
                  goodsId: 622,
                  goodsNumber: '9918',
                  unitPrice: '79.00',
                  keywords: '有机硅弹性体凝胶',
                  brandName: 'SiCare',
                  labelName: '柔滑细腻、遮盖细纹',
                  classificationName: '颠覆品',
                  img:
                    'http://2.img.sic.wiki//upload/other/2e4ada80D4c3ebc17f5427DF21.jpg',
                  unit: '支',
                  goodsLabel: ['柔滑细腻、遮盖细纹'],
                  label: ['颠覆品'],
                  salesCount: 0,
                  viewGoodCount: 0
                },
                {
                  goodsId: 19,
                  goodsNumber: '9936',
                  unitPrice: '109.00',
                  keywords: '有机硅弹性体凝胶',
                  brandName: 'SiCare',
                  labelName: '丝质触感，更健康',
                  classificationName: '标准品',
                  img:
                    'http://2.img.sic.wiki//upload/other/cb973d219F5612caff9A0EADD9.jpg',
                  unit: '',
                  goodsLabel: ['丝质触感，更健康'],
                  label: ['标准品'],
                  salesCount: 0,
                  viewGoodCount: 0
                },
                {
                  goodsId: 1,
                  goodsNumber: '2366',
                  unitPrice: '49.00',
                  keywords: '烷基硅油',
                  brandName: 'SiCare',
                  labelName: '迭代二甲基硅油，更亲肤+',
                  classificationName: '迭代品',
                  img:
                    'http://2.img.sic.wiki//upload/other/464d20E8EBd3706673706F20F2.png',
                  unit: '',
                  goodsLabel: ['迭代二甲基硅油，更亲肤+'],
                  label: ['迭代品'],
                  salesCount: 0,
                  viewGoodCount: 0
                },
                {
                  goodsId: 77,
                  goodsNumber: '2816',
                  unitPrice: '11521.54',
                  keywords: '天然油脂硅油',
                  brandName: 'SiCare',
                  labelName: '植物油改性，柔滑保湿+',
                  classificationName: '迭代品',
                  img:
                    'http://2.img.sic.wiki//upload/other/ddd9d720B804300bbd0D773332.jpg',
                  unit: '',
                  goodsLabel: ['植物油改性，柔滑保湿+'],
                  label: ['迭代品'],
                  salesCount: 0,
                  viewGoodCount: 0
                }
              ]
            },
            {
              categoryId: 773,
              menuName: '乳化剂',
              sort: 1,
              goodsList: [
                {
                  goodsId: 0,
                  goodsNumber: '2258',
                  unitPrice: '',
                  keywords: '',
                  brandName: '',
                  labelName: '+',
                  classificationName: '',
                  img: '',
                  unit: '',
                  goodsLabel: [],
                  label: [],
                  salesCount: 0,
                  viewGoodCount: 0
                },
                {
                  goodsId: 5,
                  goodsNumber: '2216',
                  unitPrice: '139.00',
                  keywords: '硅油包水乳化剂',
                  brandName: 'SiCare',
                  labelName: '硅油包水，轻盈肤感+',
                  classificationName: '标准品',
                  img:
                    'http://2.img.sic.wiki//upload/other/0c76483EDD15e3d2c812363DC1.jpg',
                  unit: '',
                  goodsLabel: ['硅油包水，轻盈肤感+'],
                  label: ['标准品'],
                  salesCount: 0,
                  viewGoodCount: 0
                }
              ]
            },
            {
              categoryId: 807,
              menuName: '调理剂',
              sort: 1,
              goodsList: [
                {
                  goodsId: 0, // goodsId未知
                  goodsNumber: '2928H',
                  unitPrice: '',
                  keywords: '',
                  brandName: '',
                  labelName: '',
                  classificationName: '',
                  img: '',
                  unit: '',
                  goodsLabel: [],
                  label: [],
                  salesCount: 0,
                  viewGoodCount: 0
                }
              ]
            },
            {
              categoryId: 808,
              menuName: '粉体',
              sort: 1,
              goodsList: [
                {
                  goodsId: 0, // goodsId未知
                  goodsNumber: '2112',
                  unitPrice: '',
                  keywords: '',
                  brandName: '',
                  labelName: '',
                  classificationName: '',
                  img: '',
                  unit: '',
                  goodsLabel: [],
                  label: [],
                  salesCount: 0,
                  viewGoodCount: 0
                }
              ]
            },
            {
              categoryId: 821,
              menuName: '成膜剂',
              sort: 1,
              goodsList: [
                {
                  goodsId: 0,
                  goodsNumber: '2157',
                  unitPrice: '',
                  keywords: '',
                  brandName: '',
                  labelName: '',
                  classificationName: '',
                  img: '',
                  unit: '',
                  goodsLabel: [],
                  label: [],
                  salesCount: 0,
                  viewGoodCount: 0
                }
              ]
            },
            {
              categoryId: 869,
              menuName: '其他日化原料',
              sort: 1,
              goodsList: [
                {
                  goodsId: 0, // goodsId未知
                  goodsNumber: '2108',
                  unitPrice: '',
                  keywords: '',
                  brandName: '',
                  labelName: '',
                  classificationName: '',
                  img: '',
                  unit: '',
                  goodsLabel: [],
                  label: [],
                  salesCount: 0,
                  viewGoodCount: 0
                }
              ]
            }
          ]
        }
      },
      {
        contentName: '涂料与油墨的图片',
        viewName: '图片广告',
        viewType: 2,
        marginBottom: 0,
        contentBgColor: '#ffffff',
        sort: 0,
        data: {
          indicatorDots: false,
          vertical: false,
          template: 1,
          height: 0,
          list: [
            {
              cover:
                'https://2.img.sic.wiki//upload/other/3bdbb1F2B92060a08d93B87E1B.png',
              link: '',
              sort: 0
            }
          ]
        }
      },
      {
        contentName: '涂料与油墨产品分组',
        viewName: '产品分组',
        viewType: 6,
        sort: 0,
        marginBottom: 20,
        contentBgColor: '#f5f5f5',
        data: {
          row: 2,
          activeBgcolor: '#4660BF',
          showGoodsInfo: false,
          showLeftTopMarker: true,
          showKeyword: true,
          showGoodsLable: true,
          showUnitPrice: true,
          list: [
            {
              categoryId: 0, // 分类ID未知
              menuName: '表面控制助剂',
              sort: 1,
              goodsList: [
                {
                  goodsId: 0, // goodsId未知
                  goodsNumber: '355',
                  unitPrice: '',
                  keywords: '',
                  brandName: '',
                  labelName: '',
                  classificationName: '',
                  img: '',
                  unit: '',
                  goodsLabel: [],
                  label: [],
                  salesCount: 0,
                  viewGoodCount: 0
                },
                {
                  goodsId: 0, // goodsId未知
                  goodsNumber: '8141F',
                  unitPrice: '',
                  keywords: '',
                  brandName: '',
                  labelName: '',
                  classificationName: '',
                  img: '',
                  unit: '',
                  goodsLabel: [],
                  label: [],
                  salesCount: 0,
                  viewGoodCount: 0
                },
                {
                  goodsId: 0, // goodsId未知
                  goodsNumber: '51H',
                  unitPrice: '',
                  keywords: '',
                  brandName: '',
                  labelName: '',
                  classificationName: '',
                  img: '',
                  unit: '',
                  goodsLabel: [],
                  label: [],
                  salesCount: 0,
                  viewGoodCount: 0
                },
                {
                  goodsId: 0, // goodsId未知
                  goodsNumber: '3045',
                  unitPrice: '',
                  keywords: '',
                  brandName: '',
                  labelName: '',
                  classificationName: '',
                  img: '',
                  unit: '',
                  goodsLabel: [],
                  label: [],
                  salesCount: 0,
                  viewGoodCount: 0
                }
              ]
            },
            {
              categoryId: 0, // 分类ID未知
              menuName: '分散剂',
              sort: 1,
              goodsList: [
                {
                  goodsId: 0, // goodsId未知
                  goodsNumber: '7015',
                  unitPrice: '',
                  keywords: '',
                  brandName: '',
                  labelName: '',
                  classificationName: '',
                  img: '',
                  unit: '',
                  goodsLabel: [],
                  label: [],
                  salesCount: 0,
                  viewGoodCount: 0
                },
                {
                  goodsId: 0, // goodsId未知
                  goodsNumber: '7045',
                  unitPrice: '',
                  keywords: '',
                  brandName: '',
                  labelName: '',
                  classificationName: '',
                  img: '',
                  unit: '',
                  goodsLabel: [],
                  label: [],
                  salesCount: 0,
                  viewGoodCount: 0
                },
                {
                  goodsId: 0, // goodsId未知
                  goodsNumber: '7116W',
                  unitPrice: '',
                  keywords: '',
                  brandName: '',
                  labelName: '',
                  classificationName: '',
                  img: '',
                  unit: '',
                  goodsLabel: [],
                  label: [],
                  salesCount: 0,
                  viewGoodCount: 0
                },
                {
                  goodsId: 0, // goodsId未知
                  goodsNumber: '7155W',
                  unitPrice: '',
                  keywords: '',
                  brandName: '',
                  labelName: '',
                  classificationName: '',
                  img: '',
                  unit: '',
                  goodsLabel: [],
                  label: [],
                  salesCount: 0,
                  viewGoodCount: 0
                }
              ]
            },
            {
              categoryId: 0, // 分类ID未知
              menuName: '消泡剂',
              sort: 1,
              goodsList: [
                {
                  goodsId: 0, // goodsId未知
                  goodsNumber: '4081',
                  unitPrice: '',
                  keywords: '',
                  brandName: '',
                  labelName: '',
                  classificationName: '',
                  img: '',
                  unit: '',
                  goodsLabel: [],
                  label: [],
                  salesCount: 0,
                  viewGoodCount: 0
                },
                {
                  goodsId: 0, // goodsId未知
                  goodsNumber: '4600',
                  unitPrice: '',
                  keywords: '',
                  brandName: '',
                  labelName: '',
                  classificationName: '',
                  img: '',
                  unit: '',
                  goodsLabel: [],
                  label: [],
                  salesCount: 0,
                  viewGoodCount: 0
                }
              ]
            },
            {
              categoryId: 0, // 分类ID未知
              menuName: '树脂合成单体',
              sort: 1,
              goodsList: [
                {
                  goodsId: 0, // goodsId未知
                  goodsNumber: '8813',
                  unitPrice: '',
                  keywords: '',
                  brandName: '',
                  labelName: '',
                  classificationName: '',
                  img: '',
                  unit: '',
                  goodsLabel: [],
                  label: [],
                  salesCount: 0,
                  viewGoodCount: 0
                },
                {
                  goodsId: 0, // goodsId未知
                  goodsNumber: '3823',
                  unitPrice: '',
                  keywords: '',
                  brandName: '',
                  labelName: '',
                  classificationName: '',
                  img: '',
                  unit: '',
                  goodsLabel: [],
                  label: [],
                  salesCount: 0,
                  viewGoodCount: 0
                }
              ]
            },
            {
              categoryId: 0, // 分类ID未知
              menuName: '水性树脂',
              sort: 1,
              goodsList: [
                {
                  goodsId: 0, // goodsId未知
                  goodsNumber: '1051R',
                  unitPrice: '',
                  keywords: '',
                  brandName: '',
                  labelName: '',
                  classificationName: '',
                  img: '',
                  unit: '',
                  goodsLabel: [],
                  label: [],
                  salesCount: 0,
                  viewGoodCount: 0
                },
                {
                  goodsId: 0, // goodsId未知
                  goodsNumber: '1052R',
                  unitPrice: '',
                  keywords: '',
                  brandName: '',
                  labelName: '',
                  classificationName: '',
                  img: '',
                  unit: '',
                  goodsLabel: [],
                  label: [],
                  salesCount: 0,
                  viewGoodCount: 0
                },
                {
                  goodsId: 0, // goodsId未知
                  goodsNumber: '1062R',
                  unitPrice: '',
                  keywords: '',
                  brandName: '',
                  labelName: '',
                  classificationName: '',
                  img: '',
                  unit: '',
                  goodsLabel: [],
                  label: [],
                  salesCount: 0,
                  viewGoodCount: 0
                }
              ]
            },
            {
              categoryId: 0, // 分类ID未知
              menuName: '油性树脂',
              sort: 1,
              goodsList: [
                {
                  goodsId: 0, // goodsId未知
                  goodsNumber: '6164F',
                  unitPrice: '',
                  keywords: '',
                  brandName: '',
                  labelName: '',
                  classificationName: '',
                  img: '',
                  unit: '',
                  goodsLabel: [],
                  label: [],
                  salesCount: 0,
                  viewGoodCount: 0
                }
              ]
            },
            {
              categoryId: 0, // 分类ID未知
              menuName: '其他日化原料',
              sort: 1,
              goodsList: [
                {
                  goodsId: 0, // goodsId未知
                  goodsNumber: '6654F8',
                  unitPrice: '',
                  keywords: '',
                  brandName: '',
                  labelName: '',
                  classificationName: '',
                  img: '',
                  unit: '',
                  goodsLabel: [],
                  label: [],
                  salesCount: 0,
                  viewGoodCount: 0
                }
              ]
            }
          ]
        }
      },
      {
        contentName: '橡胶与塑料的图片',
        viewName: '图片广告',
        viewType: 2,
        marginBottom: 0,
        contentBgColor: '#ffffff',
        sort: 0,
        data: {
          indicatorDots: false,
          vertical: false,
          template: 1,
          height: 0,
          list: [
            {
              cover:
                'https://2.img.sic.wiki//upload/other/85f722BF65e3da4a3b6CC4482C.png',
              link: '',
              sort: 0
            }
          ]
        }
      },
      {
        contentName: '橡胶与塑料产品列表',
        viewName: '产品分组',
        viewType: 6,
        sort: 0,
        marginBottom: 20,
        contentBgColor: '#f5f5f5',
        data: {
          row: 2,
          activeBgcolor: '#8F00A3',
          showGoodsInfo: false,
          showLeftTopMarker: true,
          showKeyword: true,
          showGoodsLable: true,
          showUnitPrice: true,
          list: [
            {
              categoryId: 0, // 分类ID未知
              menuName: '阻燃剂',
              sort: 1,
              goodsList: [
                {
                  goodsId: 0, // goodsId未知
                  goodsNumber: '6282',
                  unitPrice: '',
                  keywords: '',
                  brandName: '',
                  labelName: '',
                  classificationName: '',
                  img: '',
                  unit: '',
                  goodsLabel: [],
                  label: [],
                  salesCount: 0,
                  viewGoodCount: 0
                }
              ]
            },
            {
              categoryId: 0, // 分类ID未知
              menuName: '润滑剂',
              sort: 1,
              goodsList: [
                {
                  goodsId: 0, // goodsId未知
                  goodsNumber: '6422',
                  unitPrice: '',
                  keywords: '',
                  brandName: '',
                  labelName: '',
                  classificationName: '',
                  img: '',
                  unit: '',
                  goodsLabel: [],
                  label: [],
                  salesCount: 0,
                  viewGoodCount: 0
                },
                {
                  goodsId: 0, // goodsId未知
                  goodsNumber: '6592',
                  unitPrice: '',
                  keywords: '',
                  brandName: '',
                  labelName: '',
                  classificationName: '',
                  img: '',
                  unit: '',
                  goodsLabel: [],
                  label: [],
                  salesCount: 0,
                  viewGoodCount: 0
                }
              ]
            },
            {
              categoryId: 0, // 分类ID未知
              menuName: '耐磨剂',
              sort: 1,
              goodsList: [
                {
                  goodsId: 0, // goodsId未知
                  goodsNumber: '6003S',
                  unitPrice: '',
                  keywords: '',
                  brandName: '',
                  labelName: '',
                  classificationName: '',
                  img: '',
                  unit: '',
                  goodsLabel: [],
                  label: [],
                  salesCount: 0,
                  viewGoodCount: 0
                },
                {
                  goodsId: 0, // goodsId未知
                  goodsNumber: '6013P',
                  unitPrice: '',
                  keywords: '',
                  brandName: '',
                  labelName: '',
                  classificationName: '',
                  img: '',
                  unit: '',
                  goodsLabel: [],
                  label: [],
                  salesCount: 0,
                  viewGoodCount: 0
                }
              ]
            },
            {
              categoryId: 0, // 分类ID未知
              menuName: '橡塑分散剂',
              sort: 1,
              goodsList: [
                {
                  goodsId: 0, // goodsId未知
                  goodsNumber: '6713',
                  unitPrice: '',
                  keywords: '',
                  brandName: '',
                  labelName: '',
                  classificationName: '',
                  img: '',
                  unit: '',
                  goodsLabel: [],
                  label: [],
                  salesCount: 0,
                  viewGoodCount: 0
                },
                {
                  goodsId: 0, // goodsId未知
                  goodsNumber: '6776',
                  unitPrice: '',
                  keywords: '',
                  brandName: '',
                  labelName: '',
                  classificationName: '',
                  img: '',
                  unit: '',
                  goodsLabel: [],
                  label: [],
                  salesCount: 0,
                  viewGoodCount: 0
                }
              ]
            },
            {
              categoryId: 0, // 分类ID未知
              menuName: '偶联剂',
              sort: 1,
              goodsList: [
                {
                  goodsId: 0, // goodsId未知
                  goodsNumber: '6637E',
                  unitPrice: '',
                  keywords: '',
                  brandName: '',
                  labelName: '',
                  classificationName: '',
                  img: '',
                  unit: '',
                  goodsLabel: [],
                  label: [],
                  salesCount: 0,
                  viewGoodCount: 0
                }
              ]
            }
          ]
        }
      },
      {
        contentName: '标准品广告图片',
        viewName: '图片广告',
        viewType: 2,
        marginBottom: 0,
        contentBgColor: '#ffffff',
        sort: 0,
        data: {
          indicatorDots: false,
          vertical: false,
          template: 1,
          height: 0,
          list: [
            {
              cover:
                'https://2.img.sic.wiki//upload/other/569e0c6479d3fdc2f7534AEAC2.png',
              link: '',
              sort: 0
            }
          ]
        }
      },
      {
        contentName: '标准品产品列表',
        viewName: '产品列表',
        viewType: 5,
        sort: 0,
        marginBottom: 10,
        contentBgColor: '#ffffff',
        data: {
          row: 3,
          showLeftTopMarker: false,
          showKeyword: true,
          showGoodsLable: true,
          showUnitPrice: true,
          showBgCover: false,
          bgCover: '',
          bgCoverLink: '',
          topSpace: 0,
          list: [
            {
              goodsId: 0, // goodsId未知
              goodsNumber: '9936',
              unitPrice: '',
              keywords: '',
              brandName: '',
              labelName: '',
              classificationName: '',
              img: '',
              unit: '',
              goodsLabel: [],
              label: [],
              salesCount: 0,
              viewGoodCount: 0
            },
            {
              goodsId: 0, // goodsId未知
              lable: [],
              goodsNumber: '7155W',
              keywords: '',
              brandName: '',
              unitPrice: 0,
              img: '',
              unit: 'kg',
              goodsLabel: [],
              label: [],
              salesCount: 0,
              viewGoodCount: 0
            },
            {
              goodsId: 0, // goodsId未知
              lable: [],
              goodsNumber: '201-500cs',
              keywords: '',
              brandName: '',
              unitPrice: 0,
              img: '',
              unit: 'kg',
              goodsLabel: [],
              label: [],
              salesCount: 0,
              viewGoodCount: 0
            }
          ]
        }
      },
      {
        contentName: '创新品广告图片',
        viewName: '图片广告',
        viewType: 2,
        marginBottom: 0,
        contentBgColor: '#ffffff',
        sort: 0,
        data: {
          indicatorDots: false,
          vertical: false,
          template: 1,
          height: 0,
          list: [
            {
              cover:
                'https://2.img.sic.wiki//upload/other/8894f8FA64ad658197CB386626.png',
              link: '',
              sort: 0
            }
          ]
        }
      },
      {
        contentName: '创新品产品列表',
        viewName: '产品列表',
        viewType: 5,
        sort: 0,
        marginBottom: 10,
        contentBgColor: '#ffffff',
        data: {
          row: 3,
          showLeftTopMarker: false,
          showKeyword: true,
          showGoodsLable: true,
          showUnitPrice: true,
          showBgCover: false,
          bgCover: '',
          bgCoverLink: '',
          topSpace: 0,
          list: [
            {
              goodsId: 0, // goodsId未知
              lable: [],
              goodsNumber: '2216',
              keywords: '',
              brandName: '',
              unitPrice: 0,
              img: '',
              unit: 'kg',
              goodsLabel: [],
              label: [],
              salesCount: 0,
              viewGoodCount: 0
            },
            {
              goodsId: 0, // goodsId未知
              lable: [],
              goodsNumber: '6654F8',
              keywords: '',
              brandName: '',
              unitPrice: 0,
              img: '',
              unit: 'kg',
              goodsLabel: [],
              label: [],
              salesCount: 0,
              viewGoodCount: 0
            },
            {
              goodsId: 0, // goodsId未知
              lable: [],
              goodsNumber: '6164F',
              keywords: '',
              brandName: '',
              unitPrice: 0,
              img: '',
              unit: 'kg',
              goodsLabel: [],
              label: [],
              salesCount: 0,
              viewGoodCount: 0
            }
          ]
        }
      }
    ]
    
  }
})