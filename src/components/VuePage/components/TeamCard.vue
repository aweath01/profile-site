<template>
    <div id="team-card-wrapper">
        <b-card
        :header="'Team ' + team.TeamName"
        style="max-width: 20rem;"
        class="mb-2"
        >
            <team-info
                :employees="employees"
                :team="team"/>
            <label>Projects</label>
            <projects
                :projects="projects"
                :team="team"/>
            <br/>
            <b-button block id="editB" href="#" variant="info">Edit</b-button>
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
import TeamInfo from "./TeamInfo"
import Projects from "./Projects"

export default {
    name: "TeamCard",
    props: ['team', 'employees', 'projects'],
    components: {
        TeamInfo,
        Projects
    }
  }
</script>



