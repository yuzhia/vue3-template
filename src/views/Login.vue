<script setup>
import { useUserStore } from '@/store/modules/user'
import { useRouter, useRoute } from 'vue-router'

const userStore = useUserStore()
const router = useRouter()
const route = useRoute()

const doLogin = () => {
  const data = { username: 'root', password: '123456' }
  userStore.login(data).then(() => {
    router.push({
      path: route.query.redirect || '/'
    })
  })
}
</script>

<template>
  <div>Login...</div>
  <button @click="doLogin">点击登录</button>
</template>

<style scoped></style>
