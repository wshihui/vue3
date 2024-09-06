<template>
  <div class="app">
    <!-- <el-config-provider :local="zhCn"> -->
    <router-view></router-view>
    <!-- </el-config-provider> -->
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
// import { ElConfigProvider } from 'element-plus'
// import zhCn from 'element-plus/es/locale/lang/zh-cn.mjs'
</script>

<style scoped>
.app {
  width: 100vw;
  height: 100vh;
}
</style>
