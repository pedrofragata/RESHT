<template>
    <div class="field is-horizontal">
        <div class="field-label" :class="size">
            <label class="label has-text-grey-lighter" :for="id">{{ label }}</label>
        </div>
        <div class="field-body">
            <div class="field">
                <div class="control" :class="modifier">
                    <input :id="id" :required="required" :type="type" class="input" :min="min" :max="max"
                            :class="size" :value="value" v-model.lazy="watcher" />
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
        required:{
            type: Boolean,
            default: false
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
            type: String
        },
        max: {
            type: String
        },
        size: {
            type: String
        },
        value: {
            type: String
        }
    },
    data() {
        return {
            watcher: (() => {
                if (this.type === "string") return "";
                else if (this.type === "number") return this.min;
            })()
        }
    },
    watch: {
        watcher() {
            this.$emit("input-changed", this.watcher)
        }
    }
}
</script>