<script lang="ts" setup>
// @ts-ignore
import PostButton from '../Post/PostButton.vue';
let home = !true;
</script>

<template>
  <div>
    <el-row class="static-card xs-hidden">
      <el-col :sm="14" :xs="12" :span="16"
        ><div class="grid-content">
          <div class="static-card-header">
            <img
              src="../../assets/banner.svg"
              alt="banner"
              style="border-radius: 8px 0 0 8px"
            />
          </div></div
      ></el-col>
      <el-col :sm="10" :xs="12" :md="10" :span="8"
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
              <div v-if="home">
                <router-link :to="{ name: 'Home' }">
                  <PostButton id="statc-button" text="Back Home" />
                </router-link>
              </div>
              <div v-else>
                <router-link :to="{ name: 'AllPosts' }">
                  <PostButton id="statc-button" text="Go to Posts" />
                </router-link>
              </div>
            </div>
          </div></div
      ></el-col>
    </el-row>
  </div>
</template>

<style lang="sass">
.xs-hidden
  @media(max-width: 720px)
    display: none !important

#statc-button
  > span
    padding: 0

.static-card
  border: 1px solid #eeecec
  box-sizing: border-box
  border-radius: 8px
  height: 320px
  margin: 0.5rem
  @media(max-width: 826px)
    height: 350px

  &-content__wrapper
    padding: 0 10px 0 0
    margin-left: -10px
    @media (min-width: 1465px)
      padding: 35px 20px 35px 0
      margin-left: -45px

  img
    max-width: 100%
    display: block
    object-fit: cover
    width: 90%
    height: 319px
    border-radius: 8px 0 0 8px
    @media(max-width: 826px)
      height: 350px

  .category
    font-weight: 500
    font-size: 12px
    line-height: 175%

  .title
    font-size: 1.2rem
    padding-bottom: .5rem
    @media(min-width: 1055px)
      font-size: 1.5rem

  p
    font-size: .9rem
</style>
