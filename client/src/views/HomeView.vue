<template>
  <div class="home">
    <el-row class="mb-4">
      <el-button plain>Plain</el-button>
      <el-button type="primary" plain>Primary</el-button>
      <el-button type="success" plain>Success</el-button>
      <el-button type="info" plain>Info</el-button>
      <el-button type="warning" plain>Warning</el-button>
      <el-button type="danger" plain>Danger</el-button>
    </el-row>

    <search style="width: 1em; height: 1em; margin-right: 8px" />
    <el-icon><check /></el-icon>
  </div>
</template>

<script lang="ts">
import { Search, Edit, Check, Message, Delete } from '@element-plus/icons-vue';

export default {
  name: 'HomeView',
  components: { Search, Edit, Check, Message, Delete },
};
</script>
