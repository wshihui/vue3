# 项目搭建

## 一、项目的介绍

### 1.1 后台管理系统的定位和核心

- 大前端时代：统一 => 前端 => 用户直接交互的

  - 前端

  - 移动端 iOS/android开发

  - 桌面端 Windows/Mac

    - VScode => electron => 跨平台 => Mac/Windows/Linux

  - 其他平台：穿戴设备/车载系统（智能汽车）/VR/AR......

  - Web3方向

- 数据会通过网络请求的方式（http/socket），汇总到后端（Java/GO/Python/Node...），保存到数据库中（MySQL/Oracle/MongoDB），数据也可以反向的展示到前端页面中；
- 中间环节：人为操作，如下架商品、订单操作等；
- 需要一个可以操作数据的**后台管理系统**（非常常见）：
  - 核心功能：增删改查；

### 1.2 后台管理系统项目功能介绍

**技术栈：**

- 开发工具：Visual Studio Code
- 编程语言：TypeScript 4.x + JavaScript
- 构建工具：Vite 3.x
- 前端框架：Vue 3.x + setup
- 路由工具：pinia
- UI框架：ELement Plus
  - AntDesign/MaterialUI => React UI组件库 => 阿里（蚂蚁金服）
  - AntDesign Mobile版本，官方没有Vue的版本，社区优秀人士开发的AntDesignVue
- 可视化：Echart 5.x
- 工具库：@vueuse/core + dayjs + countup.js等等
- CSS预编译：Less
- HTTP工具：Axios
- Git Hook工具：husky
- 代码规范：EditorConfig + Prettier + ESLint
- 提交规范：Commitizen + Commitlint
- 自动部署：Centos + Jenkins + Nginx

### 1.3 创建Vue项目的两种方式

- 方式一：Vue Cli

  - 基于webpack工具（webpack底层基于node，所以电脑需要安装node）
  - 命令：`vue create`

- 方式二：create-vue

  - 基于vite工具

  - 命令：`npm init vue@latest`

    <img src="/Users/wangshihui/Library/Application Support/typora-user-images/image-20240905101104828.png" alt="image-20240905101104828" style="zoom:50%;margin-left:0" />

    进入根目录执行`npm install`或者`pnpm install`

### 1.4 解析目录结构每个文件的作用

｜-- **.vscode**：vscode一些相关配置

｜-- ｜-- **extensions.json**：recommendations => 推荐安装的插件

｜-- **node_modules**：依赖包

｜-- **public**：放入一些资源，这些资源会在打包时直接放入dist文件夹下

｜--｜-- **favicon.icon**：网站图标

｜-- **src**：源代码

｜-- **.eslintrc.cjs**：

｜-- **.gitignore**：代码提交git时，配置忽略的文件

｜-- **.prettierrc.json**：

｜-- **env.d.ts**：**.d.ts** => 类型定义/声明文件。`/// <reference types="vite/client"/>`

｜-- **index.html**：入口模版

｜-- **package-lock.json**：锁定插件最终版本

｜-- **package.json**：记录版本

｜-- **README.md**

｜-- **tsconfig.config.json**

｜-- **tsconfig.json**

｜-- **vite.config.ts**：给vite做一些配置。（Vue Cli => webpack => vue.config.js => webpack配置）

### 1.5 tsconfig文件的作用和解析

未完待续～

### 1.6 Vue文件的类型声明方式和由来

```typescript
// main.ts
import App from './App.vue'
```

TypeScript不知道App的具体类型，只是知道App.vue是可以引入的，相当于是any类型，但是不知道引入的App对象是个组件。如何告诉TypeScript引入的是个组件呢？**可以在env.d.ts文件声明类型**

```typescript
declare module '*.vue' {
  /**
   * 导入的每一个.vue文件的类型，就是defineComponent()函数的返回值类型
   * DefineComponent
   */
  import { DefineComponent } from 'vue'
  const component: DefineComponent
  export default component
}
```

## 二、项目代码规范

### 2.1 集成editorconfig配置

EditorConfig有助于为不同 IDE 编辑器上处理同一项目的多个开发人员维护一致的编码风格。

```yaml
# http://editorconfig.org

root = true

[*] # 表示所有文件适用
charset = utf-8 # 设置文件字符集为 utf-8
indent_style = space # 缩进风格（tab | space）
indent_size = 2 # 缩进大小
end_of_line = lf # 控制换行类型(lf | cr | crlf)
trim_trailing_whitespace = true # 去除行尾的任意空白字符
insert_final_newline = true # 始终在文件末尾插入一个新行

[*.md] # 表示仅 md 文件适用以下规则
max_line_length = off
trim_trailing_whitespace = false
```

VSCode需要安装一个插件：EditorConfig for VS Code，自动读取.editorconfig文件

<img src="/Users/wangshihui/Library/Application Support/typora-user-images/image-20240905142405738.png" alt="image-20240905142405738" style="zoom:30%;margin-left:0" />

### 2.2 使用prettier工具

Prettier是一款强大的代码格式化工具，支持JavaScript、TypeScript、CSS、SCSS、Less、JSX、Angular、Vue、GraphQL、JSON、Markdown等语言，基本上前端能用到的文件格式它都可以搞定，是当下最流行的代码格式化工具。格式化代码：

1、安装prettier

```shell
npm install prettier -D
```

2、配置.prettier文件：

- useTabs：使用tab缩进还是空格缩进，选择false；
- tabWidth：tab是空格的情况下，是几个空格，选择2个；
- printWidth：当行字符的长度，推荐80，也有人喜欢100或者120；
- singleQuote：使用单引号还是双引号，选择true，使用单引号；
- trailingComma：在多行输入的尾逗号是否添加，设置为`none`，比如对象类型的最后一个属性后面是否加一个，；
- semi：语句末尾是否要加分号，默认值true，选择false表示不加；

```json
{
  "useTabs": false,
  "tabWidth": 2,
  "printWidth": 80,
  "singleQuote": true,
  "trailingComma": "none",
  "semi": false
}
```

3、创建.prettierignore忽略文件

```
/dist/*
.local
.output.js
/node_modules/**

**/*.svg
**/*.sh

/public/*
```

4、VSCode需要安装prettier的插件：Prettier - Code formatter

<img src="/Users/wangshihui/Library/Application Support/typora-user-images/image-20240905142547435.png" alt="image-20240905142547435" style="zoom:30%;margin-left:0" />

5、VSCode中的配置

- settings => format on save => 勾选上

  <img src="/Users/wangshihui/Library/Application Support/typora-user-images/image-20240905142910732.png" alt="image-20240905142910732" style="zoom:50%;margin-left:0" />

- settings => editor default format => 选择prettier

  <img src="/Users/wangshihui/Library/Application Support/typora-user-images/image-20240905142830399.png" alt="image-20240905142830399" style="zoom:50%;" />

6、测试prettier是否生效

- 测试一：在代码中保存代码；

- 测试二：配置一次性修改的命令；

  - 在package.json中配置一个scripts：

    ```json
    "prettier": "prettier --write ."
    ```

### 2.3 使用ESLint检测

1、创建项目时选择了ESLint，所以Vue会默认帮助我们配置需要的ESLint环境。代码不规范可以报错；

2、VSCode需要安装ESLint插件：ESLint

3、解决ESLint和prettier冲突的问题

- 安装插件：Vude在创建项目时，如果选择prettier，那么这两个插件会自动安装

  ```shell
  npm install eslint-plugin-prettier eslint-config-prettier -D
  ```

- 添加prettier插件：

  ```json
  extends: [
      "plugin:vue/vue3-essential",
      "eslint:recommended",
      "@vue/typescript/recommended",
      "@vue/prettier",
      "@vue/prettier/@typescript-eslint",
      'plugin:prettier/recommended'
    ],
  ```

4、VSCode中ESLint的配置

```json
 "eslint.lintTask.enable": true,
  "eslint.alwaysShowStatus": true,
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact"
  ],
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
```

> [!TIP]
>
> EditorConfig、ESLint、Prettier
>
> EditorConfig：在多个编辑器间保持一致代码风格；
>
> ESLint：代码不规范，会报错；
>
> Prettier：保存时，格式化代码，不会报错；
>
> Prettier与ESLint里配置的不一致

## 三、项目内容搭建

### 3.1 目录结构的创建

｜-- **src**

｜--｜-- **assets**

｜--｜-- **base-ui**

｜--｜-- **components**

｜--｜-- **hooks**

｜--｜-- **router**

｜--｜-- **service**

｜--｜-- **store**

｜--｜-- **utils**

｜--｜-- **views**

### 3.2 css样式的重置

**对默认CSS样式重置**

- normalize.css

  ```shell
  npm install normalize.css
  ```

  main.ts中引入

  ```typescript
  import 'normalize.css'
  ```

- reset.css/reset.less

  ｜-- **css**

  ｜--｜-- **common.less**

  ｜--｜-- **index.less**：所有样式出口文件

  ｜--｜-- **reset.less**：重置相关代码

  ```less
  // index.less
  @import './reset.less';
  @import './common.less';
  ```

- 在main.ts中引入：`import './assets/css/index.less'`

### 3.3 vue-router路由配置

1、安装路由

```shell
npm install vue-router
```

2、创建router/index.ts文件

```typescript
import { createRouter, createWebHashHistory } from 'vue-router'
const router = createRouter({
  history: createWebHashHistory(), // hash/history
  routers: []
})

export default router
```

3、main.ts里挂载上

```typescript
import router from './router'
app.use(router)
```

> [!TIP]
>
> 在线生成用户代码片段的工具
>
> https://snippet-generator.app/?description=&tabtrigger=&snippet=&mode=vscode

4、配置不存在的路径拦截，统一跳转至NotFound页面

```typescript
{
  path: '/:pathMatch(.*)',
  component: () => import('@/views/not-found/NotFound.vue')
}
```

### 3.4状态管理：Pinia

1、安装pinia

npm install pinia

2、store/index.ts文件

```typescript
import { createPinia } from 'pinia'

const pinia = createPinia()

export default pinia
```

3、main.ts里使用

```typescript
import pinia from './store'
app.use(pinia)
```

4、数据保存到store里

```typescript
import { defineStore } from 'pinia'

const useCounterStore = defineStore('counter', {
  state: () => ({
    counter: 0
  }),
  actions: {
    changeCounterAction() {}
  }
})

export default useCounterStore
```

使用

```typescript
import useCounterStore from 'xxxxx'
const counterStore = useCounterStore()
/**
 * 读取变量:	counterStore.counter
 * 调用方法:	counterStore.changeCounterAction()
 */
```

### 3.5 axios网络请求

参考TypeScript课程，axios的封装

### 3.6 区分development和production环境

- **Vite的环境变量：**

  Vite在一个特殊的`import.meta.env`对象上暴露环境变量。

  - `import.meta.env.MODE`：{ string } 应用运行的模式
  - `import.meta.env.PROD`：{ boolean } 应用是否运行在开发环境
  - `import.meta.env.DEV`：{ boolean } 应用是否运行在开发环境（永远与import.meta.env.PROD相反）
  - `import.meta.env.SSR`：{ boolean } 应用是否运行在server上

- **Vite使用dotenv从你的环境目录中的下列文件加载额外的环境变量**

  - `.env`：所有情况下都会加载
  - `.env.local`：所有情况下都会加载，但会被 `git`忽略
  - `.env.[mode]`：只在指定模式下加载
  - `.env.[mode].local`：只在指定模式下加载，但会被`git`忽略

- 只有以VITE\_为前缀的变量才会暴露给经过vite处理的代码

  ```
  VITE_BASE_URL=http://codercba.com:1888
  VITE_TIME_OUT=10000
  ```

## 四、Element Plus集成：参考官网

UI组件库 => 封装通用组件 => 后台管理系统

element UI（Vue2） / element Plus（Vue3）=> 饿了么团队 => Vue框架

AntDesingUI => 蚂蚁金服 => React框架

AntDesignVue => Vue框架

#### 4.1 全局引入

缺点：打包体积大

1、安装

```shell
npm install element-plus
```

2、在main.ts中引入

```typescript
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
app.use(ElementPlus)
```

#### 4.2 按需引入

1、在main.ts里引入。用到哪个组件再引入

```typescript
import { ElButton } from 'element-plus'
app.component(ElButton.name, ElButton)
```

2、在某一个页面里需要用到某个组件时引入

```typescript
import { ElButton } from 'element-plus'
// <el-button type="primary">Primary</el-button>
```

3、使用插件自动导入

首先你需要安装`unplugin-vue-components` 和 `unplugin-auto-import`这两款插件，在打包工具里用

```shell
npm install -D unplugin-vue-components unplugin-auto-import
```

在vite.config.ts配置文件中插入如下代码：

```typescript
// vite.config.ts
import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite' // 做自动导入
import Components from 'unplugin-vue-components/vite' // 识别使用了哪些组件
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  plugins: [
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    })
  ]
})
```

会多出两个文件：`auto-import.d.ts`、`components.d.ts`。组件直接使用时，会自动帮助我们声明组件，不需要手动修改。

在**tsconfig.json**中配置：编写代码时，提示更友好

```json
{
  "include": [
    "src/**/*",
    "src/**/*.vue",
    "env.d.ts",
    "auto-imports.d.ts",
    "components.d.ts"
  ]
}
```

> [!CAUTION]
>
> 自动导入时只会帮我们导入在**template**中使用的组件，像ElLoading、ElMessage这种反馈组件是不能自动导入的。可以手动导入。

未完待续～

# 代码

### 1.3 图标的引入

### 1.4 ELMessage引入

## 一、搭建登录页面

### 1.1 背景的搭建

- 100vw/vh

### 1.2 登录界面panel

#### 1.2.1 整体界面的搭建

- 标题
- tabs
- 记住密码/忘记链接（组件）

#### 1.2.2 tabs搭建过程

- label的插槽使用
- 内容显示

#### 1.2.3 账号登录form

- ElForm/ElFormItem/ElInput
- 绑定规则

#### 2.2.4 form的校验规则

#### 2.2.5 点击立即登录

- 父组件发生点击，执行子组件的函数
- defineExpose()
- const accountRef = ref<InstanceType<typeoof PaneAccount>>()

### 2.3 登录操作

#### 2.3.1 form通过验证

- formRef.validate(回调)

#### 2.3.2 登录接口的调用

- post
- data： { name, password }

#### 2.3.3 将登录操作store中

#### 2.3.4 IAccount类型的定义

### 2.4 postman的使用

### 2.5 token缓存和cache的封装

## 一、登录页面的功能

### 1.1 登录页面-导航守卫

```javascript
router.beforeEach((to) => {
  // 判断token相关的内容
})
```

### 1.2 记住密码的功能

### 1.3 main权限管理

- RBAC：role based access control
  - 基于角色访问控制（权限管理）
- 后台数据库设计表（了解）

### 1.4 请求用户信息

- 用户的角色

### 1.5 根据角色id获取菜单信息

### 1.6 userInfo/userMenus进行本地缓存

## 二、首页的界面搭建

### 2.1 整体的布局ElContainer

### 2.2 侧边栏的菜单Menu

#### 2.2.1 分析ElMenu每一个组件的作用

#### 2.2.2 手动的搭建整个菜单结构

#### 2.2.3 根据userMenus动态遍历

#### 2.2.4 图标动态：动态组件

### 2.3 Main的头部的Header展示

#### 2.3.1 menu-icon的图标点击

- 点击切换自己的图标
- 切换aside的宽度（动画）
- 切换menu的折叠效果

#### 2.3.2 个人信息的展示

- 退出登录
- 样式的调整

### 2.4 注册所有的路由、页面跳转

- 动态的菜单进行权限管理
- 但是所有的路由都是被注册进去

## 一、动态路由

**动态路由**：根据用户的权限信息，动态的添加路由（而不是一次性的注册所有的路由）

### 1.1 基于角色添加路由

- 基于角色（Role）的动态路由管理

```javascript
const roles = {
  'superadmin': [所有路由]， => router.main.children
  'admin': [一部分路由]，=> router.main.children
	'service': [少部分路由]，=> router.main.children
	'manager': [], => 重新发布/后端返回这个对象（json数据，后端必须组织好这个json）
}
```

**弊端**：每增加一个角色，都要增加key/value

- 基于菜单（Menu）的动态路由管理
  - userMenus：=> 动态展示菜单
  - 如，核心技术/商品统计/用户管理/角色管理都会有对应的路由
  - 映射成路由对象

**登录的接口中请求三个内容**：

- token
- 用户信息：角色信息（role对象）
- 菜单信息

### 1.2 基于菜单动态匹配

### 1.3 动态创建页面和路由对象

- coderwhy add3page_setup xxxxx

### 1.4 从文件中读取所有的路由

- localRoutes

### 1.5 根据菜单动态的映射路由

- routes
- router.addRoute('main'， xxxx)

### 1.6 刷新保持路由的注册状态

### 1.7 登录进入匹配第一个页面

### 1.8 刷新页面匹配menu菜单

### 1.9 面包屑的功能实现

## 二、查询功能

### 2.1 重置搜索表单

- 方式一：搜索参数，每一个属性单独重置为'' 。
- 方式二：使用官方提供的函数`resetFields`。
  - 这种方式，需要注意，取到form的ref值。同时还需要对`<el-form-item>`设置`prop`属性，值为动态绑定的属性值。

参考如下：

```html
<el-form :model="searchForm" ref="formRef">
  <el-form-item label="用户名：" prop="name">
    <el-input v-model="searchForm.name" placeholder="请输入用户名"></el-input>
  </el-form-item>
  <!-- ... -->
</el-form>
```

```typescript
import type { ElForm } from 'element-plus'
import { reactive, ref } from 'vue'

const searchForm = reactive({
  name: ''
})

const formRef = ref<InstanceType<typeof ElForm>>()
function handleResetClick() {
  formRef.value?.resetFields()
}
```

### 2.2 获取用户列表数据

请求数据放在store里，可以使UI页面与数据分离，不融合在一起，调用接口的方法写在service里，页面只需要触发store里对应的action方法，即可获取数据；

```typescript
// store => system.ts
// 引入接口请求
import { postUsersListData } from '@/service/main/system/system'
import { defineStore } from 'pinia'

const useSystemStore = defineStore('system', {
  state: (): ISystemState => ({
    usersList: [],
    usersTotalCount: 0
  }),
  actions: {
    async postUserListAction() {
      const usersListResult = await postUsersListData()
      const { list, totalCount } = usersListResult.data
      this.usersList = list
      this.usersTotalCount = totalCount
    }
  }
})
```

类型声明：建议单独放在一个文件内，统一管理。对于后端返回的数组，不确定具体有哪些属性，可以使用any，也可以根据接口返回的每一个参数，进行类型声明。

JSON TO TYPESCRIPT 类型声明转换工具：https://transform.tools/json-to-typescript

```typescript
interface IUser {
  cellphone: number
  createAt: string
  departmentId: number
  enable: number
  id: number
  name: string
  realname: string
  roleId: number
  updateAt: string
}

interface ISystemState {
  usersList: IUser[]
  usersTotalCount: number
}
```

```typescript
// user-content.vue
import useSystemStore from '@/store/main/system/system'
import { storeToRefs } from 'pinia'

// 1、发起action，请求数据
const systemStore = useSystemStore()
systemStore.postUserListAction()

// 2、获取用户列表数据，展示
/**
 * const usersList = systemStore.usersList
 * 这样是拿不到数据的，因为接口请求是异步的，而获取数据不是响应式的
 * 解决办法：1、使用computed计算属性
 *         2、使用pinia的storeToRefs方法
 */
const { usersList } = storeToRefs(systemStore)
```
