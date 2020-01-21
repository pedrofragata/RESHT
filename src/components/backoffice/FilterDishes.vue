<template>
  <div class="columns">
        <div class="column is-4 is-offset-2">
            <VSelect id="ra-filter-dishes-cat" label="Categoria:" size="is-small is-fullwidth">
                <select id="ra-filter-dishes-cat" v-model="filterCat">
                    <option value="">Todas as categorias</option>
                    <option v-for="(cat, idx) in allCategories" :key="idx + 'cat'" :value="cat.catID">
                        {{ allCategories[idx].desc }}
                    </option>
                </select>
            </VSelect>
            <VSelect id="ra-filter-dishes-subcat" label="Subcategoria:" size="is-small is-fullwidth">
                <select id="ra-filter-dishes-subcat" v-model="filterSubCat">
                    <option value="">Todas as subcategorias</option>
                    <option v-for="(subCat, idx) in allSubcategories"
                            :key="idx + 'subCat'"
                            :value="subCat.subCatID">
                            {{ allSubcategories[idx].desc }}
                    </option>
                </select>
            </VSelect>
        </div>
        <div class="column is-4">
            <VInput id="ra-filter-dishes-price-min" label="Desde X Preço:" size="is-small" type="number" min="0"
                    max="Infinity" @input-changed="updatePriceMin"/>
            <VInput id="ra-filter-dishes-price-max" label="Até X Preço:" size="is-small" type="number" min="0" max="Infinity"
                @input-changed="updatePriceMax"/>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

import VSelect from "@/components/ui/VSelect.vue";
import VInput from "@/components/ui/VInput.vue";

export default {
    name: "FilterDishes",
    components: {
        VSelect,
        VInput
    },
    data() {
        return {
            filterCat: "",
            filterSubCat: "",
            filterPriceMin: "0",
            filterPriceMax: "Infinity"
        }
    },
    methods: {
        updatePriceMin(price) {
            this.filterPriceMin = price;
        },
        updatePriceMax(price) {
            this.filterPriceMax = price;
        }
    },
    computed: {
        ...mapGetters("dishes", ["allDishes", "allCategories", "allSubcategories", "catDescByID", "subCatDescByID"]),

        getDishes() {
            const filteredCategories = (this.filterCat === "")
                                    ? this.allDishes
                                    : this.allDishes.filter(dish => dish.catID === parseInt(this.filterCat));

            const filteredSubcategories = (this.filterSubCat === "")
                                        ? filteredCategories
                                        : filteredCategories.filter(dish => dish.subCatID === parseInt(this.filterSubCat));

            const filteredPriceMin = (this.filterPriceMin === "0")
                                    ? filteredSubcategories
                                    : filteredSubcategories.filter(dish => dish.basePrice >= parseFloat(this.filterPriceMin));

            const filteredPriceMax = (this.filterPriceMax === "Infinity")
                                    ? filteredPriceMin
                                    : filteredPriceMin.filter(booking => booking.basePrice <= parseFloat(this.filterPriceMax));

            return filteredPriceMax;
        }
    },
    watch: {
        getDishes() {
            this.$emit("dishes-filter-applied", this.getDishes);
        }
    }
}
</script>