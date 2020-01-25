<template>
    <form @submit.prevent="">
        <VSelect id="ra-dish-from-existing" size="is-fullwidth" label="Prato existente:">
            <select id="ra-dish-from-existing" v-model="dishName">
                <option value="">Selecione um prato</option>
                <option v-for="dish in allDishes" :key="dish.dID + '-dish'"> {{ dish.name }} </option>
            </select>
        </VSelect>
        <div class="field is-horizontal" style="margin: 0.5em 0 1.5em 0;">
            <div class="field-label"></div>
            <div class="field-body has-text-grey-lighter">
                <p class="is-size-7">Selecione um prato existente acima para carregar os detalhes
                    ou preencha de raíz os campos abaixo para criar um novo.</p>
            </div>
        </div>
        <VInput id="ra-dish-new-name" type="text" label="Nome:" :value="dishName" />
        <VFile id="ra-dish-image"
            label="Imagem:"
            buttonLabel="Carregar"
            placeholder="Clique aqui para carregar um ficheiro." />
        <VSelect id="ra-dish-category" size="is-fullwidth" label="Categoria:">
            <select id="ra-dish-category">
                <option v-for="cat in allCategories" :key="cat.catID + '-cat'" :value="cat.catID">
                    {{ cat.desc }}
                </option>
            </select>
        </VSelect>
        <VSelect id="ra-dish-subcategory" size="is-fullwidth" label="Subcategoria:">
            <select id="ra-dish-subcategory">
                <option value="">Selecione uma subcategoria</option>
                <option v-for="subCat in allSubcategories" :key="subCat.subCatID + '-subCat'" :value="subCat.subCatID">
                    {{ subCat.desc }}
                </option>
            </select>
        </VSelect>
        <VSubmit value="Submeter" size="is-size-6 is-fullwidth" />
    </form>
</template>

<script>
import { mapGetters } from "vuex";

import VInput from "@/components/ui/VInput.vue";
import VSelect from "@/components/ui/VSelect.vue";
import VFile from "@/components/ui/VFile.vue";
import VSubmit from "@/components/ui/VSubmit.vue";

export default {
    name: "FormDish",
    components: {
        VInput,
        VSelect,
        VFile,
        VSubmit
    },
    data() {
        return {    
            dishName: ""
        }
    },
    computed: {
        ...mapGetters("dishes", ["allDishes", "allCategories", "allSubcategories"])
    }
}
</script>