<template>
  <div class="backoffice">
    <TheNav />
    <div class="container is-fluid is-relative">
      <div class="columns">
        <div class="column is-12 is-3-desktop">
          <div class="box sticky">
            <aside class="menu">
              <p class="menu-label">Geral</p>
              <ul class="menu-list">
                <li>
                  <a class="is-active">Reservas</a>
                  <ul>
                    <router-link to="/backoffice/#bookingsSection">Lista</router-link>
                    <li>
                      <a>Atribuir mesa</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a class="is-active">Aplicação</a>
                  <ul>
                    <router-link to="/backoffice/#dishesSection">Pratos e Menus</router-link>
                    <router-link to="/backoffice/#galeriaSection">Galeria</router-link>
                    <router-link to="/backoffice/#faqsSection">Faqs</router-link>
                    <li>
                      <a>Patrocinadores</a>
                    </li>
                  </ul>
                </li>
              </ul>
              <p v-if="loginStatus.loggedUser.accessLevel==2" class="menu-label">Administração</p>
              <ul v-if="loginStatus.loggedUser.accessLevel==2" class="menu-list">
                <router-link to="/backoffice/#usersSection">Utilizadores</router-link>
              </ul>
            </aside>
          </div>
        </div>
        <div class="column is-12 is-9-desktop">
          <div class="box">
            <h3 id="bookingsSection" class="title is-3 is-spaced has-text-centered">Reservas</h3>
            <FilterBookings @bookings-filter-applied="filterBookings" />
            <TableBookings :bookings="bookings" />
            <h5 v-if="activeBooking != null" class="subtitle is-5 has-text-centered">Atribuir mesa</h5>
            <RestaurantLayout v-if="activeBooking != null" class="is-hidden-touch" />
          </div>
          <div class="box">
            <h3 id="dishesSection" class="title is-3 is-spaced has-text-centered">Pratos e Menus</h3>
            <FilterDishes @dishes-filter-applied="filterDishes" />
            <TableDishes :dishes="dishes" />
            <div class="columns">
              <div class="column is-10 is-offset-1">
                <h5 class="subtitle is-5 has-text-centered">Criar ou alterar prato</h5>
                <FormDish />
                <h5 class="subtitle is-5 has-text-centered">Criar ou alterar menu</h5>
                <FormMenu @entry-changed="updateMenu" />
                <div class="columns ra-menu-wrapper">
                  <div class="column is-10 is-offset-2">
                    <Menu :menu="menu" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="galeriaSection" class="box">
            <h3 class="title is-3 is-spaced has-text-centered">Galeria</h3>
            <CarouselImages />
          </div>
          <div class="box">
            <h3 id="faqsSection" class="title is-3 is-spaced has-text-centered">FAQs</h3>
            <div class="columns">
              <div class="column is-10 is-offset-1">
                <FormFaqs />
              </div>
            </div>
          </div>
          <div v-if="loginStatus.loggedUser.accessLevel==2" class="box">
            <h3 id="usersSection" class="title is-3 is-spaced has-text-centered">Utilizadores</h3>
            <FilterUsers @users-filter-applied="filterUsers" />
            <TableUsers :users="users" />
          </div>
        </div>
      </div>
    </div>
    <TheFooter />
  </div>
</template>

<script>
import TheNav from "@/components/layout/TheNav.vue";
import FilterBookings from "@/components/backoffice/FilterBookings.vue";
import TableBookings from "@/components/backoffice/TableBookings.vue";
import RestaurantLayout from "@/components/backoffice/RestaurantLayout.vue";
import FilterDishes from "@/components/backoffice/FilterDishes.vue";
import TableDishes from "@/components/backoffice/TableDishes.vue";
import FormDish from "@/components/backoffice/FormDish.vue";
import FormMenu from "@/components/backoffice/FormMenu.vue";
import Menu from "@/components/backoffice/Menu.vue";
import CarouselImages from "@/components/backoffice/CarouselImages.vue";
import FormFaqs from "@/components/backoffice/FormFaqs.vue";
import TheFooter from "@/components/layout/TheFooter.vue";
import FilterUsers from "@/components/backoffice/FilterUsers.vue";
import TableUsers from "@/components/backoffice/TableUsers.vue";
import { mapGetters } from "vuex";

export default {
  name: "Backoffice",
  components: {
    TheNav,
    FilterBookings,
    FilterUsers,
    TableBookings,
    RestaurantLayout,
    FilterDishes,
    TableDishes,
    FormDish,
    FormMenu,
    Menu,
    CarouselImages,
    FormFaqs,
    TheFooter,
    TableUsers
  },
  data() {
    return {
      bookings: [],
      dishes: [],
      menu: [],
      users: []
    };
  },
  created() {
    this.users = this.$store.getters["users/allUsers"];
  },
  methods: {
    filterBookings(bookings) {
      this.bookings = bookings;
    },
    filterDishes(dishes) {
      this.dishes = dishes;
    },
    updateMenu(menu) {
      this.menu = menu;
    },
    filterUsers(users) {
      this.users = users;
    }
  },
  computed: {
    ...mapGetters("bookings", ["activeBooking"]),
    ...mapGetters("users", ["loginStatus"])
  }
};
</script>

<style src="@/scss/backoffice.scss" lang="scss" scoped></style>