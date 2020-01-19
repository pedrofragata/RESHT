<template>
  <div class="ra-faq-wrapper" style="margin-bottom: 3em">
    <h5 class="title is-5 has-text-white is-family-secondary">{{question}}</h5>
    <p class="is-size-6 has-text-grey-light is-family-sans-serif">{{answer}}</p>
  </div>
</template>

<script>
export default {
    name: "Faq",
    props: {
      question: {
        type: String,
        required: true
      },
      answer: {
        type: String,
        required: true
      }
    }
}
</script>