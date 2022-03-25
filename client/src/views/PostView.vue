<template>
  <div class="main-container">
    <el-popconfirm
      confirm-button-text="OK"
      cancel-button-text="No, Thanks"
      :icon="InfoFilled"
      icon-color="red"
      title="Are you sure to delete this post?"
      @confirm="confirmEvent"
      @cancel="cancelEvent"
    >
      <template #reference>
        <el-button plain> Error </el-button>
      </template>
    </el-popconfirm>
    <!-- vvvvvvvvvvvvv -->

    <div class="post">
      <div>
        <img :src="`/${post.image}`" class="post_image" />
      </div>
      <div class="post_body">
        <div>
          <div class="category-container category">
            <span class="post-card_category">{{ post.category }}</span>
            <time class="time">{{ post.created }}</time>
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

        <el-button class="delete" @click="deletePost(post._id)">
          <el-icon><delete /></el-icon
        ></el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { Edit, Delete } from '@element-plus/icons-vue';
import { ElNotification } from 'element-plus';
import { InfoFilled } from '@element-plus/icons-vue';
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
    res.created = new Date().toDateString(); // or .substring(0, 10)
  },
  components: {
    Edit,
    Delete,
  },
  methods: {
    async deletePost(id) {
      const res = await API.delPostByID(id);
      this.$router.push({ name: 'Home' });
    },
    confirmEvent() {
      ElNotification({
        title: 'Success',
        message: 'This is a success message',
        type: 'success',
      });
      console.log('confirm!');
    },
    cancelEvent() {
      ElNotification({
        title: 'Error',
        message: 'This is an error message',
        type: 'error',
      });
      console.log('cancel!');
    },
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
