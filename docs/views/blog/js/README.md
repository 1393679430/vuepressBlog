js 目录

---
***Markdown常用语法***


# 一级标题
### 三级标题
#### 四级标题
##### 五级标题

- 文本1
- 文本2
- 文本3

- 文本1
  - 文本1.1
- 文本2
  - 文本2.1
- 文本3
  - 文本3.1

1. 文本1
2. 文本2
3. 文本3


[图片链接](http://placehold.it/60x60)

![](http://placehold.it/60x60)
![RUNOOB 图标](http://static.runoob.com/images/runoob-logo.png "RUNOOB")


这个链接用 1 作为网址变量 [Google][1]
这个链接用 runoob 作为网址变量 [Runoob][runoob]
然后在文档的结尾为变量赋值（网址）

  [1]: http://www.google.com/
  [runoob]: http://www.runoob.com/


> 一盏灯， 一片昏黄；
>> 一盏灯， 一片昏黄；
>>> 一盏灯， 一片昏黄；

\*\*正常显示星号\*\*

**我是粗体**

*我是斜体*

***我是粗斜体***

分割线
***

~~删除线~~

<u>下划线</u>

4 < 5


脚注文本 [^AI]。

 [^AI]: 这是脚注的内容

创建脚注格式类似这样 [^RUNOOB]。

 [^RUNOOB]: 菜鸟教程 -- 学的不仅是技术，更是梦想！！！

[//]: <> (我是注释)


```
引用
```

`console.log()`函数

> 1


| Tables | Are    | Cool   |
| :----- | :----: | -----: |
| left   | center | right  |

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |


::: tip 提示
this is a tip
:::

::: warning 注意
this is a warning
:::

::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::

![An image](../../../images/banner.jpg)

```
<script>
  export default{
    //...do something
}
</script>

```

``` js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

---
meta:
  - name: description1
    content: hello
  - name: keywords
    content: super duper SEO
---


| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |


:tada:

:100:

:love_letter:

:66:


{{ 1 + 1 }}

<span v-for="i in 3">{{ i }} </span>

{{ $page }}

::: v-pre
`{{ This will be displayed as-is 1 }}`
:::

