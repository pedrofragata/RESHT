<template>
  <div class="sponsor">
    <Nav />
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">Produtos frescos e naturais</h1>
          <h2 class="subtitle">Garantidos pelos nossos patrocinadores</h2>
        </div>
      </div>
    </section>
    <div class="container is-fluid">
      <Divider title="Patrocinadores" />
      <div class="columns is-multiline">
        <div class="column is-8 is-offset-2">
          <div class="tile is-ancestor is-flex-tablet">
            <SponsorTile
              name="Pascoal"
              image="http://pascoal.pt/Psc/wp-content/uploads/2018/04/Logo-Pascoal-miniatura512x512.png"
            />
            <SponsorTile
              name="Pascoal"
              image="http://pascoal.pt/Psc/wp-content/uploads/2018/04/Logo-Pascoal-miniatura512x512.png"
            />
            <SponsorTile
              name="Pascoal"
              image="http://pascoal.pt/Psc/wp-content/uploads/2018/04/Logo-Pascoal-miniatura512x512.png"
            />
            <SponsorTile
              name="Pascoal"
              image="http://pascoal.pt/Psc/wp-content/uploads/2018/04/Logo-Pascoal-miniatura512x512.png"
            />
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import Divider from "@/components/Divider.vue";
import SponsorTile from "@/components/SponsorTile.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "sponsor",
  components: {
    Nav,
    Divider,
    SponsorTile,
    Footer
  }
};
</script>

<style src="@/scss/sponsor.scss" lang="scss"></style>
