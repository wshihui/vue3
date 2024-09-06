<template>
  <div class="user">
    <user-search />
    <user-content />
  </div>
</template>

<script lang="ts" setup>
import UserContent from './cpns/user-content.vue'
import UserSearch from './cpns/user-search.vue'
</script>

<style lang="less" scoped>
.user {
  // border-radius: 10px;
}
</style>
