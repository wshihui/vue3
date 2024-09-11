import hyRequest from '@/service'

export function postUsersListData(queryInfo: any) {
  return hyRequest.post({
    url: '/users/list',
    data: queryInfo
  })
}

export function deleteUserById(id: number) {
  return hyRequest.delete({
    url: `/users/${id}`
  })
}

export function newUserInfo(userInfo: any) {
  return hyRequest.post({
    url: '/users',
    data: userInfo
  })
}

export function updateUserInfo(id: number, userInfo: any) {
  return hyRequest.patch({
    url: `/users/${id}`,
    data: userInfo
  })
}

/**
 * 增删改查
 */
export function postPageListData(pageName: string, queryInfo: any) {
  return hyRequest.post({
    url: `/${pageName}/list`,
    data: queryInfo
  })
}

export function deletePageData(pageName: string, id: number) {
  return hyRequest.delete({
    url: `/${pageName}/${id}`
  })
}

export function newPageData(pageName: string, itemData: any) {
  return hyRequest.post({
    url: `/${pageName}`,
    data: itemData
  })
}

export function updatePageData(pageName: string, id: number, itemData: any) {
  return hyRequest.patch({
    url: `/${pageName}/${id}`,
    data: itemData
  })
}
