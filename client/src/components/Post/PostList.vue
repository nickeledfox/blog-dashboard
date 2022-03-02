<template>
  <div class="posts">
    <el-row type="flex" justify="space-between">
      <el-col
        style="margin: 0"
        v-for="post in posts"
        :key="post._id"
        :span="8"
        type="flex"
      >
        <PostCard :post="post" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import API from '../../api/api';
import PostCard from './PostCard.vue';

export default {
  props: ['post'],
  components: { PostCard },
  data() {
    return {
      posts: [],
    };
  },
  async created() {
    this.posts = await API.getPostList();
  },
};
</script>
