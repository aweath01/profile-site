<template>
    <div>
        <form>
            <label>Team Leader</label> 
            <br/>
            <multiselect 
                v-model="thisLeader" 
                :options="employeesTM"
                track-by="id" 
                label="name" 
                placeholder="Change Team Leader">
            </multiselect>
            <br/><br/>
            <label>Team Members</label>
            <br/>
            <team-members 
                :employeesTM = "employeesTM"
                :members = "thisTeam"/>
            <br/>
        </form>
    </div>
</template>

<style scoped>


</style>

<script>

import TeamMembers from './TeamMembers'
import Multiselect from 'vue-multiselect'

export default {
    name: 'TeamInfo',
    props: ['team', 'employees'],
    data: function(){
        return{
            thisLeader: null,
            thisTeam: [],
            employeesTM: [] 
        }
    },
    components:{
        TeamMembers, Multiselect
    }, 

    created: function() {

        //create team array
        for(var i = 0; i < this.team.Employees.length; i++){
            for(var j = 0; j < this.employees.length; j++){
                if(this.team.Employees[i] == this.employees[j]._id){
                    this.thisTeam.push(this.employees[j]);
                }
            }
        }
        
        //map data for multiselect
        this.employeesTM = this.employees.map((employee)=>{return{id:employee._id, name: employee.FirstName + " " + employee.LastName}});

        //identify team leader
        this.thisLeader = this.employeesTM.filter(emp => {
            return emp.id === this.team.TeamLead;
            });
    }
}
</script>


