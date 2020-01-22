<template>
    <div class="field is-horizontal">
        <div class="field-label" :class="size">
            <label class="label has-text-grey-lighter" :id="id">{{ label }}</label>
        </div>
        <div class="field-body">
            <div class="field">
                <div class="control has-icons-left">
                    <div class="select" :class="size">
                        <slot></slot>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "VSelect",
    props: {
        id: {
            type: String,
            required: true
        },
        label: {
            type: String
        },
        size: {
            type: String
        }
    }
}
</script>