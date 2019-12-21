<template>
   <div id="vue-page">
      <nav id = "nav">
            <nav-bar/>
      </nav>
      <div id = "team-box">
            <team-box />  
      </div>
   </div>
</template>

<style>

#vue-page {
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
}

@media screen and (max-width: 400px) {
  #vue-page {
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




