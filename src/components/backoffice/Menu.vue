<template>
    <div class="ra-menu box">
        <h5 class="ra-title">MENU</h5>
        <p>Entradas</p>
        <small v-if="!appetizers.length">...</small>
        <ul v-else>
            <li v-for="entry in appetizers" :key="entry.dID">{{ entry.name }}</li>
        </ul>
        <p>Pratos Principais</p>
        <small v-if="!mainCourse.length">...</small>
        <ul v-else>
            <li v-for="entry in mainCourse" :key="entry.dID">{{ entry.name }}</li>
        </ul>
        <p>Sobremesas</p>
        <small v-if="!desserts.length">...</small>
        <ul v-else>
            <li v-for="entry in desserts" :key="entry.dID">{{ entry.name }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "Menu",
    props: {
        menu: {
            type: Array,
            required: true
        }
    },
    components: {
    },
    computed: {
        appetizers() {
            return this.menu.filter(dish => dish.catID === 0);
        },
        mainCourse() {
            return this.menu.filter(dish => dish.catID === 1);
        },
        desserts() {
            return this.menu.filter(dish => dish.catID === 2);
        }
    }
}
</script>

<style src="@/scss/menu-backoffice.scss" lang="scss" scoped></style>