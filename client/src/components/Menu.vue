<template>
  <div class="menu">
    <el-radio-group
      v-model="isCollapse"
      style="margin-bottom: 20px; --el-color-primary: #529b2e"
    >
      <el-radio-button :label="false">expand</el-radio-button>
      <el-radio-button :label="true">collapse</el-radio-button>
    </el-radio-group>
    <el-menu
      font-family="IBM Plex Serif"
      default-active="2"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      @open="handleOpen"
      @close="handleClose"
    >
      <router-link :to="{ name: 'Home' }">
        <el-menu-item index="1">
          <template #title>Home</template>
          <el-icon><home-filled /></el-icon>
        </el-menu-item>
      </router-link>

      <router-link :to="{ name: 'AllPosts' }">
        <el-menu-item index="2">
          <template #title>Posts</template>
          <el-icon><notebook /></el-icon>
        </el-menu-item>
      </router-link>

      <router-link :to="{ name: 'NewPost' }">
        <el-menu-item index="3">
          <template #title>Create Post</template>
          <el-icon><edit-pen /></el-icon>
        </el-menu-item>
      </router-link>
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { EditPen, HomeFilled, Notebook } from '@element-plus/icons-vue';

const isCollapse = ref(true);
const handleOpen = (key: string, keyPath: string[]) => {};
const handleClose = (key: string, keyPath: string[]) => {};
</script>

<style lang="sass" scoped>
@use '../sass/base/colors' as *
.el-radio-group
  @media(max-width: 716px)
    display: none

.el-menu-vertical-demo:not(.el-menu--collapse)
  width: 200px
  min-height: 100%


.menu
  margin: 0 10px

.el-icon svg.is-active,
.el-menu-item.is-active
  color: $accent !important
</style>
