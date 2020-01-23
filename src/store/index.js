import Vue from "vue";
import Vuex from "vuex";
import usersModule from "./users.js";
import bookingsModule from "./bookings.js";
import dishesModule from "./dishes.js";
import carouselModule from "./carousel.js";

Vue.use(Vuex);

export default new Vuex.Store({
  actions: {},
  modules: {
    users: usersModule,
    bookings: bookingsModule,
    dishes: dishesModule,
    carousel: carouselModule
  }
});
