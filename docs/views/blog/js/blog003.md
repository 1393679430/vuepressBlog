# 数组最大值

::: tip 1. apply()应用某一对象的一个方法，用另一个对象替换当前对象
```js
const max = Math.max.apply(null,arr);
console.log(max)
```

由于max()里面参数不能为数组，所以借助apply(funtion,args)方法调用Math.max()，function为要调用的方法，args是数组对象，当function为null时，默认为上文,即相当于apply(Math.max,arr)
:::

<br>

::: tip 2. call()调用一个对象的一个方法，以另一个对象替换当前对象
```js
var max1 = Math.max.call(null,7,2,0,-3,5)
console.log(max1)
```

call()与apply()类似，区别是传入参数的方式不同，apply()参数是一个对象和一个数组类型的对象，call()参数是一个对象和参数列表
:::

<br>

::: tip 3. sort()+reverse()
```js
//sort()排序默认为升序，reverse()将数组掉个
const max3 = array.sort().reverse()[0];
console.log(max3)
```
:::

<br>

::: tip 4. sort()
```js
//b-a从大到小，a-b从小到大
 max2 = array.sort(function(a,b){
    return b-a;
})[0];
console.log(max2)
```
:::
