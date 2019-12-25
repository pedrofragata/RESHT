<template>
    <h3 class="title is-3 is-family-secondary has-text-primary ra-divider">{{title}}</h3>
</template>

<script>
export default {
  name: "Divider",
  props: {
    title: {
      type: String,
      required: true
    }
  }
};
</script>

<style src="@/scss/divider.scss" lang="scss"></style>