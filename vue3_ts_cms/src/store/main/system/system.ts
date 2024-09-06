import { postUsersListData } from '@/service/main/system/system'
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
}

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

export default useSystemStore
