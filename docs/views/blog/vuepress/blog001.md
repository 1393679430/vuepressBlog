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

<br />

::: tip 问题二: 报错Cannot find module 'core-js';
改core-js的版本是不可能的，安装依赖`yarn add async-validator@1.11.5` / `npm install async-validator@1.11.5`就可以解决问题了！

另外：

```js
npx vuepress info
```

`npx vuepress info`，如果出现vue包版本不一致的问题，记得将版本安装一致哦


:::