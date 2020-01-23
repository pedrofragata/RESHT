<template>
    <form @submit.prevent="">
        <VInput id="ra-dish-new-name" type="text" label="Nome:" />
        <div class="field is-horizontal" style="margin: 1em 0;">
            <div class="field-label has-text-grey-lighter has-text-weight-semibold"><label>OU</label></div>
            <div class="field-body"></div>
        </div>
        <VSelect id="ra-dish-from-existing" size="is-fullwidth" label="Prato existente:">
            <select id="ra-dish-from-existing">
                <option value="">Selecione um prato</option>
            </select>
        </VSelect>
        <VFile id="ra-dish-image"
            label="Imagem:"
            buttonLabel="Carregar"
            placeholder="Clique aqui para carregar um ficheiro." />
        <VInput id="ra-dish-basePrice" type="number" label="Preço base:" />
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
import VInput from "@/components/ui/VInput.vue";
import VSelect from "@/components/ui/VSelect.vue";
import VSplit from "@/components/ui/VSplit.vue";
import VFile from "@/components/ui/VFile.vue";
import VSubmit from "@/components/ui/VSubmit.vue";

export default {
    name: "FormDish",
    components: {
        VInput,
        VSelect,
        VSplit,
        VFile,
        VSubmit
    }
}
</script>