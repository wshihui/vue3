<template>
  <div class="department">
    <dept-search
      @query-click="handleQueryClick"
      @reset-click="handleResetClick"
    />
    <dept-content @new-click="handleNewClick" @edit-click="handleEditClick" />
    <dept-modal ref="modalRef" />
  </div>
</template>

<script setup lang="ts">
import useSystemStore from '@/store/main/system/system'
import DeptContent from './cpns/dept-content.vue'
import DeptSearch from './cpns/dept-search.vue'
import DeptModal from './cpns/dept-modal.vue'
import { ref } from 'vue'

const systemStore = useSystemStore()
function handleQueryClick(formData: any) {
  systemStore.postPageListAction('department', formData)
}
function handleResetClick() {
  systemStore.postPageListAction('department')
}

const modalRef = ref<InstanceType<typeof DeptModal>>()
function handleNewClick() {
  modalRef.value?.setDialogVisible()
}
function handleEditClick() {}
</script>

<style scoped></style>
