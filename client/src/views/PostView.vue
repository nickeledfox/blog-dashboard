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
    </div>
  </div>
</template>

<script>
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

  .category
    font-color: red
    font-size: 1rem
</style>
