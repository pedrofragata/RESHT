<template>
  <div class="about">
    <TheNav />
    <div class="container is-fluid">
        <Divider title="Sobre nós" />
        <div class="columns">
            <div class="column is-8 is-offset-2 is-family-sans-serif has-text-grey-light">
                O Restaurante de Aplicação da Escola Superior de Hotelaria e Turismo é da responsabilidade do Politécnico do Porto, com capacidade para 40 pessoas, onde são aplicados os métodos de serviço leccionados nas UC de Práticas Hoteleiras. Durante estes últimos anos, o Restaurante tem acolhido diversos eventos, conseguindo sempre estar à altura das expectativas dos clientes.
            </div>
        </div>
        <div class="columns">
            <div class="column is-6 is-offset-3 has-text-grey-light is-flex-tablet">
                <StaffMember
                    name="José António"
                    role="Chefe de Mesa"
                    photo="https://restaurante.esht.ipp.pt/images/jose_silva.jpg"
                />
                <StaffMember
                    name="Rui Fonseca"
                    role="Chefe de Cozinha"
                    photo="https://restaurante.esht.ipp.pt/images/rui_fonseca.jpg"
                />
            </div>
        </div>
    </div>
    <TheFooter />
  </div>
</template>

<script>
import TheNav from "@/components/TheNav.vue";
import Divider from "@/components/Divider.vue";
import StaffMember from "@/components/StaffMember.vue";
import TheFooter from "@/components/TheFooter.vue";

export default {
    name: "About",
    components: {
        TheNav,
        Divider,
        StaffMember,
        TheFooter
    }
}
</script>

<style src="@/scss/about.scss" lang="scss" scoped></style>