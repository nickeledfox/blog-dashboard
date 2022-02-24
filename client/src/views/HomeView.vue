<template>
  <div class="home">
    <h1 class="title">Home Page</h1>
  </div>
</template>

<script lang="ts">
import { Search, Edit, Check, Message, Delete } from '@element-plus/icons-vue';

export default {
  name: 'HomeView',
  components: { Search, Edit, Check, Message, Delete },
};
</script>
