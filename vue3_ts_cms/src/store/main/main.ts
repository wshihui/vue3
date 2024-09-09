import { getEntireDepartments, getEntireRoles } from '@/service/main/main'
import { defineStore } from 'pinia'

interface IMainState {
  rolesList: any[]
  departmentsList: any[]
}

const useMainStore = defineStore('main', {
  state: (): IMainState => ({
    rolesList: [],
    departmentsList: []
  }),
  actions: {
    async fetchMainDataAction() {
      const rolesResult = await getEntireRoles()
      const departmentsResult = await getEntireDepartments()

      this.rolesList = rolesResult.data.list
      this.departmentsList = departmentsResult.data.list
    }
  }
})

export default useMainStore
