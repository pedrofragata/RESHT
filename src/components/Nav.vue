<template>
  <nav
    class="navbar navbar is-fixed-top has-background-black-bis"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="navbar-brand">
      <router-link
        class="has-text-white-ter is-family-secondary is-size-5-mobile is-size-2-desktop ra-brand"
        to="/"
      >Restaurante de Aplicação</router-link>

      <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="ra-navbar">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="ra-navbar" class="navbar-menu">
      <div class="navbar-start">
        <router-link v-if="!isLogged" class="navbar-item" to="/login">Login</router-link>
        <router-link v-if="isLogged" class="navbar-item" :to="{name: 'profile', params: { userId: idUser }}">
          <span class="icon is-medium">
            <i class="fas fa-2x fa-user-circle"></i>
          </span>
          <span class="ra-username">{{loggedUser.username}}</span>
        </router-link>
      </div>

      <div class="navbar-end">
        <router-link class="navbar-item" to="/#ra-bookmark-booking">Reservar</router-link>
        <router-link class="navbar-item" to="/#ra-bookmark-todays-special">Prato do dia</router-link>
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link is-arrowless">
            <span class="icon is-large">
              <i class="fas fa-ellipsis-h"></i>
            </span>
          </a>
          <div class="navbar-dropdown is-right has-background-black-bis">
            <router-link class="navbar-item" to="/#ra-bookmark-gallery">Galeria</router-link>
            <router-link class="navbar-item" to="/#ra-bookmark-faqs">FAQs</router-link>
            <router-link class="navbar-item" to="/sponsor">Patrocinadores</router-link>
            <hr class="navbar-divider" />
            <router-link class="navbar-item" to="/about">Sobre nós</router-link>
            <router-link class="navbar-item" to="/#ra-bookmark-contacts">Contactar</router-link>
            <!-- <div class="navbar-item has-text-white-ter">Version 0.8.0</div> -->
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "nav",
  data(){
    return{
      idUser: this.$store.getters.loggedUser.id
    }
  },
  props: {},
  computed: {
    loggedUser() {
      return this.$store.getters.loggedUser;
    },
    isLogged() {
      return this.$store.getters.isLogged;
    }
  }
};
</script>

<style src="@/scss/nav.scss" lang="scss"></style>
