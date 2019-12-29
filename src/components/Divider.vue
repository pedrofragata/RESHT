<template>
    <h3 class="title is-size-4-mobile is-size-3-desktop is-family-secondary has-text-primary ra-divider">{{title}}</h3>
</template>

<script>
export default {
  name: "divider",
  props: {
    title: {
      type: String,
      required: true
    }
  }
};
</script>

<style src="@/scss/divider.scss" lang="scss"></style>