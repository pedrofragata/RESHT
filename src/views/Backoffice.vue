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
                    <BookingsTable :displayedBookings="displayedBookings" />
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
import BookingsTable from "@/components/BookingsTable.vue";
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
        BookingsTable,
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
        ...mapGetters("bookings", ["allBookings", "allTables"]),

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