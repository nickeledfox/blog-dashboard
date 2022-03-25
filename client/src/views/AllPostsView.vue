<script lang="ts" setup>
import { ref } from 'vue';
const image: String = ref(require('../assets/image.svg'));

// @ts-ignore
import PostStaticCard from '../components/Post/PostStaticCard.vue';
import PostList from '../components/Post/PostList.vue';
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
          <PostList />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
