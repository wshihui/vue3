<template>
  <div class="page-search">
    <el-form
      :model="searchForm"
      ref="formRef"
      label-position="right"
      label-width="90"
    >
      <el-row :gutter="80">
        <template v-for="item in props.searchConfig.formItems" :key="item.prop">
          <el-col :span="8">
            <el-form-item :label="item.label" :prop="item.prop">
              <template v-if="item.type === 'input'">
                <el-input
                  v-model="searchForm[item.prop]"
                  :placeholder="item.placeholder"
                />
              </template>
              <template v-if="item.type === 'date-picker'">
                <el-date-picker
                  v-model="searchForm[item.prop]"
                  type="daterange"
                  range-separator="-"
                  start-placeholder="开始时间"
                  end-placeholder="结束时间"
                  style="width: 100%"
                />
              </template>
              <template v-if="item.type === 'select'">
                <el-select :label="item.label" :prop="item.prop">
                  <template v-for="opt in item.options" :key="opt.id">
                    <el-option :label="opt.name" :value="opt.id" />
                  </template>
                </el-select>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
    <div class="btns">
      <el-button icon="Refresh" @click="handleResetClick">重置</el-button>
      <el-button icon="Search" type="primary" @click="handleSearchClick">
        查询
      </el-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { ElForm } from 'element-plus'
import { reactive, ref } from 'vue'

const emits = defineEmits(['queryClick', 'resetClick'])

interface IProps {
  searchConfig: {
    formItems: any[]
  }
}
const props = defineProps<IProps>()

const initialForm: any = {}
for (const item of props.searchConfig.formItems) {
  initialForm[item.prop] = item.initialValue ?? ''
}
const searchForm = reactive(initialForm)
// const searchForm = reactive({
//   name: '',
//   leader: '',
//   createAt: ''
// })

const formRef = ref<InstanceType<typeof ElForm>>()
function handleResetClick() {
  formRef.value?.resetFields()
  emits('resetClick')
}
function handleSearchClick() {
  emits('queryClick', searchForm)
}
</script>

<style lang="less" scoped>
.page-search {
  padding: 20px 28px;
  background-color: #fff;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  .btns {
    padding: 0 20px 10px;
    text-align: right;
  }
}
</style>
