<script lang="ts" setup>
import { Right } from '@element-plus/icons-vue';
import { defineProps } from 'vue';

// @ts-ignore
import PostButton from '../Post/PostButton.vue';
const props = defineProps({
  post: Object,
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
          <span class="post-card_category post--card">{{ post.category }}</span>
          <time class="time post--card">{{
            post.created.substring(0, 10)
          }}</time>
        </div>
        <h4 class="post-card_title title">{{ post.title }}</h4>
        <p class="post-card_content">
          {{ post.content.substring(0, 130) + '...' }}
        </p>
      </div>
      <div class="post-card_footer bottom">
        <router-link :to="{ name: 'Post', params: { id: post._id } }">
          <PostButton text="Read more" />
        </router-link>
      </div>
    </div>
  </el-card>
</template>

<style lang="sass">
@use '../../sass/base/colors.sass' as *

/* lib utils */
.time.post--card
  font-size: 13px


.bottom
  position: absolute
  bottom: 1rem
  line-height: 12px


.category-container
  display: flex
  justify-content: space-between
  align-items: center
  color: $font-secondary


/* post card */
.post-card
  position: relative
  margin: 0.5rem
  height: 440px
  max-width: 370px !important
  min-width: 20vw

  line-height: 1
  border: 1px solid $light
  box-sizing: border-box
  border-radius: 10px
  transition: all linear 0.2s

  &_image
    max-width: 100%
    display: block
    object-fit: cover
    background: $light-one
    width: 100vw
    height: 180px


  &_category.post--card
    font-weight: 500
    font-size: 12px
    line-height: 175%


  &_title
    margin: 0.5rem 0
    font-size: 1.3rem


  &_content
    font-size: 1.15rem
    color: $font-secondary
    font-size: 16px
    line-height: 1
    opacity: 0.7
    transition: opacity 0.3s
    display: flex
    flex-direction: column
    align-items: flex-start
    padding: 0px
    flex: none
    order: 1
    align-self: stretch
    flex-grow: 0


  &_footer__icon
    font-size: 24px
    margin-left: 10px
    transition: transform 0.3s


  /* card hover */
  @media (any-hover: hover)
    &:hover
      .post-card_content
        opacity: 1


      .post-card_image
        transform: scale(1.1)
        transition: transform 4s cubic-bezier(0.25, 0.45, 0.45, 0.95)


      .button
        background: $accent
        color: #fff !important
</style>
