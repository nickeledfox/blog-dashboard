<template>
  <el-popconfirm
    confirm-button-text="OK"
    cancel-button-text="No, Thanks"
    :icon="InfoFilled"
    icon-color="red"
    title="Are you sure to delete this post?"
    @confirm="confirmEvent"
  >
    <template #reference>
      <el-button class="delete">
        <el-icon><delete /></el-icon
      ></el-button>
    </template>
  </el-popconfirm>
</template>

<script lang="ts">
import { Delete } from '@element-plus/icons-vue';
import { ElNotification } from 'element-plus';
import { InfoFilled } from '@element-plus/icons-vue';
import API from '../../api/api';
export default {
  components: { Delete },
  data() {
    return {
      post: {},
    };
  },
  async created() {
    const res = await API.getPostByID(this.$route.params.id);
    this.post = res;
  },
  methods: {
    async deletePost(id) {
      const res = await API.delPostByID(id);
    },
    confirmEvent() {
      this.deletePost(this.post._id);
      ElNotification({
        title: 'Success',
        message: 'The post has been deleted',
        type: 'success',
      });
      this.$router.push({ name: 'Home' });
    },
  },
};
</script>

<style></style>
