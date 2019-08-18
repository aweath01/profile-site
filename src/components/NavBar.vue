<template>
<div id='nav'>
  <div id='home'><strong>Home</strong></div>
  <div id='tech'><strong>Vue</strong></div>
  <div id='tech'><strong>React</strong></div>
  <div id='tech'><strong>Angular</strong></div>
  <div id='tech'><strong>Node</strong></div>
  <div id='contact'><strong>Contact</strong></div>
</div>
   
</template>

<style scoped>

#nav{
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  background-color: forestgreen;
  text-align: center;
  
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




</style>

<script>
export default {
   
}
</script>


