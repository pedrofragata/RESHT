<template>
  <div class="owl-carousel owl-theme">
    <div class="item">
      <img src="@/assets/abigail-keenan-WI_9GWX1o-0-unsplash.jpg" />
    </div>
    <div class="item">
      <img src="@/assets/cloris-ying-1Qt-W4BGrgc-unsplash.jpg" />
    </div>
    <div class="item">
      <img src="@/assets/michael-browning-MtqG1lWcUw0-unsplash.jpg" />
    </div>
    <div class="item">
      <img src="@/assets/nathan-dumlao-X_bbCAYzlTs-unsplash.jpg" />
    </div>
    <div class="item">
      <img src="@/assets/nils-stahl-BCkLxilDvJU-unsplash.jpg" />
    </div>
    <div class="item">
      <img src="@/assets/zakaria-zayane-0uAVsDcyD0M-unsplash.jpg" />
    </div>
  </div>
</template>

<script>
import "jquery";
import $ from "jquery";
import "owl.carousel";

$(document).ready(function() {
  $(".owl-carousel").owlCarousel({
    center: true,
    loop: true,
    margin: 20,
    nav: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      }
    }
  });
});

export default {
  name: "Carousel",
  props: {}
};
</script>

<style src="@/scss/partials/_carousel.scss" lang="scss"></style>