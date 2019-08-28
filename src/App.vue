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
    MainNav
  }
}
</script>

<style scoped>
html,
body{
  height: 100%;
  max-height: 100%;
  margin: 0;
  
}

#app {
  height: 100%;
  max-height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #47203c;

}
</style>
