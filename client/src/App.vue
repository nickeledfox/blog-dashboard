<script lang="ts" setup>
// @ts-ignore
import Menu from './components/Menu.vue';
</script>

<template>
  <div id="app">
    <el-aside class="menu-container" width="200px">
      <Menu />
    </el-aside>

    <router-view />
  </div>
</template>

<style lang="sass">
#app
  position: reletive
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale

.menu-container
  background-color: #FBF8F8
</style>
