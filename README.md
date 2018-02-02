## 无状态的组件

## props state

## 获取子组件

- this.props.children
- React.Children
  + count: function countChildren(children, context)
  + forEach: function forEachChildren(children, forEachFunc, forEachContext)
  + map: function mapChildren(children, func, context)
  + only: function onlyChild(children)
  + toArray: function toArray(children)

## 生命周期

![profile](resource/life-cycle.jpg)

## React Router

- Router:  路由根节点
- Route:   配置单个路由
- history
  + hashHistory    

    不需要配置服务器即可使用
    不支持服务端渲染
    不建议在生产环境使用

  + browserHistory

    通过URL变化来改变路由的，调用的是浏览器的History
    一般用于线上生产环境

  + createMemoryHistory

    Memory history并不会从地址栏中操作或者读取，它能帮助我们完成服务器端的渲染，或者用于测试以及其他渲染环境(比如React Native)
    和其他两种方式不一样的是 我们需要在内存中创建history对象来使用

## 如何控制路由切换

- Link
- IndexLink
- browserHistory
- this.context.router

## Conform Navigation

路由前跳转确认 场景：询问是否保存数据 转场动画等

```javascript
this.context.router.setRouteLeaveHook
```
