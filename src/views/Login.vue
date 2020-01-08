<template>
  <div class="login">
    <div class="hero-head">
      <Nav />
    </div>
    <div class="login-html">
      <input id="tab-1" type="radio" name="tab" class="sign-in" checked />
      <label for="tab-1" class="tab">Login</label>
      <input id="tab-2" type="radio" name="tab" class="sign-up" />
      <label for="tab-2" class="tab">Registar</label>
      <div class="login-form">
        <div class="sign-in-htm">
          <form v-on:submit.prevent="login">
            <div class="group">
              <label for="logEmail" class="label">Email</label>
              <input id="logEmail" type="email" class="input" v-model="logEmail" required />
            </div>
            <div class="group">
              <label for="logPassword" class="label">Password</label>
              <input
                id="logPassword"
                type="password"
                class="input"
                data-type="password"
                v-model="logPassword"
                required
              />
            </div>
            <div class="group">
              <input type="submit" class="button" value="Entrar" />
            </div>
            <div class="hr"></div>
            <div class="foot-lnk">
              <a href="#">Esqueceu-se da sua password?</a>
            </div>
          </form>
        </div>
        <div class="sign-up-htm">
          <form v-on:submit.prevent="addUser">
            <div class="group">
              <label for="email" class="label">Email</label>
              <input id="email" type="email" class="input" v-model="email" required />
            </div>
            <div class="group">
              <label for="newUsername" class="label">Nome de utilizador</label>
              <input id="newUsername" type="text" class="input" v-model="newUsername" required />
            </div>
            <div class="group">
              <label for="newPassword" class="label">Password</label>
              <input
                id="newPassword"
                type="password"
                class="input"
                data-type="password"
                v-model="newPassword"
                required
              />
            </div>
            <div class="group">
              <label for="confPassword" class="label">Repetir Password</label>
              <input
                id="confPassword"
                type="password"
                class="input"
                data-type="password"
                v-model="confPassword"
                required
              />
            </div>

            <div class="group">
              <input type="submit" class="button" value="Registar" />
            </div>
            <div class="hr"></div>
          </form>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>


<script>
//isto vai mudar
class User {
  constructor(id, username, password, email) {
    (this.id = id),
      (this.username = username),
      (this.password = password),
      (this.email = email);
  }
}

import Nav from "@/components/Nav.vue";
import Footer from "@/components/Footer.vue";

import Swal from "../../node_modules/sweetalert2/dist/sweetalert2.js";
import "../../node_modules/sweetalert2/src/sweetalert2.scss";

export default {
  components: {
    Nav,
    Footer
  },
  data() {
    return {
      users: [],
      newUsername: "",
      newPassword: "",
      logEmail: "",
      logPassword: "",
      email: "",
      confPassword: "",
    };
  },
  methods: {
    //obter o ultimo Id
    getLastId() {
      if (this.users.length) {
        return this.users[this.users.length - 1].id;
      } else {
        return 0;
      }
    },

    addUser() {
      //verificar se email já existe
      let emailAlreadyExists = this.users.some(
        user => user.email == this.email
      );
      console.log("email existe?" + emailAlreadyExists);

      // verificar passwords
      if (this.newPassword == this.confPassword) {
        if (emailAlreadyExists) {
          Swal.fire({
            icon: "error",
            title: "Oops..",
            text: "Esse email já se encontra registado!"
          });
        }
        // se estiver tudo bem, cria o utilizador
        else {
          //fazer o ID aqui
          let id = this.getLastId() + 1;
          this.$store.commit(
            "ADD_USER",
            new User(id, this.newUsername, this.newPassword, this.email)
          );
          console.log(this.email);
          Swal.fire({
            icon: "success",
            title: "Registo efetuado com sucesso!",
            showConfirmButton: false,
            timer: 1500
          });
        }
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops..",
          text: "As passwords não coincidem!"
        });
      }
    },
    login() {
      if (this.users.some(user => user.email === this.logEmail && user.password === this.logPassword)) {
        this.$store.commit("LOGIN", (this.logEmail, this.logPassword));
        // console.log("LOGADO");
        // console.log("IFFFFFFFFFFFFFF");
        this.$router.push("/");
      } else {
        // console.log("ELSEEEEEEE");
          Swal.fire({
            icon: "error",
            title: "Oops..",
            text: "Credenciais incorretas!"
          });
      }
    },

    logout() {
      this.$store.commit("LOGOUT");
    }
  },
  computed: {
    loggedUser() {
      return this.$store.getters.loggedUser;
    },
    isLogged() {
      return this.$store.getters.isLogged;
    }
  },
  created() {
    this.users = this.$store.getters.getUsers;
    console.log(this.users);
  }
};
</script>
<style src="@/scss/login.scss" lang="scss"></style>
