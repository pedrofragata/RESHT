<template>
  <div style="margin-bottom: 3em;">
        <figure class="image is-flex-mobile" style="margin-bottom: 2em; justify-content: center;">
            <img :src="photo" style="width: 150px;
                                    height: 150px;
                                    border-radius: 50%;
                                    object-fit: cover;
                                    object-position: center center;" />
        </figure>
        <h5 class="title is-spaced is-5 is-family-secondary has-text-white has-text-centered">{{name}}</h5>
        <h6 class="subtitle is-6 has-text-grey-light has-text-centered">{{role}}</h6>
    </div>
</template>

<script>
export default {
    name: "StaffMember",
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