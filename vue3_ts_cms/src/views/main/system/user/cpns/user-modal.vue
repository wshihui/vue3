<template>
  <div class="user-modal">
    <el-dialog v-model="dialogVisible" title="新建用户" width="500">
      <div class="form">
        <el-form :model="formData" label-width="100px">
          <el-form-item label="姓名：" prop="name">
            <el-input
              v-model="formData.name"
              placeholder="请输入姓名"
            ></el-input>
          </el-form-item>
          <el-form-item label="真实姓名：" prop="realname">
            <el-input
              v-model="formData.realname"
              placeholder="请输入真实姓名"
            ></el-input>
          </el-form-item>
          <el-form-item label="密码：" prop="password">
            <el-input
              v-model="formData.password"
              placeholder="请输入密码"
              show-password
            ></el-input>
          </el-form-item>
          <el-form-item label="电话号码：" prop="cellphone">
            <el-input
              v-model="formData.cellphone"
              placeholder="请输入电话号码"
            ></el-input>
          </el-form-item>
          <el-form-item label="选择角色：" prop="roleId">
            <el-select v-model="formData.roleId">
              <template v-for="item in rolesList" :key="item.id">
                <el-option :label="item.name" :value="item.id" />
              </template>
            </el-select>
          </el-form-item>
          <el-form-item label="选择部门：" prop="departmentId">
            <el-select v-model="formData.departmentId">
              <template v-for="item in departmentsList" :key="item.id">
                <el-option :label="item.name" :value="item.id" />
              </template>
            </el-select>
          </el-form-item>
        </el-form>
      </div>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="dialogVisible = false">
            确定
          </el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import useMainStore from '@/store/main/main'
import { storeToRefs } from 'pinia'
import { reactive, ref } from 'vue'

const formData = reactive({
  name: '',
  realname: '',
  password: '',
  cellphone: '',
  roleId: '',
  departmentId: ''
})

const mainStore = useMainStore()
const { rolesList, departmentsList } = storeToRefs(mainStore)

const dialogVisible = ref(false)
function setDialogVisible() {
  dialogVisible.value = true
}

defineExpose({ setDialogVisible })
</script>

<style lang="less" scoped>
.form {
  padding: 10px 20px 10px 10px;
}
</style>
