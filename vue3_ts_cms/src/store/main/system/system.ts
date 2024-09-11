import {
  deleteUserById,
  newPageData,
  newUserInfo,
  postPageListData,
  postUsersListData,
  updatePageData,
  updateUserInfo
} from '@/service/main/system/system'
import { defineStore } from 'pinia'

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

  pageList: any[]
  pageTotalCount: number
}

const useSystemStore = defineStore('system', {
  state: (): ISystemState => ({
    usersList: [],
    usersTotalCount: 0,

    pageList: [],
    pageTotalCount: 0
  }),
  actions: {
    async postUserListAction(queryInfo: any) {
      const usersListResult = await postUsersListData(queryInfo)
      const { list, totalCount } = usersListResult.data
      this.usersList = list
      this.usersTotalCount = totalCount
    },
    async deleteUserByIdAction(id: number) {
      const deleteResult = await deleteUserById(id)
      console.log(deleteResult)

      this.postUserListAction({ size: 10, offset: 0 })
    },
    async newUserInfoAction(userInfo: any) {
      const newResult = await newUserInfo(userInfo)
      console.log(newResult)

      this.postUserListAction({ size: 10, offset: 0 })
    },
    async updateUserInfoAction(id: number, userInfo: any) {
      const updateResult = await updateUserInfo(id, userInfo)
      console.log(updateResult)

      this.postUserListAction({ size: 10, offset: 0 })
    },

    /** 增删改查 */
    async postPageListAction(pageName: string, queryInfo?: any) {
      const pageListResult = await postPageListData(pageName, queryInfo)
      const { list, totalCount } = pageListResult.data
      this.pageList = list
      this.pageTotalCount = totalCount
    },

    async newPageDataAction(pageName: string, itemData: any) {
      const newResult = await newPageData(pageName, itemData)
      console.log(newResult)

      this.postPageListAction(pageName, { offset: 0, size: 10 })
    },

    async editPageDataAction(pageName: string, id: number, userInfo: any) {
      const updateResult = await updatePageData(pageName, id, userInfo)
      console.log(updateResult)

      this.postPageListAction(pageName, { size: 10, offset: 0 })
    }
  }
})

export default useSystemStore
