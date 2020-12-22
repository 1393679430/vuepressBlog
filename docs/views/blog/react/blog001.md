# 路由传参

#### 优缺点：
***1.params和 search 只能传字符串,刷新页面参数不会丢<br>2.query和 state 可以传对象,但是刷新页面参数会丢失***


```js
1. params
<Route path='/path/:name' component={Path}/>
<link to="/path/2">xxx</Link>
this.props.history.push({pathname:"/path/" + name});

读取参数用:this.props.match.params.name
```

```js
2. query
<Route path='/query' component={Query}/>
<Link to={{ path : '/query' , query : { name : 'sunny' }}}>
this.props.history.push({pathname:"/query",query: { name : 'sunny' }});

读取参数用: this.props.location.query.name
```

```js
3. state
<Route path='/sort ' component={Sort}/>
<Link to={{ path : '/sort ' , state : { name : 'sunny' }}}> 
this.props.history.push({pathname:"/sort ",state : { name : 'sunny' }});

读取参数用: this.props.location.query.state 
```

```js
4. search
<Route path='/web/search ' component={Search}/>
<link to="web/search?id=12121212">xxx</Link>
this.props.history.push({pathname:`/web/search?id ${row.id}`});

读取参数用: this.props.location.search 
```

