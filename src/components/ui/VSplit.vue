<template>
  <div class="field is-horizontal">
        <div class="field-label">
            <label class="label has-text-grey-lighter" for="ra-form-day">{{ label }}</label>
        </div>
        <div class="field-body">
            <div class="field">
                <div class="control">
                    <slot name="first-field"></slot>
                </div>
            </div>
            <div class="field">
                <div class="control">
                    <slot name="second-field"></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "VSplit",
    props: {
        label: {
            type: String
        }
    }
}
</script>