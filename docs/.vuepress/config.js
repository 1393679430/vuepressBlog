module.exports = {
    title: '编程趣事',  // 设置网站标题
    description: '编程趣事',
    head: [
        ['script', { src: 'https://cdn.jsdelivr.net/npm/live2d-widget@3.0.4/lib/L2Dwidget.min.js' }]
    ],
    base: '/',
    themeConfig: {
        nav: [
            {
                text: '博客',
                link: '/views/blog/'
            }, {
                text: '工具',
                link: '/views/tools/'
            }, {
                text: '其他',
                items: [
                    {
                        text: '我的github',
                        link: 'https://github.com/1393679430'
                    },
                ]
            }
        ],
        sidebar: {
            '/views/blog/': [
                {
                    title: '回到首页',
                    path: '/',
                }, {
                    title: '博客目录',
                    path: '/views/blog/',
                    collapsable: true,
                    children: [
                        {
                            title: '博客01',
                            path: '/views/blog/blog01',
                        },
                    ]
                },
            ],
            '/views/tools/': [
                {
                    title: '回到首页',
                    path: '/',
                }, {
                    title: '工具目录',
                    path: '/views/tools/',
                    collapsable: true,
                    children: [
                        {
                            title: '工具01',
                            path: '/views/tools/tools01',
                        },
                    ]
                },
            ],
            '/': [
                {
                    title: '首页',
                    path: '/',
                }, {
                    title: '博客',
                    path: '/views/blog/',
                }, {
                    title: '工具',
                    path: '/views/tools/',
                }, {
                    title: '联系我',
                    path: '/views/contact/',
                }, {
                    title: '关于我',
                    path: '/views/about/',
                },
            ]
        },
        displayAllHeaders: true,
        activeHeaderLinks: false,

    }
}
