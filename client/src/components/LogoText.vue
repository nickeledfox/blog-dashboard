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
  position: absolute
  right: 1rem
</style>
