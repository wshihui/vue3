<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<style scoped>
.app {
  width: 100vw;
  height: 100vh;
  /* background: linear-gradient(
    180deg,
    #f9f9ff -35.58%,
    #e0e1ff 53.19%,
    #e0f4ff 161.61%
  ); */
}
</style>
