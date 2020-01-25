<template>
    <form @submit.prevent="">
        <VInput id="ra-dish-menu-name" type="text" label="Nome:" @input-changed="updateDishName" />
        <VSplit id="ra-dish-availSince" label="Disponível desde:">
            <input slot="first-field" id="ra-dish-availSince" class="input" type="date">
            <input slot="second-field" class="input" type="time">
        </VSplit>
        <VSplit id="ra-dish-availUpTo" label="Disponível até:">
            <input slot="first-field" id="ra-dish-availUpTo" class="input" type="date">
            <input slot="second-field" class="input" type="time">
        </VSplit>
        <VSubmit value="Submeter" size="is-size-6 is-fullwidth" />
    </form>
</template>

<script>
import { mapGetters } from "vuex";

import VSplit from "@/components/ui/VSplit.vue";
import VInput from "@/components/ui/VInput.vue";
import VSubmit from "@/components/ui/VSubmit.vue";

export default {
    name: "FormMenu",
    components: {
        VSplit,
        VInput,
        VSubmit
    },
    data() {
        return {
            dishName: "",
            menu: []
        }
    },
    computed: {
        ...mapGetters("dishes", ["allDishes", "dishByName"])
    },
    methods: {
        updateDishName(name) {
            const foundDish = this.dishByName(name);
            if (foundDish) this.menu.push(foundDish);
        }
    },
    watch: {
        menu() {
            this.$emit("entry-changed", this.menu);
        }
    }
}
</script>