<template>
  <div>
    <TheNav />
    <div class="profile">
      <div class="container is-fluid">
        <div class="columns">
          <div class="column is-6 is-offset-1">
            <div class="box">
              <h4 class="title is-4 has-text-grey-light">Dados Pessoais</h4>
              <form>
                <div class="field is-horizontal">
                  <!-- div dummy -->
                  <div class="field-label">
                    <label class="label"></label>
                  </div>
                  <div class="field-body">
                    <div class="field">
                      <p class="control has-icons-left">
                        <img :src="userImage" />
                      </p>
                    </div>

                    <div class="field">
                      <span class="icon is-small is-pulled-left" @click="editI=false">
                        <i class="fas fa-pencil-alt"></i>
                      </span>
                    </div>
                  </div>
                  <VFile
                    v-if="editI==false"
                    buttonLabel="Carregar"
                    placeholder="Clique aqui para carregar um ficheiro."
                    v-model="userImage"
                  />
                </div>
                <!-- ------------------------ NAME ---------------------------- -->
                <div class="field is-horizontal">
                  <div class="field-label is-normal">
                    <label class="label has-text-grey-lighter">Nome</label>
                  </div>
                  <div class="field-body">
                    <div class="field">
                      <p class="control has-icons-right">
                        <input
                          id="inputFullName"
                          class="input"
                          :class="{'is-static': editN}"
                          type="text"
                          v-model="fullName"
                          :readonly="editN"
                        />
                      </p>
                    </div>
                    <!-- open modal -->
                    <div class="field" v-if="editN==false">
                      <button
                        type="button"
                        class="editButton is-family-secondary"
                        @click="activeModal=true"
                      >Confirmar</button>
                      <button
                        type="button"
                        class="cancelButton has-text-grey-dark is-family-secondary"
                        @click="editN = true"
                      >Cancelar</button>
                    </div>
                    <!-- lapis -->
                    <div class="field">
                      <span class="icon is-small is-right" @click="editN = false">
                        <i class="fas fa-pencil-alt"></i>
                      </span>
                    </div>
                  </div>
                  <!-- EDIT NAME MODAL -->
                  <div class="modal" :class="{'is-active': activeModal}" id="editNameModal">
                    <div class="modal-background"></div>
                    <div class="modal-card">
                      <header class="modal-card-head">
                        <p class="modal-card-title">Editar Nome</p>
                        <button class="delete" aria-label="close"></button>
                      </header>
                      <section class="modal-card-body">
                        <h2>Nome anterior: {{this.fullNameBefore}}</h2>
                        <h2>Nome editado: {{this.fullName}}</h2>
                        <!-- Content ... -->
                      </section>
                      <footer class="modal-card-foot">
                        <button class="button is-success" @click="editFullName">Gravar alterações</button>
                        <button type="button" class="button" @click="activeModal=false">Cancelar</button>
                      </footer>
                    </div>
                  </div>
                  <!-- END OF EDIT NAME  MODAL -->
                </div>
                <!-- ------------------- ABOUT ---------------------- -->
                <div class="field is-horizontal">
                  <div class="field-label is-normal">
                    <label class="label has-text-grey-lighter">Sobre</label>
                  </div>
                  <div class="field-body">
                    <div class="field">
                      <div class="control">
                        <textarea
                          class="textarea"
                          :class="{'is-static': editA}"
                          v-model="about"
                          :readonly="editA"
                          @click="editA=false"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="field is-horizontal">
                  <div class="field-label is-normal">
                    <label class="label has-text-grey-lighter">Email</label>
                  </div>
                  <div class="field-body">
                    <div class="field">
                      <p class="control has-icons-left">
                        <input class="input is-static" type="email" v-model="email" readonly />
                        <span class="icon is-small is-left">
                          <i class="fas fa-envelope"></i>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <!-- ------------------------ PASSWORD --------------------------- -->
                <div class="field is-horizontal">
                  <div class="field-label is-normal">
                    <label class="label has-text-grey-lighter">Palavra passe</label>
                  </div>
                  <div class="field-body">
                    <div class="field">
                      <p class="control has-icons-left has-icons-right">
                        <input
                          class="input"
                          :class="{'is-static': editPw}"
                          type="password"
                          v-model="password"
                          :readonly="editPw"
                        />
                        <span class="icon is-small is-left">
                          <i class="fas fa-key"></i>
                        </span>
                      </p>
                    </div>
                    <div class="field" v-if="editPw==false">
                      <button
                        class="editButton is-family-secondary"
                        type="button"
                        @click="activePwModal=true"
                      >Confirmar</button>
                      <button
                        type="button"
                        class="cancelButton has-text-grey-dark is-family-secondary"
                        @click="editPw = true"
                      >Cancelar</button>
                    </div>
                    <!-- LAPIS -->
                    <div class="field">
                      <span class="icon is-small is-right" v-on:click="editPw = false">
                        <i class="fas fa-pencil-alt"></i>
                      </span>
                    </div>
                  </div>
                  <!-- EDIT PASSWORD MODAL -->
                  <div class="modal" :class="{'is-active': activePwModal}" id="editPassWordModal">
                    <div class="modal-background"></div>
                    <div class="modal-card">
                      <header class="modal-card-head">
                        <p class="modal-card-title">Editar Password</p>
                        <button class="delete" aria-label="close"></button>
                      </header>
                      <section class="modal-card-body">
                        <h2>Password anterior: {{this.passwordBefore}}</h2>
                        <h2>Nova password: {{this.password}}</h2>
                        <!-- Content ... -->
                      </section>
                      <footer class="modal-card-foot">
                        <button class="button is-success" @click="editPassword">Gravar alterações</button>
                        <button type="button" class="button" @click="activePwModal=false">Cancelar</button>
                      </footer>
                    </div>
                  </div>
                  <!-- END OF EDIT PASSWORD  MODAL -->
                </div>
              </form>
            </div>
          </div>
          <div class="column is-4">
            <div class="box">
              <h4 class="title is-4 has-text-grey-light">Reservas</h4>
              <span>Ainda não efetuou reservas.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <TheFooter />
  </div>
</template>

<script>
import TheNav from "@/components/layout/TheNav.vue";
import TheFooter from "@/components/layout/TheFooter.vue";
import VFile from "@/components/ui/VFile.vue";

export default {
  name: "Profile",
  components: {
    TheNav,
    TheFooter,
    VFile
  },
  data() {
    return {
      users: [],
      fullName: "",
      email: "",
      photo: "",
      password: "",
      about: "",
      editN: true,
      editPw: true,
      editA: true,
      editI: true,
      activeModal: false,
      activePwModal: false,
      fullNameBefore: "",
      passwordBefore: "",
      userImage: "",
      idUtilizador: ""
    };
  },
  beforeDestroy() {
    console.log("BEFOREDESTROY");

    this.$store.commit("users/EDIT_AVATAR", {
      uID: this.idUtilizador,
      userImage: this.userImage
    });

    this.$store.commit("users/EDIT_ABOUT", {
      uID: this.idUtilizador,
      about: this.about
    });

    
    this.$store.commit("users/SAVE_TO_LOCALSTORAGE");
  },
  created() {
    (this.users = this.$store.getters["users/allUsers"]),
      (this.fullName = this.getUser(this.$route.params.userID).fullName);
    this.userImage = this.getUser(this.$route.params.userID).avatar;
    this.email = this.getUser(this.$route.params.userID).email;
    this.password = this.getUser(this.$route.params.userID).password;
    this.about = this.getUser(this.$route.params.userID).about;

    this.fullNameBefore = this.getUser(this.$route.params.userID).fullName;
    this.passwordBefore = this.getUser(this.$route.params.userID).password;
    this.idUtilizador = this.$route.params.userID;
  },
  methods: {
    editFullName() {
      console.log(this.fullName);
      this.$store.commit("users/EDIT_FULLNAME", {
        uID: this.$route.params.userID,
        fullName: this.fullName
      });
      this.$store.commit("users/SAVE_TO_LOCALSTORAGE");
    },

    editPassword() {
      this.$store.commit("users/EDIT_PASSWORD", {
        uID: this.$route.params.userID,
        password: this.password
      });
      this.$store.commit("users/SAVE_TO_LOCALSTORAGE");
    },

    getUser(id) {
      return this.users.filter(user => user.uID == id)[0];
    }
  }
};
</script>

<style src="@/scss/profile.scss" lang="scss" scoped></style>