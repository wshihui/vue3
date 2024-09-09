import { deleteUserById, postUsersListData } from '@/service/main/system/system'
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
    }
  }
})

export default useSystemStore
