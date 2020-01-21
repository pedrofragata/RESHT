<template>
    <div class="field is-horizontal">
        <div class="field-label">
            <div class="label has-text-grey-lighter">{{ label }}</div>
        </div>
        <div class="field-body">
            <div class="field">
                <div class="file has-name is-right is-fullwidth">
                <label class="file-label">
                    <input class="file-input" type="file" name="resume">
                    <span class="file-cta">
                        <span class="file-icon">
                            <i class="fas fa-upload"></i>
                        </span>
                        <span class="file-label">
                            {{ buttonLabel }}
                        </span>
                    </span>
                    <span class="file-name">
                        {{ placeholder }}
                    </span>
                </label>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
export default {
name: "VFile",
    props: {
        label: {
            type: String
        },
        buttonLabel: {
            type: String,
            required: true
        },
        placeholder: {
            type: String
        }
    }
}
</script>