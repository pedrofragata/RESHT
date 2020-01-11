<template>
  <footer class="footer">
    <div class="content has-text-left has-text-grey-light is-size-7">
      <div class="ra-footer-item is-family-sans-serif">
        <p class="is-primary is-family-secondary is-size-5 has-text-primary ra-footer-header">Endereço</p>
        <hr class="has-background-primary">
        <p>Escola Superior de Hotelaria e Turismo</p>
        <p>Restaurante Aplicação</p>
        <p>Rua D. Sancho I, nº 981</p>
        <p>4480-876 Vila do Conde</p>
        <p>Portugal</p>
      </div>
      <div id="ra-bookmark-contacts" class="ra-footer-item">
        <p class="is-primary is-family-secondary is-size-5 has-text-primary">Contacto</p>
        <hr class="has-background-primary">
        <p class="is-family-sans-serif">Telefone: 252 291 700</p>
      </div>
      <div class="ra-footer-item">
        <img src="@/assets/logo_pporto_branco.png" />
        <div class="is-family-sans-serif has-text-white has-text-weight-bold is-uppercase ra-esht">
          <p>Escola</p>
          <p>Superior</p>
          <p>de Hotelaria</p>
          <p>e Turismo</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "TheFooter",
  props: {}
};
</script>

<style src="@/scss/footer.scss" lang="scss"></style>