<template>
  <div class="area-select">
    <div>
      <el-select
        v-model="value1"
        placeholder="请选择省"
        @change="optionChange('province')"
        :disabled="false"
        :loading="loading1"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
      <el-select
        v-model="value2"
        placeholder="请选择市"
        @change="optionChange('city')"
        :loading="loading2"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
      <el-select
        v-model="value3"
        placeholder="请选择县"
        @change="optionChange('country')"
        :loading="loading3"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'

const props = defineProps({
  province: {
    type: String,
    default: ''
  },
  city: {
    type: String,
    default: ''
  },
  country: {
    type: String,
    default: ''
  }
})

const emits = defineEmits(['update:province', 'update:city', 'update:country'])

const loading1 = ref(false)
const loading2 = ref(false)
const loading3 = ref(false)

// 省
const value1 = computed({
  set(nv) {
    emits('update:province', nv)
  },
  get() {
    return props.province
  }
})

// 市
const value2 = computed({
  set(nv) {
    emits('update:city', nv)
  },
  get() {
    return props.city
  }
})

// 县
const value3 = computed({
  set(nv) {
    emits('update:country', nv)
  },
  get() {
    return props.country
  }
})

const optionChange = (opType: string) => {
  console.log(opType)
  // 下拉选择框的类型，调用接口
}

const options = [
  {
    value: 'Option1',
    label: 'Option1'
  },
  {
    value: 'Option2',
    label: 'Option2'
  },
  {
    value: 'Option3',
    label: 'Option3'
  },
  {
    value: 'Option4',
    label: 'Option4'
  },
  {
    value: 'Option5',
    label: 'Option5'
  }
]
</script>

<style lang="less">
.area-select .el-select {
  width: 160px;
}
</style>
