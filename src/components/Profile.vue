<template>
<div class='full'>
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
            <h4 class="center">Education & Experience</h4>
            <span><a href='https://www.senecacollege.ca/programs/fulltime/CPD.html' target='_blank'><strong>Seneca College - Computer Programming (2019) </strong><i class="fas fa-external-link-alt fa-xs"></i></a></span>
            <ul>
               <li>C++, JavaScript, Java, SQL, HTML, CSS, Typescript, RPGLE, CLLE</li>
               <li>Back-End Development using Node.js</li>
            </ul>
            Front-End Development
            <ul><strong>
               <li><routerLink to='/vue'>Vue.js</routerLink></li>
               <li><routerLink to='/react'> React.js </routerLink></li>
               <li><a href="https://fathomless-thicket-65337.herokuapp.com" target="_blank"> Angular <i class="fas fa-external-link-alt fa-xs"></i> </a></li>
               <li><a href="https://www.drkolenich.com" target="_blank">Wordpress <i class="fas fa-external-link-alt fa-xs"></i></a></li>
            </strong></ul>
         </p>
         <div id='linx'>
            <span><a href="https://www.linkedin.com/in/alexandra-weatherall/" target="_blank"><img src='../assets/LI-In-Bug.png' class='logo'></a></span>
            <span><a href='https://www.github.com/aweath01/profile-site' target="_blank"><img src='../assets/GitHub-Mark-32px.png'></a></span>
            <span><a href='mailto:aweath01@gmail.com' target="_blank"><i class="fas fa-envelope" id="fa-envelope"></i></a></span>
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
   color:rgb(114, 4, 107);
}
a:hover{
   color:rgb(0, 77, 0);
   text-decoration: none;
}

.full{
   min-height:100%;
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
   padding: 4%;
   margin: 5px;
   vertical-align: middle;
   background-color: rgba(255, 255, 255, 0.8);
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
@media screen and (max-width: 700px) {
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

