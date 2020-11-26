module.exports = {
    title: 'My Page',  // 设置网站标题
    description : 'My Page',
    base : '/vuepressBlog/',
    themeConfig : {
        nav : [
            { text: '首页', link: '/home' },
            { text: '文章', link: '/list' },
            { text: '总结', link: '/tips' }
        ],
        sidebar: {
            '/' : [
                "/", //指的是根目录的md文件 也就是 README.md 里面的内容
                "home",  //根目录创建 home.md文件
                "list", //根目录创建 list.md文件
                "tips"  //根目录创建 tips.md文件
            ]
        },
        sidebarDepth : 2
    }
}
