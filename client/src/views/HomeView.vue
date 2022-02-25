<template>
  <div class="home">
    <el-container class="main-container">
      <el-container>
        <el-header>
          <div class="toolbar">
            <span>Header</span>
          </div>
        </el-header>

        <el-main>
          <h1>Home</h1>
          <PostList />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import PostList from '../components/PostList.vue';

import { Search, Edit, Check, Message, Delete } from '@element-plus/icons-vue';

export default {
  name: 'HomeView',
  components: { Search, Edit, Check, Message, Delete, PostList },
};
</script>
