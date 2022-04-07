<script setup>
// import { ref } from 'vue'

// const active = ref(0)
</script>

<template>
  <router-view></router-view>
  <div>
    <router-link to="/home">首页</router-link>
    <div></div>
    <router-link to="/about">关于</router-link>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
