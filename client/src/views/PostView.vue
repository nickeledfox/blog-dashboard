<template>
  <div class="main-container">
    <div class="post">
      <div>
        <img :src="`/${post.image}`" class="post_image" />
      </div>
      <div class="post_body">
        <div>
          <div class="category-container category">
            <span class="post-card_category">{{ post.category }}</span>
            <time class="time">{{ post.created.substring(0, 10) }}</time>
          </div>
          <h1 class="post-card_title title">{{ post.title }}</h1>
          <p>
            {{ post.content }}
          </p>
        </div>
      </div>
      <div class="post_footer">
        <el-button class="edit">
          <el-icon><edit /></el-icon
        ></el-button>
        <el-button class="delete">
          <el-icon><delete /></el-icon
        ></el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { Edit, Delete } from '@element-plus/icons-vue';

import API from '../api/api';
export default {
  data() {
    return {
      post: {},
    };
  },
  async created() {
    const res = await API.getPostByID(this.$route.params.id);
    this.post = res;
  },
  components: {
    Edit,
    Delete,
  },
};
</script>

<style lang="sass">

.post
  margin: 5rem auto
  width: 70%

  &_image
    max-width: 100%
    width: 100%
    min-width: none
    object-fit: contain

  &_footer
    padding-top: 3rem

  .category
    font-color: red
    font-size: 1rem

  // buttons
  .el-button
    transition: all .3s

  .el-button.edit
    &:hover
      color:  #95d475
      border-color:  #95d475

  .el-button.delete
    &:hover
      color:  #f89898
      border-color:  #f89898
</style>
