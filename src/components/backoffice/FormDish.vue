<template>
    <form @submit.prevent="">
        <VSelect id="ra-dish-from-existing" size="is-fullwidth" label="Prato existente:">
            <select id="ra-dish-from-existing">
                <option value="">Selecione um prato</option>
            </select>
        </VSelect>
        <div class="field is-horizontal" style="margin: 0.5em 0 1.5em 0;">
            <div class="field-label"></div>
            <div class="field-body has-text-grey-lighter">
                <p class="is-size-7">Selecione um prato existente acima para carregar os detalhes
                    ou preencha de raíz os campos abaixo para criar um novo.</p>
            </div>
        </div>
        <VInput id="ra-dish-new-name" type="text" label="Nome:" />
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