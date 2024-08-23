<template>
  <div class="login">
    <login-panel />
  </div>
</template>

<script lang="ts" setup>
import loginPanel from './cpns/login-panel.vue'
</script>

<style lang="less" scoped>
.login {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url('@/assets/img/login-bg.svg') center center no-repeat;
  background-size: cover;
}
</style>
