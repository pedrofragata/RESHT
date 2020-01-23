<template>
  <div class="backoffice">
    <TheNav />
    <div class="container is-fluid is-relative">
        <div class="columns">
            <div class="column is-12 is-3-desktop">
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
            <div class="column is-12 is-9-desktop">
                <div class="box">
                    <h4 class="title is-4 is-spaced has-text-centered">Reservas</h4>
                    <FilterBookings @bookings-filter-applied="filterBookings" />
                    <TableBookings :bookings="bookings" />
                    <h5 class="subtitle is-5 has-text-centered">Atribuir mesa</h5>
                    <RestaurantLayout class="is-hidden-touch" />
                </div>
                <div class="box">
                    <h4 class="title is-4 is-spaced has-text-centered">Pratos e Ementas</h4>
                    <FilterDishes @dishes-filter-applied="filterDishes" />
                    <TableDishes :dishes="dishes" />
                    <div class="columns">
                        <div class="column is-10 is-offset-1">
                            <h5 class="subtitle is-5 has-text-centered">Criar ou alterar prato</h5>
                            <FormDish />
                        </div>
                    </div>
                </div>
                <div class="box">
                    <h4 class="title is-4 is-spaced has-text-centered">Galeria</h4>
                    <CarouselImages />
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
import CarouselImages from "@/components/backoffice/CarouselImages.vue";
import TheFooter from "@/components/layout/TheFooter.vue";

export default {
    name: "Backoffice",
    components: {
        TheNav,
        FilterBookings,
        TableBookings,
        RestaurantLayout,
        FilterDishes,
        TableDishes,
        FormDish,
        CarouselImages,
        TheFooter
    },
    data() {
        return {
            bookings: [],
            dishes: [],
            gallery: []
        }
    },
    methods: {
        filterBookings(bookings) {
            this.bookings = bookings;
        },
        filterDishes(dishes) {
            this.dishes = dishes;
        }
    }
};
</script>

<style src="@/scss/backoffice.scss" lang="scss" scoped></style>