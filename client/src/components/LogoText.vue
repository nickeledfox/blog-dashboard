<template>
  <span class="main-title logo">{{ text }}</span>
</template>

<script lang="ts">
export default {
  props: ['text'],
};
</script>

<style lang="sass">
.logo
  font-size: 24px
  line-height: 36px
  padding: 0 22px
</style>
