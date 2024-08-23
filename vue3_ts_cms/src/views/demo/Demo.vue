<template>
  <div class="demo">
    <area-select
      v-model:province="province"
      v-model:city="city"
      v-model:country="country"
    ></area-select>
  </div>
  <button @click="getAllValue">点击获取子组件的值</button>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import AreaSelect from './area-select.vue'

const province = ref('Option1')
const city = ref('')
const country = ref('')

const getAllValue = () => {
  console.log(province.value)
  console.log(city.value)
  console.log(country.value)
}
</script>

<style lang="less">
.demo {
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;

  .el-form-item__content {
    width: 160px !important;
  }
}
</style>
