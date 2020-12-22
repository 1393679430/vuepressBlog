### angular： 绑定HTML标签并显示HTML标签的样式，

比如说后台的数据为`<button>test</button>`，前端显示出button按钮；

::: tip 方法一（此方法为不安全方法，容易遭到XSS共计）

1. 定义一个pipe: 

```typescript
import { Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";

@Pipe({
  name: 'safeHtml'
})
export class SafeHtmlPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer){}
  transform(value: any): any {
    return this.sanitizer.bypassSecurityTrustHtml(value);
  }

}
```
2. html上使用： 
```
<div [innerHTML]="test | safeHtml"></div>
```
:::



::: tip 方法二：（此方法为安全方法）
1. 
```typescript

// Sets the element's innerHTML to a sanitized version of [safeHtml]
@Directive({ selector: '[safeHtml]' })
export class HtmlDirective implements OnChanges {
  @Input() safeHtml: string;

  constructor(private elementRef: ElementRef, private sanitizer: Sanitizer) {}

  ngOnChanges(changes: SimpleChanges): any {
    if ('safeHtml' in changes) {
      this.elementRef.nativeElement.innerHTML =
        this.sanitizer.sanitize(SecurityContext.HTML, this.safeHtml);
    }
  }
}
```
2.
```
<div [safeHtml]="myVal"></div>
```
