<template>
    <div id="vueNavBar">
        <div class="title">Vue.js - Team Details</div> 
        <div class="info">Wondering what this is? View the<a href="https://github.com/aweath01/profile-site/blob/master/README.md#vuejs" target="_blank"> README </a></div>
    </div>
</template>

<style scoped>
    #vueNavBar{
        background-color: rgb(16, 141, 150);
        padding: 10px;
        text-align: center;
        color: white;
    }
    a{
        color:white;
    }
    a:hover{
        color:black;
        text-decoration: none;
    }
</style>

<script>
export default {
    name: "NavBar"
}
</script>