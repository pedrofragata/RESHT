<template>
  <div>
    <Nav />
    <section class="hero is-fullheight-with-navbar">
      <img src="@/assets/stil-u2Lp8tXIcjw-unsplash.jpg">
    </section>
    <!-- <div class="container is-fluid">
      <div class="notification">
        This container is <strong>fluid</strong>: it will have a 32px gap on either side, on any
        viewport size.
      </div>
    </div> -->
  </div>

  <!-- <div class="home"> -->
      <!-- REGISTO-->
     <!-- <label for="username">username</label>
     <input id="username" type="text" v-model="newUsername">
     <br>
     <label for="password">password</label>
     <input id="password" type="password" v-model="newPassword">
     <br>
     <input type="button" value="REGISTAR" @click="addUser">
     <br>
     <br> -->
     <!-- LOGIN -->
      <!-- <label for="Lusername">username</label>
     <input id="Lusername" type="text" v-model="Lusername">
     <br>
     <label for="Lpassword">password</label>
     <input id="Lpassword" type="password" v-model="Lpassword">
     <br>
     <input type="button" value="LOGIN" @click="login">
     <br>
     <br> -->
    <!-- LOGOUT -->
     <!-- <input v-if="isLoggedStatus" type="button" value="LOGOUT" @click="logout"> -->

  <!-- </div> -->
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";
import Nav from "@/components/Nav.vue";

// class User {
//   constructor(
//     username,
//     password
//     ){
//     this.username=username,
//     this.password=password   
//   }}

export default {
  name: "home",
  components: {
    Nav
  },
  // data(){
  //   return {
  //     newUsername:"",
  //     newPassword:"",
  //     Lusername:"",
  //     Lpassword:"",
  //     loggedUser: this.$store.getters.isLogged,
  //     isLoggedStatus:false
  //   }

  // },
  // methods: {
  //   addUser(){
  //     this.$store.commit("ADD_USER", new User(this.newUsername, this.newPassword))
  //   },
  //   login(){
  //     this.$store.commit("LOGIN",(this.Lusername, this.Lpassword))
  //     this.isLoggedStatus=true
  //   },
  //   logout(){
  //     this.$store.commit("LOGOUT")
  //     this.isLoggedStatus=true
  //   }
  // },
};
</script>

<style src="@/styles/home.scss" lang="scss"></style>
