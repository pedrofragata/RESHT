<template>
  <nav class="navbar navbar is-fixed-top is-black" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link id="restaurant-title" to="/">Restaurante Aplicação</router-link>

      <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="restaurant-navbar">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="restaurant-navbar" class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item">
          Home
        </a>

        <a class="navbar-item">
          Documentation
        </a>
      </div>

      <div class="navbar-end">
        <!-- <div class="navbar-item">
          <div class="buttons">
            <a class="button is-primary">
              <strong>Sign up</strong>
            </a>
            <a class="button is-light">
              Log in
            </a>
          </div>
        </div> -->
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Nav",
  props: {
  }
};
</script>

<style lang="scss">
  @import "@/styles/_nav.scss";
</style>
