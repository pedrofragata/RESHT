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
                        <th>Horário</th>
                        <th>Hora Chegada</th>
                        <th>Pessoas</th>
                        <th>Preço</th>
                        <th>Atribuir mesa</th>
                        <th>Rejeitar</th>
                    </tr>
                </tfoot>
                <tbody>
                    <tr><td colspan="10"><p></p></td></tr>
                    <template v-for="(booking, bIdx) in displayedBookings">
                        <tr :key="booking.bID + '-first-row'"
                            class="first-row"
                            :class="{'ra-striped' : bIdx % 2 !== 0}">
                            <td class="is-relative">
                                <abbr :title="statusDescByID(booking.sID)">
                                    <div class="ra-status-indicator"
                                        :class="statusColorByID(booking.sID)">
                                    </div>
                                </abbr>
                            </td>
                            <td>{{ booking.dateRequest }}</td>
                            <td>{{ fullNameByID(booking.uID) }}</td>
                            <td>{{booking.timeOpening}}</td>
                            <td>{{ booking.dateArrival }}</td>
                            <td class="has-text-centered">{{ booking.numOfPeople }}</td>
                            <td class="has-text-centered">{{ `${booking.totalPrice} €` }}</td>
                            <td class="has-text-centered">
                                <button class="button is-small ra-table-icon"></button>
                            </td>
                            <td class="has-text-centered">
                                <button class="button is-small ra-reject-icon"></button>
                            </td>
                        </tr>
                        <tr :key="booking.bID + '-last-row'"
                            :class="{'ra-striped' : bIdx % 2 !== 0}">
                            <td class="has-text-weight-semibold">Obs</td>
                            <td colspan="9">{{ booking.message }}</td>
                        </tr>
                        <tr :key="booking.bID + '-bottom-dummy-row'"
                            :class="{'ra-striped' : bIdx % 2 !== 0}"
                        >
                            <td colspan="10"><p></p></td>
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
        }
    },
    methods: {
        paginate (bookingsList) {
            const page = this.page;
            const perPage = this.perPage;
            const from = (page * perPage) - perPage;
            const to = (page * perPage);
            return bookingsList.slice(from, to);
        },
        updatePage(page) {
            this.page = page;
        },
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
}
</script>

<style src="@/scss/table-bookings.scss" lang="scss" scoped></style>