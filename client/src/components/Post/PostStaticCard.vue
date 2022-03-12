<script lang="ts" setup>
// @ts-ignore
import PostButton from '../Post/PostButton.vue';
</script>

<template>
  <div>
    <el-row class="static-card">
      <el-col :span="16"
        ><div class="grid-content">
          <div class="static-card-header">
            <img
              src="../../assets/banner.svg"
              alt="banner"
              style="border-radius: 8px 0 0 8px"
            />
          </div></div
      ></el-col>
      <el-col :span="8"
        ><div class="grid-content">
          <div class="static-card-content__wrapper">
            <span class="category">Flower Arrangement</span>
            <h1 class="post-card_title title">
              5 easy DIY flower arrangements that'll instantly brighten up your
              mood
            </h1>
            <p>
              {Put some overview here about the title that quickly tell what’s
              the articles is about. Put some overview here about the title that
              quickly tell what’s the articles is about.}
            </p>

            <div class="bottom">
              <router-link :to="{ name: 'About' }">
                <PostButton id="statc-button" text="Read more posts" />
              </router-link>
            </div>
          </div></div
      ></el-col>
    </el-row>
  </div>
</template>

<style lang="sass">
#statc-button
  > span
    padding: 0

.static-card
  border: 1px solid #eeecec
  box-sizing: border-box
  border-radius: 8px
  height: 320px
  margin: 0.5rem

  &-content__wrapper
    padding: 35px 20px 35px 0
    margin-left: -45px

  img
    max-width: 100%
    display: block
    object-fit: cover
    width: 90%
    height: 319px
    border-radius: 8px 0 0 8px

  .category
    font-weight: 500
    font-size: 12px
    line-height: 175%

  .title
    font-size: 1.5rem
    padding-bottom: .5rem
</style>
