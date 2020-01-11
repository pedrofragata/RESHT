<template>
    <h3 class="title is-size-4-mobile is-size-3-desktop has-text-weight-light has-text-primary ra-divider">{{title}}</h3>
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