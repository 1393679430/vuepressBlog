# 超出文本显示省略号 

> 一行显示省略号
```css
width: 300px;
overflow: hidden;     /*超出部分隐藏*/
white-space: nowrap;    /*不换行*/
text-overflow: ellipsis;   /*超出部分文字以...显示*/
```

<br/>

> 多行显示省略号
```css
overflow: hidden;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-box-orient: vertical;
-webkit-line-clamp: 4;
line-clamp: 4;
word-break: break-all;
white-space: normal;
```

<br/>

>使用插件显示省略号
```js
<script src="https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js"></script>
<script src="https://cdn.bootcss.com/jQuery.dotdotdot/3.2.2/jquery.dotdotdot.js">			      			</script>

$(document).ready(function () {
  $("#wrapper").dotdotdot();
});
```
