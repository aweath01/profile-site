<template>
  <div id='nav'>
    <div id='home'><routerLink to='/home'><strong><i class="fas fa-home"></i></strong></routerLink></div>
    <div id='tech'><routerLink to='/vue'><strong>Vue</strong></routerLink></div>
    <div id='tech'><routerLink to='/react'><strong>React</strong></routerLink></div>
    <div id='tech'><a href="https://fathomless-thicket-65337.herokuapp.com" target="_blank"><strong>Angular <i class="fas fa-external-link-alt fa-xs" id="tiny"></i></strong></a></div>
    <!--<div id='tech'><routerLink to='/'><strong>Node</strong></routerLink></div> -->
    <div id='contact'><a href='mailto:aweath01@gmail.com'><strong><i class="fas fa-envelope"></i></strong></a></div>
  </div>  
</template>

<style scoped>

#nav{
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  background-color: rgba(71, 0, 67, 0.89);
  text-align: center;
}

a{
  color: white;
}
a:hover{
   color:black;
   text-decoration: none;
}

#home, #contact{
  flex: 2;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 10px;
  padding-bottom: 10px;
}

#tech{
  flex: 2;
  padding: 10px;
}
#tiny{
  font-size: 7pt;
}




</style>

<script>
export default {
   
}
</script>


