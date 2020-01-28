<template>
    <div class="columns">
        <div class="column is-4">
        <VInput id="ra-user-name" type="text" label="Nome:" @input-changed="changeFilter" />
        </div>
    </div>
</template>

<script>


import VInput from "@/components/ui/VInput.vue";
import { mapGetters } from 'vuex';

export default {
    name: "FilterUsers",
    components: {
        VInput
    },
    data() {
        return {
           filterUserName: "",
           users:"",
        
        }
    },
    // created(){
    //      (this.users = this.$store.getters["users/allUsers"])
    // },
    methods: {
        changeFilter(name){
            console.log(name)
            this.filterUserName=name
        }
       
    },
    computed: {
        ...mapGetters("users", ["allUsers"]),
        filteredUsers() {


            return this.allUsers.filter(user => {
        let filterUserNameResult = true; 


        //filter UserName
        if (this.filterUserName !== "") {
          filterUserNameResult = user.fullName.toUpperCase().includes(this.filterUserName.toUpperCase());
        }

        return filterUserNameResult
      });
    

        }
    },
    watch: {
        filteredUsers() {
            console.log("wWATCHEEEEEER")
            this.$emit("users-filter-applied", this.filteredUsers);
        }
    }


}
</script>