<template>
  <div>
    <multiselect @change="handleChange()" v-model="membersTM" :options="employeesTM" track-by="value" label="text" placeholder="Change Team Members"></multiselect>
  </div>
</template>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<script>
  import Multiselect from 'vue-multiselect'

  export default {
    name: 'TeamMembers',
    props: ['employees', 'members'],
    components: { Multiselect },
    data: function(){
        return{
            value: null,
            employeesTM: null,
            membersTM: null
        }
    },
    created: function(){
        this.employeesTM = this.employees.map((employee)=>{return{value:employee._id, text: employee.FirstName + " " + employee.LastName}});
        this.membersTM = this.members.map(member=>{return{value:member._id, text: member.FirstName + " " + member.LastName}});
    },
    
    updated: function(){
        this.$emit('changed', this.membersTM);
    }
  }
</script>