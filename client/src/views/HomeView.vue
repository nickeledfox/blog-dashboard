<script lang="ts" setup>
import { ref } from 'vue';
const image: String = ref(require('../assets/image.svg'));
// @ts-ignore
import PostStaticCard from '../components/Post/PostStaticCard.vue';
</script>

<template>
  <div class="home">
    <el-container class="main-container">
      <el-container>
        <el-main>
          <div class="home-contant">
            <div class="home-img">
              <img v-bind:src="image" alt="flower" />
            </div>
            <h1 class="home-title main-title">Blush & Bloom Blog</h1>
            <p class="home-subtitle">
              Follow Blush & Bloom blog for product announcements, and how to
              take care of your flowers, and arrangements.
            </p>
          </div>
          <PostStaticCard />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style lang="sass">
.home
  display: flex
  justify-content: cente
  &-contant
    display: flex
    flex-direction: column
    align-items: center
    justify-content: center
    text-align: center
    @media (max-width: 480px)
      width: 60vw
      margin: 0 auto


  &-img
    width: 101px
    height: 101px
    top: 84px


  &-title
    font-size: 32px
    line-height: 36px


  &-subtitle
    font-size: 14px
    line-height: 21px
    padding-bottom: 32px
</style>
