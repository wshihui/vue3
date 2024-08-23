<template>
  <div class="login-panel">
    <h2 class="title">后台管理系统</h2>

    <div class="tabs">
      <el-tabs
        v-model="activeName"
        type="border-card"
        class="demo-tabs"
        stretch
      >
        <el-tab-pane name="account">
          <template #label>
            <div class="label">
              <el-icon><UserFilled /></el-icon>
              <span class="text">账号登录</span>
            </div>
          </template>
          <panel-account ref="accountRef" />
        </el-tab-pane>
        <el-tab-pane name="phone">
          <template #label>
            <div class="label">
              <el-icon><Iphone /></el-icon>
              <span class="text">手机登录</span>
            </div>
          </template>
          <panel-phone></panel-phone>
        </el-tab-pane>
      </el-tabs>
    </div>

    <div class="controls">
      <el-checkbox v-model="isKeepPwd" label="记住密码" />
      <el-link type="primary">忘记密码</el-link>
    </div>

    <el-button
      type="primary"
      @click="clickLoginBtn"
      class="login-btn"
      size="large"
    >
      立即登录
    </el-button>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import PanelAccount from './panel-account.vue'
// PanelAccount 不是一个类型，是个对象
// typeof PanelAccount
import PanelPhone from './panel-phone.vue'
import { localCache } from '@/utils/cache'

const isKeepPwd = ref<boolean>(localCache.getCache('isKeepPwd') ?? false)
watch(isKeepPwd, (newValue) => {
  localCache.setCache('isKeepPwd', newValue)
})

const activeName = ref('account')

// 没有默认值最好写个泛型
// accountRef中的ref保存的应该是由PanelAccount创建出来的实例对象
const accountRef = ref<InstanceType<typeof PanelAccount>>()

const clickLoginBtn = () => {
  if (activeName.value === 'account') {
    accountRef.value?.loginAction(isKeepPwd.value)
  } else {
    console.log('用户在进行手机登录')
  }
}
</script>

<style lang="less" scoped>
.login-panel {
  width: 360px;
  padding: 20px 24px;
  background: #fff;
  border-radius: 8px;
  box-shadow:
    0 6px 16px 0 rgba(0, 0, 0, 0.08),
    0 3px 6px -4px rgba(0, 0, 0, 0.12),
    0 9px 28px 8px rgba(0, 0, 0, 0.05);

  .title {
    text-align: center;
    margin-bottom: 15px;
  }

  .controls {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .login-btn {
    width: 100%;
    margin-top: 6px;

    --el-button-size: 44px;
  }

  .label {
    display: flex;
    align-items: center;
    justify-content: center;

    .text {
      margin-left: 6px;
    }
  }
}
</style>
