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
            <time class="time">{{
              new Date(post.created).toDateString()
            }}</time>
          </div>
          <h1 class="post-card_title title">{{ post.title }}</h1>
          <p>
            {{ post.content }}
          </p>
        </div>
      </div>
      <div class="post_footer">
        <router-link :to="{ name: 'EditPost', params: { id: post._id } }"
          ><el-button class="edit">
            <el-icon><edit /></el-icon></el-button
        ></router-link>
        <DeletePost />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Edit } from '@element-plus/icons-vue';
import DeletePost from '../components/Post/DeletePost.vue';
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
    DeletePost,
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
    margin-right: 10px
    &:hover
      color:  #95d475
      border-color:  #95d475

  .el-button.delete
    &:hover
      color:  #f89898
      border-color:  #f89898
</style>
