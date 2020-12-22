# 数组去重

> 1. 方法一 Set
```js
const a = [1, 2, 3, 1]
const b = [...new Set(a)]
// b : [1, 2, 3]
```

> 2. 方法二 filter
```js
list.filter((value, index, array) => array.indexOf(value) === index);
```
