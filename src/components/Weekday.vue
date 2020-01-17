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
            required: true
        },
        day: {
            required: true
        },
        isToday: {
            default: false
        },
        isOpen: {
            default: false
        }
    }
}
</script>

<style></style>