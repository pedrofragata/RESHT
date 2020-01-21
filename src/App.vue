<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  created() {
    this.$store.commit("users/GET_FROM_LOCALSTORAGE");
    this.$store.commit("dishes/GET_FROM_LOCALSTORAGE");
  }
}
</script>