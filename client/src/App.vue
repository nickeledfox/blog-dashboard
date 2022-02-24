<script>
import Menu from './components/Menu.vue';
export default {
  components: {
    Menu,
  },
};
</script>

<template>
  <div id="app">
    <Menu />
    <router-view />
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Serif:wght@400;500;600;700&display=swap');
#app {
  font-family: 'IBM Plex Serif', Avenir, Helvetica, Arial, serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.title {
  color: #555;
}
</style>
