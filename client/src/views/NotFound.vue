<template>
  <el-container class="main-container not-found-page">
    <div class="not-found-info">
      <h1 class="title">404</h1>
      <p>Oops! Page not found...</p>
    </div>
  </el-container>
</template>

<script lang="ts" setup></script>

<style lang="sass">
.not-found-page
  height: 100vh
  width: 100vw

  .not-found-info
    margin: 14rem auto
    text-align: center

    p
      font-size: 2rem

  .title
    font-size: 5rem
    padding-bottom: 2rem
</style>
