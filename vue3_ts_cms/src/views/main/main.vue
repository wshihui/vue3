<template>
  <div class="main">
    <el-container class="main-content">
      <el-aside :width="isFold ? '60px' : '210px'">
        <main-menu :is-fold="isFold"></main-menu>
      </el-aside>
      <el-container>
        <el-header class="main-header">
          <main-header @fold-change="handleFoldChange"></main-header>
        </el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import MainHeader from '@/components/main-header/main-header.vue'
import MainMenu from '@/components/main-menu/main-menu.vue'
import { ref } from 'vue'

const isFold = ref(false)
function handleFoldChange(flag: boolean) {
  isFold.value = flag
}
</script>

<style lang="less" scoped>
.main {
  height: 100%;

  .main-content {
    height: 100%;

    .el-header {
      // background-color: palegoldenrod;
    }

    .el-aside {
      overflow-x: hidden;
      overflow-y: auto;
      text-align: left;
      cursor: pointer;
      background-color: #001529;

      transition: width 0.3s ease;

      &::-webkit-scrollbar {
        display: none;
      }
    }

    .el-main {
      background-color: #edeff7;
    }
  }
}
</style>
