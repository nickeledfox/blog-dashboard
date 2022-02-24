<template>
  <div>
    <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
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

      <router-link :to="{ name: 'About' }">
        <el-menu-item index="2">
          <template #title>About</template>
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
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
a {
  text-decoration: none;
}
</style>
