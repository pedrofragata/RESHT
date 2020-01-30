<template>
  <div>
    <Pagination :page="page" :pages="pages" @page-changed="updatePage" />
    <div class="table-container">
      <table class="table ra-stripes is-hoverable is-fullwidth has-text-grey-lighter">
        <thead>
          <tr>
            <th></th>
            <th>Nome</th>
            <th>Email</th>
            <th>Palavra-passe</th>
            <th>Nivel de acesso</th>
            <th>Remover</th>
          </tr>
        </thead>
        <tfoot>
          <tr>
            <th></th>
            <th>Nome</th>
            <th>Email</th>
            <th>Palavra-passe</th>
            <th>Nivel de acesso</th>
            <th>Remover</th>
          </tr>
        </tfoot>
        <tbody>
          <tr>
            <td colspan="10">
              <p></p>
            </td>
          </tr>
          <template v-for="(user, uIdx) in displayedUsers">
            <tr
              :key="user.uID + '-first-row'"
              class="first-row"
              :class="{'ra-striped' : uIdx % 2 !== 0}"
            >
              <td class="has-text-centered">
                <figure>
                  <img :src="user.avatar" />
                </figure>
              </td>
              <td>{{ user.fullName }}</td>
              <td>{{ user.email }}</td>
              <td><button class="button is-small ra-password-icon" @click="changePassword(user.uID)"></button></td>
              <td>{{ getAccessLevelDesc(user.accessLevel) }}</td>
              <td class="has-text-centered">
                <button class="button is-small ra-reject-icon" @click="removeUser(user.uID)"></button>
              </td>
            </tr>
          </template>
        </tbody>
      </table>
    </div>
    <Pagination :page="page" :pages="pages" @page-changed="updatePage" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import Swal from "../../../node_modules/sweetalert2/dist/sweetalert2.js";
import "../../../node_modules/sweetalert2/src/sweetalert2.scss";

import Pagination from "@/components/ui/Pagination.vue";

export default {
  name: "TableUsers",
  props: {
    users: {
      type: Array,
      required: true
    }
  },
  components: {
    Pagination
  },
  data() {
    return {
      page: 1,
      perPage: 4
    };
  },
  methods: {
    paginate(usersList) {
      const page = this.page;
      const perPage = this.perPage;
      const from = page * perPage - perPage;
      const to = page * perPage;
      return usersList.slice(from, to);
    },

    removeUser(id) {
      Swal.fire({
        title: "Tem a certeza?",
        text: "Não será possivel reverter esta ação!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sim, remover!"
      }).then(result => {
        if (result.value) {
          this.$store.commit("users/DELETE_USER", id);
          this.$store.commit("users/SAVE_TO_LOCALSTORAGE");
          Swal.fire("Removido!", "Utilizador removido.", "success");
        }
      });
    },
    async changePassword(uID) {
      const { value: password } = await Swal.fire({
        title: "Insira a nova palavra-passe",
        input: "password",
        inputPlaceholder: "Escreva aqui a nova passe",
        inputAttributes: {
          maxlength: 30,
          autocapitalize: 'off',
          autocorrect: 'off'
        }
      })
      if (password) {
        this.$store.commit("users/EDIT_PASSWORD", {uID: uID, password: password});
        this.$store.commit("users/SAVE_TO_LOCALSTORAGE");
        Swal.fire("Alterado!", "A palavra-passe foi alterada com sucesso.", "success");
      }
    },
    updatePage(page) {
      this.page = page;
    }
  },
  computed: {
    ...mapGetters("users", ["fullNameByID", "getAccessLevelDesc"]),

    pages() {
      const numberOfPages = Math.ceil(this.users.length / this.perPage);
      const pages = [];
      for (let i = 1; i <= numberOfPages; i++) {
        pages.push(i);
      }
      return pages;
    },
    displayedUsers() {
      return this.paginate(this.users);
    }
  },
  created() {
    this.$store.commit("users/GET_FROM_LOCALSTORAGE");
  }
};
</script>

<style src="@/scss/table-users.scss" lang="scss" scoped></style>