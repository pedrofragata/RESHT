<template>
  <nav class="navbar navbar is-fixed-top has-background-black-bis" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link class="has-text-white-ter is-family-secondary is-size-2 ra-brand" to="/">Restaurante de Aplicação</router-link>

      <!-- <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="ra-navbar">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a> -->
    </div>

    <div id="ra-navbar" class="navbar-menu">
      <div class="navbar-start">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-primary">
              <strong>Sign up</strong>
            </a>
            <a class="button is-light">
              Log in
            </a>
          </div>
        </div>
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

<style src="@/scss/nav.scss" lang="scss"></style>
