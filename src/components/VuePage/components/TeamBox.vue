<template>
    <div id="team-box-container">
        <div v-if="status.error">
            There was an error loading the teams. Please contact Alexandra Weatherall aweatherall@myseneca.ca for assistance.
        </div>
        <div v-if="status.loadingTeams || status.loadingEmployees || status.loadingProjects" id="load">
            Loading, please wait...
        </div>
        <div v-else>
        <b-card-group deck>
            <team-card 
                v-for="team of teams" 
                :key="team._id"
                :employees="employees"
                :projects="projects"
                :team="team"/>
        </b-card-group>
        </div>
    </div>
</template>

<style scoped>
#load{
    color: lightgray;
}
</style>

<script>
import TeamCard from "./TeamCard.vue"
import { getTeamData, getEmployeeData, getProjectsData } from "../data.js"

export default {
    name: 'TeamBox',
    data: function() {
        return {
        status: {
            loadingTeams: false,
            loadingEmployees: false,
            loadingProjects: false,
            errored: false
        },
        teams: null,
        employees: null,
        projects: null
        }
    },
    components: {
        TeamCard
    },
    created: function() {
        this.loadTeams();
        this.loadEmployees();
        this.loadProjects();
    },
    methods: {
        loadTeams: function() {
            this.status.loadingTeams = true;

        getTeamData()
            .then(teams => {
                this.teams = teams;
                this.status.loadingTeams = false;
            })
            .catch(err => {
                console.error('Unable to load team data', err.message);
                this.status.errored = true;
            });
        },
        loadEmployees: function() {
            this.status.loadingEmployees = true;

            getEmployeeData()
                .then(employees => {
                    this.employees = employees;
                    this.status.loadingEmployees = false;
                })
                .catch(err => {
                    console.error('Unable to load employee data', err.message);
                    this.status.errored = true;
                });
        },

        loadProjects: function() {
            this.status.loadingProjects = true;

            getProjectsData()
                .then(projects => {
                    this.projects = projects;
                    this.status.loadingProjects = false;
                })
                .catch(err => {
                    console.log('Unable to load projects data', err.message);
                    this.status.errored = true;
                });
        },
}
    
}
</script>

