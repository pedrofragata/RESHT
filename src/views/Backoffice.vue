<template>
  <div class="backoffice">
    <TheNav />
    <div class="container is-fluid is-relative">
        <div class="columns">
            <div class="column is-3">
                <div class="box">
                    <aside class="menu">
                        <p class="menu-label">
                            Geral
                        </p>
                        <ul class="menu-list">
                            <li>
                            <a class="is-active">Reservas</a>
                            <ul>
                                <li><a>Lista</a></li>
                                <li><a>Atribuir mesa</a></li>
                            </ul>
                            </li>
                            <li>
                            <a class="is-active">Aplicação</a>
                            <ul>
                                <li><a>Pratos e Ementas</a></li>
                                <li><a>Galeria</a></li>
                                <li><a>FAQs</a></li>
                                <li><a>Patrocinadores</a></li>
                                <li><a>Endereço</a></li>
                                <li><a>Contactos</a></li>
                            </ul>
                            </li>
                        </ul>
                        <p class="menu-label">
                            Administração
                        </p>
                        <ul class="menu-list">
                            <li><a>Utilizadores</a></li>
                        </ul>
                    </aside>
                </div>
            </div>
            <div class="column is-9">
                <div class="box">
                    <h4 class="title is-4 is-spaced has-text-grey-light">Reservas</h4>
                    <h5 class="subtitle is-5 has-text-grey-light">Lista</h5>
                    <Pagination :page="page" :pages="pages" @page-changed="updatePage" />
                    <div class="table-container">
                        <table class="table ra-stripes is-narrow is-hoverable is-fullwidth has-text-grey-lighter">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Data do Pedido</th>
                                    <th>Utilizador</th>
                                    <th>Data Abertura</th>
                                    <th>Data Fecho</th>
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
                                    <th>Data Abertura</th>
                                    <th>Data Fecho</th>
                                    <th>Hora Chegada</th>
                                    <th>Pessoas</th>
                                    <th>Preço</th>
                                    <th>Atribuir mesa</th>
                                    <th>Rejeitar</th>
                                </tr>
                            </tfoot>
                            <tbody>
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
                                        <td>{{ booking.dateOpening }}</td>
                                        <td>{{ booking.dateClosing }}</td>
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
                                    <tr v-for="(dish, dIdx) in booking.dishes" :key="dIdx + '-dish' + booking.bID"
                                        :class="{'ra-striped' : bIdx % 2 !== 0}">
                                        <td v-if="!dIdx" class="has-text-weight-semibold">Pratos:</td>
                                        <td v-else></td>
                                        <td colspan="9">{{ `${dish.quantity}x ${dishNameByID(dish.dID)}` }}</td>
                                    </tr>
                                    <tr :key="booking.bID + '-last-row'"
                                        :class="{'ra-striped' : bIdx % 2 !== 0}">
                                        <td class="has-text-weight-semibold">Obs:</td>
                                        <td colspan="9">{{ booking.message }}</td>
                                    </tr>
                                </template>
                            </tbody>
                        </table>
                    </div>
                    <Pagination :page="page" :pages="pages" @page-changed="updatePage" />
                    <h5 class="subtitle is-5 has-text-grey-light">Atribuir mesa</h5>
                    <TablesLayout />
                </div>
            </div>
        </div>
    </div>
    <TheFooter />
  </div>

</template>

<script>
import { mapGetters } from "vuex";

import TheNav from "@/components/TheNav.vue";
import Pagination from "@/components/Pagination.vue";
import TablesLayout from "@/components/TablesLayout.vue";
import TheFooter from "@/components/TheFooter.vue";

export default {
    name: "Backoffice",
    data() {
        return {
            page: 1,
            perPage: 4
        }
    },
    components: {
        TheNav,
        Pagination,
        TablesLayout,
        TheFooter
    },
    methods: {
        paginate (bookings) {
            const page = this.page;
            const perPage = this.perPage;
            const from = (page * perPage) - perPage;
            const to = (page * perPage);
            return bookings.slice(from, to);
        },
        updatePage(page) {
            this.page = page;
        }
    },
    computed: {
        ...mapGetters("users", ["allUsers", "fullNameByID"]),
        ...mapGetters("bookings", ["allBookings", "allTables", "statusDescByID", "statusColorByID"]),
        ...mapGetters("dishes", ["dishNameByID"]),

        pages() {
            const numberOfPages = Math.ceil(this.allBookings.length / this.perPage);
            const pages = [];
            for (let i = 1; i <= numberOfPages; i++) {
                pages.push(i);
            }
            return pages;
        },
        displayedBookings() {
            return this.paginate(this.allBookings);
        }
    }
};
</script>

<style src="@/scss/backoffice.scss" lang="scss" scoped></style>