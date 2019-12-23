<template>
    <h2 class="title is-2 is-family-secondary has-text-primary ra-divider">{{title}}</h2>
</template>

<script>
export default {
  name: "SectionHeader",
  props: {
    title: {
      type: String,
      required: true
    }
  }
};
</script>

<style src="@/scss/partials/_sectionheader.scss" lang="scss"></style>