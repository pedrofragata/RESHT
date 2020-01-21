<template>
  <div>
        <Pagination :page="page" :pages="pages" @page-changed="updatePage" />
        <div class="table-container">
            <table class="table ra-stripes is-narrow is-hoverable is-fullwidth has-text-grey-lighter">
                <thead>
                    <tr>
                        <th></th>
                        <th>Preço Base</th>
                        <th>Categoria</th>
                        <th>Subcategoria</th>
                        <th>Disponível desde</th>
                        <th>Disponível até</th>
                        <th>Imagem</th>
                    </tr>
                </thead>
                <tfoot>
                    <tr>
                        <th></th>
                        <th>Preço Base</th>
                        <th>Categoria</th>
                        <th>Subcategoria</th>
                        <th>Disponível desde</th>
                        <th>Disponível até</th>
                        <th>Imagem</th>
                    </tr>
                </tfoot>
                <tbody>
                    <template v-for="(dish, dIdx) in displayedDishes">
                        <tr :key="dish.dID + '-first-row'"
                            class="first-row"
                            :class="{'ra-striped' : dIdx % 2 !== 0}">
                            <td class="is-relative">
                                <abbr>
                                    <div class="ra-available-indicator"
                                        :class="{ 'ra-available-green' : isDishAvailableNow(dish.dID) }">
                                    </div>
                                </abbr>
                            </td>
                            <td class="has-text-centered">{{ `${dish.basePrice} €` }}</td>
                            <td>{{ catDescByID(dish.catID) }}</td>
                            <td>{{ subCatDescByID(dish.subCatID) }}</td>
                            <td>{{ dish.dateAvailableSince }}</td>
                            <td>{{ dish.dateAvailableUpTo }}</td>
                            <td rowspan="3" class="has-text-centered">
                                <figure>
                                    <img :src="dish.image" />
                                </figure>
                            </td>
                        </tr>
                        <tr :class="{'ra-striped' : dIdx % 2 !== 0}" :key="dish.dID + '-second-row'">
                            <td class="has-text-weight-semibold">Nome:</td>
                            <td colspan="5">{{ dish.name }}</td>
                        </tr>
                        <tr :class="{'ra-striped' : dIdx % 2 !== 0}" :key="dish.dID + '-third-row'">
                            <td class="has-text-weight-semibold">Descrição:</td>
                            <td colspan="5">{{ dish.desc }}</td>
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
    name: "TableDishes",
    props: {
        label: {
            type: String
        }
    },
    components: {
        Pagination
    },
    data() {
        return {
            page: 1,
            perPage: 6
        }
    },
    methods: {
        paginate (dishes) {
            const page = this.page;
            const perPage = this.perPage;
            const from = (page * perPage) - perPage;
            const to = (page * perPage);
            return dishes.slice(from, to);
        },
        updatePage(page) {
            this.page = page;
        }
    },
    computed: {
        ...mapGetters("dishes", ["allDishes", "isDishAvailableNow", "catDescByID", "subCatDescByID"]),

        pages() {
            const numberOfPages = Math.ceil(this.allDishes.length / this.perPage);
            const pages = [];
            for (let i = 1; i <= numberOfPages; i++) {
                pages.push(i);
            }
            return pages;
        },
        displayedDishes() {
            return this.paginate(this.allDishes);
        }
    }
}
</script>

<style src="@/scss/table-dishes.scss" lang="scss" scoped></style>