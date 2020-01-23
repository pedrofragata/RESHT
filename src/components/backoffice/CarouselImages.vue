<template>
    <div class="columns">
        <div class="column is-2" v-for="(image, idx) in allImages" :key="idx">
            <figure class="image is-1by1">
                <img :src="image" />
            </figure>
        </div>
        <div class="column is-2">
            <div class="add-image"></div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    name: "CarouselImages",
    props: {},
    computed: {
        ...mapGetters("carousel", ["allImages"])
    },
    created() {
        this.$store.commit("carousel/GET_FROM_LOCALSTORAGE");
    }
}
</script>

<style src="@/scss/carousel-images-backoffice.scss" lang="scss" scoped></style>