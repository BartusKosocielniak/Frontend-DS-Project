<template>
    <div>
        <RouterLink v-for="promotion in promotionsList" :to="`/promotion/${promotion.id}`" :key="promotion.id">

            <PromotionTile v-bind:promotion="promotion" />
        </RouterLink>
        sdfdsfsdf
    </div>
</template>

<script>
import PromotionTile from '../components/PromotionTile.vue';


export default {
    mounted() {
        this.$store.dispatch("FETCH_PROMOTIONS");

    },
    computed: {
        promotionsList() {
            console.log("crazyyy" + this.$store.getters.GET_PROMOTIONS_LIST)
            return this.$store.getters.GET_PROMOTIONS_LIST;
        },

    },
    components: {
        PromotionTile
    },
}
</script>

<style lang="scss" scoped></style>
