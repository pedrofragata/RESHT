<template>
  <div class="field is-horizontal">
    <div class="field-label"></div>
    <div class="field-body">
    <div class="field">
        <div class="control">
        <input
            class="button has-background-grey-lighter has-text-grey-dark is-family-secondary"
            :class="size"
            type="submit"
            :value="value"
        />
        </div>
    </div>
    </div>
</div>
</template>

<script>
export default {
    name: "VSubmit",
    props: {
        value: {
            type: String
        },
        size: {
            type: String,
            default: "is-size-5"
        }
    }
}
</script>