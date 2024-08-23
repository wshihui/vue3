/// <reference types="vite/client" />

declare module '*.vue' {
  /**
   * 导入的每一个.vue文件的类型，就是defineComponent()函数的返回值类型
   * DefineComponent
   */
  import { DefineComponent } from 'vue'
  const component: DefineComponent
  export default component
}
