<template>
  <div class="main-menu">
    <div class="logo">
      <img class="img" src="@/assets/img/logo.svg" />
      <h2 class="title" v-show="!isFold">管理系统</h2>
    </div>
    <div class="menu">
      <el-menu
        :default-active="defaultActive"
        :collapse="isFold"
        active-text-color="#fff"
        background-color="#001529"
        text-color="#b7bdc3"
      >
        <template v-for="item in userMenus" :key="item.id">
          <el-sub-menu :index="item.id + ''">
            <template #title>
              <el-icon>
                <component :is="item.icon.split('-icon-')[1]" />
              </el-icon>
              <span>{{ item.name }}</span>
            </template>

            <template v-for="subitem in item.children" :key="subitem.id">
              <el-menu-item
                :index="subitem.id + ''"
                @click="toPage(subitem.url)"
              >
                {{ subitem.name }}
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>
      </el-menu>
    </div>
  </div>
</template>

<script lang="ts" setup>
import useLoginStore from '@/store/login/login'
import { mapPathToMenu } from '@/utils/map-menus'
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

defineProps({
  isFold: {
    type: Boolean,
    default: false
  }
})

// 1、获取菜单
const loginStore = useLoginStore()
const userMenus = loginStore.userMenus

// 2、监听item点击事件
const router = useRouter()
const toPage = (url: string) => {
  router.push(url)
}

// 3、ELMenu的默认菜单
const route = useRoute()
const defaultActive = computed(() => {
  const pathMenu = mapPathToMenu(route.path, userMenus)
  return pathMenu.id + ''
})
</script>

<style lang="less" scoped>
.main-menu {
  .logo {
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;

    .img {
      height: 30px;
      margin-right: 5px;
      border-radius: 50%;
    }

    .title {
      color: #fff;
    }
  }

  .el-menu {
    border-right: none;
    user-select: none;
  }

  .el-sub-menu {
    .el-menu-item {
      padding-left: 50px !important;
      background-color: #0c2135;
    }

    .el-menu-item:hover {
      color: #fff;
    }

    .el-menu-item.is-active {
      background-color: #0a60bd;
    }
  }
}
</style>
