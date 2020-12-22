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
                    collapsable: false,
                    children: [
                        {
                            title: 'angular',
                            path: '/views/blog/angular/',
                            collapsable: true,
                            children: [
                                {
                                    title: 'angular修改端口号port',
                                    path: '/views/blog/angular/blog001',
                                }, {
                                    title: 'angular绑定HTML标签',
                                    path: '/views/blog/angular/blog002',
                                }, {
                                    title: '解决 angular 报错 ',
                                    path: '/views/blog/angular/blog003',
                                },
                            ]
                        }, {
                            title: 'vue',
                            path: '/views/blog/vue/',
                            collapsable: true,
                            children: [

                            ]
                        }, {
                            title: 'react',
                            path: '/views/blog/react/',
                            collapsable: true,
                            children: [
                                {
                                    title: '路由传参',
                                    path: '/views/blog/react/blog001',
                                },
                            ]
                        }, {
                            title: 'js',
                            path: '/views/blog/js/',
                            collapsable: true,
                            children: [
                                {
                                    title: '超出文本显示省略号',
                                    path: '/views/blog/js/blog001',
                                }, {
                                    title: '数组去重',
                                    path: '/views/blog/js/blog002',
                                }, {
                                    title: '数组最大值',
                                    path: '/views/blog/js/blog003',
                                },
                            ]
                        }, {
                            title: '其他',
                            path: '/views/blog/other/',
                            collapsable: true,
                            children: [
                                {
                                    title: '博客01',
                                    path: '/views/blog/other/blog001',
                                }, {
                                    title: '博客02',
                                    path: '/views/blog/other/blog002',
                                }, {
                                    title: '博客03',
                                    path: '/views/blog/other/blog003',
                                }
                            ]
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
                            path: '/views/tools/tools001',
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
