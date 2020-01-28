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
            <th>Nivel de acesso</th>
            <th>Remover</th>
          </tr>
        </thead>
        <tfoot>
          <tr>
            <th></th>
            <th>Nome</th>
            <th>Email</th>
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
              <td class="has-text-centered">{{ user.accessLevel }}</td>
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

    removeUser(id){
        this.$store.commit("users/DELETE_USER", id);
        this.$store.commit("users/SAVE_TO_LOCALSTORAGE");
    } ,   
    updatePage(page) {
      this.page = page;
    },

  },
  computed: {
    ...mapGetters("users", ["fullNameByID"]),
 

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