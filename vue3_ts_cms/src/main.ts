import 'normalize.css'
import './assets/css/index.less'

import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import App from './App.vue'
import router from './router'
import store from './store'
import icons from './global/register-icons'

// 0.针对ELMessage和ELLoading等组件引入样式的方法
// 1.全局引入样式（所有样式全部引入）
// import 'element-plus/dist/index.css

// 2.单独组件的引入
// import 'element-plus/theme-chalk/el-message.css'

/**
 * 3.使用插件vite-plugin-style-import
 * npm install vite-plugin-style-import corsola -D
 * 在vite.config.ts中配置
 * 然后就直接调用就可以了
 */

// import 'element-plus/theme-chalk/el-message.css'

const app = createApp(App)
app.use(ElementPlus, { locale: zhCn })
app.use(icons)
app.use(store)
app.use(router)
app.mount('#app')
