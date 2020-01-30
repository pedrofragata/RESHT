<template>
  <div>
    <Pagination :page="page" :pages="pages" @page-changed="updatePage" />
    <div class="table-container">
      <table class="table ra-stripes is-hoverable is-fullwidth has-text-grey-lighter">
        <thead>
          <tr>
            <th></th>
            <th>Data do Pedido</th>
            <th>Utilizador</th>
            <th>Data da Reserva</th>
            <th>Horário</th>
            <th>Hora Chegada</th>
            <th>Pessoas</th>
            <th>Preço</th>
            <th>Atribuir mesa</th>
            <th>Rejeitar</th>
          </tr>
        </thead>
        <tfoot>
          <tr>
            <th></th>
            <th>Data do Pedido</th>
            <th>Utilizador</th>
            <th>Data da Reserva</th>
            <th>Horário</th>
            <th>Hora Chegada</th>
            <th>Pessoas</th>
            <th>Preço</th>
            <th>Atribuir mesa</th>
            <th>Rejeitar</th>
          </tr>
        </tfoot>
        <tbody>
          <tr>
            <td colspan="10">
              <p></p>
            </td>
          </tr>
          <template v-for="(booking, bIdx) in displayedBookings">
            <tr
              :key="booking.bID + '-first-row'"
              class="first-row"
              :class="{'ra-striped' : bIdx % 2 !== 0}"
            >
              <td class="is-relative">
                <abbr :title="statusDescByID(booking.sID)">
                  <div class="ra-status-indicator" :class="statusColorByID(booking.sID)"></div>
                </abbr>
              </td>
              <td>{{ booking.dateRequest.split("T")[0] }}</td>
              <td>{{ fullNameByID(booking.uID) }}</td>
              <td>{{booking.dateOpening}}</td>
              <td>{{booking.timeOpening}}</td>
              <td>{{booking.timeArrival}}</td>
              <td class="has-text-centered">{{ booking.numOfPeople }}</td>
              <td class="has-text-centered">{{ `${booking.totalPrice} €` }}</td>
              <td class="has-text-centered">
                <button
                  v-if="booking.sID != 3 && booking.sID !=4 && booking.sID !=5"
                  @click="SetActiveBooking(booking)"
                  class="button is-small ra-table-icon"
                ></button>
              </td>
              <td class="has-text-centered">
                <button
                  v-if="booking.sID != 3 && booking.sID !=4 && booking.sID !=5"
                  @click="DeclineBooking(booking.bID)"
                  class="button is-small ra-reject-icon"
                ></button>
              </td>
            </tr>
            <tr
              v-for="(dish, dIdx) in booking.dishes"
              :key="dIdx + '-dish' + booking.bID"
              :class="{'ra-striped' : bIdx % 2 !== 0}"
            >
              <td v-if="!dIdx" class="has-text-weight-semibold">Pratos</td>
              <td v-else></td>
              <td colspan="9">{{ ` ${dishNameByID(dish.dID)}` }}</td>
            </tr>
            <tr :key="booking.bID + '-last-row'" :class="{'ra-striped' : bIdx % 2 !== 0}">
              <td class="has-text-weight-semibold">Obs</td>
              <td colspan="9">{{ booking.message }}</td>
            </tr>
            <tr :key="booking.bID + '-bottom-dummy-row'" :class="{'ra-striped' : bIdx % 2 !== 0}">
              <td colspan="10">
                <p></p>
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
import Swal from "../../../node_modules/sweetalert2/dist/sweetalert2.js";
import "../../../node_modules/sweetalert2/src/sweetalert2.scss";

export default {
  name: "TableBookings",
  props: {
    bookings: {
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
    paginate(bookingsList) {
      const page = this.page;
      const perPage = this.perPage;
      const from = page * perPage - perPage;
      const to = page * perPage;
      return bookingsList.slice(from, to);
    },
    updatePage(page) {
      this.page = page;
    },
    DeclineBooking(id) {
      Swal.fire({
        title: "Rejeitar Reserva",
        text: `Pretende rejeitar a reserva?`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Confirmar"
      }).then(result => {
        if (result.value) {
          this.$store.commit("bookings/DECLINE_BOOKING", id);
          this.$store.commit("bookings/SAVE_TO_LOCALSTORAGE");
          console.log(id);

          Swal.fire({
            title: "Reserva Rejeitada",
            text: `Reserva rejeitada com sucesso.`,
            icon: "success"
          });
        }
      });
    },
    SetActiveBooking(booking) {
      for (let i = 0; i < this.allTables.length; i++) {
        this.allTables[i].people = 0;
      }
      this.$store.commit("bookings/DEFINE_ACTIVE_BOOKING", booking);
      
      console.log(this.activeBooking);
    }
    /*convertDate(date) {
            let day = date.split(" ")[0];
            day = day.split("-").reverse().join("-").replace(/-/g, "/");

            let time = date.split(" ")[1];
            time = time.slice(0, 5);

            return `${day} ${time}`;
        }*/
  },
  computed: {
    ...mapGetters("users", ["fullNameByID"]),
    ...mapGetters("bookings", ["statusDescByID", "statusColorByID"]),
    ...mapGetters("dishes", ["dishNameByID"]),
    ...mapGetters("bookings", ["activeBooking"]),
    ...mapGetters("bookings", ["allTables"]),

    pages() {
      const numberOfPages = Math.ceil(this.bookings.length / this.perPage);
      const pages = [];
      for (let i = 1; i <= numberOfPages; i++) {
        pages.push(i);
      }
      return pages;
    },
    displayedBookings() {
      return this.paginate(this.bookings);
    }
  },
  created() {
    this.$store.commit("bookings/GET_FROM_LOCALSTORAGE");
  }
};
</script>

<style src="@/scss/table-bookings.scss" lang="scss" scoped></style>