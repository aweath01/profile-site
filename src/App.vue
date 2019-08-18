<template>
  <div id="app">
    <nav-bar></nav-bar>
    <main-content></main-content>
  </div>
</template>

<script>
import NavBar from './components/NavBar';
import MainContent from './components/MainContent';

export default {
  name: 'app',
  components: {
    NavBar,
    MainContent
  }
}
</script>

<style scoped>
html,
body{
  height: 100%;
  max-height: 100%;
  margin: 0;
  background-color: beige;
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
