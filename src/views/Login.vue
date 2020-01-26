<template>
  <div class="login">
    <div class="hero-head">
      <TheNav />
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
            <!--  FORGOT PASSWORD ---->
            <form v-on:submit.prevent="sendemail">
              <div class="form-group">
                <p
                  class="btnForgetPwd"
                  v-on:click="
                  showfp = !showfp;
                  emailfp = null;
                "
                >Esqueceu-se da sua password?</p>
                <div class="col-md-12" v-show="showfp">
                  <p class="form-text">Insira o seu e-mail</p>
                  <input
                    type="email"
                    v-model="emailfp"
                    class="form-control"
                    placeholder="E-mail..."
                    required
                  />
                  <div class="col-md-12 text-right" style="margin-top: 1rem;">
                    <button type="submit" class="btn btn-success">Enviar</button>
                  </div>
                </div>
              </div>
            </form>
            <!-- FIM DE FORGOT PASSWORD -->
            <!--<div class="foot-lnk">
              <a href="#">Esqueceu-se da sua password?</a>
            </div>-->
          </form>
        </div>
        <div class="sign-up-htm">
          <form v-on:submit.prevent="addUser">
            <div class="group">
              <label for="email" class="label">Email</label>
              <input id="email" type="email" class="input" v-model="newEmail" required />
            </div>
            <div class="group">
              <label for="newFirstName" class="label">Nome</label>
              <input id="newFirstName" type="text" class="input" v-model="newFirstName" required />
            </div>
            <div class="group">
              <label for="newLastName" class="label">Apelido</label>
              <input id="newLastName" type="text" class="input" v-model="newLastName" required />
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
    <TheFooter />
  </div>
</template>


<script>
import { mapGetters } from "vuex";

import TheNav from "@/components/layout/TheNav.vue";
import TheFooter from "@/components/layout/TheFooter.vue";

import Swal from "../../node_modules/sweetalert2/dist/sweetalert2.js";
import "../../node_modules/sweetalert2/src/sweetalert2.scss";

import emailjs from "emailjs-com";

export default {
  name: "Login",
  components: {
    TheNav,
    TheFooter
  },
  data() {
    return {
      newEmail: "",
      newFirstName: "",
      newLastName: "",
      newPassword: "",
      confPassword: "",
      logEmail: "",
      logPassword: "",
      showfp: false,
      emailfp: null,
      users:""
    };
  },
  created(){
    (this.users = this.$store.getters["users/allUsers"])
  },

  methods: {
    sendemail() {
      let user
      //Ver se o email está na "base de dados"
      let userForgot = this.users.find(user => user.email == this.emailfp);
      if (userForgot != undefined) {
          user = {
          name: userForgot.fullName,
          password: userForgot.password,
          email: userForgot.email
        };
      }

      emailjs.send("gmail", "template_A66h10EB", user, "user_UQkaCTquUTaksRQnT4ycX").then(response => {
        console.log("SUCCESS!", response.status, response.text);
        },
         function(error) {
       console.log('FAILED...', error);}
      );
    },

    addUser() {
      if (this.emailInUse(this.newEmail)) {
        Swal.fire({
          icon: "error",
          title: "Oops..",
          text: "Esse email já se encontra registado!"
        });
      } else if (this.newPassword !== this.confPassword) {
        Swal.fire({
          icon: "error",
          title: "Oops..",
          text: "As palavra-passe não são iguais!"
        });
      } else {
        this.$store.commit("users/ADD_USER", {
          uID: this.newId,
          firstName: this.newFirstName,
          lastName: this.newLastName,
          email: this.newEmail,
          password: this.newPassword
        });
        this.$store.commit("users/SAVE_TO_LOCALSTORAGE");
        Swal.fire({
          icon: "success",
          title: "Registo efetuado com sucesso!",
          showConfirmButton: false,
          timer: 1500
        });
      }
    },
    login() {
      if (this.foundUser(this.logEmail, this.logPassword)) {
        this.$store.commit(
          "users/LOGIN",
          this.foundUser(this.logEmail, this.logPassword)
        );
        this.$store.commit("users/SAVE_TO_LOCALSTORAGE");
        this.$router.push("/");
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops..",
          text: "Credenciais incorretas!"
        });
      }
    }
  },
  computed: {
    ...mapGetters("users", ["loginStatus", "newId", "emailInUse", "foundUser"])
  }
};
</script>

<style src="@/scss/login.scss" lang="scss" scoped></style>
