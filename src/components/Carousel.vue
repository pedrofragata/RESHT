<template>
  <div class="owl-carousel owl-theme">
    <div v-for="(image, idx) in allImages" :key="idx" class="item">
      <img :src="image" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import "jquery";
import $ from "jquery";
import "owl.carousel";

export default {
  name: "Carousel",
  props: {},
  computed: {
    ...mapGetters("carousel", ["allImages"]),
  },
  created() {
    this.$store.commit("carousel/GET_FROM_LOCALSTORAGE");
  },
  mounted() {
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
  }
};
</script>

<style src="@/scss/carousel.scss" lang="scss"></style>