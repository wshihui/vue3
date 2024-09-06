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
/**
 * const usersList = systemStore.usersList
 * 这样是拿不到数据的，因为接口请求是异步的，而获取数据不是响应式的
 * 解决办法：1、使用computed计算属性
 *         2、使用pinia的storeToRefs方法
 */
const { usersList } = storeToRefs(systemStore)
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
