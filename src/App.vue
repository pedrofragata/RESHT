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
  },
  beforeDestroy(){
    this.$store.commit("bookings/SAVE_TO_LOCALSTORAGE");
  }
}
</script>