/**
 * 另一个落地页主题
 */
const CONFIG = {
  // 默认只展示Logo文字，如果设置了logo图片，会在文字左侧显示图标
  STARTER_LOGO: '', // 普通logo图片 示例：/images/starter/logo/logo.svg
  STARTER_LOGO_WHITE: '', // 透明底浅色logo 示例： /images/starter/logo/logo-white.svg

  // MENU ， 菜单部分不在此处配置，请在Notion数据库中添加MENU

  // 英雄区块导航
  STARTER_HERO_ENABLE: true, // 开启英雄区
  STARTER_HERO_TITLE_1: 'Aerosand', // 英雄区文字
  STARTER_HERO_TITLE_2: '免费、开源分享关于CFD, OpenFOAM和数值计算的相关内容', // 英雄区文字
  // 英雄区两个按钮，如果TEXT留空则隐藏按钮
  STARTER_HERO_BUTTON_1_TEXT: '查看文档', // 英雄区按钮
  STARTER_HERO_BUTTON_1_URL:
    'https://aerosand.cc', // 英雄区按钮
  STARTER_HERO_BUTTON_2_TEXT: '赞助我们', // 英雄区按钮
  STARTER_HERO_BUTTON_2_URL: 'https://aerosand.cn/fund', // 英雄区按钮
  STARTER_HERO_BUTTON_2_ICON: '', // 英雄区按钮2的图标，不需要则留空

  // 英雄区配图，如需隐藏，改为空值即可 ''
  STARTER_HERO_PREVIEW_IMAGE: '/images/aerosandcc.png', // 产品预览图 ，默认读取public目录下图片
  STARTER_HERO_BANNER_IMAGE: '', // hero区下方的全宽图

  // 顶部右侧导航暗流
  STARTER_NAV_BUTTON_1_TEXT: '关于',
  STARTER_NAV_BUTTON_1_URL: '/about',

  STARTER_NAV_BUTTON_2_TEXT: '赞助',
  STARTER_NAV_BUTTON_2_URL: '/fund',

  // 特性区块
  STARTER_FEATURE_ENABLE: true, // 特性区块开关
  STARTER_FEATURE_TITLE: '系列课程', // 特性
  STARTER_FEATURE_TEXT_1: '关于 OFSP 系列课程', // 特性
  STARTER_FEATURE_TEXT_2:
    '旨在帮助初学者更连贯更简单的入门OpenFOAM编程开发', // 特性

  STARTER_FEATURE_1_TITLE_1: '免费且开源', // 特性1
  STARTER_FEATURE_1_TEXT_1: '系列课程讨论、材料和讲义均已公开', // 特性1
  STARTER_FEATURE_1_BUTTON_TEXT: '> 最新课程', // 特性1
  STARTER_FEATURE_1_BUTTON_URL: 'https://aerosand.cc/docs/ofs/ofsp/', // 特性1

  STARTER_FEATURE_2_TITLE_1: '参与讨论', // 特性2
  STARTER_FEATURE_2_TEXT_1: '网站为每篇文章都提供了Twikoo，Giscus等多个评论系统，匿名也可自由参与讨论', // 特性2
  STARTER_FEATURE_2_BUTTON_TEXT: '> 试试来 Cafe 打个招呼吧', // 特性2
  STARTER_FEATURE_2_BUTTON_URL:
    'https://aerosand.cn/cafe', // 特性2

  STARTER_FEATURE_3_TITLE_1: '强调学习连贯性', // 特性3
  STARTER_FEATURE_3_TEXT_1: '让读者更好更流畅的铺平数学理论和代码实现之间的跳跃', // 特性3
  STARTER_FEATURE_3_BUTTON_TEXT: '> 查看学习建议', // 特性3
  STARTER_FEATURE_3_BUTTON_URL: 'https://aerosand.cn/news/openfoamsharing', // 特性3

  STARTER_FEATURE_4_TITLE_1: '提供多种学习媒介', // 特性4
  STARTER_FEATURE_4_TEXT_1: '网站、微信公众号、BiliBili均在更新中', // 特性4
  STARTER_FEATURE_4_BUTTON_TEXT: '> 视频教学', // 特性4
  STARTER_FEATURE_4_BUTTON_URL: 'https://space.bilibili.com/3910750', // 特性4

  // 首页ABOUT区块
  STARTER_ABOUT_ENABLE: true, // ABOUT区块开关
  STARTER_ABOUT_TITLE: '更适合初学者的入门 OpenFOAM 和数值计算的解决方案',
  STARTER_ABOUT_TEXT:
    '通过踏实的理论推导、丰富的代码实践、连贯的课程安排和手把手的教学指导，帮助初学者更好更快更稳的跨过学习间断区，打好基础扫清障碍，尽快开启自己的科研之路。 <br /> <br /> 快点开始学习吧',
  STARTER_ABOUT_BUTTON_TEXT: '参与 Github 社区讨论',
  STARTER_ABOUT_BUTTON_URL: 'https://github.com/aerosand/aerosand-cn/discussions',
  STARTER_ABOUT_IMAGE_1: '/images/starter/about/about-image-01.jpg',
  STARTER_ABOUT_IMAGE_2: '/images/starter/about/about-image-02.jpg',
  STARTER_ABOUT_TIPS_1: '15w +',
  STARTER_ABOUT_TIPS_2: '全网 15w+ 点击',
  STARTER_ABOUT_TIPS_3: '全网 10k+ 关注',

  // 首页价格区块
  STARTER_PRICING_ENABLE: true, // 价格区块开关
  STARTER_PRICING_TITLE: '课程',
  STARTER_PRICING_TEXT_1: '精品课程',
  STARTER_PRICING_TEXT_2:
    '建议阅读和参考【学习建议】以更好的学习',

  STARTER_PRICING_1_TITLE: 'OFSB',
  STARTER_PRICING_1_PRICE: 'Basics',
  STARTER_PRICING_1_PRICE_CURRENCY: '@',
  STARTER_PRICING_1_PRICE_PERIOD: '基础',
  STARTER_PRICING_1_HEADER: '主要内容',
  STARTER_PRICING_1_FEATURES: '课程更新中…,- 有限体积法基础,- OpenFOAM操作基础,- 算法基础', // 英文逗号隔开
  STARTER_PRICING_1_BUTTON_TEXT: '点击查看',
  STARTER_PRICING_1_BUTTON_URL:
    'https://aerosand.cc/zh-cn/docs/ofs/ofsb/',

  STARTER_PRICING_2_TAG: '推荐',
  STARTER_PRICING_2_TITLE: 'OFSP',
  STARTER_PRICING_2_PRICE: 'Programming',
  STARTER_PRICING_2_PRICE_CURRENCY: '@',
  STARTER_PRICING_2_PRICE_PERIOD: '编程开发',
  STARTER_PRICING_2_HEADER: '主要内容',
  STARTER_PRICING_2_FEATURES: '课程迭代中…,- 编译原理,- 核心类,- 基础算法,- 第一个求解器', // 英文逗号隔开
  STARTER_PRICING_2_BUTTON_TEXT: '点击查看',
  STARTER_PRICING_2_BUTTON_URL:
    'https://aerosand.cc/zh-cn/docs/ofs/ofsp/',

  STARTER_PRICING_3_TITLE: 'OFSS',
  STARTER_PRICING_3_PRICE: 'Solver',
  STARTER_PRICING_3_PRICE_CURRENCY: '@',
  STARTER_PRICING_3_PRICE_PERIOD: '标准求解器',
  STARTER_PRICING_3_HEADER: '主要内容',
  STARTER_PRICING_3_FEATURES: '课程更新中…,- 理论公式推导,- 代码梳理,- 求解器自定义', // 英文逗号隔开
  STARTER_PRICING_3_BUTTON_TEXT: '点击查看',
  STARTER_PRICING_3_BUTTON_URL:
    'https://aerosand.cc/zh-cn/docs/ofs/ofss/',

  // 首页用户测评区块
  STARTER_TESTIMONIALS_ENABLE: true, // 测评区块开关
  STARTER_TESTIMONIALS_TITLE: '读者反馈',
  STARTER_TESTIMONIALS_TEXT_1: '大家怎么说',
  STARTER_TESTIMONIALS_TEXT_2:
    '很多同学通过课程学习丰富了对 OpenFOAM 的认识，快速的完成了入门阶段',
  STARTER_TESTIMONIALS_STAR_ICON: '/images/starter/testimonials/icon-star.svg', // 评分图标

  // 这里不支持CONFIG和环境变量，需要一一修改此处代码。
  STARTER_TESTIMONIALS_ITEMS: [
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        '非常清晰，非常连贯！意犹未尽，学习就像看电影一样，是一种清晰连贯的享受了。',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        '/image/a.png',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: '流星飞宏',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: 'B站用户',
      STARTER_TESTIMONIALS_ITEM_URL: ''
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        '非常优秀的博主，看了博主网站上的sharing，感触很深，跨专业转CFD自学非常不容易，尤其是从0到1的求解器开发，深深的产生共鸣，希望博主能一直坚持跟新，我们一起追逐NS方程中的星程大海',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        '/image/a.png',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: '想去帝国的男人',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: 'B站用户',
      STARTER_TESTIMONIALS_ITEM_URL: ''
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        '这样的课程对OpenFOAM编程新手来说太重要了[星星眼]',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        '/image/a.png',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: '英特纳雄耐尔定实现',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: 'B站用户',
      STARTER_TESTIMONIALS_ITEM_URL: ''
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        'up太棒了 期待一直更新下去[呲牙][打call]，介绍编程底层的教程太少了。收藏学习！',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        '/image/a.png',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: '磊子哥1999',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: 'B站用户',
      STARTER_TESTIMONIALS_ITEM_URL: ''
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        '文字版之前就已经学完了，特别好，已充电。可能的话希望后续能写写边界条件以及一些典型类库的结构和开发，比如湍流模型，还有多相流的interfacial mass transfer之类的，期待~',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        '/image/a.png',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: '非牛顿猪咪',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: 'B站用户',
      STARTER_TESTIMONIALS_ITEM_URL: ''
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        '太好了，UP加油！',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        '/image/a.png',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'Akiseherol',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: 'B站用户',
      STARTER_TESTIMONIALS_ITEM_URL: ''
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT: 
      '支持up的更新，个人网站上的教程已经跟着做了，听讲解感觉更加清楚',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        '/image/a.png',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: '达芙妮的伤心鸟',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: 'B站用户',
      STARTER_TESTIMONIALS_ITEM_URL: ''
    }
  ],

  //   FAQ 常见问题模块
  STARTER_FAQ_ENABLE: true, // 常见问题模块开关
  STARTER_FAQ_TITLE: '常见问题解答',
  STARTER_FAQ_TEXT_1: '有任何问题吗？请看这里',
  STARTER_FAQ_TEXT_2: '我们收集了常见的用户疑问',

  STARTER_FAQ_1_QUESTION: 'OpenFOAM入门需要多久？',
  STARTER_FAQ_1_ANSWER:
    '每个人对OpenFOAM的使用不同，入门要求也不同。阅读 <a href="https://aerosand.cn/news/openfoamsharing" className="underline">【学习建议】</a> 也许会得到答案。',

  STARTER_FAQ_2_QUESTION: '可以直接看 OFSP 吗？',
  STARTER_FAQ_2_ANSWER:
    '建议先学习或复习有限体积法基础，阅读完OpenFOAM官方手册，即可开始 OFSP 的学习。参考阅读 <a href="https://aerosand.cn/news/openfoamsharing" className="underline">【学习建议】</a> 。',

  STARTER_FAQ_3_QUESTION: '你们的更新计划是怎么样的？',
  STARTER_FAQ_3_ANSWER:
    '不同系列（如 OFSS）的准备均在推进。不过时间紧张、内容繁多，各个系列在不断的勘误、补充、审核中。',

  STARTER_FAQ_4_QUESTION: '如何支持你们的工作？',
  STARTER_FAQ_4_ANSWER:
    '欢迎赞助我们，赞助可以帮助我们更好的维护和更新，更好的帮助到更多的新人。点赞留言转发也是非常棒的支持方式。',

  // 团队成员区块
  STARTER_TEAM_ENABLE: true, // 团队成员区块开关
  STARTER_TEAM_TITLE: '最佳支持者',
  STARTER_TEAM_TEXT_1: '感谢你们的支持',
  STARTER_TEAM_TEXT_2:
    '相关系列课程由多位主笔和赞助者激励完成，感谢每一位<a className="underline" href="https://aerosand.cn/fund">赞助者</a>',

  // 这里不支持CONFIG和环境变量，需要一一修改此处代码。
  STARTER_TEAM_ITEMS: [
    {
      STARTER_TEAM_ITEM_AVATAR:
        'https://github.com/aerosand.png',
      STARTER_TEAM_ITEM_NICKNAME: 'Aerosand',
      STARTER_TEAM_ITEM_DESCRIPTION: '团队'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: 'https://github.com/aerosand.png',
      STARTER_TEAM_ITEM_NICKNAME: 'Shark',
      STARTER_TEAM_ITEM_DESCRIPTION: '主笔'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: 'https://github.com/aerosand.png',
      STARTER_TEAM_ITEM_NICKNAME: 'Oasis',
      STARTER_TEAM_ITEM_DESCRIPTION: '主笔'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: '/images/a.png',
      STARTER_TEAM_ITEM_NICKNAME: '**刚',
      STARTER_TEAM_ITEM_DESCRIPTION: '最佳赞助'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: '/images/a.png',
      STARTER_TEAM_ITEM_NICKNAME: '这里的',
      STARTER_TEAM_ITEM_DESCRIPTION: '最佳赞助'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: '/images/a.png',
      STARTER_TEAM_ITEM_NICKNAME: 'Dre🌟am',
      STARTER_TEAM_ITEM_DESCRIPTION: '最佳赞助'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: '/images/a.png',
      STARTER_TEAM_ITEM_NICKNAME: '**俊',
      STARTER_TEAM_ITEM_DESCRIPTION: '最佳赞助'
    }
  ],

  // 博客文章区块
  STARTER_BLOG_ENABLE: true, // 首页博文区块开关
  STARTER_BLOG_TITLE: '我们的博客',
  STARTER_BLOG_COUNT: 3, // 首页博文区块默认展示前3篇文章
  STARTER_BLOG_TEXT_1: '最近的新闻',
  STARTER_BLOG_TEXT_2:
    '这里会发布一些最新动态，包括课程更新、网站动向、未来计划等等',

  // 联系模块
  STARTER_CONTACT_ENABLE: true, // 联系模块开关
  STARTER_CONTACT_TITLE: '联系我们',
  STARTER_CONTACT_TEXT: '咨询、反馈、建议或意见',
  STARTER_CONTACT_LOCATION_TITLE: '我们的位置',
  STARTER_CONTACT_LOCATION_TEXT: '中国、日本、新加坡',
  STARTER_CONTACT_EMAIL_TITLE: '我们的联系邮箱',
  STARTER_CONTACT_EMAIL_TEXT: 'aerosand@outlook.com',

  // 嵌入外部表单
  //STARTER_CONTACT_MSG_EXTERNAL_URL: 'https://noteforms.com/forms/yfctc7', // 基于NoteForm创建，将留言数据存在Notion中
  //   自定义留言表单，以下几个配置暂时废弃
  //   STARTER_CONTACT_MSG_TITLE: '向我们留言',
  //   STARTER_CONTACT_MSG_NAME: '姓名',
  //   STARTER_CONTACT_MSG_EMAIL: '邮箱地址',
  //   STARTER_CONTACT_MSG_PHONE: '联系电话',
  //   STARTER_CONTACT_MSG_TEXT: '消息内容',
  //   STARTER_CONTACT_MSG_SEND: '发送消息',
  //   STARTER_CONTACT_MSG_THANKS: '感谢您的留言',

  // 合作伙伴的图标
  STARTER_BRANDS_ENABLE: false, // 合作伙伴开关
  STARTER_BRANDS: [
    {
      IMAGE: '/images/starter/brands/graygrids.svg',
      IMAGE_WHITE: '/images/starter/brands/graygrids-white.svg',
      URL: 'https://graygrids.com/',
      TITLE: 'graygrids'
    },
    {
      IMAGE: '/images/starter/brands/lineicons.svg',
      IMAGE_WHITE: '/images/starter/brands/lineicons-white.svg',
      URL: 'https://lineicons.com/',
      TITLE: 'lineicons'
    },
    {
      IMAGE: '/images/starter/brands/uideck.svg',
      IMAGE_WHITE: '/images/starter/brands/uideck-white.svg',
      URL: 'https://uideck.com/',
      TITLE: 'uideck'
    },
    {
      IMAGE: '/images/starter/brands/ayroui.svg',
      IMAGE_WHITE: '/images/starter/brands/ayroui-white.svg',
      URL: 'https://ayroui.com/',
      TITLE: 'ayroui'
    },
    {
      IMAGE: '/images/starter/brands/tailgrids.svg',
      IMAGE_WHITE: '/images/starter/brands/tailgrids-white.svg',
      URL: 'https://tailgrids.com/',
      TITLE: 'tailgrids'
    }
  ],

  STARTER_FOOTER_SLOGAN: '我们的征途是星辰大海。',

  // 页脚三列菜单组
  STARTER_FOOTER_LINK_GROUP: [
    {
      TITLE: '关于我们',
      LINK_GROUP: [
        { TITLE: '官方主页', URL: '/#home' },
        { TITLE: '课程文档', URL: 'https://aerosand.cc' },
        {
          TITLE: '微信公众号',
          URL: 'https://aerosand.cn/wechat'
        },
        {
          TITLE: 'Github',
          URL: 'https://github.com/aerosand'
        }
      ]
    },
    {
      TITLE: '系列课程',
      LINK_GROUP: [
        {
          TITLE: 'CFDB',
          URL: 'https://aerosand.cc/docs/cfd/cfdb/'
        },
        {
          TITLE: 'OFSP',
          URL: 'https://aerosand.cc/docs/ofs/ofsp/'
        },
        { 
	        TITLE: 'OFSS', 
	        URL: 'https://aerosand.cc/docs/ofs/ofss/' }
      ]
    },
    {
      TITLE: '推荐阅读',
      LINK_GROUP: [
        {
          TITLE: 'OpenFOAM学习建议',
          URL: 'https://aerosand.cn/news/openfoamsharing'
        },
        {
          TITLE: 'OpenFOAM环境准备',
          URL: 'https://aerosand.cn/post/openfoamready'
        },
        {
          TITLE: '中国大陆使用Notion',
          URL: 'https://aerosand.cn/news/notionfaster'
        }
      ]
    }
  ],

  STARTER_FOOTER_BLOG_LATEST_TITLE: '最新文章',

  STARTER_FOOTER_PRIVACY_POLICY_TEXT: '隐私政策',
  STARTER_FOOTER_PRIVACY_POLICY_URL: '/privacy-policy',

  STARTER_FOOTER_PRIVACY_LEGAL_NOTICE_TEXT: '法律声明',
  STARTER_FOOTER_PRIVACY_LEGAL_NOTICE_URL: '/legacy-notice',

  STARTER_FOOTER_PRIVACY_TERMS_OF_SERVICE_TEXT: '服务协议',
  STARTER_FOOTER_PRIVACY_TERMS_OF_SERVICE_URL: '/terms-of-use',

  // 404页面的提示语
  STARTER_404_TITLE: '我们似乎找不到您要找的页面。',
  STARTER_404_TEXT: '抱歉！您要查找的页面不存在。可能已经移动或删除。',
  STARTER_404_BACK: '回到主页',

  // 页面底部的行动呼吁模块
  STARTER_CTA_ENABLE: true,
  STARTER_CTA_TITLE: '你还在等待什么呢？',
  STARTER_CTA_TITLE_2: '现在开始学习吧',
  STARTER_CTA_DESCRIPTION:
    '访问系列课程的文档，我们提供了渐进的细致教程、易读的标准格式、开放的沟通讨论，帮助您尽快度过入门难关',
  STARTER_CTA_BUTTON: true, // 是否显示按钮
  STARTER_CTA_BUTTON_URL:
    'https://aerosand.cc',
  STARTER_CTA_BUTTON_TEXT: '开始学习',

  STARTER_POST_REDIRECT_ENABLE: true, // 默認開啟重定向
  STARTER_POST_REDIRECT_URL: 'https://aerosand.cn', // 重定向域名
  STARTER_NEWSLETTER: process.env.NEXT_PUBLIC_THEME_STARTER_NEWSLETTER || false // 是否开启邮件订阅 请先配置mailchimp功能 https://docs.tangly1024.com/article/notion-next-mailchimp
}
export default CONFIG
