<template>
  <div>
    <Nav />
    <section class="hero is-fullheight-with-navbar">
      <img src="@/assets/stil-u2Lp8tXIcjw-unsplash.jpg" />
    </section>
    <div class="container is-fluid">
      <SectionHeader title="Prato do dia" />
      <div class="columns ra-section-content">
        <div class="column is-4 is-offset-2">
          <h3 class="title is-3 has-text-weight-bold ra-dish-name">Amêijoas à Bulhão Pato</h3>
          <p class="is-size-5	ra-dish-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices tincidunt arcu non sodales neque sodales. Pretium quam vulputate dignissim suspendisse in est ante in nibh. Mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa. Sapien et ligula ullamcorper malesuada proin libero nunc consequat interdum.
          </p>
          <div class="ra-day-selector-wrapper">
            <button class="button">10</button>
            <button class="button">11</button>
            <button class="button">12</button>
          </div>
        </div>
        <div class="column is-4">
          <img class="ra-disc-image" src="@/assets/ameijoas-a-bulhao-pato.jpg"/>
        </div>
      </div>
    </div>
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
import SectionHeader from "@/components/SectionHeader.vue";

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
    Nav,
    SectionHeader
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
