<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  created() {
    this.$store.commit("users/GET_FROM_LOCALSTORAGE");
    this.$store.commit("bookings/GET_FROM_LOCALSTORAGE");
    console.log("created")
  },
  beforeDestroy(){
    this.$store.commit("bookings/SAVE_TO_LOCALSTORAGE");
    console.log("destroyed")
  }
}
</script>