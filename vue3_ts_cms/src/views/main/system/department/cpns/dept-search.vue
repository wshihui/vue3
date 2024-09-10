<template>
  <div class="user-search">
    <el-form
      :model="searchForm"
      ref="formRef"
      label-position="right"
      label-width="90"
    >
      <el-row :gutter="80">
        <el-col :span="8">
          <el-form-item label="部门名称：" prop="name">
            <el-input
              v-model="searchForm.name"
              placeholder="请输入用户名"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="部门领导：">
            <el-input
              v-model="searchForm.leader"
              placeholder="请输入部门领导"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="创建时间：">
            <el-date-picker
              v-model="searchForm.createAt"
              type="daterange"
              range-separator="-"
              start-placeholder="开始时间"
              end-placeholder="结束时间"
              style="width: 100%"
            />
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <div class="btns">
      <el-button icon="Refresh" @click="handleResetClick">重置</el-button>
      <el-button icon="Search" type="primary" @click="handleSearchClick">
        查询
      </el-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { ElForm } from 'element-plus'
import { reactive, ref } from 'vue'

const emits = defineEmits(['queryClick', 'resetClick'])
const searchForm = reactive({
  name: '',
  leader: '',
  createAt: ''
})

const formRef = ref<InstanceType<typeof ElForm>>()
function handleResetClick() {
  formRef.value?.resetFields()
  emits('resetClick')
}
function handleSearchClick() {
  emits('queryClick', searchForm)
}
</script>

<style lang="less" scoped>
.user-search {
  padding: 20px 28px;
  background-color: #fff;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  .btns {
    padding: 0 20px 10px;
    text-align: right;
  }
}
</style>
