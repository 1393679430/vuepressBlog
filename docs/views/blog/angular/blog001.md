# angular 修改端口号port

---
::: warning 报错：Port 4200 is already in use. Use '--port' to specify a different port.
 >因为4200端口已被使用，请使用“--port”修改不同的端口号。
 
 ---
 方法1：
 
 直接使用命令：`ng serve --port 4201`
 
 或简写：`ng serve -p 4201`
 
 方法2： 
 
 angular 用IP可以访问页面的方法,如果4200默认端口没有占用，就可以使用：
 
 `npm run start  --host 192.168.1.10`
 
 如果被占用了：
 `npm run start -- --port 4202  --host 192.168.1.10`
:::


