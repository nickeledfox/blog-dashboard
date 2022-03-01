<script lang="ts" setup>
import '../../sass/components/Post/PostCard.scss';
import { Right } from '@element-plus/icons-vue';
import { defineProps } from 'vue';

interface Props {
  post?: string;
}
const props = defineProps({
  post: String,
});
</script>

<template>
  <el-card shadow="hover" class="post-card" :body-style="{ padding: '0px' }">
    <div class="post-card_header">
      <img :src="`/${post.image}`" class="post-card_image" />
    </div>

    <div class="post-card_body" style="padding: 14px">
      <div>
        <div class="category-container">
          <span class="post-card_category">{{ post.category }}</span>
          <time class="time">{{ post.created.substring(0, 10) }}</time>
        </div>
        <h4 class="post-card_title title">{{ post.title }}</h4>
        <p class="post-card_content">
          {{ post.content.substring(0, 130) + '...' }}
        </p>
      </div>
      <div class="post-card_footer bottom">
        <router-link :to="{ name: 'Post', params: { id: post._id } }">
          <el-button type="text" class="button"
            >Read more
            <el-icon class="post-card_footer__icon"><right /></el-icon
          ></el-button>
        </router-link>
      </div>
    </div>
  </el-card>
</template>
