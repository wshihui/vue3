<template>
  <div class="header-infos">
    <el-icon><Bell /></el-icon>
    <el-icon><ChatDotRound /></el-icon>
    <el-icon><Postcard /></el-icon>
    <el-dropdown placement="top-start">
      <div class="info-box">
        <img src="@/assets/img/avatar.png" class="avatar" />
        <span class="username">{{ 'wsh' }}</span>
      </div>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item @click="logout">退出系统</el-dropdown-item>
          <el-dropdown-item divided>个人信息</el-dropdown-item>
          <el-dropdown-item>修改密码</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts" setup>
import { LOGIN_TOKEN } from '@/global/constants'
import router from '@/router'
import { localCache } from '@/utils/cache'

function logout() {
  localCache.removeCache(LOGIN_TOKEN)
  router.push('/login')
}
</script>

<style lang="less" scoped>
.header-infos {
  display: flex;
  align-items: center;

  :deep(.el-tooltip__trigger:focus-visible) {
    outline: unset;
  }

  .el-icon {
    font-size: 24px;
    margin-right: 10px;
  }

  .info-box {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .avatar {
    width: 30px;
    height: 30px;
    margin-right: 10px;
  }

  .username {
    font-size: 16px;
  }
}
</style>
