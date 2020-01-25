<template>
  <div class="columns">
        <div class="column is-6 is-offset-3">
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
    </div>
</template>

<script>
import { mapGetters } from "vuex";

import VSelect from "@/components/ui/VSelect.vue";

export default {
    name: "FilterDishes",
    components: {
        VSelect
    },
    data() {
        return {
            filterCat: "",
            filterSubCat: ""
        }
    },
    computed: {
        ...mapGetters("dishes", ["allDishes", "allCategories", "allSubcategories"]),

        getDishes() {
            const filteredCategories = (this.filterCat === "")
                                    ? this.allDishes
                                    : this.allDishes.filter(dish => dish.catID === parseInt(this.filterCat));

            const filteredSubcategories = (this.filterSubCat === "")
                                        ? filteredCategories
                                        : filteredCategories.filter(dish => dish.subCatID === parseInt(this.filterSubCat));

            return filteredSubcategories;
        }
    },
    watch: {
        getDishes() {
            this.$emit("dishes-filter-applied", this.getDishes);
        }
    }
}
</script>