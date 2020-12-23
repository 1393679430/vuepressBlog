module.exports = {
    title: '',  // 设置网站标题
    description: '编程趣事',
    //  可以在head引入第三方css js
    head: [
        ['script', { src: 'https://cdn.jsdelivr.net/npm/live2d-widget@3.0.4/lib/L2Dwidget.min.js' }],
        ['script', {}, `
            var _hmt = _hmt || [];
            (function() {
            var hm = document.createElement("script");
            hm.src = "https://hm.baidu.com/hm.js?5ea9a024d88dc8403247dbfc5e1d0a1a"; // 注意是你自己网站的这个参数
            var s = document.getElementsByTagName("script")[0]; 
            s.parentNode.insertBefore(hm, s);

            // 引入谷歌,不需要可删除这段
            var hm1 = document.createElement("script");
            hm1.src = "https://www.googletagmanager.com/gtag/js?id=UA-185914001-1";
            var s1 = document.getElementsByTagName("script")[0]; 
            s1.parentNode.insertBefore(hm1, s1);
            })();

            // 谷歌加载,不需要可删除
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'UA-185914001-1');
        `]
    ],
    base: '/',
    markdown: {
        // 显示行号
        lineNumbers: true,
        // markdown-it-anchor 的选项
        anchor: { permalink: false },
        // markdown-it-toc 的选项
        toc: { includeLevel: [1, 2] },
    },
    plugins: [
        [
            '@vuepress/back-to-top',
            { /* options */ }
        ],
        [
            '@vuepress/google-analytics',
            {
              'ga': 'UA-185914001-1' // UA-00000000-0
            }
          ]
    ],
    themeConfig: {
        logo: '/images/logo.png',
        search: true,
        searchMaxSuggestions: 10,
        lastUpdated: '最后更新于',
        smoothScroll: false,
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
                            path: '/views/blog/angular/blog001',
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
                            path: '/views/blog/vue/blog001',
                            collapsable: true,
                            children: [
                                {
                                    title: 'vue模板语法',
                                    path: '/views/blog/vue/blog001',
                                },
                            ]
                        }, {
                            title: 'react',
                            path: '/views/blog/react/blog001',
                            collapsable: true,
                            children: [
                                {
                                    title: '路由传参',
                                    path: '/views/blog/react/blog001',
                                },
                            ]
                        }, {
                            title: 'js',
                            path: '/views/blog/js/blog001',
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
                            title: 'miniprogram',
                            path: '/views/blog/miniprogram/blog001',
                            collapsable: true,
                            children: [
                                {
                                    title: 'npm-没有找到可以构建的NPM包',
                                    path: '/views/blog/miniprogram/blog001',
                                },
                            ]
                        }, {
                            title: 'vuepress',
                            path: '/views/blog/vuepress/blog001',
                            collapsable: true,
                            children: [
                                {
                                    title: '博客01',
                                    path: '/views/blog/vuepress/blog001',
                                },
                            ]
                        }, {
                            title: '奇淫巧技',
                            path: '/views/blog/nb/blog001',
                            collapsable: true,
                            children: [
                                {
                                    title: '博客01',
                                    path: '/views/blog/nb/blog001',
                                },
                            ]
                        }, {
                            title: '其他',
                            path: '/views/blog/other/blog001',
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
        sidebarDepth: 0,
    }
}
