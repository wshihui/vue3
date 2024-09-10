<template>
  <div class="user-modal">
    <el-dialog v-model="dialogVisible" title="新建部门" width="500">
      <div class="form">
        <el-form :model="formData" label-width="100px">
          <el-form-item label="部门名称：" prop="name">
            <el-input
              v-model="formData.name"
              placeholder="请输入部门名称"
            ></el-input>
          </el-form-item>
          <el-form-item label="部门领导：" prop="leader">
            <el-input
              v-model="formData.leader"
              placeholder="请输入部门领导"
            ></el-input>
          </el-form-item>
          <el-form-item label="选择部门：" prop="parentId">
            <el-select v-model="formData.parentId">
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
          <el-button type="primary" @click="handleConfirmClick">
            确定
          </el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import useMainStore from '@/store/main/main'
import useSystemStore from '@/store/main/system/system'
import { storeToRefs } from 'pinia'
import { reactive, ref } from 'vue'

const formData = reactive({
  name: '',
  leader: '',
  parentId: ''
})

const mainStore = useMainStore()
const { departmentsList } = storeToRefs(mainStore)

const dialogVisible = ref(false)
function setDialogVisible() {
  dialogVisible.value = true
}

const systemStore = useSystemStore()
function handleConfirmClick() {
  dialogVisible.value = false
  systemStore.newPageDataAction('department', formData)
}

defineExpose({ setDialogVisible })
</script>

<style lang="less" scoped>
.form {
  padding: 10px 20px 10px 10px;
}
</style>
