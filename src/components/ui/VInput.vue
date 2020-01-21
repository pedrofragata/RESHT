<template>
    <div class="field is-horizontal">
        <div class="field-label">
            <label class="label has-text-grey-lighter" :for="id">{{ label }}</label>
        </div>
        <div class="field-body">
            <div class="field">
                <div class="control" :class="modifier">
                    <input :id="id" :type="type" class="input" :min="min"/>
                    <slot></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "VInput",
    props: {
        id: {
            type: String,
            required: true
        },
        type: {
            type: String,
            default: "text"
        },
        label: {
            type: String
        },
        modifier: {
            type: String
        },
        min: {
            type: Number
        }
    }
}
</script>