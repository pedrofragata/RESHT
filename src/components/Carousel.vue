<template>
  <div class="owl-carousel owl-theme">
    <div class="item">
      <img src="@/assets/abigail-keenan-WI_9GWX1o-0-unsplash2.jpg" />
    </div>
    <div class="item">
      <img src="@/assets/cloris-ying-1Qt-W4BGrgc-unsplash2.jpg" />
    </div>
    <div class="item">
      <img src="@/assets/michael-browning-MtqG1lWcUw0-unsplash2.jpg" />
    </div>
    <div class="item">
      <img src="@/assets/nathan-dumlao-X_bbCAYzlTs-unsplash2.jpg" />
    </div>
    <div class="item">
      <img src="@/assets/nils-stahl-BCkLxilDvJU-unsplash2.jpg" />
    </div>
    <div class="item">
      <img src="@/assets/zakaria-zayane-0uAVsDcyD0M-unsplash2.jpg" />
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
    dots: false,
    // autoplay: true,
    // autoplayTimeout: 5000,
    // autoplayHoverPause: true,
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

<style src="@/scss/carousel.scss" lang="scss" scoped></style>