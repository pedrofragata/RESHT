<template>
  <div class="column is-one-third">
    <div class="tile is-parent">
      <div class="tile is-child box has-background-grey-darker">
        <p class="title has-text-weight-normal has-text-grey-lighter">{{name}}</p>
        <figure class="image is-1by1">
          <img :src="image" />
        </figure>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SponsorTile",
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