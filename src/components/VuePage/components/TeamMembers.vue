<template>
  <div>
    <multiselect 
      v-model="membersTM" 
      :options="employeesTM" 
      track-by="id"
      :multiple="true" 
      label="name" 
      :limit="0"
      :limit-text="limitText"
      placeholder="Change Team Members">
    </multiselect>
  </div>
</template>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<script>
  import Multiselect from 'vue-multiselect';

  export default {
    name: 'TeamMembers',
    props: ['employeesTM', 'members'],
    components: { Multiselect },
    data: function(){
        return{
            value: null,
            membersTM: null
        }
    },
    created: function(){
        this.membersTM = this.members.map(member=>{return{id:member._id, name: member.FirstName + " " + member.LastName}});
    },
    
    updated: function(){
        this.$emit('changed', this.membersTM);
    },
    
    methods: {
      limitText (count) {
      return `${count} members`
      }
    }
  }
</script>