<template>
  <div class="user-content">
    <div class="header">
      <h3 class="title">用户列表</h3>
      <el-button type="primary" @click="handleNewBtnClick">新建用户</el-button>
    </div>
    <div class="table">
      <el-table :data="usersList" style="width: 100%" border>
        <el-table-column type="selection" width="50px" align="center" />
        <el-table-column
          type="index"
          label="序号"
          width="60px"
          align="center"
        />
        <el-table-column
          label="姓名"
          prop="name"
          width="120px"
          align="center"
        />
        <el-table-column
          label="真实姓名"
          prop="realname"
          width="120px"
          align="center"
        />
        <el-table-column
          label="手机号码"
          prop="cellphone"
          width="150px"
          align="center"
        />
        <el-table-column label="状态" width="80px" align="center">
          <template #default="scope">
            {{ scope.row.enable ? '启用' : '禁用' }}
          </template>
        </el-table-column>
        <el-table-column label="创建时间" align="center">
          <template #default="scope">
            {{ formatUTC(scope.row.createAt) }}
          </template>
        </el-table-column>
        <el-table-column label="更新时间" align="center">
          <template #default="scope">
            {{ formatUTC(scope.row.updateAt) }}
          </template>
        </el-table-column>
        <el-table-column label="操作" width="150px" align="center">
          <template #default="scope">
            <el-button size="small" icon="Edit" type="primary" text>
              编辑
            </el-button>
            <el-button
              size="small"
              icon="Delete"
              type="danger"
              text
              @click="handleDeleteBtnClick(scope.row.id)"
            >
              删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="pagination">
      <el-pagination
        v-model:current-page="currentPage"
        v-model:page-size="pageSize"
        :page-sizes="[10, 20, 30]"
        layout="total, sizes, prev, pager, next, jumper"
        :total="usersTotalCount"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import useSystemStore from '@/store/main/system/system'
import { storeToRefs } from 'pinia'
import { formatUTC } from '@/utils/format-date'
import { ref } from 'vue'

const emits = defineEmits(['newClick'])

const currentPage = ref(1)
const pageSize = ref(10)

// 1、发起action，请求数据
const systemStore = useSystemStore()
fetchUsersListData()

/* 2、获取用户列表数据，展示
 * const usersList = systemStore.usersList
 * 这样是拿不到数据的，因为接口请求是异步的，而获取数据不是响应式的
 * 解决办法：1、使用computed计算属性
 *         2、使用pinia的storeToRefs方法
 */
const { usersList, usersTotalCount } = storeToRefs(systemStore)

// 3、页码相关
function handleSizeChange() {
  fetchUsersListData()
}
function handleCurrentChange() {
  fetchUsersListData()
}

// 4、发送请求，获取列表数据
function fetchUsersListData(formData: any = {}) {
  const size = pageSize.value
  const offset = (currentPage.value - 1) * size
  const pageInfo = { size, offset }

  const info = { ...pageInfo, ...formData }

  systemStore.postUserListAction(info)
}

// 5、删除用户
function handleDeleteBtnClick(userId: number) {
  systemStore.deleteUserByIdAction(userId)
}

// 6、新建用户
function handleNewBtnClick() {
  emits('newClick')
}

defineExpose({ fetchUsersListData })
</script>

<style lang="less" scoped>
.user-content {
  margin-top: 20px;
  background: #fff;
  padding: 16px 20px;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
  }

  .table {
    :deep(.el-table__cell) {
      padding: 12px 0;
    }

    .el-button {
      margin-left: 0;
      padding: 5px 8px;
    }
  }

  .pagination {
    display: flex;
    justify-content: flex-end;
    margin-top: 16px;
  }
}
</style>
