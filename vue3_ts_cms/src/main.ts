import 'normalize.css'
import './assets/css/index.less'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import pinia from './store'
import registerIcons from './global/register-icons'

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

import 'element-plus/theme-chalk/el-message.css'

const app = createApp(App)

app.use(router)
app.use(pinia)
app.use(registerIcons)

app.mount('#app')
