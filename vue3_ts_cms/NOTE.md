### CSS deep的使用场景

### 动态路由：根据用户的权限信息，动态的添加路由（而不是一次性的注册所有的路有）

1、基于角色（Role）的动态路由管理

```javascript
const roles = {
  "superadmin": [所有的路由], => router.main.children
  "admin": [一部分路由], => router.main.children
  "service": [少部分路由], => router.main.children
  "manager": [], => 重新发布/后端返回这个对象（JSON数据，后端必须组织好这个JSON）
}
```

- 弊端：每增加一个角色，都需要增加key/value，都需要重新发布

2、基于菜单（menu）的动态路由管理

- userMenus => 动态展示菜单
- 商品统计/核心技术/用户管理/角色管理/...，没权限就没有对应的菜单
- 映射成路由对象

使用coderwhy插件: 自动添加路由
`具体使用参考：https://github.com/coderwhy`

登录的接口中请求三个内容：
1、token
2、用户信息：角色信息（role对象）
3、菜单信息

### 根据菜单动态的添加路由对象（独立的文件中）

1、获取菜单（userMenus）

- 代码写在位置

2、动态获取所有的路由对象，放到数组中

- 路由对象都在独立的文件中
- 从文件中将所有路由对象先读取到数组中

3、根据菜单匹配正确的路由

- router.addRoute('main', xxx)
