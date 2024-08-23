<template>
  <div class="main-header">
    <div class="menu-icon" @click="handleMenuIconClick">
      <el-icon size="28">
        <component :is="isFold ? 'Expand' : 'Fold'" />
      </el-icon>
    </div>
    <div class="content">
      <div class="breadcrumb">面包屑</div>
      <div class="info">
        <header-info />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import HeaderInfo from './cpns/header-info.vue'

const emit = defineEmits(['foldChange'])

const isFold = ref(false)

function handleMenuIconClick() {
  // 1、内部改变状态
  isFold.value = !isFold.value

  // 2、事件和状态传递给父组件
  emit('foldChange', isFold.value)
}
</script>

<style lang="less" scoped>
.main-header {
  height: 100%;
  display: flex;
  align-items: center;
  // justify-content;

  .menu-icon {
    margin-right: 20px;
    cursor: pointer;
  }

  .content {
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
