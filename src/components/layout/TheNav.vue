<template>
  <nav
    class="navbar navbar is-fixed-top has-background-black-bis"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="navbar-brand">
      <router-link
        class="has-text-white-ter is-family-secondary is-size-5-mobile is-size-3-desktop ra-brand"
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
        <router-link v-show="!loginStatus.isLogged" class="navbar-item is-size-7 is-uppercase" to="/login">Login</router-link>
        <div v-show="loginStatus.isLogged" class="navbar-item has-dropdown is-hoverable">
          <router-link class="navbar-link is-arrowless" :to="{name: 'profile', params: { userID: userID }}">
            <span class="icon is-medium">
              <i class="fas fa-2x fa-user-circle"></i>
            </span>
            <span class="navbar-item ra-name">{{loginStatus.loggedUser.fullName}}</span>
          </router-link>
          <div class="navbar-dropdown is-left has-background-black-bis">
            <router-link class="navbar-item" :to="{name: 'profile', params: { userID: userID }}">O meu perfil</router-link>
            <a class="navbar-item" @click="logout()">Terminar sessão</a>
          </div>
        </div>
      </div>

      <div class="navbar-end">
        <router-link class="navbar-item is-size-7 is-uppercase" to="/#ra-bookmark-booking">Reservar</router-link>
        <router-link class="navbar-item is-size-7 is-uppercase" to="/#ra-bookmark-todays-special">Prato do dia</router-link>
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link is-arrowless">
            <span class="icon is-large">
              <i class="fas fa-ellipsis-h"></i>
            </span>
          </a>
          <div class="navbar-dropdown is-right has-background-black-bis">
            <router-link class="navbar-item is-size-7 is-uppercase" to="/#ra-bookmark-gallery">Galeria</router-link>
            <router-link class="navbar-item is-size-7 is-uppercase" to="/#ra-bookmark-faqs">FAQs</router-link>
            <router-link class="navbar-item is-size-7 is-uppercase" to="/sponsor">Patrocinadores</router-link>
            <hr class="navbar-divider" />
            <router-link class="navbar-item is-size-7 is-uppercase" to="/about">Sobre nós</router-link>
            <router-link class="navbar-item is-size-7 is-uppercase" to="/#ra-bookmark-contacts">Contactar</router-link>
            <!-- <div class="navbar-item has-text-white-ter">Version 0.8.0</div> -->
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "TheNav",
  methods: {
    logout() {
      this.$store.commit("users/LOGOUT");
      this.$store.commit("users/SAVE_TO_LOCALSTORAGE");
      this.$router.push("/");
    }
  },
  computed: {
    ...mapGetters("users", ["loginStatus"]),
    userID() {
      return this.loginStatus.loggedUser.uID;
    }
  },
};
</script>

<style src="@/scss/nav.scss" lang="scss" scoped></style>
