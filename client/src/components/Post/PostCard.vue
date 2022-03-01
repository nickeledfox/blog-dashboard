<script lang="ts" setup>
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
        <el-button type="text" class="button"
          >Read more <el-icon class="post-card_footer__icon"><right /></el-icon
        ></el-button>
      </div>
    </div>
  </el-card>
</template>

<style lang="scss">
@use '../../sass/base/colors.sass' as *;

/* lib utils */
.time {
  font-size: 13px;
}

.bottom {
  position: absolute;
  bottom: 1rem;
  line-height: 12px;
}

.category-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: $font-secondary;
}

/* post card */
.post-card {
  position: relative;
  margin: 10px 0;
  height: 440px;
  max-width: 370px;
  min-width: 20vw;
  width: 22vw;

  line-height: 1;
  border: 1px solid $light;
  box-sizing: border-box;
  border-radius: 10px;
  transition: all linear 0.2s;

  &_image {
    max-width: 100%;
    display: block;
    object-fit: cover;
    background: $light-one;
    width: 100vw;
    height: 180px;
  }

  &_category {
    font-weight: 500;
    font-size: 12px;
    line-height: 175%;
  }

  &_title {
    margin: 0.5rem 0;
    font-size: 1.3rem;
  }

  &_content {
    font-size: 1.15rem;
    color: $font-secondary;
    font-size: 16px;
    line-height: 1;
    opacity: 0.7;
    transition: opacity 0.3s;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
  }

  &_footer__icon {
    font-size: 24px;
    margin-left: 10px;
    transition: transform 0.3s;
  }

  /* card hover */
  @media (any-hover: hover) {
    &:hover {
      .post-card_content {
        opacity: 1;
      }

      .post-card_image {
        transform: scale(1.1);
        transition: transform 4s cubic-bezier(0.25, 0.45, 0.45, 0.95);
      }

      .button {
        background: $accent;
        color: #fff !important;
      }
    }
  }
}

/* card button */
.button {
  > span {
    padding: 3px 8px;
  }

  min-height: auto;
  font-weight: 800;
  font-size: 16px;
  color: #000 !important;
  font-family: Avenir;
  outline: none;

  transition: all 0.3s;
  &:hover {
    border: none;
    background-image: linear-gradient(
      315deg,
      #00b712 0%,
      #79c951 74%
    ) !important;

    .post-card_footer__icon {
      transform: scale(1.3);
      font-weight: 900;
      right: 5px;
    }
  }

  &:active {
    .post-card_footer__icon {
      left: 4px;
    }
  }
}
</style>
