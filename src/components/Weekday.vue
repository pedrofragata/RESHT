<template>
    <div v-if="isToday && isOpen">
        <p class="has-text-white-ter has-text-weight-bold" style="padding-bottom: 6px;">{{letter}}</p>
        <button class="button has-text-weight-semibold has-text-white-ter is-primary">{{day}}</button>
    </div>
    <div v-else-if="isOpen">
        <p class="has-text-white-ter has-text-weight-bold" style="padding-bottom: 6px">{{letter}}</p>
        <button class="button has-text-weight-semibold">{{day}}</button>
    </div>
    <div v-else>
        <p class="has-text-grey-light" style="padding-bottom: 6px">{{letter}}</p>
        <button class="button has-text-weight-semibold" disabled>{{day}}</button>
    </div>
</template>

<script>
export default {
    name: "Weekday",
    props: {
        letter: {
            type: String,
            required: true
        },
        day: {
            type: Number,
            required: true
        },
        isToday: {
            type: Boolean,
            default: false
        },
        isOpen: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style></style>