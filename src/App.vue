<template>
  <div id="app">
    <main-nav></main-nav>
    <router-view></router-view>
  </div>
</template>

<script>

import MainNav from './components/MainNav';

export default {
  name: 'app',
  components: {
    MainNav,
  }
}
</script>

<style scoped>
html, body{
  min-height: 100%;
}

#app {
  height: 100%;
  min-height: 100%;
  
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  background-image: url("assets/leaves-dark.jpg");
  background-attachment: fixed;
  background-repeat: no-repeat;

  background-size: cover;
  -webkit-background-size: 100%;
  -moz-background-size: cover;
  -o-background-size: cover;
}
</style>
