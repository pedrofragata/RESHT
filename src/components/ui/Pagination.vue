<template>
  <nav class="pagination is-centered is-small" role="navigation" aria-label="pagination">
        <ul class="pagination-list">
            <li>
                <a @click="toPrevPage()"
                    class="pagination-previous has-background-black-bis has-text-white-ter"
                    :disabled="page === 1">
                    &laquo; Anterior
                </a>
            </li>
            <li>
                <a v-for="pageNumber in pages.slice((page - 2 >= 0) ? page - 2 : page - 1, page + 5)"
                    :key="pageNumber + '-pagination'"
                    @click="toPage(pageNumber)"
                    class="pagination-link has-background-black-bis"
                    :class="{'has-text-white-ter' : page !== pageNumber,
                    'is-current has-text-primary' : page === pageNumber}">
                    {{ pageNumber }}
                </a>
            </li>
            <li>
                <a @click="toNextPage()"
                    class="pagination-next has-background-black-bis has-text-white-ter"
                    :disabled="page === pages.length">
                    Próximo &raquo;
                </a>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: "Pagination",
    props: {
        page: {
            type: Number,
            required: true
        },
        pages: {
            type: Array,
            required: true
        }
    },
    methods: {
        toPrevPage() {
            if (this.page > 1) this.$emit("page-changed", this.page - 1);
        },
        toPage(pageNumber) {
            this.$emit("page-changed", pageNumber);
        },
        toNextPage() {
            if (this.page < this.pages.length) this.$emit("page-changed", this.page + 1);
        }
    }
};
</script>