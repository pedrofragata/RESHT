<template>
    <form @submit.prevent="">
        <VSplit label="Nome:">
            <input slot="first-field" class="input" type="text">
            <span> ou </span>
            <div slot="second-field" class="select is-fullwidth">
                <select>
                    <option selected>Selecione um prato existente</option>
                    <option>Aqui carrega o 1º.</option>
                    <option>Depois o 2º e por aí em diante</option>
                </select>
            </div>
        </VSplit>
        <VFile id="ra-backoffice-dish-image"
            label="Imagem:"
            buttonLabel="Carregar"
            placeholder="Clique aqui para carregar um ficheiro." />
        <VInput id="ra-backoffice-dish-basePrice" type="number" label="Preço base:" />
        <VSubmit value="Adicionar" size="is-size-6" />
    </form>
</template>

<script>
import VInput from "@/components/ui/VInput.vue";
import VSplit from "@/components/ui/VSplit.vue";
import VFile from "@/components/ui/VFile.vue";
import VSubmit from "@/components/ui/VSubmit.vue";

export default {
    name: "FormDish",
    components: {
        VInput,
        VSplit,
        VFile,
        VSubmit
    }
}
</script>