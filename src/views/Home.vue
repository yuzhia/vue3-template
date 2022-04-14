<script setup>
import { useUserStore } from '@/store/modules/user'

const user = useUserStore()

const onClick = () => {
  user.name = '哈哈哈哈'
}
const reset = () => {
  user.resetToken()
}
</script>

<template>
  <div>name: {{ user.name }}</div>
  <div>avatar: {{ user.avatar }}</div>

  <button @click="onClick">点击</button>
  <button @click="reset">重置</button>
</template>

<style scoped></style>
