import type { RouteRecordRaw } from 'vue-router'

function loadLocalRoutes() {
  // 1、动态获取所有的路由对象，放到数组中
  // * 路由对象都在独立的文件中
  // * 从文件中将所有路由对象先读取数组中
  const localRoutes: RouteRecordRaw[] = []

  // 1.1 读取router/main所有的ts文件，webpack中叫require.context()
  const files: Record<string, any> = import.meta.glob(
    '../router/main/**/*.ts',
    {
      eager: true
    }
  ) // 匹配文件
  // 对象类型：路经：函数，没有直接把模块返回，是懒加载，如果想立即拿到对象模块，传入参数eager

  // 1.2 将加载的对象放到localRoutes中
  for (const key in files) {
    const module = files[key]
    localRoutes.push(module.default)
  }

  return localRoutes
}

export let firstMenu: any = null
export function mapMenusToRoutes(userMenus: any[]) {
  //1、加载本地路由
  const localRoutes = loadLocalRoutes()

  // 2、根据菜单去匹配正确的路由
  const routes: RouteRecordRaw[] = []
  for (const menu of userMenus) {
    for (const subMenu of menu.children) {
      const route = localRoutes.find((item) => item.path === subMenu.url)

      if (route) {
        // 1、给route的顶层菜单增加重定向功能（只需要添加一次即可）
        if (!routes.find((item) => menu.url === item.path)) {
          routes.push({ path: menu.url, redirect: route.path })
        }

        // 2、加入二级菜单对应的路由
        routes.push(route)
      }
      // 记录第一个被匹配的菜单
      if (!firstMenu && route) firstMenu = subMenu
    }
  }
  return routes
}

/**
 * 根据当前路由匹配需要展示的菜单
 * @param path 需要匹配的路由地址
 * @param userMenus 用户的所有路由
 * @returns
 */
export function mapPathToMenu(path: string, userMenus: any[]) {
  for (const menu of userMenus) {
    for (const subMenu of menu.children) {
      if (subMenu.url === path) {
        return subMenu
      }
    }
  }
}

interface IBreadcrumb {
  name: string
  path: string
}
export function mapPathToBreadcrumbs(path: string, userMenus: any[]) {
  const breadcrumbs: IBreadcrumb[] = []
  for (const menu of userMenus) {
    for (const subMenu of menu.children) {
      if (subMenu.url === path) {
        breadcrumbs.push({ name: menu.name, path: menu.url })
        breadcrumbs.push({ name: subMenu.name, path: subMenu.url })
      }
    }
  }
  return breadcrumbs
}
