<template>
    <div>
        <multiselect @change="handleChange()" v-model="teamProjectsTM" :options="projectsTM" track-by="value" label="text" placeholder="Change Team Projects"></multiselect>
    </div>
</template>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<script>
import Multiselect from 'vue-multiselect';

export default {
    name: 'Projects',
    props: ['team', 'projects'],
    components: { Multiselect },
    data: function(){
        return{
            teamProjects: [],
            teamProjectsTM: null,
            projectsTM: null
        }
    },

    created: function() {
        for(var i = 0; i < this.team.Projects.length; i++){
            for(var j = 0; j < this.projects.length; j++){
                if(this.team.Projects[i] == this.projects[j]._id){
                    this.teamProjects.push(this.projects[j]);
                }
            }
        }
        this.projectsTM = this.projects.map(proj => {return{value: proj._id, text: proj.ProjectName}});
        this.teamProjectsTM = this.teamProjects.map(proj=>{return {value: proj._id, text: proj.ProjectName}});

    },
    
    updated: function(){
        this.$emit('changed', this.teamProjectsTM);
    }
}
</script>


