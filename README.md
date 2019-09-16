# Alexandra Weatherall's Portfolio

## Main Page

I initialized this project using the Vue CLI, in order to incorporate the Vue and React projects directly within the main application. I used [vuera](https://github.com/akxcv/vuera) which allowed me to use React components directly in my Vue template.

I decided not to use Bootstrap or any pre-made components on the main page, in order to showcase my ability to create a mobile-friendly application using custom CSS.

The site is currently hosted on Heroku (currently working on switching it to Digital Ocean), using a Node.js server I built. 


## Vue.js

For this application, I created a friendly user interface to allow users to edit existing team data, from the "Teams API". This includes changing the Team Lead, the current Projects as well as the Members (Employees) of each of the 15 teams in the system. I used a card/panel-style interface for each Team’s information.

Here is the general guideline given for how it should look:
![Vue.js Layout Guideline](https://github.com/aweath01/profile-site/blob/master/vue-guideline.png "Vue.js Layout Guideline") 



## React

For this application, I worked entirely in React. The application features 4 routes: Overview, Projects, Teams & Employees. Each route is responsible for rendering information from the "Teams API".

Here is the general guideline given for how it should look:
![React Layout Guideline](https://github.com/aweath01/profile-site/blob/master/react-guideline.png "React Layout Guideline") 


## Angular

I refactored a premium HTML Bootstrap template [influx](https://www.templategarden.com/template/influx-multi-page-bootstrap-template/),  into Angular components with routing enabled. I used Services in Angular to retreive and load information from the "Teams API" into the components. I used Template Driven Angular Forms to allow users to edit employee / position information, as well as added search/filtering to the Employees table to make it more user-friendly.

