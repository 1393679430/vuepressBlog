# vuepress 碰到的一些问题

::: tip 问题一: 安装某插件后不生效

在当前项目中安装plugin-back-to-top-或-pwa-等插件后,发现不生效,其他插件也是如此

原因:本地项目未安装vuepress,因为一些第三方插件依赖vuepress,除了全局坏境下安装了vupress,当前项目下也得安装

解决:在本地的package.json中检查vuepress是否有安装,若没有则用 `npm install -D vuepress` 安装一下

```js
"devDependencies": {
  "@vuepress/plugin-back-to-top": "^1.5.0",
  "vuepress": "^1.5.0",
}
```

:::