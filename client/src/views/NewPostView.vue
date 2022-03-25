<template>
  <el-container>
    <el-container class="main-container">
      <el-main>
        <Header />
        <NewPostForm />
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
// @ts-ignore
import NewPostForm from '../components/Post/NewPostForm.vue';
import Header from '../components/Header.vue';
</script>

<style></style>
