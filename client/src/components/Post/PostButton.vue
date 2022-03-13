<script lang="ts" setup>
import { Right } from '@element-plus/icons-vue';
const props = defineProps({
  text: String,
});
</script>

<template>
  <el-button type="text" class="primary-button button">
    {{ text }}
    <el-icon class="post-card_footer__icon"><right /></el-icon>
    <slot />
  </el-button>
</template>

<style lang="sass">
.primary-button
  > span
    padding: 3px 8px

  min-height: auto
  font-weight: 800 !important
  font-size: 16px !important
  color: #000 !important
  font-family: Avenir
  outline: none

  transition: all 0.5s
  &:hover
    border: none
    color: #fff !important
    background: linear-gradient( 315deg, #00b712 0%,#79c951 74% )!important

    > span
      padding: 7px 8px !important

    .post-card_footer__icon
      transform: scale(1.3)
      font-weight: 900
      right: 5px


  &:active
    .post-card_footer__icon
      left: 4px
</style>
