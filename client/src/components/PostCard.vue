<template>
  <el-card class="post-card" :body-style="{ padding: '0px' }">
    <div class="post-card_header">
      <img :src="`/${post.image}`" class="post-card_image" />
    </div>

    <div class="post-card_body" style="padding: 14px">
      <el-tag class="post-card_category">{{ post.category }}</el-tag>
      <h4 class="post-card_title title">{{ post.title }}</h4>
      <p class="post-card_content">
        {{ post.content.substring(0, 40) + '...' }}
      </p>
      <div class="post-card_footer bottom">
        <time class="time">{{ post.created }}</time>
        <el-button type="text" class="button">Read More</el-button>
      </div>
    </div>
  </el-card>
</template>

<script>
export default {
  props: ['post'],
};
</script>

<style lang="scss">
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.button {
  padding: 0;
  min-height: auto;
}

.post-card {
  background: #ece9e6;
  background: linear-gradient(to right, #ffffff, #ece9e6);

  &_image {
    max-width: 100%;
    display: block;
    object-fit: cover;
  }

  &_category {
    font-weight: 500;
  }

  &_title {
    margin: 0 0 0.5rem 0;
    font-size: 1.25rem;
  }

  &_content {
    font-size: 1rem;
    line-height: 1;
  }
}
</style>
