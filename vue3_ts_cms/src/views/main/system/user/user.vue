<template>
  <div class="user">
    <user-search
      @query-click="handleQueryClick"
      @reset-click="handleResetClick"
    />
    <user-content
      ref="contentRef"
      @new-click="handleNewClick"
      @edit-click="handleEditClick"
    />
    <user-modal ref="modalRef" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import UserContent from './cpns/user-content.vue'
import UserSearch from './cpns/user-search.vue'
import UserModal from './cpns/user-modal.vue'

const contentRef = ref<InstanceType<typeof UserContent>>()
function handleQueryClick(formData: any) {
  contentRef.value?.fetchUsersListData(formData)
}
function handleResetClick() {
  contentRef.value?.fetchUsersListData()
}

const modalRef = ref<InstanceType<typeof UserModal>>()
function handleNewClick() {
  modalRef.value?.setDialogVisible()
}
function handleEditClick(itemData: any) {
  modalRef.value?.setDialogVisible(false, itemData)
}
</script>

<style lang="less" scoped></style>
