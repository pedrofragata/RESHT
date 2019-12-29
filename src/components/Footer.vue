<template>
  <footer class="footer">
    <div class="content has-text-left has-text-grey-light is-size-7">
      <div class="ra-footer-item">
        <p class="is-primary is-family-secondary is-size-5 has-text-primary ra-footer-header">Endereço</p>
        <hr class="has-background-primary">
        <p>Escola Superior de Hotelaria e Turismo</p>
        <p>Restaurante Aplicação</p>
        <p>Rua D. Sancho I, nº 981</p>
        <p>4480-876 Vila do Conde</p>
        <p>Portugal</p>
      </div>
      <div class="ra-footer-item">
        <p class="is-primary is-family-secondary is-size-5 has-text-primary">Contacto</p>
        <hr class="has-background-primary">
        <p>Telefone: 252 291 700</p>
      </div>
      <img class="ra-footer-item" src="@/assets/logo_pporto_branco.png" />
      <div class="is-family-sans-serif has-text-white has-text-weight-bold is-uppercase ra-esht ra-footer-item" style="line-height: 1">
        <p>Escola</p>
        <p>Superior</p>
        <p>de Hotelaria</p>
        <p>e Turismo</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "footer",
  props: {}
};
</script>

<style src="@/scss/footer.scss" lang="scss"></style>