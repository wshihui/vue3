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
          <el-form-item label="用户名：" prop="name">
            <el-input
              v-model="searchForm.name"
              placeholder="请输入用户名"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="真实姓名：">
            <el-input placeholder="请输入真实姓名"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="电话号码：">
            <el-input placeholder="请输入电话号码"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="状态：">
            <el-select placeholder="请选择状态">
              <el-option label="启用" :value="1"></el-option>
              <el-option label="禁用" :value="0"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="创建时间：">
            <el-date-picker
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
      <el-button icon="Search" type="primary">查询</el-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { ElForm } from 'element-plus'
import { reactive, ref } from 'vue'

const searchForm = reactive({
  name: '',
  realname: ''
})

const formRef = ref<InstanceType<typeof ElForm>>()
function handleResetClick() {
  formRef.value?.resetFields()
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
