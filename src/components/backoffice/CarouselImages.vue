<template>
  <div class="columns">
    <div class="column is-2" v-for="(image, idx) in allImages" :key="idx">
      <figure class="image is-1by1">
        <img :src="image" />
      </figure>
    </div>
    <div class="column is-2">
      <VFilePlus v-model="gImage" />
      <!--<div class="add-image"></div>-->
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import VFilePlus from "@/components/ui/VFilePlus.vue";

export default {
  name: "CarouselImages",
  components: {
    VFilePlus
  },
  props: {},
  data() {
    return {
      gImage: ""
    };
  },

  computed: {
    ...mapGetters("carousel", ["allImages"])
  },

  watch: {
    gImage() {
        this.$store.commit("carousel/ADD_IMAGE",this.gImage)
        this.$store.commit("carousel/SAVE_TO_LOCALSTORAGE");
    }
  },
  created() {
    this.$store.commit("carousel/GET_FROM_LOCALSTORAGE");
    
  }
};
</script>

<style src="@/scss/carousel-images-backoffice.scss" lang="scss" scoped></style>