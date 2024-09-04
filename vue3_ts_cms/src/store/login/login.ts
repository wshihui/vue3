import {
  accountLoginRequest,
  getUserInfoById,
  getUserMenuByRoleId
} from '@/service/login/login'
import { defineStore } from 'pinia'
import type { IAccount } from '@/types'
import { localCache } from '@/utils/cache'
import { LOGIN_TOKEN } from '@/global/constants'
import router from '@/router'
import { mapMenusToRoutes } from '@/utils/map-menus'

/**
 * 执行console.log(this.userInfo.role)时报错：类型“{}”上不存在属性“role”
 * 因为：state中的返回值类型
 * (property) state?: (() => {
        token: any;
        userInfo: {};
    }) | undefined
 */
// 如何指定state的类型
// 1、在调用defineStore时传入泛型，比较麻烦，需要制定id类型，state类型，actions类型等等。
// 2、只给state指定类型

interface ILoginState {
  token: string
  userInfo: any
  userMenus: any
}

const useLoginStore = defineStore('login', {
  state: (): ILoginState => ({
    token: '',
    userInfo: {},
    userMenus: []
  }),
  actions: {
    async accountLoginAction(account: IAccount) {
      const result = await accountLoginRequest(account)
      const id = result.data.id
      this.token = result.data.token
      localCache.setCache(LOGIN_TOKEN, this.token)

      // 获取登录用户的详细信息
      const userInfoResult = await getUserInfoById(id)
      const userInfo = userInfoResult.data
      this.userInfo = userInfo
      localCache.setCache('userInfo', userInfo)

      // 获取登录用户的菜单
      const userMenuResult = await getUserMenuByRoleId(id)
      const userMenus = userMenuResult.data
      this.userMenus = userMenus
      localCache.setCache('userMenus', this.userMenus)

      const routes = mapMenusToRoutes(userMenus)
      routes.forEach((route) => router.addRoute('main', route))

      router.push('/main')
    },

    loadLocalCacheAction() {
      // 1、用户进行刷新时，获取本地数据
      const token = localCache.getCache(LOGIN_TOKEN)
      const userInfo = localCache.getCache('userInfo')
      const userMenus = localCache.getCache('userMenus')

      if (token && userInfo && userMenus) {
        this.token = token
        this.userInfo = userInfo
        this.userMenus = userMenus

        const routes = mapMenusToRoutes(userMenus)
        routes.forEach((route) => router.addRoute('main', route))
      }
    }
  }
})

export default useLoginStore
