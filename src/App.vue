<template>
  <div id="app" class="has-navbar-fixed-top has-background-black-ter">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view />
  </div>
</template>
<script>

export default {
  created() {
  
  if(localStorage.getItem("users")) {
          this.$store.state.users = JSON.parse(localStorage.getItem("users"))
        }        
},
updated()
{
      window.addEventListener(
      "unload",
      () =>
        localStorage.setItem(
          "users",
          JSON.stringify(this.$store.state.users)
        )
    );

    }
  
}

</script>
