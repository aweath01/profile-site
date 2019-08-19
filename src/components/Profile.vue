<template>
   <div id='profile-wrapper'>
      <div id='picture'>
         <img src='../assets/profile-pic.jpg'>
      </div>
      <div id='profile'>
         <h1>Alexandra Weatherall</h1>
         <h3>Junior Web Developer</h3>
         <h5>Education</h5>
         <p>
            <strong><a href='https://www.senecacollege.ca/programs/fulltime/CPD.html' target='_blank'>Seneca College - Computer Programming (2019)</a></strong>
            <br/>
            Studied C++, JavaScript, Java, SQL, HTML, CSS, RPGLE, CLLE
            <br />
            Experience with 
            <ul>
               <li>Front-End Development</li>
               <ul>
                  <li>Vue.js</li>
                  <li>React.js</li>
                  <li>Angular</li>
               </ul>
               <li>Back-End Development using Node.js</li>
            </ul>
         </p>
         <div id='linx'>
            <span> <strong> <a href='mailto:aweath01@gmail.com' target="_blank">Contact Me</a> </strong> </span>
            <span> <strong> <a href='https://www.github.com/aweath01' target="_blank">Source Code on GitHub</a> </strong> </span>
         </div>
      </div>
   </div>
</template>

<script>
export default {
   name: 'Profile'
}
</script>

<style scoped>
#profile-wrapper{
   margin-top: 100px;
   margin-left: 180px; 
   margin-right: 180px; 
   display: flex;
   flex-direction: row;
}
#picture{
   flex: 1;
}
#profile{
   flex: 5;
   border-width: 3px;
   border-style: solid;
   border-color: forestgreen;
   opacity: 50%;
   padding: 10px;
}
#linx{
   display: flex;
   justify-content: space-evenly
}


</style>

