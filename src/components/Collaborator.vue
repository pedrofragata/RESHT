<template>
  <div>
        <figure class="image is-128x128" style="margin-bottom: 2em">
            <img :src="photo" style="width: inherit; height: inherit; object-fit: cover" />
        </figure>
        <h5 class="title is-5 has-text-white has-text-centered">{{name}}</h5>
        <h6 class="subtitle is-6 has-text-grey-light has-text-centered">{{role}}</h6>
    </div>
</template>

<script>
export default {
    name: "collaborator",
    props: {
        name: {
            type: String,
            required: true
        },
        role: {
            type: String
        },
        photo: {
            type: String
        }
    }
}
</script>

<style></style>