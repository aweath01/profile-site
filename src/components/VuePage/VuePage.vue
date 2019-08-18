<template>
   <div id="vue-page">
      <div id="app">
         <nav id = "nav">
               <nav-bar/>
         </nav>

         <div id = "team-box">
               <team-box />  
         </div>
      </div>
   </div>
</template>

<style>
html,
body,
main {
  height: 100%;
  max-height: 100%;
  margin: 0;
  font-family: Helvetica, Arial, sans-serif;
  background-color: darkslategrey;
}

#app {
  height: 100%;
  overflow: auto;
}

#team-box{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    overflow: auto;
    justify-content: space-evenly;
    padding-left: 15px;
    padding-top: 15px;
    padding-right: 15px;
    background-color: rgb(44, 44, 44);
}

@media screen and (max-width: 400px) {
  #app {
    flex-direction: column;
  }
}
</style>

<script>
import BootstrapVue from 'bootstrap-vue'
import NavBar from "./components/NavBar"
import TeamBox from "./components/TeamBox"

export default {
    name: "VuePage",    
    components:{
        NavBar,
        TeamBox
    }
}
</script>




