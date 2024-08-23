<template>
  <div class="panel-account">
    <el-form
      label-width="70"
      :model="accountForm"
      :rules="accountRules"
      status-icon
      ref="formRef"
    >
      <el-form-item label="帐号：" prop="name">
        <el-input v-model="accountForm.name" />
      </el-form-item>
      <el-form-item label="密码：" prop="password">
        <el-input show-password v-model="accountForm.password" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { ElMessage, type ElForm, type FormRules } from 'element-plus'
import useLoginStore from '@/store/login/login'
import { localCache } from '@/utils/cache'

const CACHE_NAME = 'name'
const CACHE_PASSWORD = 'password'

const accountForm = reactive({
  name: '',
  password: ''
})

const accountRules: FormRules = {
  name: [
    { required: true, message: '请输入帐号', trigger: 'blur' },
    {
      pattern: /^[a-z0-9]{6,20}$/,
      message: '必须6-20位数字或字母组成',
      trigger: 'change'
    }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    {
      pattern: /^[a-z0-9]{3,}$/,
      message: '密码必须3位以上数字或字母组成',
      trigger: 'change'
    }
  ]
}

const formRef = ref<InstanceType<typeof ElForm>>()
const loginStore = useLoginStore()
function loginAction(isKeepPwd: boolean) {
  formRef.value?.validate((valid) => {
    if (valid) {
      const name = accountForm.name
      const password = accountForm.password

      loginStore.accountLoginAction({ name, password }).then(() => {
        if (isKeepPwd) {
          localCache.setCache(CACHE_NAME, name)
          localCache.setCache(CACHE_PASSWORD, password)
        } else {
          localCache.removeCache(CACHE_NAME)
          localCache.removeCache(CACHE_PASSWORD)
        }
      })
    } else {
      ElMessage.error('验证失败啦')
    }
  })
}

defineExpose({ loginAction })
</script>
