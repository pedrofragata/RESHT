<template>
  <div>
        <Pagination :page="page" :pages="pages" @page-changed="updatePage" />
        <div class="table-container">
            <table class="table ra-stripes is-hoverable is-fullwidth has-text-grey-lighter">
                <thead>
                    <tr>
                        <th></th>
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
                        <th>Categoria</th>
                        <th>Subcategoria</th>
                        <th>Disponível desde</th>
                        <th>Disponível até</th>
                        <th>Imagem</th>
                    </tr>
                </tfoot>
                <tbody>
                    <tr><td colspan="10"><p></p></td></tr>
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
                            <td>{{ catDescByID(dish.catID) }}</td>
                            <td>{{ subCatDescByID(dish.subCatID) }}</td>
                            <td>{{ convertDate(dish.dateAvailableSince) }}</td>
                            <td>{{ convertDate(dish.dateAvailableUpTo) }}</td>
                            <td rowspan="3" class="has-text-centered">
                                <figure>
                                    <img :src="dish.image" />
                                </figure>
                            </td>
                        </tr>
                        <tr :class="{'ra-striped' : dIdx % 2 !== 0}" :key="dish.dID + '-second-row'">
                            <td class="has-text-weight-semibold">Nome</td>
                            <td colspan="4">{{ dish.name }}</td>
                        </tr>
                        <tr :class="{'ra-striped' : dIdx % 2 !== 0}" :key="dish.dID + '-third-row'">
                            <td class="has-text-weight-semibold">Descrição</td>
                            <td colspan="4">{{ dish.desc }}</td>
                        </tr>
                        <tr :key="dish.dID + '-bottom-dummy-row'"
                            :class="{'ra-striped' : dIdx % 2 !== 0}"
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
    name: "TableDishes",
    props: {
        dishes: {
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
            perPage: 6
        }
    },
    methods: {
        paginate (dishesList) {
            const page = this.page;
            const perPage = this.perPage;
            const from = (page * perPage) - perPage;
            const to = (page * perPage);
            return dishesList.slice(from, to);
        },
        updatePage(page) {
            this.page = page;
        },
        convertDate(date) {
            let day = date.split(" ")[0];
            day = day.split("-").reverse().join("-").replace(/-/g, "/");

            let time = date.split(" ")[1];
            time = time.slice(0, 5);

            return `${day} ${time}`;
        }
    },
    computed: {
        ...mapGetters("dishes", ["isDishAvailableNow", "catDescByID", "subCatDescByID"]),

        pages() {
            const numberOfPages = Math.ceil(this.dishes.length / this.perPage);
            const pages = [];
            for (let i = 1; i <= numberOfPages; i++) {
                pages.push(i);
            }
            return pages;
        },
        displayedDishes() {
            return this.paginate(this.dishes);
        }
    },
    created() {
        this.$store.commit("dishes/GET_FROM_LOCALSTORAGE");
    }
}
</script>

<style src="@/scss/table-dishes.scss" lang="scss" scoped></style>