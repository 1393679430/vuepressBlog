# 解决 angular 报错 

::: danger 报错1：No value accessor for form control with name

angular 报错 `No value accessor for form control with name ***`

对于不是输入框，如果自己想添加  `formControlName` 属性的，需要另外添加 `ngDefaultControl` 属性

直接添加 `ngDefaultControl` 就可以，不用写值。

:::
