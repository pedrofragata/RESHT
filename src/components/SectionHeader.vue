<template>
    <h2 class="title is-2 is-family-secondary ra-divider">{{title}}</h2>
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

<style src="@/styles/section_header.scss" lang="scss"></style>