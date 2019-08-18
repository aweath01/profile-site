<template>
  <div id="app">
    <nav-bar></nav-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from './components/NavBar';

export default {
  name: 'app',
  components: {
    NavBar
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

}

@media screen and (max-width: 400px) {
  #app {
    flex-direction: column;
  }
}
</style>
