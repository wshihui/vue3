<template>
  <div class="user-content">
    <div class="header">
      <h3 class="title">用户列表</h3>
      <el-button type="primary">新建用户</el-button>
    </div>
    <div class="list">
      <p v-for="item in usersList" :key="item.id">
        {{ item.name }}
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import useSystemStore from '@/store/main/system/system'
import { storeToRefs } from 'pinia'

// 1、发起action，请求数据
const systemStore = useSystemStore()
systemStore.postUserListAction()

// 2、获取用户列表数据，展示
const { usersList } = storeToRefs(systemStore)
// const usersList = systemStore.usersList
</script>

<style lang="less" scoped>
.user-content {
  margin-top: 20px;
  background: #fff;
  padding: 16px 20px;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
