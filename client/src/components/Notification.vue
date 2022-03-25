<template>
  <div>
    <el-button plain @click="open1"> Success </el-button>
    <el-button plain @click="open2"> Error </el-button>
  </div>
</template>

<script lang="ts" setup>
import { ElNotification } from 'element-plus';

const open1 = () => {
  ElNotification({
    title: 'Success',
    message: 'This is a success message',
    type: 'success',
  });
};

const open2 = () => {
  ElNotification({
    title: 'Error',
    message: 'This is an error message',
    type: 'error',
  });
};
</script>
