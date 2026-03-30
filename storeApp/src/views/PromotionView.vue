<template>
    <div>

    </div>
</template>

<script>
export default {
    created() {
        this.$store.dispatch("FETCH_PROMOTION", this.$route.params.id);
    },
    computed: {
        promotionObject() {
            return this.$store.getters.GET_PROMOTION_OBJECT;
        },

    }
}
</script>

<style lang="scss" scoped></style>