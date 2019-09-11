<template>
<div>
   <div id='profile-wrapper'>
      <div class='profile photo'>
         <img src='../assets/profile-pic.jpg' id="picture">
         <div class="font-change">
            <h2 class="center">Alexandra Weatherall</h2>
            <h4 class="center">Junior Web Developer</h4>   
         </div>
      </div>
      <div class='profile font-change experience'>
         <p>
            <h4>Education & Experience</h4>
            <span><a href='https://www.senecacollege.ca/programs/fulltime/CPD.html' target='_blank'><strong>Seneca College - Computer Programming (2019) </strong><i class="fas fa-external-link-alt fa-xs"></i></a></span>
            <br/>
            <ul>
               <li>C++, JavaScript, Java, SQL, HTML, CSS, Typescript, RPGLE, CLLE</li>
               <li>Back-End Development using Node.js</li>
            </ul>
            Front-End Development
            <ul>
               <li><routerLink to='/vue'><strong>Vue.js</strong></routerLink></li>
               <li><routerLink to='/react'><strong>React.js</strong></routerLink></li>
               <li><a href="https://fathomless-thicket-65337.herokuapp.com" target="_blank"><strong>Angular <i class="fas fa-external-link-alt fa-xs"></i></strong></a></li>
            </ul>
         </p>
         <div id='linx'>
            <span> <strong> <a href="https://www.linkedin.com/in/alexandra-weatherall/" target="_blank"><img src='../assets/LI-In-Bug.png' class='logo'></a> </strong> </span>
            <span> <strong> <a href='https://www.github.com/aweath01/profile-site' target="_blank"><img src='../assets/GitHub-Mark-32px.png'></a> </strong> </span>
            <span> <strong> <a href='mailto:aweath01@gmail.com' target="_blank"><i class="fas fa-envelope" id="fa-envelope"></i></a> </strong> </span>
         </div>
      </div>
   </div>
   <br/><br/><br/>
   <p id="footer" class="font-change">This page was made using the Vue CLI, vuera, and node.js.</p>
</div>

</template>

<script>
export default {
   name: 'Profile'
}
</script>

<style scoped>
a{
   color:#75485E;
}
.center{
   text-align: center;
}
#profile-wrapper{
   margin-top: 5%;
   margin-left: 15%; 
   margin-right: 15%; 
   display: flex;
   flex-direction: row;
}
.profile{
   flex-direction: column;
   border-left-width: 12px;
   border-left-style: groove;
   border-left-color: #51A3A3;
   padding: 4%;
   vertical-align: middle;
   background-color: white;
}
.experience{
   flex: 2;
}
.photo{
   flex: 1;
}
#picture{
   width: 283px;
   height: 378px;
   align-content: center;
}
#linx{
   display: flex;
   justify-content:space-around;
}
span{
   flex: 1;
   text-align: center;
}
#footer{
   text-align: center;
   font-size: 10pt;
   color: white;
}
.font-change{
   font-family: 'Lexend Deca', sans-serif;
}
.logo{
   width:31.75px;
   height:27px;
   margin-top: 4px;
}
#fa-envelope{
   font-size: 20pt;
}

@import url('https://fonts.googleapis.com/css?family=Lexend+Deca&display=swap');
@media screen and (max-width: 600px) {
  #profile-wrapper {
   flex-direction: column;
  }
  #picture{
   padding-top: 0%;
   padding-bottom: 0%;
   max-width: 100%;
   object-fit: contain;

}
}


</style>

