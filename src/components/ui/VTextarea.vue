<template>
    <div class="field is-horizontal">
        <div class="field-label">
            <label class="label has-text-grey-lighter" :for="id">Outras observações</label>
        </div>
        <div class="field-body">
            <div class="field">
                <div class="control">
                    <textarea
                        v-model.lazy="watcher"
                        :id="id"
                        class="textarea"
                        :rows="rows"
                        placeholder=""
                    ></textarea>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "VTextarea",
    props: {
        id: {
            type: String,
            required: true
        },
        rows: {
            type: String,
            default: "2"
        },
        placeholder: {
            type: String
        }
    },
    data() {
        return {
            watcher: ""
        }
    },
    watch: {
        watcher() {
            this.$emit("input-changed", this.watcher)
        }
    }
}
</script>