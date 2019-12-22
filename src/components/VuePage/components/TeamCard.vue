<template>
    <div id="team-card-wrapper">
        <b-card
            :header="'Team ' + team.TeamName"
            style="max-width: 20rem;"
            class="mb-2"
            :bg-variant="bg"
            :text-variant="text"
        >
            <team-info
                :employees="employees"
                :team="team"/>
            <label>Projects</label>
            <projects
                :projects="projects"
                :team="team"/>
            <br/>
            <b-button 
                block id="editB" 
                v-on:click="modeChange()" 
                :variant="btn">
                {{ mode }}
            </b-button>
        </b-card>
    </div>
</template>

<style scoped>
#team-card-wrapper{
    display:inline;
}

.card-header{
    font-size: 20px;
    font-weight: bold;
}

</style>

<script>
import TeamInfo from "./TeamInfo";
import Projects from "./Projects";
import {changeTeamData} from "../data.js";

export default {
    name: "TeamCard",
    props: ['team', 'employees', 'projects'],
    components: {
        TeamInfo,
        Projects
    },
    data: function() {
        return{
            mode: 'Edit',
            editMode: false,
            bg: 'light',
            text: 'null',
            btn: 'info',
            deft: {
                bg: 'light',
                text: 'null',
                btn: 'info'
            },
            editing: {
                bg: 'success',
                text: 'white',
                btn: 'dark'
            }
        }
    },
    methods: {
        modeChange(data){
            if(!this.editMode){
                this.bg = this.editing.bg;
                this.text = this.editing.text;
                this.btn = this.editing.btn;
                this.editMode = true;
                this.mode = 'Save';
            }
            else{
                debugger;
                changeTeamData(this.$children["0"].$children[0].membersTM.value, this.$children[1].teamProjectsTM.value, this.$children[1]._self.team._id);
                this.bg = this.deft.bg;
                this.text = this.deft.text;
                this.btn = this.deft.btn;
                this.editMode = false;
                this.mode = 'Edit';
            }
        }
    }
  }
</script>



