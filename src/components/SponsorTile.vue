<template>
  <div class="tile is-parent">
    <div class="tile is-child box">
      <p class="title">{{name}}</p>
      <figure class="image is-1by1">
        <img :src="image" />
      </figure>
    </div>
  </div>
</template>

<script>
export default {
  name: "sponsortile",
  props: {
    name: {
      type: String,
      required: true
    },
    image: {
      type: String
    }
  }
};
</script>

<style>
</style>