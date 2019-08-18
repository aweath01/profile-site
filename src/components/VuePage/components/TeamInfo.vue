<template>
    <div>
        <form>
            <label>Team Leader</label> 
            <br/>
            <select>
                <option v-for="employee of employees" :key="employee._id" :selected="employee._id == thisLeader[0]._id"> {{employee.FirstName}} {{employee.LastName}} </option>
            </select>
            <br/><br/>
            <label>Team Members</label>
            <br/>
            <team-members 
                :employees = "employees"
                :members = "thisTeam"/>
            <br/>
        </form>
    </div>
</template>

<style scoped>


</style>

<script>
import _ from 'lodash'
import TeamMembers from './TeamMembers'

export default {
    name: 'TeamInfo',
    props: ['team', 'employees'],
    data: function(){
        return{
            thisLeader: null,
            thisTeam: []
        }
    },
    components:{
        TeamMembers
    },  

    created: function() {

        for(var i = 0; i < this.team.Employees.length; i++){
            for(var j = 0; j < this.employees.length; j++){
                if(this.team.Employees[i] == this.employees[j]._id){
                    this.thisTeam.push(this.employees[j]);
                }
            }
        }
        this.thisLeader = this.employees.filter(obj => {
            return obj._id === this.team.TeamLead;
            });
    }
}
</script>


